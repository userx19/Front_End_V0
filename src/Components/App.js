
import {InputAdornment, TextField,OutlinedInput} from '@mui/material';
import {Search,FmdGood,Paid,Speed,ThumbUp,Sell, AccessibilityNew, Send} from '@mui/icons-material';
import MyappHead from './Head/myappHead';
import './App.css';
import Carousel from './Carousel/myAppCarousel';
function App() {
  return (
    
    <div className="zone1">
      <div>
        <MyappHead />
       </div>
       
       <div className="zone2">

        <div className='zone2-1'>
          <h2 style={{textTransform:'uppercase'}}>
            Through our platform is<br/> the perfect way to Buy and<br/> sell cars!
          </h2>
          <p>
            Get started selling or buying your car <br/>in the most reliable way.
            </p>
          </div>
        <Carousel />
        </div>
     
       <div className='mainBody'style={{display:"flex" ,justifyContent:"center",marginTop:'-0.1em',marginBottom:'-0.1em'}}> <TextField
      id="searchArea" 
      placeholder='Search Brand'
        size="normal"
        sx={{ m:'0.1em', width: '19ch',backgroundColor:'#fff'}}
        InputProps={{
          startAdornment: <InputAdornment position="start"><Search color="primary" style={{justifyContent:"start"}}/></InputAdornment>,
        }}
      /><TextField
      id="searchArea" 
      placeholder='Location'
        size="normal"
        font-size="1.1em"
        sx={{ m:'0.1em', width: '17ch',backgroundColor:'#fff'}}
        InputProps={{
          startAdornment: <InputAdornment position="start"><FmdGood color="primary"style={{justifyContent:"start"}}/></InputAdornment>,
        }}
        />
        <TextField
      id="searchArea" 
      placeholder='Range Price'
        size="Normal"
        sx={{  m:'0.1em',width: '19ch',backgroundColor:'#fff'}}
        InputProps={{
          startAdornment: <InputAdornment position="start"><Paid color="primary" style={{justifyContent:"start"}}/></InputAdornment>,
        }}
    />
      <TextField
      id="searchArea" 
      placeholder='Killomerters'
        size="Normal"
        sx={{  m:'0.1em',width: '19ch',backgroundColor:'#fff'}}
        InputProps={{
          startAdornment: <InputAdornment position="start"><Speed color="primary"style={{justifyContent:"start"}}/></InputAdornment>,
        }}
    />
   </div>
   <footer>
    <div>
      <h1>EVERYTHING YOU WISH FOR IN THE SAME PLACE </h1>
      <p style={{fontWeight:"300"}}>We will provide you with top notch services as follows</p>
      </div>
      <div style={{padding:"2em",display:"flex",flexDirection:"row"}}>
        <div ><ThumbUp fontSize="large" color="primary"/><h2 style={{marginTop:"1.25em",fontSize:"1.3em",color:"black"}}>Top Buys And Car Sales</h2>
        <p>Buy and sell the best from the most trusted providers on our easy to use plaform</p></div>
        <div><Sell fontSize="large"color="primary"/><h2 style={{color:'black'}}>Easy Payment</h2>
        <p>Safe transactions made easy and secure, you can choose to pay from our exhaustive options </p></div>
        <div><AccessibilityNew fontSize="large"color="primary"/><h2 style={{color:'black'}}>Easy To Use</h2>
        <p>Our easy to use platform, user centered will fulfill your expectations in high fashion  </p></div>
        </div>
        <div style={{display:"flex",flexDirection:"row",justifyContent:"space-evenly",backgroundColor:"#344f66",color:"white",lineHeight:"2.5em"}}>
          <div>
            <h2>About</h2><ul style={{listStyleType:"none"}}><li>About Us</li><li>Features</li><li>New</li><li>Careers</li></ul>
            </div>
             <div><h2>Company</h2><ul style={{listStyleType:"none"}}><li>Our Team</li><li>Partner With Us</li><li>FAQ</li><li>Blog</li></ul>
             </div>
             <div><h2>Support</h2><ul style={{listStyleType:"none"}}><li>Account</li><li>Support Center</li><li>Feedback</li><li>Contact us</li><li>Accessibility</li></ul></div>
             <div><h2>Get in Touch</h2><p style={{maxWidth:"10em"}}>Question or feedback? We'd love to hear from you  <OutlinedInput
          id="component-outlined"
          style={{color:"black",border:"none",backgroundColor:"#fff"}} startAdornment={
            <InputAdornment position="end">
              <Send/>
            </InputAdornment>
          }
         
        /></p></div>
        </div>
   </footer>
        
  </div>

    
  );
}

export default App;
