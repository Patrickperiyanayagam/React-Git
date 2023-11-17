
import { Autocomplete, Button, CircularProgress, LinearProgress, Slider, TextField, Typography } from "@mui/material";
// import { Hotel, Plane } from 'lucide-react';
import { useState } from 'react';
export default function Style1() {
    const city = ["Kovai","Hosur","Vellore","Hogenakkal"]
    const [val,setval] = useState<string|null>(null)
    console.log(val)
  return (
    <div>
      <Typography variant="h1">Hello</Typography>
      <Slider defaultValue={50} aria-label="Default" valueLabelDisplay="auto" />
      <Button variant="contained">Contained</Button>
      <Button variant="contained" color="success">
  Success
</Button>
      <br/>
      <CircularProgress color="success" />

      <LinearProgress color="secondary" /><br/>
      <LinearProgress variant="determinate" value={70} />
      {/* <Switch defaultChecked /> */}
{/* <Switch/> */}
{/* <Switch disabled defaultChecked /> */}
{/* <Switch disabled /><br/> */}
{/* <Avatar alt="" src="E:\Workspace\dayfour\Photo\luffy.jpg" /> */}
<br/><br/>
      {/* <Hotel /> */}
      {/* <Hotel /> */}
      {/* <ConnectingAirportsSharpIcon/> */}
      <br/>
{/* <Plane /> */}

    <Autocomplete
    options={city}
    renderInput={para=><TextField {...para} label="Cities"/>}
    value={val}
    onChange={(event:any,newValue:string|null)=>setval(newValue)}
    />

    </div>
  )
}
