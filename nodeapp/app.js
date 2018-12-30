var express = require('express');
var mysql = require('mysql');
var bodyParser = require('body-parser');
var path =  require('path');


// Create connection

const db = mysql.createConnection({
	host : 'localhost',
	user : '',
	password:'',
	database: 'nodemysql'
});

//connect
db.connect((err)=>{
	if(err){
		throw err;
	}
	console.log('mysql connected....');
});



const app = express();




app.set('view engine', 'ejs');
app.set('views', path.join(__dirname, 'views'))


app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: false}));

// set static path

app.use(express.static(path.join(__dirname,'public')));
  
var users = [ 
	{
		id:1,
		first_name : 'John',
		last_name : 'Doe',
		email : 'John@gmail.com'
	},
	{
		id:2,
		first_name : 'akash',
		last_name : 'Doe',
		email : 'John@gmail.com'
	},
	{
		id:3,
		first_name : 'amit',
		last_name : 'Doe',
		email : 'John@gmail.com'
	},
	{
		id:4,
		first_name : 'jeff',
		last_name : 'Doe',
		email : 'John@gmail.com'
	}
]


app.get('/',function(req, res){
	var title = 'cutomers';
	res.render('index',{
		title:'customers',
		users : users
	});
});

app.post('/users/add',function(req,res){
	var newUser = { 
		first_name : req.body.first_name,
		last_name : req.body.last_name,
		email : req.body.email,
	}
	console.log(newUser);
});


app.listen(3000,function(){
	console.log('server started on prt 3000....');
})