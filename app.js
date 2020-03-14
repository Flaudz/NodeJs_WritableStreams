const http = require("http");
const fs = require("fs");

const myReadStream = fs.createReadStream(__dirname + "/readMe.txt", "utf8");
const myWriteStream = fs.createWriteStream(__dirname + "/writeMe.txt");

myReadStream.on("data", (chunk) => {
	console.log("New chunk received");
	myWriteStream.write(chunk);
});
