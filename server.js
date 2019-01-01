/*const http = require('http');

const server = http.createServer((request, response) => {
    //console.log('headers', request.headers);
    console.log('method', request.method);
    console.log('url', request.url);
    const user = {
        name: 'John',
        hobby: 'Skating'
    }

    response.setHeader('Content-Type', 'application/json');
    response.end(JSON.stringify(user));

});

server.listen(3000);*/

const express = require('express');
const bodyParser = require('body-parser');

const app = express();

//express middleware
/*app.use((req, res,next) => {
    console.log('<h1>Hello!</h1>');
    next();
});*/

app.use(bodyParser.urlencoded({extended: false}));
app.use(bodyParser.json());

app.get('/', (req, res) => {
    req.query; //used for GET query
    console.log(req.body);               //
    req.header;             //
    req.params;             //
    res.send('getting root');
});

app.get('/profile', (req, res) => {
    res.send('getting profile');
});

/*app.post('/profile', (req, res) => {
    console.log(req.body);
    /*const user = {
        name: 'Sally',
        hobby: 'soccer'
    };
    res.send(user);
    res.send('success');
});*/

app.listen(3000);