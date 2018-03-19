let path              = require("path");
let mongoose          = require("mongoose");
let UserController    = require("../controllers/UserController.js");
let AppointmentController    = require("../controllers/AppointmentController.js");

module.exports = function(app){
    app.post("/server/users/register",UserController.register);
    app.get("/server/users/find",UserController.findOne);
    app.get("/server/users/all",UserController.getall);
    

    app.post("/server/appointments/create",AppointmentController.create);
    app.get("/server/appointments/all",AppointmentController.all);

    app.all("*",(req,res,next)=>{
        res.sendFile(path.resolve("./client/doctor/doc-appoint/dist/index.html"))
    });
}