const express = require('express'); //Line 1
const app = express(); //Line 2
const port = process.env.PORT || 5000; //Line 3
const exec = require('child_process').exec;
const cors = require('cors');
const bodyParser = require('body-parser');
const { count } = require('console');
const fs = require('fs')

require('dotenv').config();

const OPENAI_API_KEY = process.env.OPENAI_KEY;

let outputjsonstring = "";
let grcount = 1;

// This displays message that the server running and listening to specified port
app.listen(port, () => console.log(`Listening on port ${port}`)); //Line 6

// create a GET route
app.get('/', (req, res) => { //Line 9
  res.send({ express: 'YOUR EXPRESS BACKEND IS CONNECTED TO REACT' }); //Line 10
});


//MIDDLEWARE
// app.use(urlencoded({extended: true}))
// app.use(upload.array())
app.use(cors({origin:'*'}))
app.use(express.json())
app.use(bodyParser.json());

app.post('/clear_all/', (req, res) => {
  console.log("CLEAR ALL")
  exec("echo > ./src/pages/result-data.html", (err, stdout, stderr) => {
        if (err !== null) {
                console.log('exec error: ' + err);
        }
        exec('cat ./src/pages/result-first-half > ./src/pages/ResultPage.js', (err, stdout, stderr) => {
                console.log("added first half")
        })
        exec('cat ./src/pages/result-data.html >> ./src/pages/ResultPage.js', (err, stdout, stderr) => {
                console.log("added result data")
        })
        exec('cat ./src/pages/result-second-half >> ./src/pages/ResultPage.js', (err, stdout, stderr) => {
                console.log("added second half")
        })
        res.json({"message":"Success"});
  });

});

app.post('/sendsketch', (req, res) => {
        const file = `/root/uploaded/output.html`;
        setTimeout(() => {
                res.download(file); // Set disposition and send it.
        }, 3000);
        // console.log("RECEVING SKETCH?")
        // const uploadedfile = req.body.data;
        // // res.sendFile(uploadedfile);
        // var writer = fs.createWriteStream('/root/uploaded/userimage.jpg');
        // writer.write(uploadedfile);
        // exec(`./scripts/send-file-sshpass`, (err, stdout, stderr) => {
        // })
        // exec(`rm /uploaded/userimage.jpg`, (err, stdout, stderr) => {
        // })
})

app.get('/downloadhtml', function(req, res){
  const file = `./src/pages/result-data.html`;
  res.download(file); // Set disposition and send it.
});
app.get('/downloadcss', function(req, res){
  const file = `./src/pages/result.css`;
  res.download(file); // Set disposition and send it.
});

app.post('/undo_last/', (req, res) => {
  console.log("UNDO LAST")
  exec("sed -i '$ d' ./src/pages/result-data.html", (err, stdout, stderr) => {
        if (err !== null) {
                console.log('exec error: ' + err);
        }
        exec('cat ./src/pages/result-first-half > ./src/pages/ResultPage.js', (err, stdout, stderr) => {
                console.log("added first half")
        })
        exec('cat ./src/pages/result-data.html >> ./src/pages/ResultPage.js', (err, stdout, stderr) => {
                console.log("added result data")
        })
        exec('cat ./src/pages/result-second-half >> ./src/pages/ResultPage.js', (err, stdout, stderr) => {
                console.log("added second half")
        })
        res.json({"message":"Success"});
  });

});


app.post('/fetch_openapi/', (req, res) => {
  input = '"' + req.body.inputtext + '"';
  grcount = grcount + 1;
  console.log("TESTING THIS WITH INPUT " + input);
  let scmd = "";
  let componenttype = "";
  if(input.indexOf("button") != -1){
        componenttype = "button";
        scmd = './scripts/openai-request ' + OPENAI_API_KEY + " " + input + " " + '"button"';
  } else if(input.indexOf("header") != -1){
        componenttype = "header";
        scmd = './scripts/openai-request ' + OPENAI_API_KEY + " " + input + " " + '"header"';
  } else {
        componenttype = "div";
        scmd = './scripts/openai-request ' + OPENAI_API_KEY + " " + input + " " + '"div"';
  }
  console.log(scmd);
  console.log("TESTING THIS V2")
  let output = "";
  exec(scmd, (err, stdout, stderr) => {
        // setTimeout(function(){
                console.log('stdout: ' + stdout);
                // console.log('stderr: ' + stderr);
                if (err !== null) {
                        console.log('exec error: ' + err);
                }
                console.log("FINISHED:")
                console.log(stdout)
                outputjsonstring = stdout;


                // THIS WILL PUT RESPONSE DATA IN THE RESULT PAGE
                // exec('cat ./src/pages/result-first-half > ./src/pages/ResultPage.js', (err, stdout, stderr) => {
                //         console.log("output is: " + outputjsonstring)
                // })
                // exec('echo "' + JSON.parse(outputjsonstring).choices[0].text + '" >> ./src/pages/ResultPage.js', (err, stdout, stderr) => {
                //         console.log("output is: " + outputjsonstring)
                // })
                // exec('cat ./src/pages/result-second-half >> ./src/pages/ResultPage.js', (err, stdout, stderr) => {
                //         console.log("output is: " + outputjsonstring)
                // })

                // THIS WILL PUT BUTTON WITH RESPONSE DATA IN THE RESULT CSS

                const characters ='ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz';
                let randomString = '';
                const charactersLength = characters.length;
                for ( let i = 0; i < 10; i++ ) {
                    randomString += characters.charAt(Math.floor(Math.random() * charactersLength));
                }

                if(JSON.parse(outputjsonstring).choices[0].text.indexOf("}") == -1) {
                        res.json({"message":"Error occurred generating syntax, please try again"});
                }
                uniqueButtonId = randomString;
                indexOfOpenBracket = JSON.parse(outputjsonstring).choices[0].text.indexOf("{");
                indexOfCloseBracket = JSON.parse(outputjsonstring).choices[0].text.indexOf("}");
                exec('cat ./src/pages/result-first-half > ./src/pages/ResultPage.js', (err, stdout, stderr) => {
                        console.log("output is: " + outputjsonstring)
                })
                if(componenttype == "button"){
                        exec('echo "' + "<button id='" + uniqueButtonId + "'>Button</button>" + '" >> ./src/pages/result-data.html', (err, stdout, stderr) => {
                                console.log("output is: " + outputjsonstring)
                        })
                } else if(componenttype == "div") {
                        exec('echo "' + "<div id='" + uniqueButtonId + "'>Div</div>" + '" >> ./src/pages/result-data.html', (err, stdout, stderr) => {
                                console.log("output is: " + outputjsonstring)
                        })
                } else {
                        exec('echo "' + "<header id='" + uniqueButtonId + "'>Header</header>" + '" >> ./src/pages/result-data.html', (err, stdout, stderr) => {
                                console.log("output is: " + outputjsonstring)
                        })
                }
                exec('cat ./src/pages/result-data.html >> ./src/pages/ResultPage.js', (err, stdout, stderr) => {
                        console.log("output is: " + outputjsonstring)
                })
                exec('cat ./src/pages/result-second-half >> ./src/pages/ResultPage.js', (err, stdout, stderr) => {
                        console.log("output is: " + outputjsonstring)
                })
                exec('echo " #'+ uniqueButtonId + ' ' + JSON.parse(outputjsonstring).choices[0].text.substring(indexOfOpenBracket,indexOfCloseBracket+1) + '" >> ./src/pages/result.css', (err, stdout, stderr) => {
                        console.log("output is: " + outputjsonstring)
                })
                // exec('echo "' + JSON.parse(outputjsonstring).choices[0].text + '" >> ./src/pages/result.css', (err, stdout, stderr) => {
                //         console.log("output is: " + outputjsonstring)
                // })

                res.json(JSON.parse(outputjsonstring));



                // res.json(JSON.parse('{"output":'+`${output}`+'}'));
        // }, 500)
  });
//   res.json({ express: 'YOUR EXPRESS BACKEND IS CONNECTED TO REACT' });
});