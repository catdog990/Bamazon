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
// function itemList(){
// 	var query = "SELECT id, Name, Department, Price, In_Stock FROM items WHERE ?";
// 	console.log(query)
// };
// itemList();

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
			if(response.action){
				var query = "SELECT id, Name, Department, Price, In-Stock FROM bamazon WHERE?";
				
			}
			purchase();
			});
		};
askID();

function purchase(){
	inquirer
	.prompt({
		name:"action",
		type:"input",
		message:"How many would you like to buy?"
	})
		.then(function(respose){
			if(respose.action > 0){
			/////****Need to capture user's input*******////
			//////**And subtract the user's input from**//////
			//////*The In-Stock column from the sql table.*////
			}

			console.log("You've purchased " + respose.action +"!")
		})
		//Run the purchase function here to loop//
};


