var express = require("express");
var app = express();
var mongojs = require("mongojs");
var db = mongojs('contactlist',['contactlist']);
var bodyParser = require("body-parser");

/*
app.get("/", function(req,res){
    //Send your info
    res.send("Hello World!");
});
*/
app.use(bodyParser.json());
app.use(express.static(__dirname + "/Public"));

app.get('/contactlist', function(req,res){
 console.log("i received a GET request, sending data");
        /*
        person1 = {name:"Rob",email:"r@r.com", number:"(222)-222-2222"};
        person2 = {name:"Lisa",email:"l@r.com", number:"(322)-222-2222"};
        person3 = {name:"Olin",email:"o@r.com", number:"(312)-222-2222"};

        contacts = [person1, person2, person3];

        res.json(contacts);
        */

        db.contactlist.find(function(err,docs){
            console.log(docs);
            res.json(docs);
        });
});

app.post("/contactlist", function(req, res){
	console.log(req.body);
	db.contactlist.save(req.body, function(err, docs){
		res.json(docs);
	});

});

app.delete('/contactlist/:id', function (req, res) {
  var id = req.params.id;
  console.log(id);
  db.contactlist.remove({_id: mongojs.ObjectId(id)}, function (err, doc) {
    res.json(doc);
  });
});

app.get('/contactlist/:id', function (req, res) {
  var id = req.params.id;
  console.log(id);
  db.contactlist.findOne({_id: mongojs.ObjectId(id)}, function(err, doc){
     res.json(doc);
  });
});

app.put('/contactlist/:id', function (req, res) {
  var id = req.params.id;
  console.log(id);
  db.contactlist.findAndModify(
   { query: {_id: mongojs.ObjectId(id)},
     update: {$set: {name: req.body.name, email: req.body.email, number: req.body.number}},
     new: true
   }, function(err, doc){
     res.json(doc);
   });
});

app.listen(3000);
console.log("Server running on port 3000");
