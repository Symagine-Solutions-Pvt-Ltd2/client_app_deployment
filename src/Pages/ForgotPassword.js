import {Link , useNavigate  , useLocation  } from "react-router-dom" ; 
import { useState  , useEffect } from "react"; 
import axios from "axios"  ;   
import login from "../Images/login.jpg"  ;  
import  "../Style/Login.css"  ;  


import PasswordPopup  from "../Components/PasswordPopup";




function ForgotPassword() {      
  

    const[ popup  , setPopup ] = useState( false) ; 
    

    const  handleOtp = ( cs  ) => {     
          setPopup( true)  ;
        
   } 




    return( 

   <div  className="OuterBox"  style={{  backgroundImage : `url(${login })`,  backgroundSize : "contain"   , backgroundRepeat : "no-repeat"   , backgroundPosition : "center"}}  >   

      
<div   className="InnerBox-1"   >  

</div>
  

<div className="InnerBox-2"  style={{  display : "flex"  , alignItems :"center"  , justifyContent : "center"}}>   


    <div  style={{ width : "100%"   ,height : "35%"  , display : "flex" ,  flexDirection : "column"  , justifyContent : "space-around"}}> 
   
    <PasswordPopup   trigger= { popup  } setTrigger={ setPopup }  >
        
        </PasswordPopup>


    <input type="text"   style={{ width : "50%"  ,height : "20%"  , borderRadius : 25  ,   border : "1px solid #5E81F4"  , padding : "2%" }}     name="name"  placeholder="Enter your Email ID "  /> 

    <div   style={{ width : "50%"  ,height : "20%"  , display : "flex"  , justifyContent : "center"}} >
    <input     style={{ width : "50%"  ,height : "100%" , borderRadius : 25   , backgroundColor : "#5E81F4"  , color : "#FFF"  ,  border : "0px solid red" }}      type="button" value = "Send OTP"   
       onClick={ () => {   handleOtp( )   } } 
    /> 
    </div> 

   {/*  <div>  
        <p>For any login related problem contact system admin!</p> 
    </div>  */}
    </div>
</div> 


   </div>


    )
} 



export default  ForgotPassword ; 