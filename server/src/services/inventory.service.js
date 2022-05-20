const mysql = require("mysql");

const db = mysql.createConnection({
  user: "root",
  host: "localhost",
  password: "rahul",
  database: "inventory",
});

const getAllProducts = async () => {
  db.query("SELECT * FROM products", (err, result) => {
    if (err) {
      console.log(err);
    } else {
      res.send(result);
    }
  });
};

module.exports = { getAllProducts };
