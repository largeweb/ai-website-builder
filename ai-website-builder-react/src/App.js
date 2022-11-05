import logo from './logo.svg';
import './App.css';
import ResultPage from './pages/ResultPage';

function App() {
  return (
     <div className='mainTitleMenu'>
       <div className='centeronly' >
         <h1 className='bigTitleText centeronly' style={{marginTop:"5%", marginBottom:"0"}}>CREATE AI</h1>
         <h3 className='bigTitleText centeronly' style={{marginTop:"0"}}>GENERATED UI</h3>
         <div className='centeronly' style={{marginBottom:"2%"}}>SketchUI generates beautiful UI components and websites</div>
       </div>
       <input
              type="text"
              placeholder="Enter your username"
              className='loginInput'/>
       <button className='button-google'>Submit</button>
       <br></br>
     <ResultPage/>
     </div>
  );
}

export default App;
