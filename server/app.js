import randomQuest from './module/index.js'
import express from 'express'
import bodyParser from 'body-parser'
import { readFile, appendFile } from './module/utils.js';

const app = express();
const className = 'N6';
const pathData = `./data/student-${className}.json`;

app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());
app.use(function(req, res, next) {
    res.header("Access-Control-Allow-Origin", "*"); // update to match the domain you will make the request from
    res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
    next();
});

app.get("/", function(req, res) {
  const data = JSON.parse(readFile(pathData));
  res.send(data.data[0]);
});

app.post('/generate', function(req, res) {
    console.log('receiving data ...');
    console.log('body is ',req.body);
    let studentName = req.body.name;
    let num = req.body.count;
    // randomQuest(`${num}_${studentName}`, className);
    randomQuest(`${studentName}`, className, pathData);
    appendFile(pathData, studentName);
    res.send(req.body);
});


app.post('/ignore', function(req, res) {
    console.log('receiving data ...');
    console.log('body is ',req.body);
    let studentName = req.body.name;
    appendFile(pathData, studentName, true);
    res.send(req.body);
});

// Config port
let port = process.env.PORT;
if(port == null || port == "") {
 port = 5000;
}
app.listen(port, function() {
 console.log("Server started successfully");
});