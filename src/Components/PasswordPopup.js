
import React from 'react'; 
import "../Components/PasswordPopup.css" ; 
import { useState  , useEffect} from "react";
import axios from "axios"  ;

 



const PasswordPopup= (  props ) => {
   

  const [otp, setOtp] = useState("");
  const [minutes, setMinutes] = useState(0);
  const [seconds, setSeconds] = useState(10);


  const userDetails  =  props.data ; 

  console.log( props.data) ; 


    

  useEffect(() => {
    const interval = setInterval(() => {
      if (seconds > 0) {
        setSeconds(seconds - 1);
      }

      if (seconds === 0) {
        if (minutes === 0) {
          clearInterval(interval);
        } else {
          setSeconds(59);
          setMinutes(minutes - 1);
        }
      }
    }, 1000);

    return () => {
      clearInterval(interval);
    };
  });





  const resendOTP = () => {
    setMinutes(2);
    setSeconds(59);
  };


    return( props.trigger) ?( 

            <div className='passwordPopups'>
                 
               
                 <div className='passwordPopups_inner'>
           
                 <div  style= {{ height : "25%"   , display : "flex"  , alignItems :"center"  , justifyContent : "center"}}>
                 <p style= {{ color : "#FFF"   , fontWeight : 800}}  > Verify OTP</p>
                 </div> 
                  



                 <div style= {{ height : "25%" , width : "100%" ,  display : "flex"  , alignItems :"center"   , justifyContent : "center"}}  > 


                 <input   style= {{ height : "70%"   , width : "80%"   , borderRadius : 15 }}   type="text" value = "Enter OTP"  />
                
                 </div>  
 


       <div  style= {{ height : "25%"  ,  width : "80%"    , display : "flex"  , flexDirection : "row"  , justifyContent : "space-around"  , alignItems : "center" }} >
          
          
               {seconds > 0 || minutes > 0 ? (
            <p  style={{ color : "#FFF"}}>
              Time Remaining: {minutes < 10 ? `0${minutes}` : minutes}:
              {seconds < 10 ? `0${seconds}` : seconds}
            </p>
            ) : (
            <p style={{ color : "#FFF"}}>Didn't recieve code?</p>
          )}

          <button 
          disabled= {seconds > 0 || minutes > 0 }
            style={{ 
              color: seconds > 0 || minutes > 0 ? "#DFE3E8" : "#FF5630"  , borderRadius : 15  , width : "40%"  , height :  "50%"
            }} 
            onClick={ resendOTP }
          >
            Resend OTP
          </button>
           </div>

                 
           <div style= {{ height : "25%" ,  width : "100%" , display : "flex"  , alignItems :"center"   , justifyContent : "center"}}  > 


<input   style= {{ height : "70%"   , width : "40%"  , borderRadius : 15 }}   type="button" value = "Submit OTP"  />

</div>  

            
               
                </div>  

            </div> ): <div> </div>; 


}

export default PasswordPopup  ;