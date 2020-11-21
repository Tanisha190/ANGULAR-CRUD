const mysql = require('mysql');
const express = require('express');
var app = express();
const bodyparser = require('body-parser');

app.use(bodyparser.json());

var mysqlConnection = mysql.createConnection({
    host: 'localhost',
    user: 'root',
    password: 'root',
    database: 'teacher',
    multipleStatements: true
});

mysqlConnection.connect((err) => {
    if (!err)
        console.log('DB connection succeded.');
    else
        console.log('DB connection failed \n Error : ' + JSON.stringify(err, undefined, 2));
});






app.get('/', (req, res) => {
    mysqlConnection.query('SELECT * FROM details', (err, rows, fields) => {
        if (!err)
            res.send(rows);
        else
            console.log(err);
    })
});





app.post('/', (req, res) => {
    
    console.log(req.body,"this is req body");
    var users={
      "name":req.body.name,
      "dob":req.body.dob,
      "SpecialEducation":req.body.SpecialEducation,
     "Remedial":req.body.Remedial,
     "SpeechTherapy":req.body.SpeechTherapy
    }
      mysqlConnection.query('INSERT INTO details SET ?',users, (err, rows, fields) => {
          if (err){
              console.log(err);
          }   
          else{
            console.log('The solution is: ', rows);
          }
        })
  });
  app.listen(3000, () => console.log('Express server is runnig at port no : 3000'));