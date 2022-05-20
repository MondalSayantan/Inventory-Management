const catchAsync = require("../utils/catchAsync");
const { inventoryService } = require("../services");
const httpStatus = require("http-status");

const getProducts = catchAsync(async (req, res) => {
  await inventoryService.getAllProducts().then((value) => {
    res.status(200).send(value);
  });
});

// const getUsers = catchAsync(async (req, res) => {
//   await inventoryService.getAllUsers().then((value) => {
//     res.status(200).send(value);
//   });
// });

// const getOrders = catchAsync(async (req, res) => {
//   await inventoryService.getAllOrders().then((value) => {
//     res.status(200).send(value);
//   });
// });

// const addProducts = catchAsync(async (req, res) => {
//   await inventoryService
//     .addProducts(req.body)
//     .then((product) => {
//       if (product) {
//         res.status(204).send();
//       }
//     })
//     .catch((error) => {
//       res.status(404).send(error);
//     });
// });

// const addUsers = catchAsync(async (req, res) => {
//   await inventoryService
//     .addUsers(req.body)
//     .then((user) => {
//       if (user) {
//         res.status(204).send();
//       }
//     })
//     .catch((error) => {
//       res.status(404).send(error);
//     });
// });

// const addOrders = catchAsync(async (req, res) => {
//   await inventoryService
//     .addOrders(req.body)
//     .then((order) => {
//       if (order) {
//         res.status(204).send();
//       }
//     })
//     .catch((error) => {
//       res.status(404).send(error);
//     });
// });

module.exports = {
  getProducts,
  // getUsers,
  // getOrders,
  // addProducts,
  // addUsers,
  // addOrders,
};
