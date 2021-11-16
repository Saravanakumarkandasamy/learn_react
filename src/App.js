 
import './App.css'; 
import Child from './components/App_child.js';
import Secchild from './components/secondchild.js'; 
import Company from './components/home.js';  
import { Routes , Route} from 'react-router-dom';

function App() {
	
	let secData =["Frontend Development"," Html, Css, Javascript"];
	 
let company = [
	{
		name:'Skill lync',
		location:'Chennai',
		department:'Web Team',
	},
	{
		name:'Cavintek',
		location:'Bangalore',
		department:'UI',
	}
];


 
  return (
    <div className="App">
      
		 <Routes>
			<Route path='about' element={<About />} /> 
			</Routes>  
	  <Secchild data={secData}/>
	  <Company  data={company}/> 
    </div>
  );
    
}
function About() {
	let  mokeData = ["Col1", "Col2", "Col3"];
	return(
	<Child data={mokeData}/>
	)
	
  }

export default App;
