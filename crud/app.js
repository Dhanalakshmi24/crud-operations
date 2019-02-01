
const express = require('express')
var bodyParser = require("body-parser");
let User = require("./model/Userschema");
const app = express()
require("./config/config.js");
const port = 2009
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

/**
 * API to Render HTML File 
 */

app.set('view engine', 'ejs');
app.get('/home', (req, res) => {
    User.find({}, function (err, names) {
        if (err) throw err;
        else
            res.render('index', { namess: names });
    });

});

/**
 * API to Add Data into Database
 */
app.post('/addData', (req, res) => {
    var names = new User({
        Firstname: req.body.fname,
        Lastname: req.body.lname
    });
    names.save(function (err, obj) {
        if (err)
            throw err;
        else {
            console.log(obj);
            res.send("Added successfully");
            
        }
    });
    console.log("Added Successfully");
});

/**
 * API to Edit the Name 
 */
app.put('/editData', (req, res) => {
    var a = { Firstname: req.body.oldname };
    var b = { Firstname: req.body.newname };
    User.updateOne(a, b, function (err, names) {
        if (err) throw err;
        else
            res.send("Updated");
    });
});

/**
* API to Delete Name
*/
app.delete('/delData', (req, res) => {

    var a = { Firstname: req.body.delname };
    User.deleteOne(a, function (err, names) {
        if (err) throw err;
        else
            res.send("Deleted");
    });
});

app.listen(port, () => console.log(`${port}`));
