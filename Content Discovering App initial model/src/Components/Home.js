import AccountCircleIcon from '@mui/icons-material/AccountCircle';
import { Album, Download, ThumbsDown, ThumbsDownIcon, ThumbsUp, ThumbsUpIcon } from 'lucide-react';
import React, { useState } from 'react';
import '../Assessts/Home.css';
function Home() {
    const [like1,setlike1] = useState(false);
    const [like2,setlike2] = useState(false);
    const [like3,setlike3] = useState(false);
    const [like4,setlike4] = useState(false);
    const [like5,setlike5] = useState(false);
    const [like6,setlike6] = useState(false);
    const [like7,setlike7] = useState(false);
    const [like8,setlike8] = useState(false);
    const [like9,setlike9] = useState(false);
    const [like10,setlike10] = useState(false);
    const [like11,setlike11] = useState(false);
    const [like12,setlike12] = useState(false);
    const [like13,setlike13] = useState(false);
    const [like14,setlike14] = useState(false);
    const [like15,setlike15] = useState(false);
    const [like16,setlike16] = useState(false);
    const [like17,setlike17] = useState(false);
    const [like18,setlike18] = useState(false);
    const [like19,setlike19] = useState(false);
    const [like20,setlike20] = useState(false);
    const [like21,setlike21] = useState(false);
    const [like22,setlike22] = useState(false);
    const [like23,setlike23] = useState(false);
    const [like24,setlike24] = useState(false);
    function click1(){
        setlike1(!like1)
    }
    function click2(){
        setlike2(!like2)
    }
    function click3(){
        setlike3(!like3)
    }
    function click4(){
        setlike4(!like4)
    }
    function click5(){
        setlike5(!like5)
    }
    function click6(){
        setlike6(!like6)
    }
    function click7(){
        setlike7(!like7)
    }
    function click8(){
        setlike8(!like8)
    }
    function click9(){
        setlike9(!like9)
    }
    function click10(){
        setlike10(!like10)
    }
    function click11(){
        setlike11(!like11)
    }
    function click12(){
        setlike12(!like12)
    }
    function click13(){
        setlike13(!like13)
    }
    function click14(){
        setlike14(!like14)
    }
    function click15(){
        setlike15(!like15)
    }
    function click16(){
        setlike16(!like16)
    }
    function click17(){
        setlike17(!like17)
    }
    function click18(){
        setlike18(!like18)
    }
    function click19(){
        setlike19(!like19)
    }
    function click20(){
        setlike20(!like20)
    }
    function click21(){
        setlike21(!like21)
    }
    function click22(){
        setlike22(!like22)
    }
    function click23(){
        setlike23(!like23)
    }
    function click24(){
        setlike24(!like24)
    }
  return (
    <>
    <div className='grid_body'>
    <div className='grid_Navigation'>
        <div className='grid_appname'><Album /><h2>Explore</h2></div>
        <div className='grid_navlink'>
            <p>Home</p>
            <p>Saves</p>
            <p>Discover</p>
            <p>Collections</p>
        </div>
        <div className='grid_account'><AccountCircleIcon sx={{width:'50px',height:'50px'}}/></div>
    </div>
    <div className='grid_recommend'>
        <h1>Recommended</h1>
        <p>by Pocket</p>
    </div>



    <div className='grid1'>
        <div></div>
        <div className='grid1component1'>
            <div className='g1c1bgp1'>
                
            </div>
            <div className='g1c1bgm1'>
                <p>Bussiness</p>
            </div>
            <div className='g1c1c1'>
                <h3>Looking for prepaid plans with unlimited 5G data?</h3>
                <p>Here are plans priced under Rs 500 from Airtel and Reliance Jio that offer unlimited 5GB data. The cheapest plan in the list is priced at RS 239 and the most expensive one at Rs 479. Here are the details.</p>
            </div>
            <div className='g1c1l1'>
                <button className="grid_button" onClick={click1}>{like1?  <ThumbsUp  color="#ee1111" /> :<ThumbsUpIcon/> }</button>
                <button className='grid_button' onClick={click2}>{like2?<ThumbsDown  color="#ee1111" />:<ThumbsDownIcon/>}</button>
                <span><Download /></span>
                
            </div>
        </div>
        <div className='grid1component2'>
            <div></div>
            <div className='grid1component2'>
                <div className='g1c2bgp2'>
                    
                </div>
                <div className='g1c2bgm2'>
                    <p>Cricket</p>
                </div>
                <div className='g1c2c2'>
                    <h3>Will India Lift 2023 WorldCup?</h3>
                    <h4>History Repeats!!</h4>
                    <p>India chokes again and loses the match in style</p>
                </div>
                <div className='g1c2l2'>
                <button className="grid_button" onClick={click3}>{like3?  <ThumbsUp  color="#ee1111" /> :<ThumbsUpIcon/> }</button>
                <button className='grid_button' onClick={click4}>{like4?<ThumbsDown  color="#ee1111" />:<ThumbsDownIcon/>}</button>
                    <span><Download /></span>
                    
                </div>
            </div>
        </div>
        <div className='grid1component3'>
            <div></div>
            <div className='grid1component3'>
                <div className='g1c3bgp3'>
                    
                </div>
                <div className='g1c3bgm3'>
                    <p>Politics</p>
                </div>
                <div className='g1c3c3'>
                    <h3>In Telangana’s exam hub, trials and tribulations of job aspirants, and a search for Plan B</h3>
                    <p>Exam cancellations and delays have hit those aspiring for government jobs hard and provided the Opposition with an opportunity to target the BRS.</p>
                </div>
                <div className='g1c3l3'>
                <button className="grid_button" onClick={click5}>{like5?  <ThumbsUp  color="#ee1111" /> :<ThumbsUpIcon/> }</button>
                <button className='grid_button' onClick={click6}>{like6?<ThumbsDown  color="#ee1111" />:<ThumbsDownIcon/>}</button>
                    <span><Download /></span>
                    
                </div>
            </div>
        </div>
        <div></div>
    </div>
    

    <div className='grid_recommend'>
        <h1>Today's Top picks</h1>
        <p>November 20-11-2023</p>
    </div>
    <div className='grid2'>
        <div></div>
        <div className='grid2component1'>
            <div className='g2c1bgp1'>
                
            </div>
            <div className='g2c1bgm1'>
                <p>Food</p>
            </div>
            <div className='g2c1c1'>
                <h3>Is Junk Food injuries to Health?</h3>
                <p>Junk Food is injuries to health and it causes many health problems to people.So intaking Organic food is most prefered for healthy life</p>
            </div>
            <div className='g2c1l1'>
            <button className="grid_button" onClick={click7}>{like7?  <ThumbsUp  color="#ee1111" /> :<ThumbsUpIcon/> }</button>
                <button className='grid_button' onClick={click8}>{like8?<ThumbsDown  color="#ee1111" />:<ThumbsDownIcon/>}</button>
                <span><Download /></span>
                
            </div>
        </div>
        <div className='grid2component2'>
            <div></div>
            <div className='grid2component2'>
                <div className='g2c2bgp2'>
                    
                </div>
                <div className='g2c2bgm2'>
                    <p>Economics</p>
                </div>
                <div className='g2c2c2'>
                    <h3>India a USD 4 trillion economy? No official word yet</h3>
                    <p>India has crossed the USD 4 trillion mark in its GDP, according to a viral social media post by billionaire Gautam Adani, two Union Ministers, and Maharashtra Deputy Chief Minister Devendra Fadnavis. </p>
                </div>
                <div className='g2c2l2'>
                <button className="grid_button" onClick={click9}>{like9?  <ThumbsUp  color="#ee1111" /> :<ThumbsUpIcon/> }</button>
                <button className='grid_button' onClick={click10}>{like10?<ThumbsDown  color="#ee1111" />:<ThumbsDownIcon/>}</button>
                    <span><Download /></span>
                    
                </div>
            </div>
        </div>
        <div className='grid2component3'>
            <div></div>
            <div className='grid2component3'>
                <div className='g2c3bgp3'>
                    
                </div>
                <div className='g2c3bgm3'>
                    <p>Entertainment</p>
                </div>
                <div className='g2c3c3'>
                    <h3>Ranbir Kapoor-Alia Bhatt, Ram Charan-Upasana Kamineni cheer for Team India at World Cup: ‘Bring the cup’</h3>
                    <p>India vs Australia World Cup final had film couples across the country cheering for Team India.</p>
                </div>
                <div className='g2c3l3'>
                <button className="grid_button" onClick={click11}>{like11?  <ThumbsUp  color="#ee1111" /> :<ThumbsUpIcon/> }</button>
                <button className='grid_button' onClick={click12}>{like12?<ThumbsDown  color="#ee1111" />:<ThumbsDownIcon/>}</button>
                    <span><Download /></span>
                    
                </div>
            </div>
        </div>
        <div></div>
    </div>


    <div className='grid_recommend'>
        <h1>Technology</h1>
        <p>November 20-11-2023</p>
    </div>
    <div className='grid3'>
        <div></div>
        <div className='grid3component1'>
            <div className='g3c1bgp1'>
                
            </div>
            <div className='g3c1bgm1'>
                <p>WIRED</p>
            </div>
            <div className='g3c1c1'>
                <h3>The Chatbots Are Now Talking to Each Other</h3>
                <p>ChatGPT-style chatbots that pretend to be people are being used to help companies develop new product and marketing ideas.   </p>
            </div>
            <div className='g3c1l1'>
            <button className="grid_button" onClick={click13}>{like13?  <ThumbsUp  color="#ee1111" /> :<ThumbsUpIcon/> }</button>
                <button className='grid_button' onClick={click14}>{like14?<ThumbsDown  color="#ee1111" />:<ThumbsDownIcon/>}</button>
                <span><Download /></span>
                
            </div>
        </div>
        <div className='grid3component2'>
            <div></div>
            <div className='grid3component2'>
                <div className='g3c2bgp2'>
                    
                </div>
                <div className='g3c2bgm2'>
                    <p>Search Engine with PJ VogtS</p>
                </div>
                <div className='g3c2c2'>
                    <h3>AUDIO: How Do I Use the Internet Now?</h3>
                    <p>Ezra Klein joins Search Engine to answer a question that's increasingly confounded us: is there a sane way use the internet, now?</p>
                </div>
                <div className='g3c2l2'>
                <button className="grid_button" onClick={click15}>{like15?  <ThumbsUp  color="#ee1111" /> :<ThumbsUpIcon/> }</button>
                <button className='grid_button' onClick={click16}>{like16?<ThumbsDown  color="#ee1111" />:<ThumbsDownIcon/>}</button>
                    <span><Download /></span>
                    
                </div>
            </div>
        </div>
        <div className='grid3component3'>
            <div></div>
            <div className='grid3component3'>
                <div className='g3c3bgp3'>
                    
                </div>
                <div className='g3c3bgm3'>
                    <p>Popular Science</p>
                </div>
                <div className='g3c3c3'>
                    <h3>How Does 3D Printing Work?</h3>
                    <p>Rapid prototyping is a relatively simple process that can be scaled up or down.</p>
                </div>
                <div className='g3c3l3'>
                <button className="grid_button" onClick={click17}>{like17?  <ThumbsUp  color="#ee1111" /> :<ThumbsUpIcon/> }</button>
                <button className='grid_button' onClick={click18}>{like18?<ThumbsDown  color="#ee1111" />:<ThumbsDownIcon/>}</button>
                    <span><Download /></span>
                    
                </div>
            </div>
        </div>
        <div></div>
    </div>


    <div className='grid_recommend'>
        <h1>Life Hacks</h1>
        <p>Tips for better living</p>
    </div>
    <div className='grid4'>
        <div></div>
        <div className='grid4component1'>
            <div className='g4c1bgp1'>
                
            </div>
            <div className='g4c1bgm1'>
                <p>Time</p>
            </div>
            <div className='g4c1c1'>
                <h3>Yes, You Can Get Better at Saying No</h3>
                <p>There’s a common malfunction that occurs when well-intentioned people open their mouths to say no: The word “yes” tumbles out instead.</p>
            </div>
            <div className='g4c1l1'>
            <button className="grid_button" onClick={click19}>{like19?  <ThumbsUp  color="#ee1111" /> :<ThumbsUpIcon/> }</button>
                <button className='grid_button' onClick={click20}>{like20?<ThumbsDown  color="#ee1111" />:<ThumbsDownIcon/>}</button>
                <span><Download /></span>
                
            </div>
        </div>
        <div className='grid4component2'>
            <div></div>
            <div className='grid4component2'>
                <div className='g4c2bgp2'>
                    
                </div>
                <div className='g4c2bgm2'>
                    <p>Quartz</p>
                </div>
                <div className='g4c2c2'>
                    <h3>VIDEO: How to Save Money on Groceries</h3>
                    <p>Tiffany Doerr Guerzon, author of “Save Money on Groceries Without Losing Your Mind,” tells Quartz the best tips to save money on your monthly food bill.</p>
                </div>
                <div className='g4c2l2'>
                <button className="grid_button" onClick={click21}>{like21?  <ThumbsUp  color="#ee1111" /> :<ThumbsUpIcon/> }</button>
                <button className='grid_button' onClick={click22}>{like22?<ThumbsDown  color="#ee1111" />:<ThumbsDownIcon/>}</button>
                    <span><Download /></span>
                    
                </div>
            </div>
        </div>
        <div className='grid4component3'>
            <div></div>
            <div className='grid4component3'>
                <div className='g4c3bgp3'>
                    
                </div>
                <div className='g4c3bgm3'>
                    <p>Context</p>
                </div>
                <div className='g4c3c3'>
                    <h3>Small-mortgage shortfall threatens minorities' American Dream</h3>
                    <p>Tighter rules and high costs mean lenders are reluctant to offer small mortgages, forcing cash-poor buyers to seek riskier options.</p>
                </div>
                <div className='g4c3l3'>
                <button className="grid_button" onClick={click23}>{like23?  <ThumbsUp  color="#ee1111" /> :<ThumbsUpIcon/> }</button>
                <button className='grid_button' onClick={click24}>{like24?<ThumbsDown  color="#ee1111" />:<ThumbsDownIcon/>}</button>
                    <span><Download /></span>
                    
                </div>
            </div>
        </div>
        <div></div>
    </div>





    </div>
    <br/><br/><br/>
    </>
)
}

export default Home
