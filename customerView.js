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
		.prompt([
		{	name:"action",
			type:"input",
			message:"Enter the ID of the item you would like to purchase."
		},
		{	name:"answer",
			type:"input",
			message:"How many would you like to buy?"

		}
		])
		.then(function(response){

			var itemID = response.action;
			var purch = response.answer;

			connection.query("SELECT id, Name, Department, Price, In_Stock FROM items WHERE ?", {id: response.action}, function(err, res){




			var update = res[0].In_Stock - response.answer;
			connection.query("UPDATE items SET ? WHERE ?",
			[{
				In_Stock: update
			},
			{
				id: response.action
			}], function(err, response){});

			// var stock = res[0].In_Stock;
			// console.log(stock);
			// let sql = "UPDATE items SET in_stock = in_stock - purch WHERE id = itemID";
				// connection.query(sql, (err, res) =>{
				// 	if(err) throw err;
						itemList();
						
				// });

			

			
				});
			


			});
		

		};


// function purchase(){
// 	inquirer
// 	.prompt({
// 		name:"action",
// 		type:"input",
// 		message:"How many would you like to buy?"
// 	})
// 		.then(function(response){
// 			if(response.action){
			

// 			connection.query(sql, (err, res) =>{
// 				if (err) throw err;

// 				var sql = "UPDATE items SET in_stock = in_stock - response.action WHERE id = askID.idRes"

// 			// 	connection.query(sql, (err, res) =>{
// 			// 		if(err) throw err;
// 			// 		askID();
// 			// 	});
// 			// });
			
// 			console.log(askID.inquirer.then.idRes);

// 			}

// 			// console.log("You've purchased " + response.action +"!")
// 		})
		
// };


