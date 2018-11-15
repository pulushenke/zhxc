const nodemailer = require('../node_modules/nodemailer/lib/nodemailer'); //引入nodemailer模块

module.exports = {
	email: function(req, res) {
		var smtpConfig = {
			host: 'smtp.qq.com',
			port: 465,
			auth: {
				user: '582077737@qq.com',
				pass: 'mequzovjajlqbcij'
			}
		};
		var Cname = '公司名称：' + req.body.Cname + '<br />';
		var contacts = '联系人：' + req.body.contacts + '<br/>';
		var email = '邮箱：' + req.body.email + '<br/>';
		var Telephone = '电话：' + req.body.Telephone + '<br/>';
		var message = '留言：' + req.body.message;
		var transporter = nodemailer.createTransport(smtpConfig);
		var sendMailFn = function(html) {
			var mailOption = {
				from: "582077737@qq.com",
				to: "118115866@qq.com,zhdk@zhdk.net",
				subject: "用户在线留言",
				html: html
			};
			transporter.sendMail(mailOption, function(err) {
				if(err) {
					res.send("提交失败");
					console.log("fail: " + err);
				} else {
					res.send("提交成功");

					console.log("success: " + res.messageID);
				}
			});
		};
		sendMailFn(Cname + contacts + email + Telephone + message);

	}

};