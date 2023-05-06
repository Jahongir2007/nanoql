# Nanoql
Nanoql is a Node.js library that simplifies MySQL database management in Node.js and supports shortcodes
If we create an application in Node.js and MySQL library, we will have to write a lot of code:
## Node.js MySQL
```js
// Creating database with Node.js MySQL
var mysql = require('mysql');

var con = mysql.createConnection({
  host: "localhost",
  user: "yourusername",
  password: "yourpassword"
});

con.connect(function(err) {
  if (err) throw err;
  console.log("Connected!");
  con.query("CREATE DATABASE mydb", function (err, result) {
    if (err) throw err;
    console.log("Database created");
  });
});
```
Now let's create a database in Nanoql:
## Node.js MySQL + Nanoql:
```js
// Creating database with Node.js MySQL + Nanoql
var Nanoql = require('nanoql');

var con = new Nanoql(["localhost", "yourusername", "yourpassword"]);
console.log("Connected!");

con.sql("CREATE DATABASE mydb", (err, res)=>{
  con.isErr(err);
  console.log("Database created");
});
```
## Tutorial
Nanoql tutorial
### Quick start and installation
```
$ npm install nanoql
```
### Creating connection
We must create connection with Nanoql class.
```js
var Nanoql = require('nanoql');

var con = new Nanoql(["localhost", "username", "password"]);
console.log("Connected");
```
### `.sql()` method
We can use `.sql()` method for sending sql queries to MySQL database.
```js
var Nanoql = require('nanoql');

var con = new Nanoql(["localhost", "username", "password"]);
console.log("Connected");

con.sql(`SQL_QUERY`, ([options]));
```
### `.isErr()` method
```js
We can use `.isErr()` method to get MySQL errors to console.
var Nanoql = require('nanoql');

var con = new Nanoql(["localhost", "username", "password"]);
console.log("Connected");

con.sql(`SQL_QUERY`, (err, res, flds)=>{
  con.isErr(err); // checking and getting errors to console
});
```
