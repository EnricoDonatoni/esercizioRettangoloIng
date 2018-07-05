//express
var express = require('express');
var bodyParser = require('body-parser');
//inspect variables
var util = require('util');
//instantiate express
var app = express();;

app.use(bodyParser.urlencoded({
    extended: true
}));

/**bodyParser.json(options)
 * Parses the text as JSON and exposes the resulting object on req.body.
 */
app.use(bodyParser.json());

app.post("/somma", function(req, res){

    var dato1 = req.body.dato1 || req.query.dato1;
    var dato2 = req.body.dato2 || req.query.dato2;

    var error = "";

    if((typeof(dato1) === "undefined")||(typeof(dato2) === "undefined")){
    	error = "Inserire dati validi";
    }
    else{
    	if((parseInt(typeof(dato1)) != "integer")||(parseInt(typeof(dato2)) != "integer")){
    		error = "Inserire dati del tipo giusto";
    	}

    }


    if(error != ""){
    	res.setHeader('Content-Type', 'application/json');
    	res.status(400).json({
    		errore: error
    	});
    }
    else{	
    	area = dato1*dato2;    	
		res.status(200).json({
			area: area
		});
    }

});

//listen in a specific port
app.listen((process.env.PORT || 65000));

//check status
console.log('Server running at http://localhost:65000/');