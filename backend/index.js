const express = require('express');
const cors = require('cors');
const mysql = require('mysql');

const app = express();
app.use(cors());

/*
//create connection to database (LOCALHOST OPTION)
const connection = mysql.createConnection({
	host: 'localhost',
	user: 'root',
	password: '',
	database: '...',
	multipleStatements: true
});
*/

//create connection to AWS RDS instance
//terminated RDS connection on Amazon, wasn't using for database
const connection = mysql.createConnection({
	host: 'nathan-website-take-1.cpp3rxeuxzx8.us-east-2.rds.amazonaws.com',
	user: 'admin',
	password: 'Harryhasahead23',
	database: 'nathan_misc_stuff',
	multipleStatements: 'true'
});

//connect to database
connection.connect( err => {
	if(err){
		return err;
	}
});

app.listen(process.env.PORT || 4000, () =>{
	console.log('Products server listening on port 4000');
});
