var express  = require('express');
var app      = express();
//var http = require('http');
var httpProxy = require('http-proxy');
//var apiProxy = httpProxy.createProxyServer();
var serverSUMO = 'http://14.142.32.9:14487/';
var serverSahaj = 'http://14.142.32.9:14489/';
var serverAWS = 'https://readit.ewatch.online:42373'; //'https://readit.ewatch.online:21408/'; //'https://14.142.32.9:21408/'; //
 

 //httpProxy.createProxyServer({
 httpProxy.createServer({
 //http.createServer({
  /*
  ssl: {
    key: fs.readFileSync('valid-ssl-key.pem', 'utf8'),
    cert: fs.readFileSync('valid-ssl-cert.pem', 'utf8')
  },
  */
  target: 'https://readit.ewatch.online:42373',
  secure: false // Depends on your needs, could be false.
}).listen(process.env.PORT);

/*
 app.get('*',function(req,res,next){
  res.redirect(302, serverAWS + req.url);
  //apiProxy.web(req, res, {target: serverAWS });
});

 
 
app.post('/connect/token',function(req,res,next){
    res.redirect(302, serverAWS + req.url);
  //next();
  //res.send(req.body.message);
});


 /*
app.use("/sumo", function(req, res) {
    console.log('redirecting to SUMO');
    apiProxy.web(req, res, {target: serverSUMO});
});

app.use("/sahaj", function(req, res) {
    console.log('redirecting to Sahaj');
    apiProxy.web(req, res, {target: serverSahaj});
});

app.use("/", function(req, res) {
    console.log('redirecting to Auth POC');
    apiProxy.web(req, res, {target: serverAWS });
});
*/

//app.listen(process.env.PORT||9879);