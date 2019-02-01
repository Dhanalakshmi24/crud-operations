//
var mongoose = require('mongoose');
var Schema = mongoose.Schema; 
// Create schema for user's name
var Userschema = new Schema({
    Firstname :{type: String,  required: [true, 'First name must be provided'] },//Firstname
    Lastname : {type: String,  required: [true, 'Last name must be provided'] } //Lastname
});

var User=mongoose.model("user", Userschema);
module.exports=User;