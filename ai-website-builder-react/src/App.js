import logo from './logo.svg';
import React from "react"
// import React, { useState } from 'react';
import {useState, useEffect} from "react"
import './App.css';
import ResultPage from './pages/ResultPage';

function App() {

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
    <div style={{paddingLeft: "22%", paddingRight:"22%", paddingTop:"1%", marginBottom:"1%"}}>
      <h1 className='midTitleText' style={{marginTop:"0%"}}>SketchUI</h1>
      <div className='mainTitleMenu'> 
        <div className='centeronly' >
          <h1 className='bigTitleText centeronly' style={{marginTop:"80px", marginBottom:"0%"}}>Automate</h1>
          <h2 className='bigTitleText centeronly' style={{marginTop:"-30px", marginBottom:"0px"}}>Your</h2>
          <h3 className='bigTitleText centeronly' style={{marginTop:"-30px", marginBottom:"0px"}}>User</h3>
          <h4 className='bigTitleText centeronly' style={{marginTop:"-30px", marginBottom:"0px"}}>Interface</h4>
          <div className='smallTitleText centeronly' style={{marginBottom:"1%"}}>SketchUI generates beautiful</div>
          <div className='smallTitleText centeronly' style={{marginBottom:"1%"}}>UI components and website elements</div>
          <div className='smallTitleText centeronly' style={{marginBottom:"2%"}}>from your drawings - free forever.</div>
          <br></br>
        </div>
      </div>
      <div className='rightBlock'>
        <div class="fancy-box-with-button">
          <input type="text"/>
          <button>Submit</button>
        </div>
    
        <input
          type="text"
          placeholder="Describe your component here"
          value={userInput}
          className='login'
          onChange={(e) => setUserInput(e.target.value)} />
    
        {<button className='button-google' onClick={(e) => fetchFromOpenAPI()}>Submit</button>}
        {/* {!processing && <button className='button-google' onClick={(e) => fetchFromOpenAPI()}>Submit</button>} */}
        {/* {processing && <div style={{width:"10%", marginLeft:"auto", marginRight:"auto"}}>PROCESSING</div>} */}
        <br></br>
      </div>

      <div>
        {processing && <div style={{width:"10%", marginLeft:"auto", marginRight:"auto"}}>PROCESSING</div>}
      </div>

      <ResultPage/>
      {/* <div>
        {openAIResponseJSONString}
      </div> */}
      <div>
        {APIResponse}
      </div>

    </div>
  );
}

export default App;
