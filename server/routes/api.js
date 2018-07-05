var mysql      = require('mysql');
var connection = mysql.createConnection({
  host     : 'localhost',
  user     : 'root',
  password : 'password',
  database : 'classicoach'
});

connection.connect();

connection.query('SELECT * FROM joueurs;', function(err, rows, fields) {
  if (err) throw err;
  //console.log('The solution is: ', rows[0].name);
  var myJsonString = JSON.stringify(rows);
  console.log('The solution is: ', rows);
});

connection.end();