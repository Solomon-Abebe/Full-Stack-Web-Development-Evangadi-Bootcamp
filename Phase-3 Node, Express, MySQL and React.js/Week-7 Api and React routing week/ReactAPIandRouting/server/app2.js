// npm init
// npm i express
// npm i mysql2

const express = require("express");
const app = express();
const mysql2 = require("mysql2");
const cors = require("cors");

// Middle ware to extract info from the html(parsing)
app.use(
  express.urlencoded({
    extended: true,
  })
);

// Middle ware to have access to the frontend
app.use(cors()); // Enables Cross-Origin Resource Sharing (CORS) in the Express app.
app.use(express.json());

// Route: / => Homepage route
app.get("/", (req, res) => res.send("Server Up and Running..."));

//User account info(Credentials)
const myConnection = mysql2.createConnection({
  host: "localhost",
  user: "myDBuser",
  password: "123456",
  database: "myDB",
});
// connect to mysql
myConnection.connect((err) => {
  if (err) console.log(err);
  else console.log("Connected to MySQL");
});
/***********************************CREATE TABLE**************************************** */
//Route (create-table) CREATE
app.get("/create-table", (req, res) => {
  let message = "Tables Created";

  // Putting Query on a variable
  let createProducts = `CREATE TABLE if not exists Products(
  product_id int auto_increment, 
  product_name VARCHAR(255) not null, 
  product_url VARCHAR(255) not null, 
  PRIMARY KEY(product_id)
  )`;

  let creatProductDescription = `CREATE TABLE if not exists ProductDescription(
description_id int auto_increment, 
product_id int(11) not null, 
product_brief_description TEXT not null,  
product_description TEXT not null,
product_img VARCHAR(255) not null, 
product_link VARCHAR(255) not null, 
PRIMARY KEY (description_id), 
FOREIGN KEY (product_id) REFERENCES Products(product_id)
)`;

  let createProductPrice = `CREATE TABLE if not exists ProductPrice(
price_id int auto_increment, 
product_id int(11) not null,  
starting_price VARCHAR(255) not null, 
price_range VARCHAR(255) not null, 
PRIMARY KEY (price_id), 
FOREIGN KEY (product_id) REFERENCES Products(product_id) 
)`;

  let createUsersTable = `CREATE TABLE if not exists Users(
user_id int auto_increment, 
user_name VARCHAR(255) not null, 
user_password VARCHAR(255) not null, 
PRIMARY KEY(user_id)
)`;

  let createOrderTable = `CREATE TABLE if not exists Orders(
order_id int auto_increment,
product_id int(11) not null, 
user_id int(11) not null, 
PRIMARY KEY(order_id),
FOREIGN KEY (product_id) REFERENCES Products(product_id),
FOREIGN KEY (user_id) REFERENCES Users(user_id)
)`;
  //Executing the queries created above
  //1 query Products table
  myConnection.query(createProducts, (err, results, fileds) => {
    if (err) console.log(err);
  });
  //2 query ProductDescription table
  myConnection.query(creatProductDescription, (err, results, fileds) => {
    if (err) console.log(err);
  });
  //3 query ProductPrice table
  myConnection.query(createProductPrice, (err, results, fileds) => {
    if (err) console.log(err);
  });
  //4 query Users table
  myConnection.query(createUsersTable, (err, results, fileds) => {
    if (err) console.log(err);
  });
  //5 query Orders table
  myConnection.query(createOrderTable, (err, results, fileds) => {
    if (err) console.log(err);
  });

  res.end(message);
  console.log(message);
});

/***************************INSERT(CREATE DATA-POST)************************************* */
//INSERT data to the table
app.post("/add-product", (req, res) => {
  // let product_name = req.body.product_name;
  //Using object destructuring
  const {
    product_name,
    product_url,
    product_brief_description,
    product_description,
    product_img,
    product_link,
    starting_price,
    price_range,
  } = req.body; // Extracting the values sent from the frontend

  let insertProduct = `INSERT INTO Products(product_name, product_url) VALUES(?, ?)`;
  let insertProductDescription = `INSERT INTO ProductDescription(product_id, product_brief_description, product_description, product_img, product_link) VALUES(?, ?, ?, ?, ?)`;
  let insertProductPrice = `INSERT INTO ProductPrice(product_id, starting_price, price_range) VALUES(?, ?, ?)`;

  let insertUsers = `INSERT INTO Users(user_name, user_password) VALUES(?, ?)`;
  let insertOrders = `INSERT INTO Orders(product_id, user_id) VALUES(?, ?)`;

  //Executing the query above

  myConnection.query(
    insertProduct,
    [product_name, product_url],
    (err, results, fields) => {
      if (err) console.log(`Error Found: ${err}`);
      const id = results.insertId;

      myConnection.query(
        insertProductDescription,
        [
          id,
          product_brief_description,
          product_description,
          product_img,
          product_link,
        ],
        (err, results, fields) => {
          if (err) console.log(`Error Found: ${err}`);
        }
      );
      myConnection.query(
        insertProductPrice,
        [id, starting_price, price_range],
        (err, results, fields) => {
          if (err) console.log(`Error Found: ${err}`);
        }
      );
      myConnection.query(
        insertUsers,
        [user_name, user_password],
        (err, results, fields) => {
          if (err) console.log(`Error Found: ${err}`);
          const id2 = results.insertId;

          myConnection.query(
            insertOrders,
            [id, id2],
            (err, results, fields) => {
              if (err) console.log(`Error Found: ${err}`);
            }
          );
        }
      );
    }
  );
  res.end("Data inserted successfully!");
  console.log("Data inserted successfully!");
});

/****************GET(READ DATA)*************************************** */
app.get("/iphones", (req, res) => {
  /*
"SELECT * FROM Products INNER JOIN ProductDescription INNER JOIN ProductPrice ON Products.product_id = ProductDescription.product_id AND Products.product_id = ProductPrice.product_id"
*/
  myConnection.query(
    "SELECT Products.product_id, Products.product_name, ProductDescription.product_description, ProductPrice.starting_priceFROM Products INNER JOIN ProductDescription ON Products.product_id = ProductDescription.product_id INNER JOIN ProductPrice ON Products.product_id = ProductPrice.product_id",
    (err, results, fields) => {
      if (err) console.log("Error During selection", err);
      // console.log(results);
      res.send(results);
    }
  );
});

app.listen(3031, () =>
  console.log("Listening and running on http://localhost:3031")
);
