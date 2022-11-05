const express = require('express'); //Line 1
const app = express(); //Line 2
const port = process.env.PORT || 5000; //Line 3
const exec = require('child_process').exec;
const cors = require('cors');

require('dotenv').config();

const OPENAI_API_KEY = process.env.OPENAI_KEY;

// This displays message that the server running and listening to specified port
app.listen(port, () => console.log(`Listening on port ${port}`)); //Line 6

// create a GET route
app.get('/', (req, res) => { //Line 9
  res.send({ express: 'YOUR EXPRESS BACKEND IS CONNECTED TO REACT' }); //Line 10
});


//MIDDLEWARE
// app.use(urlencoded({extended: true}))
// app.use(upload.array())
app.use(cors())
app.use(express.json())
app.use(require('body-parser').json());


app.post('/fetch_openapi/', (req, res) => {
  console.log("TESTING THIS")
  let scmd = './scripts/openai-request ' + OPENAI_API_KEY;
  console.log(scmd);
  console.log("TESTING THIS V2")
  exec(scmd, (err, stdout, stderr) => {
        console.log('stdout: ' + stdout);
        console.log('stderr: ' + stderr);
        if (err !== null) {
            console.log('exec error: ' + err);
        }
        console.log("FINISHED:")
        console.log(stdout)
  });
  res.json({ express: 'YOUR EXPRESS BACKEND IS CONNECTED TO REACT' });
})