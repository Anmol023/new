import logo from './logo.svg';
import './App.css';
import Sidemenu from "./components/Sidemenu"
import logowhite from "./images/logo-white.png"
import Navbar from './components/Navbar';
import Details from './components/Details';

// import AdvanceSearch from './components/AdvanceSearch';
import Table from './components/Table';

function App() {
  return (
   <div >
       <div className="App">
         <div style={{display:"flex"}}>
           <div style={{height:"100vh"}}>
           <Sidemenu></Sidemenu>
           </div>
           <div style={{width:"100%"}}>
             <div>
                <Navbar></Navbar>
             </div>
             <div style={{padding:"4px"}}>
                <Details></Details>
             </div>
             {/* <div style={{padding:"2px"}}>
               <Table></Table>
             </div> */}
         </div>
         </div>
      </div>
     
    </div>   
  );
}

export default App;
