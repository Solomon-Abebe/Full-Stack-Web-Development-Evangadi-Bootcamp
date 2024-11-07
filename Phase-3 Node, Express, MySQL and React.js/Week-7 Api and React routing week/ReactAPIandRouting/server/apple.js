// npm init
// npm i express
// npm i mysql2


const express = require("express");
const app = express();
const mysql2 = require("mysql2");
// require("dotenv").config();
const cors = require("cors");
const path = require("path");


const corsOption ={
  origin:[
    "http://localhost:3000",
    "https://www.evangadi.com",
    "https://www.apple.com"
  ],
};
// Middleware to parse incoming form data


app.use(express.urlencoded({ extended: true }));
app.use(cors(corsOption));
app.use(express.json());

// Homepage route
app.get("/", (req, res) => res.send("Server On and Running..."));

// MySQL connection setup (Credentials)
const myConnection = mysql2.createConnection({
  // host: process.env.DB_HOST,
  // user: process.env.DB_USER,
  // password: process.env.DB_PASSWORD,
  // database: process.env.DB_NAME,

  host: "localhost",
  user: "myDBuser",
  password: "123456",
  database: "myDB"
});

// Connect to MySQL and handle any connection errors
myConnection.connect((err) => {
  if (err) {
    console.error("Database connection failed:", err.stack);
    process.exit(1); // Exit process if connection fails
  }
  console.log("Connected to MySQL");
});

/*************************** CREATE TABLES ***************************/
app.get("/create-table", (req, res) => {
  let message = "Tables Created";

  const createProducts = `CREATE TABLE IF NOT EXISTS Products(
    product_id INT AUTO_INCREMENT,
    product_name VARCHAR(255) NOT NULL,
    product_url VARCHAR(255) NOT NULL,
    PRIMARY KEY(product_id)
  )`;

  const createProductDescription = `CREATE TABLE IF NOT EXISTS ProductDescription(
    description_id INT AUTO_INCREMENT,
    product_id INT(11) NOT NULL,
    product_brief_description TEXT NOT NULL,
    product_description TEXT NOT NULL,
    product_img VARCHAR(255) NOT NULL,
    product_link VARCHAR(255) NOT NULL,
    PRIMARY KEY(description_id),
    FOREIGN KEY (product_id) REFERENCES Products(product_id)
  )`;

  const createProductPrice = `CREATE TABLE IF NOT EXISTS ProductPrice(
    price_id INT AUTO_INCREMENT,
    product_id INT(11) NOT NULL,
    starting_price VARCHAR(255) NOT NULL,
    price_range VARCHAR(255) NOT NULL,
    PRIMARY KEY(price_id),
    FOREIGN KEY (product_id) REFERENCES Products(product_id)
  )`;

  const createUsersTable = `CREATE TABLE IF NOT EXISTS Users(
    user_id INT AUTO_INCREMENT,
    user_name VARCHAR(255) NOT NULL,
    user_password VARCHAR(255) NOT NULL,
    PRIMARY KEY(user_id)
  )`;

  const createOrderTable = `CREATE TABLE IF NOT EXISTS Orders(
    order_id INT AUTO_INCREMENT,
    product_id INT(11) NOT NULL,
    user_id INT(11) NOT NULL,
    PRIMARY KEY(order_id),
    FOREIGN KEY (product_id) REFERENCES Products(product_id),
    FOREIGN KEY (user_id) REFERENCES Users(user_id)
  )`;

  // Execute the table creation queries
  myConnection.query(createProducts, (err) => {
    if (err) console.log("Error creating Products table:", err);
  });

  myConnection.query(createProductDescription, (err) => {
    if (err) console.log("Error creating ProductDescription table:", err);
  });

  myConnection.query(createProductPrice, (err) => {
    if (err) console.log("Error creating ProductPrice table:", err);
  });

  myConnection.query(createUsersTable, (err) => {
    if (err) console.log("Error creating Users table:", err);
  });

  myConnection.query(createOrderTable, (err) => {
    if (err) console.log("Error creating Orders table:", err);
  });

  res.send(message);
});


app.get("/form", (req, res) => {
  res.sendFile(path.join(__dirname, "index.html"));
});

/*********************** ADD PRODUCT (POST REQUEST) ***********************/

app.post("/add-product", (req, res) => {
  // Extracting the values sent from the frontend
  const {
    product_name,
    product_url,
    product_brief_description,
    product_description,
    product_img,
    product_link,
    starting_price,
    price_range,
    user_name,
    user_password,
  } = req.body;
  const checkQuery = `SELECT product_id FROM products WHERE product_name = ? OR product_url = ?`;
  myConnection.query(
    checkQuery,
    [product_name, product_url],
    (err, results) => {
      if (err) {
        console.error(err);
        return res.end("Error checking product...");
      }
      if (results.length > 0) {
        return res.end("Product already exists!");
      }
    }
  );
  // Function to handle error responses
  const handleError = (message, res, err) => {
    console.error(message, err);
    return res.status(500).send(message);
  };

  // Insert into Products table
  const insertProduct = `INSERT INTO Products (product_url, product_name) VALUES (?, ?)`;
  myConnection.query(
    insertProduct,
    [product_url, product_name],
    (err, results) => {
      if (err) {
        return handleError("Error inserting product", res, err);
      }

      // Get the inserted product's ID
      const productId = results.insertId;

      // Insert into ProductDescription table
      const insertProductDescription = `
      INSERT INTO ProductDescription (product_id, product_brief_description, product_description, product_img, product_link) 
      VALUES (?, ?, ?, ?, ?)`;

      myConnection.query(
        insertProductDescription,
        [
          productId,
          product_brief_description,
          product_description,
          product_img,
          product_link,
        ],
        (err) => {
          if (err) {
            return handleError("Error inserting product description", res, err);
          }

          // Insert into ProductPrice table
          const insertProductPrice = `
        INSERT INTO ProductPrice (product_id, starting_price, price_range) 
        VALUES (?, ?, ?)`;

          myConnection.query(
            insertProductPrice,
            [productId, starting_price, price_range],
            (err) => {
              if (err) {
                return handleError("Error inserting product price", res, err);
              }

              const insertUser = `INSERT INTO Users (user_name, user_password) VALUES(?,?)`;
              myConnection.query(
                insertUser,
                [user_name, user_password],
                (err) => {
                  if (err) {
                    return handleError(
                      "Error inserting product price",
                      res,
                      err
                    );
                  }

                  const userID = results.insertId;

                  const insertOrders = `INSERT INTO Orders (product_id, user_id) VALUES(?,?)`;

                  myConnection.query(
                    insertOrders,
                    [userID, productId],
                    (err) => {
                      if (err) {
                        return handleError(
                          "Error inserting product price",
                          res,
                          err
                        );
                      }
                      console.log("Data inserted successfully!");
                      res.send("Data inserted successfully!");
                    }
                  );
                }
              );
            }
          );
        }
      );
    }
  );
});

/*********************** GET PRODUCTS (GET REQUEST) ***********************/

app.get("/iphones", (req, res) => {
  const query = `
    SELECT *
    FROM Products
    JOIN ProductDescription ON Products.product_id = ProductDescription.product_id
    JOIN ProductPrice ON Products.product_id = ProductPrice.product_id
    JOIN Orders ON Products.product_id = Orders.product_id
    JOIN Users ON Orders.user_id = Users.user_id;
  `;

  myConnection.query(query, (err, results) => {
    if (err) {
      console.error("Error retrieving products:", err);
      return res.status(500).json({ message: "Error retrieving products" });
    }

    res.json({ products: results });
  });
});


// Start the server

app.listen(7788, () =>
  console.log("Listening and running on http://localhost:7788")
);



/**************** GET PRODUCTS (READ DATA) ****************/
// app.get("/iphones", (req, res) => {
//   const selectQuery = `SELECT Products.product_id, Products.product_name, ProductDescription.product_description, ProductPrice.starting_price
//     FROM Products
//     INNER JOIN ProductDescription ON Products.product_id = ProductDescription.product_id
//     INNER JOIN ProductPrice ON Products.product_id = ProductPrice.product_id`;

//   myConnection.query(selectQuery, (err, results) => {
//     if (err) {
//       console.log("Error during selection:", err);
//       return res.status(500).send("Error fetching products");
//     }
//     res.send(results); // Send the product data as JSON
//   });
// });


