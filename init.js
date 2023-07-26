var http = require('express');
var app = module.exports = express();
//var http = require('http');
var httpProxy = require('http-proxy');
/*var proxy = httpProxy.createProxyServer({
	target: 'http://14.142.32.9:14487/MobileApi'
});*/


var apiProxy = httpProxy.createProxyServer();
var serverSUMO = 'http://14.142.32.9:14487/MobileApi';
var serverSahaj = 'http://14.142.32.9:14489/Service/LibertyOnlineService.svc';
 

app.use("/", function(req, res) {
    console.log('redirecting to SUMO');
    apiProxy.web(req, res, {target: serverSahaj});
});


app.use('/sahaj',function(req,res,next){
	proxy.web(req,res,{
		host: 'http://14.142.32.9:14489/Service/LibertyOnlineService.svc'
	},next);
});
/*
app.listen(80, function(){
	console.log('Listening');
});*/

app.listen(process.env.PORT||9899);