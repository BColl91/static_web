const express = require ("express");
//this is ES5 syntax required. cant use import yet.
const app = express();
//just for convention to remap express to be called app

app.use("/", express.static("website1"));

app.use("/website2", express.static("website2"))

app.listen(5001, () => {console.log("Listening on port 5001")})
// first parameter is the port to listen on and the second parameter is a function to execute when the server starts