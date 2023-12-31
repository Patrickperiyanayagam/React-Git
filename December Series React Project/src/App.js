import React, { useState } from 'react'

function App() {
  const [mrng,setmrng] = useState(false)
  return (
    <div style={{width:'100vw',height:'100vh',display:'flex',justifyContent:'center',alignItems:'center',gap:'50px',flexDirection:'column'}}>
      {mrng && <img src='https://www.hdwallpapers.in/download/rock_mountain_and_green_hill_with_road_in_background_of_cloudy_sky_during_dawn_morning_4k_hd_nature-HD.jpg'  alt='morning' width="900px"/>}
      {!mrng && <img src='https://pixewall.com/wp-content/uploads/2023/04/Night-Sky-Clouds-Sunset-Scenery-4k-Wallpapers-scaled.jpg' alt='night' width="900px" />}
      <button onClick={()=>{setmrng(!mrng)}} style={{width:'120px',height:'20px',borderRadius:'20px',backgroundColor:'lightgray'}}>Click Here</button>
    </div>
  )
}

export default App
