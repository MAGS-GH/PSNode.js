require('dotenv').config()
const mysql = require('mysql2')
const con = mysql.createConnection(process.env.DATABASE_URL)
console.log('Connected to PlanetScale!')

con.connect(function(err) {
    if (err) throw err;
    console.log("Connected!");
    var sql = "CREATE TABLE IF NOT EXISTS customers (name VARCHAR(255), address VARCHAR(255))";
    con.query(sql, function (err, result) {
      if (err) throw err;
      console.log("Table created");
    });
  });


con.connect(function(err) {
    if (err) throw err;
    console.log("Connected!");
    var sql = "REPLACE INTO customers (name, address) VALUES ('Company Inc', 'Highway 37')";
    con.query(sql, function (err, result) {
      if (err) throw err;
      console.log("1 record inserted");
    });
  });

con.connect(function(err) { 
    if (err) throw err;
    con.query("SELECT * FROM customers", function (err, result, fields) {
      if (err) throw err;
      console.log(result);
    });
  });

/*con.connect(function(err) { 
    if (err) throw err;
    con.query("DELETE FROM customers WHERE address = 'Highway 37'", function (err, result) {
      if (err) throw err;
      console.log("Number of records deleted: " + result.affectedRows);
    });
  });

  con.connect(function(err) { 
    if (err) throw err;
    con.query("SELECT * FROM customers", function (err, result, fields) {
      if (err) throw err;
      console.log(result);
    });
  });

con.connect(function(err) { 
    if (err) throw err;
    con.query("DROP TABLE customers", function (err, result) {
      if (err) throw err;
      console.log("Table deleted");
    });
  });
*/
