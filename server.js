var express = require("express");
var app = express();
/*
app.get("/", function(req,res){
    //Send your info
    res.send("Hello World!");
});
*/
app.use(express.static(__dirname + "/Public"));

app.get('/contactlist', function(req,res){
 console.log("i received a GET request, sending data");
        
        person1 = {name:"Rob",email:"r@r.com", number:"(222)-222-2222"};
        person2 = {name:"Lisa",email:"l@r.com", number:"(322)-222-2222"};
        person3 = {name:"Olin",email:"o@r.com", number:"(312)-222-2222"};

        contacts = [person1, person2, person3];
       
        res.json(contacts);

});

app.listen(3000);
console.log("Server running on port 3000");
