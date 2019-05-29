var express = require('express'),
    app = express(),
    bodyParser = require("body-parser"),
    mongoose = require("mongoose");

mongoose.connect("mongodb://Nazar:79081nazar@ds117136.mlab.com:17136/nazarbaze", { useNewUrlParser: true });

app.set('view engine', 'ejs');
app.use(express.static('public'));
app.use(bodyParser.urlencoded({extended: true}));

var tajam = new mongoose.Schema({
    navItems: [String],
    clients: [String],
    team: [{
        name: String,
        position: String
    }],
    aboutInfo: {
        title: String,
        paragraphs: [String]
    },
    slides: [{
        title: String,
        content: String
    }],
    expItems: [{
        image: String,
        title: String,
        text: String
    }],
    works: [String],
    quotes: [{
        text: String,
        name: String,
        position: String,
        image: String
    }],
    clients: [String]
});

var Tajam = mongoose.model("tajam", tajam);


app.get('/', (req, res) => {
    Tajam.find({}, function(err, Baze){
        if(err){
        console.log("DB error: " + err);
    } else {
           console.log('Baze uploaded successfully!');
           res.render("Home", {tajamDB: Baze[0]});
    }
    });
});

app.listen(process.env.PORT || 3000, () => {
    console.log('Server has been started!');
});
