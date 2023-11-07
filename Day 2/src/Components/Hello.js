import { Lock, Mail, Phone, User, UserSquare2 } from 'lucide-react';
import '../Assests/css/style.css';
export const Hello = ()=> {
    function fun()
    {
        let x = document.getElementById("name").value;
        alert(x+" welcome you!!");
    }
    return (
        <>
        <div className="heading">
        <h1>Registration Form</h1>
        </div>
        <div className="Main">
            <div className="Body">

        <form>
            <label className="nav"><UserSquare2 />Name:</label><br/>
            <input type="textfield" className="f" id="name" required></input><br/><br/>
            <label className="nav"><Mail />Email: </label><br/>
            <input type="email" className="f" required></input><br/><br/>
            <label className="nav"> <Phone />Number: </label><br/>
            <input type="number" className="f" required></input><br/><br/>
            <label className="nav">  <User />UserName: </label><br/>
            <input type="textfield" className="f" required></input><br/><br/>
            <label className="nav">  <Lock />Password: </label><br/>
            <input type="password" className="f" required></input><br/><br/>
        <button type="submit" onClick={fun}>Submit</button>
        </form>
            </div>
        </div>
        </>
    )
}