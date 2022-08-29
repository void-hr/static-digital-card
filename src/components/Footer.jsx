import React from 'react';

export default function Footer()
{
    return(
        <div className='footer' style={{display:'flex',fontSize:'25px', justifyContent:'center', alignItems:'center', height:'64px', backgroundColor: '#161619', bottom:'0px', position:'absolute', width: '100%'}}>
            <i class="fa-brands fa-square-twitter" style={{paddingRight:'24px'}} ></i>
            <i  class="fa-brands fa-square-facebook"  style={{paddingRight:'24px'}}  ></i>
            <i  class="fa-brands fa-square-instagram"  style={{paddingRight:'24px'}} ></i>  
            <i  class="fa-brands fa-square-github"  ></i>
        </div>
    )
}