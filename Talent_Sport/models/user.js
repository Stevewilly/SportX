var mongoose = require('mongoose');
var bcrypt   = require('bcrypt');




//define the schema for our user model

var userSchema = mongoose.Schema({
    local    :{
        username: String,
        password:String,
       email:String,
        fullName: String,
        country: String,
        position:String,
        gender:String,
        sport:String
    },
    facebook : {
        id    : String,
        token : String,
        email : String,
        name  : String
    },
    twitter   : {
        id    : String,
        token  : String,
        displayName: String
    },
    google    : {
        id     : String,
        token  : String,
        email  : String,
        name   : String
    }


});
// methods ======================
// generating a hash
userSchema.methods.generateHash = function(password) {
    return bcrypt.hashSync(password, bcrypt.genSaltSync(8), null);
};

// checking if password is valid
userSchema.methods.validPassword = function(password) {
    return bcrypt.compareSync(password, this.local.password);
};
//create a model and expose it to our app
module.exports = mongoose.model(
  'User', userSchema);