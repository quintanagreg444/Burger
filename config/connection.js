var connection = mysql.createConnection({
 host: "localhost",
 port: 3306,
 user: "root",
 password: "R0cketfuel!",
 database: "burgers_db"
});

connection.connect(function(err) {
if (err) {
  console.error("error connecting: " + err.stack);
  return;
}

console.log("connected as id " + connection.threadId);
});
module.exports=connection;