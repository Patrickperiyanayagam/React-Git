import { Route, Routes } from "react-router-dom";
import Front from "./Components/Front";
import Home from "./Components/Home";
import Login from "./Components/Login";
import Signup from "./Components/Signup";
function App() {
  return (
    <>
    {/* <Home/> */}
    {/* <Front/> */}
    {/* <Login/> */}
    {/* <Signup/> */}
    <Routes>
      <Route path="/" element={<Front/>} />
      <Route path="/Login" element={<Login/>} />
      <Route path="/SignUp" element={<Signup/>} />
      <Route path="/Home" element={<Home/>} />
     </Routes>
    </>
  );
}

export default App;
