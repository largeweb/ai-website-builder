import logo from './logo.svg';
import './App.css';
import ResultPage from './pages/ResultPage';
import { Configuration, OpenAIApi } from "openai";
/*
const configuration = new Configuration({
    organization: "org-r8hqgbSkNNa8LHOzUpsJ91Ua",
    apiKey: process.env.OPENAI_API_KEY,
});
const openai = new OpenAIApi(configuration);
const response = await openai.listEngines();
*/
function App() {
  return (
     <div className='mainTitleMenu' style={{paddingLeft: "15%", paddingRight:"15%", paddingTop: "1%"}}>
       <h1 className='midTitleText' style={{marginTop:"0%"}}>SketchUI</h1> 
       <div className='centeronly' >
         <h1 className='bigTitleText centeronly' style={{marginTop:"5%", marginBottom:"0%"}}>CREATE AI</h1>
         <h3 className='bigTitleText centeronly' style={{marginTop:"0", marginBottom:"0"}}>GENERATED UI</h3>
         <div className='smallTitleText centeronly' style={{marginBottom:"1%"}}>SketchUI generates beautiful UI components and website elements</div>
         <div className='smallTitleText centeronly' style={{marginBottom:"2%"}}>from your drawings - free forever.</div>
         <br></br>
       </div>
       <input
              type="text"
              placeholder="Describe your component here"
              className='login'/>
       <button className='button-google'>Submit</button>
       <br></br>
     <ResultPage/>
     </div>
  );
}

export default App;
