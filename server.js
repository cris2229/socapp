const express = require('express');
const app = express();
const mysql = require('mysql');
const cors = require('cors');
const bodyParser = require('body-parser');
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());
app.use(cors());
const connection = mysql.createConnection({
    host: 'localhost',
    user: 'root',
    password: '12345',
    database: 'socapp'
});

connection.connect(err => {
    if(err)
    {
        return err;
    }
});


// this responds with "hello world" on the homepage
app.get('/', function (req, res) {
    connection.query('select * from post order by date_post DESC', (err, results) =>{
        if (err) {
            return res.send(err);
        }else {
            return res.json({
                    data : results
            })
        }
    });

});

app.post('/add',   (req, res) => {
    const {email,name,message} = req.body.values;
    var sql = "INSERT INTO post (email,name, post) VALUES ('"+email+"', '"+name+"','"+message+"')";
    connection.query(sql, function (err, result) {
        if (err) throw err;
        console.log("1 record inserted");
    });
    res.send();
});
if (process.env.NODE_ENV === 'production') {
    app.use(express.static('build'));
    app.get('*', (req, res) => {
        res.sendFile(path.join('build', 'index.html'));
    });
}