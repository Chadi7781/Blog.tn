

/* Import node modules*/
const express = require('express');//fast unopinionted, minimalist web framework for node+
const bodyParser = require('body-parser');
const app = express();//initiliaze express application
const mongoose  = require('mongoose');//node tool for mongodb
const config = require('./config/database')//Mongoose config
const path = require('path')//Nodejs package for file paths
const authentification = require('./routes/authentification.routes');


/* database connection start*/
mongoose.Promise = global.Promise;

mongoose.connect(config.uri, (err)=> {
    if(err)
        console.log("could not connect to database", err)
    else
        console.log( "connect to database \n")
    });
/* database connection end*/

/*Body parser start */
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended : false}));
/*Body parser end*/
const cors = require('cors');

app.use(cors({
    origin:'http://localhost:4200'
}))
app.use(express.static(__dirname+'/client/dist/'))

app.use('/authentification',authentification);
app.get('*', (req, res )=> {
    res.sendFile(path.join(__dirname + '/client/dist/index.html'));
})

app.listen(8080, () => {
    console.log('Listening on port  8080');
})