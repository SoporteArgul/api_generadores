const express=require('express');
const app=express();
const cors=require('cors')
const bodyParser=require('body-parser')


//templates
app.set('view engine','ejs');
app.get('/', function(req, res) {
    res.render('pages/index');  });

//midelwares
app.use(express.json({type: ['application/json', 'text/plain']}));
app.use(express.urlencoded({extended:true}));
app.use(express.json({limit:'1mb'}))
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

//routes
app.use(require('./routes/index'));

                  
//CORS middleware
app.use(cors());
app.all('/*', function(req, res, next) {
    res.header("Access-Control-Allow-Origin", "*");
    res.header("Access-Control-Allow-Headers", "X-Requested-With");
    next();
  });
app.use(require("body-parser").json());


app.get("/api", (req, res) => {
  res.json({ message: "Hello",
             hola:"mundo" });
});

//puesta en marcha
app.listen(3001);
console.log('server on port 3001')