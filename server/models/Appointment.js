var mongoose    = require('mongoose');
var ObjectId = mongoose.Schema.Types.ObjectId;

var AppointmentSchema = mongoose.model('Appointment',new mongoose.Schema({
    complaint:{type:String, required: [true, "Complaint must be at least 10 chracters."], minLength: [10, "Complaint must be at least 10 chracters."]
    },
    date:{type:Date, required:true},
    time:{type:String, required:true},
    _user:{type:ObjectId, ref:"User"}
    
},{timestamps:true}));