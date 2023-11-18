import React, { useEffect, useState } from 'react'
import '../Assests/mount.css'
export default function Mount() {
    const [value,setvalue] = useState(0)
    // const [name,setname] = useState('')
    var name = ["Pat","Praga","Kp","Prince","Nitin","Kumar"]
    function change(){
        setvalue(value+1)
        if(value===5)
        {
            setvalue(0)
        }
    }
    useEffect(()=>{
        console.log(value)
    })
  return (
    <div>
      <h1>{name[value]}</h1>
      <button onClick={change}>Click here</button>
      
    </div>
  )
}
