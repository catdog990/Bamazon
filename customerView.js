var inquirer = require("inquirer");
var mysql = require("mysql");

var connection = mysql.createConnection({
	host:"localhost",
	port: 3306,
	user:"root",
	password:"22carola",
	database:"bamazon"
});
connection.connect(function(err){
	if(err) throw err;
	// console.log("connected as id" + connection.threadId);
	
});


// //*****Probably Need to Add to this Function*******////
function itemList(){
	var sql = "SELECT * FROM items";
	connection.query(sql, (err, res) => {
		if(err) throw err;
		console.log(res);
		askID();
	});
	
};
itemList();

// **********could make this prompt into a list, and use "switch."***///
function askID(){
	inquirer
		.prompt({
			name:"action",
			type:"input",
			message:"Enter the ID of the item you would like to purchase."
		})
		.then(function(response){

			

			
			//***Run casper function***//
			// if(response.action){
			// 	;
			// 	var query = "SELECT id, Name, Department, Price, In-Stock FROM bamazon WHERE?";
			// 	connection.query(query, {action: response.action }, function(err, res){
			// 		for (var i = 0; i < res.length; i++){
			// 			console.log("ID: " + res[i].id); 

			// 			// + "|| Department: " + res[i].Department + "|| Price: " + res[i].Price);
			// 		};
			// 	});
			// };
			purchase();

			});
		var idRes =response.action;

		};


function purchase(){
	inquirer
	.prompt({
		name:"action",
		type:"input",
		message:"How many would you like to buy?"
	})
		.then(function(response){
			if(response.action){
			

			// connection.query(sql, (err, res) =>{
			// 	if (err) throw err;

			// 	var sql = "UPDATE items SET in_stock = in_stock - response.action WHERE id = askID.idRes"

			// 	connection.query(sql, (err, res) =>{
			// 		if(err) throw err;
			// 		askID();
			// 	});
			// });
			
			console.log(askID.idRes);

			}

			// console.log("You've purchased " + response.action +"!")
		})
		
};


