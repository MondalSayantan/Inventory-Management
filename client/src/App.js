import "./App.css";
import { useState, useEffect } from "react";
import Axios from "axios";
import InventoryTable from "./components/InventoryTable";
import Button from "@mui/material/Button";
import TextField from "@mui/material/TextField";
import Box from "@mui/material/Box";
import UserTable from "./components/UserTable";
import OrderTable from "./components/OrderTable";
import CustomerRelationTable from "./components/CustomerRelationTable";
import { Stack } from "@mui/material";

function App() {
  const [productId, setProductId] = useState("");
  const [productName, setProductName] = useState("");
  const [productType, setProductType] = useState("");
  const [productCost, setProductCost] = useState();
  const [productQuantity, setProductQuantity] = useState();
  const [productList, setProductList] = useState([]);

  const [userId, setUserId] = useState("");
  const [userName, setUserName] = useState("");
  const [userEmail, setUserEmail] = useState("");
  const [userMobile, setUserMobile] = useState("");
  const [userAddress, setUserAddress] = useState("");
  const [userList, setUserList] = useState([]);

  const [orderId, setOrderId] = useState("");
  const [orderProductId, setOrderProductId] = useState("");
  const [orderQuantity, setOrderQuantity] = useState("");
  const [orderCost, setOrderCost] = useState("");
  const [orderList, setOrderList] = useState([]);
  const [OrderValue, setOrderValue] = useState(0);

  const [customerRelationList, setCustomerRelationList] = useState([]);

  const totalOrderValue = () => {
    let total = orderQuantity * orderCost;
    setOrderValue(total);
  };

  useEffect(() => {
    totalOrderValue();
  }, [orderQuantity, orderCost]);

  const getUsers = () => {
    try {
      Axios.get("http://localhost:3001/users").then((response) => {
        setUserList(response.data);
      });
    } catch (error) {
      alert(error);
    }
  };

  const getOrders = () => {
    try {
      Axios.get("http://localhost:3001/orders").then((response) => {
        setOrderList(response.data);
      });
    } catch (error) {
      alert(error);
    }
  };

  const getCustomerRelation = () => {
    try {
      Axios.get("http://localhost:3001/customerrelation").then((response) => {
        setCustomerRelationList(response.data);
      });
    } catch (error) {
      alert(error);
    }
  };

  const addUserAndOrder = () => {
    try {
      Axios.post("http://localhost:3001/users", {
        UserId: userId,
        UserName: userName,
        Mobile: userMobile,
        Email: userEmail,
        Address: userAddress,
      }).then(() => {
        getUsers();
      });

      Axios.put(`http://localhost:3001/products/${orderProductId}`, {
        Quantity: orderQuantity,
      }).then(() => {
        getProducts();
      });

      Axios.post("http://localhost:3001/orders", {
        OrderId: orderId,
        UserId: userId,
        ProductId: orderProductId,
        Quantity: orderQuantity,
        Cost: OrderValue,
      }).then(() => {
        getOrders();
        alert("Customer and Order Added");
      });

      Axios.post("http://localhost:3001/customerrelation", {
        OrderId: orderId,
        UserId: userId,
      }).then(() => {
        getCustomerRelation();
      });
    } catch (error) {
      alert(error);
    }
  };

  const addOrder = () => {
    try {
      Axios.put(`http://localhost:3001/products/${orderProductId}`, {
        Quantity: orderQuantity,
      }).then(() => {
        getProducts();
      });
      Axios.post("http://localhost:3001/orders", {
        OrderId: orderId,
        UserId: userId,
        ProductId: orderProductId,
        Quantity: orderQuantity,
        Cost: OrderValue,
      }).then(() => {
        getOrders();
      });
      Axios.post("http://localhost:3001/customerrelation", {
        OrderId: orderId,
        UserId: userId,
      }).then(() => {
        getCustomerRelation();
        alert("Order added for existing customer");
      });
    } catch (error) {
      alert(error);
    }
  };

  const getProducts = () => {
    try {
      Axios.get("http://localhost:3001/products").then((response) => {
        setProductList(response.data);
      });
    } catch (error) {
      alert(error);
    }
  };

  const addProduct = () => {
    try {
      Axios.post("http://localhost:3001/products", {
        ProductId: productId,
        ProductName: productName,
        ProductType: productType,
        ProductCost: productCost,
        Quantity: productQuantity,
      })
        .then(() => {
          getProducts();
          alert("Product Added");
        })
        .catch((error) => {
          alert(error);
        });
    } catch (error) {
      alert(error);
    }
  };

  const updateProducts = () => {
    try {
      Axios.put("http://localhost:3001/products", {
        ProductId: productId,
        ProductName: productName,
        ProductType: productType,
        ProductCost: productCost,
        Quantity: productQuantity,
      }).then(() => {
        getProducts();
        alert(`Product ${productId} Updated`);
      });
    } catch (error) {
      alert(error);
    }
  };

  const deleteProduct = (id) => {
    Axios.delete(`http://localhost:3001/products/${id}`).then(() => {
      getProducts();
      alert(`Product ${productId} Deleted`);
    });
  };

  useEffect(() => {
    getProducts();
    getUsers();
    getOrders();
    getCustomerRelation();
  }, []);

  const handleInputChange = (event) => {
    const target = event.target;
    if (target.name === "productName") {
      setProductName(target.value);
    } else if (target.name === "productId") {
      setProductId(target.value);
    } else if (target.name === "productType") {
      setProductType(target.value);
    } else if (target.name === "productCost") {
      setProductCost(target.value);
    } else if (target.name === "productQuantity") {
      setProductQuantity(target.value);
    } else if (target.name === "userName") {
      setUserName(target.value);
    } else if (target.name === "userEmail") {
      setUserEmail(target.value);
    } else if (target.name === "userMobile") {
      setUserMobile(target.value);
    } else if (target.name === "userAddress") {
      setUserAddress(target.value);
    } else if (target.name === "orderProduct") {
      setOrderProductId(target.value);
    } else if (target.name === "orderQuantity") {
      setOrderQuantity(target.value);
    } else if (target.name === "orderCost") {
      setOrderCost(target.value);
    } else if (target.name === "userId") {
      setUserId(target.value);
    } else if (target.name === "orderId") {
      setOrderId(target.value);
    }
  };

  return (
    <div className="App">
      <InventoryTable list={productList} deleteProduct={deleteProduct} />
      <br />
      <Box
        component="form"
        sx={{
          "& .MuiTextField-root": { mb: 2, mr: 2, width: "25ch" },
        }}
        noValidate
        autoComplete="off"
      >
        <TextField
          required
          id="outlined-required"
          label="Product ID"
          name="productId"
          onChange={handleInputChange}
        />
        <TextField
          required
          id="outlined-required"
          label="Product Name"
          name="productName"
          onChange={handleInputChange}
        />
        <TextField
          required
          id="outlined-required"
          label="Product Type"
          name="productType"
          onChange={handleInputChange}
        />
        <TextField
          required
          id="outlined-required"
          label="Product Cost"
          name="productCost"
          onChange={handleInputChange}
        />
        <TextField
          required
          id="outlined-required"
          label="Product Quantity"
          name="productQuantity"
          onChange={handleInputChange}
        />
      </Box>
      <Stack direction="row" spacing={2}>
        <Button variant="contained" color="primary" onClick={addProduct}>
          Add Product
        </Button>
        <Button variant="contained" color="primary" onClick={updateProducts}>
          Update
        </Button>
      </Stack>

      <UserTable list={userList} />
      <OrderTable list={orderList} />

      <Box
        component="form"
        sx={{
          "& .MuiTextField-root": { mb: 2, mr: 2, width: "25ch" },
        }}
        noValidate
        autoComplete="off"
      >
        <br />
        <TextField
          required
          id="outlined-required"
          label="Customer ID"
          name="userId"
          onChange={handleInputChange}
        />
        <TextField
          required
          id="outlined-required"
          label="Customer Name"
          name="userName"
          onChange={handleInputChange}
        />
        <TextField
          required
          id="outlined-required"
          label="Customer Mobile"
          name="userMobile"
          onChange={handleInputChange}
        />
        <TextField
          required
          id="outlined-required"
          label="Customer Email"
          name="userEmail"
          onChange={handleInputChange}
        />
        <TextField
          required
          id="outlined-required"
          label="Customer Address"
          name="userAddress"
          onChange={handleInputChange}
        />
      </Box>
      <Box
        component="form"
        sx={{
          "& .MuiTextField-root": { mb: 2, mr: 2, width: "25ch" },
        }}
        noValidate
        autoComplete="off"
      >
        <TextField
          required
          id="outlined-required"
          label="Order ID"
          name="orderId"
          onChange={handleInputChange}
        />
        <TextField
          required
          id="outlined-required"
          label="Product ID"
          name="orderProduct"
          onChange={handleInputChange}
        />
        <TextField
          required
          id="outlined-required"
          label="Order Quantity"
          name="orderQuantity"
          onChange={handleInputChange}
        />
        <TextField
          required
          id="outlined-required"
          label="Product Unit Price"
          name="orderCost"
          onChange={handleInputChange}
        />
      </Box>
      <Stack direction="row" spacing={2}>
        <Button variant="contained" color="primary" onClick={addUserAndOrder}>
          Add Customer and Order
        </Button>
        <Button variant="contained" color="primary" onClick={addOrder}>
          Add Order for Existing Customer
        </Button>
      </Stack>
      {/* <CustomerRelationTable list={customerRelationList} /> */}

      {/* <PurchaseTable list={purchaseList} /> */}

      {/* <div className="information">
        <label>Name:</label>
        <input
          type="text"
          onChange={(event) => {
            setName(event.target.value);
          }}
        />
        <label>Age:</label>
        <input
          type="number"
          onChange={(event) => {
            setAge(event.target.value);
          }}
        />
        <label>Country:</label>
        <input
          type="text"
          onChange={(event) => {
            setCountry(event.target.value);
          }}
        />
        <label>Position:</label>
        <input
          type="text"
          onChange={(event) => {
            setPosition(event.target.value);
          }}
        />
        <label>Wage (year):</label>
        <input
          type="number"
          onChange={(event) => {
            setWage(event.target.value);
          }}
        />
        <button onClick={addEmployee}>Add Employee</button>
      </div>
      <div className="employees">
        <button onClick={getEmployees}>Show Employees</button>

        {employeeList.map((val, key) => {
          return (
            <div className="employee">
              <div>
                <h3>Name: {val.name}</h3>
                <h3>Age: {val.age}</h3>
                <h3>Country: {val.country}</h3>
                <h3>Position: {val.position}</h3>
                <h3>Wage: {val.wage}</h3>
              </div>
              <div>
                <input
                  type="text"
                  placeholder="2000..."
                  onChange={(event) => {
                    setNewWage(event.target.value);
                  }}
                />
                <button
                  onClick={() => {
                    updateEmployeeWage(val.id);
                  }}
                >
                  {" "}
                  Update
                </button>

                <button
                  onClick={() => {
                    deleteEmployee(val.id);
                  }}
                >
                  Delete
                </button>
              </div>
            </div>
          );
        })} */}
      {/* </div> */}
    </div>
  );
}

export default App;
