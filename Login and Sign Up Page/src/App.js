import { Route, Routes } from 'react-router-dom';
import './App.css';
import Login from "./Components/Login";
import Signup from './Components/Signup';
function App() {
// const [value,setvalue] = useState(true);
// function change(){
//   setvalue(!value)
// }

  return (
    <>
    
    <Routes>
    <Route path='/' element={ <Login/>}/>
      <Route path='/signup' element={<Signup/>}/>
    </Routes>
     {/* {value ?  <Login/>:<Signup/>}
     <div className="end">
      {value ? <button onClick={change} className="ku">Sign Up</button>:<button onClick={change} className="ku">Login</button>}
     </div> */}
    
    </>
    
  )
}

export default App;
