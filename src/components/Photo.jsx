import React from 'react'
import logo from '../assets/img.jpg'
export default function Photo(){

return(
<div className='photo' style={{display:'flex', justifyContent: 'center', alignItems:'center', flexDirection: 'column', objectFit:'cover'}}>
    <img src={logo} style={{ height:"317px", width:"100%"}}></img>
    <h4 style={{margin:'0', paddingTop:'21px', fontSize:'25px'}}>void-hr</h4>
    <h5 style={{margin:'0', paddingTop:'6px', fontSize:'14.19px', color:'#F3BF99'}}>Frontend Developer</h5>
    <a href='https://twitter.com/gaura_void' style={{paddingTop:'9px',textDecoration:'none', color:'#F5F5F5', fontSize:'10.24px'}}> @gaura_void</a>
    <span style={{paddingTop:'15px', display:'flex', justifyContent:'space-evenly', width:'100%'}}>
        <button style={{height:'34px', width:'115px', borderRadius:'6px', backgroundColor:'#FFFFFF', border:'#D1D5DB', color:'black'}}><i class="fa-solid fa-envelope"  style={{paddingRight:'8px', color:'#374151'}}></i>Email</button>
        <button style={{height:'34px', width:'115px', borderRadius:'6px', boxDecoration:'none', backgroundColor:'#5093E2', border:'#D1D5DB'}}>
            <p style={{color:'374151', margin:'0',padding:'0'}}><i class="fa-brands fa-linkedin" style={{paddingRight:'8px'}}></i>LinkedIn</p></button>
    </span>



</div>


)



}