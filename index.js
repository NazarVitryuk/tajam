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
    // Tajam.create({
    //     works: [1,2,3,4,5,6,7,8,9,10,11,12],
    //     clients: [1,2,3,4,5,6,7,8,9,10],
    //     quotes: [{
    //         text: `Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.`,
    //         name: 'jane galadriel',
    //         position: 'ceo tengkuper',
    //         image: 'images/team-1.png'
    //     }, 
    //     {
    //         text: `Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.`,
    //         name: 'jane galadriel',
    //         position: 'ceo tengkuper',
    //         image: 'images/team-2.png'
    //     },
    //     {
    //         text: `Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.`,
    //         name: 'jane galadriel',
    //         position: 'ceo tengkuper',
    //         image: 'images/team-3.png'
    //     },
    //     {
    //         text: `Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.`,
    //         name: 'jane galadriel',
    //         position: 'ceo tengkuper',
    //         image: 'images/team-4.png'
    //     },
    //     {
    //         text: `Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.`,
    //         name: 'jane galadriel',
    //         position: 'ceo tengkuper',
    //         image: 'images/team-5.png'
    //     }],
    //     team: [{
    //         name: 'semf ucuk',
    //         position: 'ceo & founder'
    //     },
    //     {
    //         name: 'dik adalin',
    //         position: 'engineering'
    //     },
    //     {
    //         name: 'jeng kol',
    //         position: 'designer'
    //     },
    //     {
    //         name: 'per romak',
    //         position: 'marketing'
    //     }],
    //     navItems: ['home', 'about', 'expertise', 'teams', 'works', 'people', 'people say', 'contact','test'],
    //     aboutInfo: {
    //         title: "our story",
    //         paragraphs: [
    //             "Lorem ipsum dolor sit, amet consectetur adipisicing elit. In placeat aspernatur repudiandae temporibus! Nam vero dolores reprehenderit aliquid laudantium adipisci ad, dolorem aut soluta error alias. Minima quia eaque provident.",
    //             "Lorem ipsum dolor sit, amet consectetura dipisicing elit. In placeat aspernatur repudiandae temporibus! Nam vero dolores reprehenderit aliquid laudantium adipisci ad, dolorem aut soluta error alias. Minima quia eaque provident."
    //         ]
    //     },
    //     slides: [{
    //         title: 'we are awesome creative agency',
    //         content: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Labore quibusdam voluptatum error incidunt. Unde quidem temporibus officiis, possimus reprehenderit veniam aliquid deleniti placeat accusantium dolorem voluptatum aliquam, molestias, error quo.'
    //     },
    //     {
    //         title: 'we are awesome creative agency',
    //         content: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Labore quibusdam voluptatum error incidunt. Unde quidem temporibus officiis, possimus reprehenderit veniam aliquid deleniti placeat accusantium dolorem voluptatum aliquam, molestias, error quo.'
    //     },
    //     {
    //         title: 'we are awesome creative agency',
    //         content: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Labore quibusdam voluptatum error incidunt. Unde quidem temporibus officiis, possimus reprehenderit veniam aliquid deleniti placeat accusantium dolorem voluptatum aliquam, molestias, error quo.'
    //     }],
    //     expItems: [{
    //         image: 'images/expItem1.png',
    //         title: 'web design & development',
    //         text: 'Lorem ipsum dolor sit amet consectetur adipisicing elit.'
    //     },
    //     {
    //         image: 'images/expItem2.png',
    //         title: 'branding identity',
    //         text: 'Lorem ipsum dolor sit amet consectetur adipisicing elit.'
    //     },
    //     {
    //         image: 'images/expItem3.png',
    //         title: 'mobile app',
    //         text: 'Lorem ipsum dolor sit amet consectetur adipisicing elit.'
    //     },
    //     {
    //         image: 'images/expItem4.png',
    //         title: 'search engine optimization',
    //         text: 'Lorem ipsum dolor sit amet consectetur adipisicing elit.'
    //     },
    //     {
    //         image: 'images/expItem5.png',
    //         title: 'game development',
    //         text: 'Lorem ipsum dolor sit amet consectetur adipisicing elit.'
    //     },
    //     {
    //         image: 'images/expItem6.png',
    //         title: 'made with love',
    //         text: 'Lorem ipsum dolor sit amet consectetur adipisicing elit.'
    //     }]

    // }, function (err, baze) {
    //     if (err) {
    //         console.log("DB ERROR: " + err)
    //     } else {
    //         console.log("Info was added to DB " + baze )
    //     }
    // });

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
