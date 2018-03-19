var mongoose    = require('mongoose');
var ObjectId = mongoose.Schema.Types.ObjectId;

var UserSchema = mongoose.model('User',new mongoose.Schema({
    name:{type:String, required: [true, "Name is required."]
    },
    _appointments:[{type:ObjectId, ref:"Appointment"}]
    
},{timestamps:true}));
