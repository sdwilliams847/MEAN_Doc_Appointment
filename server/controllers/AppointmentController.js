let Appointment     = require("mongoose").model("Appointment");
let User            = require("mongoose").model("User");

module.exports = {
    create:function(req,res){
        let appointment = new Appointment(req.body);
        console.log("This should be your appointment object " + appointment);
        appointment.save((err)=>{
            if (err){
                console.log("ERROR: APPOINTMENT.save in appointment controller create function.")
                return res.json(err);
            } else {
                User.findById(appointment._user,(err,user)=>{
                    console.log("Here are ERRORS: "+err+" Here is the USER: "+user)
                    if (err){
                        console.log(err)
                    } else {
                        console.log("Here is the User that was found: ",user)
                        user._appointments.push(appointment._id)
                        user.save((err)=>{
                            if(err){
                                console.log("ERROR: USER.save in appointment create controller.")
                                return res.json(err)
                            } else{
                                console.log("You have successfully updated/saved your user's appointments "+user)
                            }
                        })
                    }
                })
            }
        })
    },

    all:function(req,res){
        Appointment.find({})
            .populate({ 
                path: '_user', 
                model: 'User' })
            .exec((err, appointments)=>{
                if(err){
                    return res.json(err);
                } else{
                    return res.json(appointments);
                }
            })
    },
}