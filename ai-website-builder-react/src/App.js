import logo from './logo.svg';
import React from "react"
// import React, { useState } from 'react';
import {useState, useEffect} from "react"
import './App.css';
import ResultPage from './pages/ResultPage';

function App() {
  const [file, setFile] = useState();
  function handleChange(e) {
    console.log(e.target.files);
    setFile(URL.createObjectURL(e.target.files[0]));
  }

  let openAIResponseJSONString = "";

  const [APIResponse, setAPIResponse] = useState("");
  const [userInput, setUserInput] = useState("");

  const [processing, setProcessing] = useState(false);

  const fetchFromOpenAPI = async () => {
    console.log("TESTING THIS WITH INPUT " + userInput)
    setProcessing(true)
    const response = await fetch('http://localhost:5000/fetch_openapi', {
      method: 'POST',
      // body: {input: input}
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ "inputtext": userInput })
    })
    // .then(
    // setTimeout(function(){
    //   console.log("Changing button color to add")
    // }, 2000)
    // )
    console.log("HERE IS THE DATA:")
    const data = await response.json()
    console.log("..........")
    console.log(data)
    // openAIResponseJSONString = data;
    setAPIResponse(data.choices[0].text)
    // setAPIResponse("test")
    setProcessing(false)
    // console.log("API RESPONSE: " + APIResponse);
  }


  return (
    
    
    <div style={{paddingLeft: "22%", paddingRight:"22%", paddingTop:"1%"}}>

      
      <h1 className='midTitleText' style={{marginTop:"0%"}}>SketchUI</h1>

      
      <div className='mainTitleMenu'> 
        <div>
          {/* {<img src='https://img.freepik.com/premium-vector/pixel-art-old-computer-with-retro-8-bit-platform-game-vector-icon-8bit-game-white-background_360488-1145.jpg?w=2000' className='titleArt'></img>} */}
          <img src='https://static.vecteezy.com/system/resources/previews/002/206/017/original/web-programming-icon-free-vector.jpg' className='titleArt'></img>
        </div>
        <div className='centeronly' >
          <h1 className='bigTitleText centeronly' style={{marginTop:"80px", marginBottom:"0%"}}>Automate</h1>
          <h2 className='bigTitleText centeronly' style={{marginTop:"-30px", marginBottom:"0px"}}>Your</h2>
          <h3 className='bigTitleText centeronly' style={{marginTop:"-30px", marginBottom:"0px"}}>User</h3>
          <h4 className='bigTitleText centeronly' style={{marginTop:"-30px", marginBottom:"20px"}}>Interface</h4>
          <div className='smallTitleText centeronly' style={{marginBottom:"5px"}}>SketchUI generates beautiful</div>
          <div className='smallTitleText centeronly' style={{marginBottom:"5px"}}>UI components and website elements</div>
          <div className='smallTitleText centeronly' style={{marginBottom:"2%"}}>from your drawings or words.</div>
          <br></br>
        </div>
      </div>


      <div>
        <div className='smallTitleText centeronly'>Add Text</div>
        <div class="fancy-box-with-button centeronly">
          <input type="text" placeholder='   Describe your component here' value={userInput} onChange={(e) => setUserInput(e.target.value)}/>
          {<button onClick={(e) => fetchFromOpenAPI()}>Submit</button>}
        </div>
        <br></br>

        <div className='smallTitleText centeronly'>Add Image</div>
        <div className='imageBox'>
          <input className='' type="file" onChange={handleChange} />
          <img className = "picture" src={file} />
        </div>
        <br></br>
      </div>

      <div className='footer'>
        {processing && <div className='midTitleText centeronly'>Processing Request...</div>}
        <ResultPage/>
        {APIResponse}
      </div>

      {/* <div>
        {openAIResponseJSONString}
      </div> */}
    </div>
  );
}

export default App;
