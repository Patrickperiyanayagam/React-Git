import { useState } from "react";
import '../Assests/css/State.css';
const State = ()=>
{
    const [Data,setData] = useState(true)
    function change()
    {
        setData(!Data);
    }

    return (
        <>
        <div className={Data ? "pro1" : "pro2"}>
        <button className={Data ? "c2" : "c1"} onClick={change}>Click Here</button>
        </div>
        </>
    )
}
export default State;