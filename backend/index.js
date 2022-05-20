const express = require("express");
const mysql = require("mysql");
const cors = require("cors");

const app = express();

// Set secure HTTP header
// app.use(helmet());

// Parse json request body
app.use(express.json());

// parse urlencoded request body
// app.use(express.urlencoded({ extended: true }));

// Enable cors
app.use(cors());
app.options("*", cors());

const db = mysql.createConnection({
  user: "root",
  host: "localhost",
  password: "rahul",
  database: "inventory",
});

// Products;

app.post("/products", (req, res) => {
  const id = req.body.ProductId;
  const name = req.body.ProductName;
  const type = req.body.ProductType;
  const cost = req.body.ProductCost;
  const quantity = req.body.Quantity;

  db.query(
    "INSERT INTO products (ProductId, ProductName, ProductType, ProductCost, Quantity) VALUES (?,?,?,?,?)",
    [id, name, type, cost, quantity],
    (err, result) => {
      if (err) {
        console.log(err);
      } else {
        res.send("Values Inserted");
      }
    }
  );
});

app.get("/products", (req, res) => {
  db.query("SELECT * FROM products", (err, result) => {
    if (err) {
      console.log(err);
    } else {
      res.send(result);
    }
  });
});

app.put("/products", (req, res) => {
  const id = req.body.ProductId;
  const name = req.body.ProductName;
  const type = req.body.ProductType;
  const cost = req.body.ProductCost;
  const quantity = req.body.Quantity;
  db.query(
    "UPDATE products SET ProductName = ?, ProductType = ?, ProductCost = ?, Quantity =? WHERE ProductId = ?",
    [name, type, cost, quantity, id],
    (err, result) => {
      if (err) {
        console.log(err);
      } else {
        res.send(result);
      }
    }
  );
});

app.put("/products/:id", (req, res) => {
  const id = req.params.id;
  const quantity = req.body.Quantity;
  db.query(
    "UPDATE products SET Quantity = Quantity - ? WHERE ProductId = ?",
    [quantity, id],
    (err, result) => {
      if (err) {
        console.log(err);
      } else {
        res.send(result);
      }
    }
  );
});

app.delete("/products/:id", (req, res) => {
  const id = req.params.id;
  db.query("DELETE FROM products WHERE ProductId = ?", id, (err, result) => {
    if (err) {
      console.log(err);
    } else {
      res.send(result);
    }
  });
});

app.get("/purchases", (req, res) => {
  db.query("SELECT * FROM purchases", (err, result) => {
    if (err) {
      console.log(err);
    } else {
      res.send(result);
    }
  });
});

// Users

app.get("/users", (req, res) => {
  db.query("SELECT * FROM user", (err, result) => {
    if (err) {
      console.log(err);
    } else {
      res.send(result);
    }
  });
});

app.post("/users", (req, res) => {
  const id = req.body.UserId;
  const name = req.body.UserName;
  const mobile = req.body.Mobile;
  const email = req.body.Email;
  const address = req.body.Address;

  db.query(
    "insert into user (UserId, UserName, Mobile, Email, Address) VALUES (?,?,?,?,?)",
    [id, name, mobile, email, address],
    (err, result) => {
      if (err) {
        console.log(err);
      } else {
        res.send("Values Inserted");
      }
    }
  );
});

// Orders

app.get("/orders", (req, res) => {
  db.query("SELECT * FROM orders", (err, result) => {
    if (err) {
      console.log(err);
    } else {
      res.send(result);
    }
  });
});

app.post("/orders", (req, res) => {
  const id = req.body.OrderId;
  const UserId = req.body.UserId;
  const ProductId = req.body.ProductId;
  const quantity = req.body.Quantity;
  const cost = req.body.Cost;

  db.query(
    "insert into orders(OrderId, UserId, ProductId, Quantity, Cost) values (?,?,?,?,?)",
    [id, UserId, ProductId, quantity, cost],
    (err, result) => {
      if (err) {
        res.status(404).send(error);
      } else {
        res.send("Values Inserted");
      }
    }
  );
});

// Customer Relation

app.get("/customerrelation", (req, res) => {
  db.query("SELECT * FROM customer_relation", (err, result) => {
    if (err) {
      console.log(err);
    } else {
      res.send(result);
    }
  });
});

app.post("/customerrelation", (req, res) => {
  const userId = req.body.UserId;
  const orderId = req.body.OrderId;

  db.query(
    "insert into customer_relation(UserId, OrderId) values (?,?)",
    [userId, orderId],
    (err, result) => {
      if (err) {
        console.log(err);
      } else {
        res.send("Values Inserted");
      }
    }
  );
});

app.listen(3001, () => {
  console.log("Yey, your server is running on port 3001");
});
