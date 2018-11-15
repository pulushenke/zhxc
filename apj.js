const express = require("./node_modules/express");
const bodyParser = require('body-parser');
const app = express();
const message = require("./backstage/message")
const urlencodedParser = bodyParser.urlencoded({
	extended: false
});
app.use(express.static("front_page")); 
app.post('/email', urlencodedParser, function(req, res) {
	message.email(req,res);
});

let server = app.listen(8080, () => {
	console.log("服务启动成功。");
});