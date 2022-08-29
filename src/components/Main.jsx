import React from 'react';
import About from './About'
import Photo from './Photo'
import Footer from './Footer'
export default function Main()

{

return(
<div style ={{height:"780px", width: "317px", borderRadius: "10px",  border:"1px ", overflow:"hidden", backgroundColor: "#1A1B21", position:'relative'}}>
<Photo/>
<About/>
<Footer/>

</div>
)

}
