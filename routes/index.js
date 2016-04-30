/*
 * GET home page.
 */

function trimStr(str){
	if(str){
		return str.replace(/(^\s*)|(\s*$)/g,"");
	}
}

module.exports = function(app) {
    app.get('/', function(req, res) {
        res.render('index', { title: 'Express' });
    });
    app.get('/login', function(req, res) {
        res.render('login');
    });

    app.post('/dologin', function(req, res) {
		var email = req.body.inputEmail;
		// var md5 = crypto.createHash('md5');
		var password = req.body.inputPassword;

		  var json = JSON.stringify({ 
		    email: email, 
		    password: password
		  });
		  res.end(json);
	});

	app.get('/json', function(req, res) {
		 var jsonobj = { 
		    status: 200,
		    message: 'test'
		  };
		  res.json(jsonobj);
	});

	app.get("/hello", function(req, res) {
	  res.send("Hello World");
	});

	app.get('/status', function(req, res) {
	  res.status(200).send('ok');
	});
};