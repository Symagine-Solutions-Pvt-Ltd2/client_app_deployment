import {Link, useNavigate , useLocation  } from "react-router-dom"  ;  
import "../Style/Login.css"  ;   
import { useState  } from "react";
import axios from "axios"  ; 
import  login from "../Images/login.jpg"  ; 

function Login() {    

  
  const  navigate = useNavigate() ;   


  const[ email , setEmail] = useState( "") ; 
  const[ password , setPassword ] = useState( "") ; 

  const onChangeEmail  = ( event ) => {
     

    console.log(event.target.value); 
    setEmail( event.target.value);

    }   
  

   
    
  const onChangePassword  = ( event ) => {
     

    console.log(event.target.value); 
    setPassword ( event.target.value);

    }   
  
  //  function   for login 

  const goToHome = () => {
      

    axios({ 

      url : "http://localhost:8000/admin/login"  ,  
      method : "POST"  , 
      data : {
        
        "email_id": email , 
        "password" : password  

      }

     }).then( ( res) => {   

        if(   res.data.message ===  "Login successful"    ){
         
          alert( "login successful")  ;  
  
           
          console.log( res ) ;  


          if(   res.data.data.type_id === "client") {

          


          navigate(  "/home"  ,    { state: {    typeId :  res.data.data.type_id   ,  clientData :  res.data.data     }} ,  { replace : false}  )  ;  
          
          

          }else if(  res.data.data.type_id === "facilitator" )  {


               
          navigate(  "/home"  ,    { state: {    typeId :  res.data.data.type_id   , name :  res.data.data.facilitator_name  , programName : res.data.data.program_name     }} ,  { replace : false}  )  ; 

          
          }else{
         
            navigate(  "/home"  ,    { state: {    typeId :  res.data.data.type_id   , Name :  res.data.data.name  , programName : res.data.data.program_name     }} ,  { replace : false}  )  ;

          }

        } 
        else {

          alert( "incorrect login!")  ;
        }
       


     } ).catch(( err) => { 
         console.log( "error") ;

      }  ) ;  


   // navigate(  "/home"  ,   { replace : false}  )  ; 

    }   
 

  return (
    <div  className="OuterBox"  style={{  backgroundImage : `url(${login })`,  backgroundSize : "contain"   , backgroundRepeat : "no-repeat"   , backgroundPosition : "center"}} > 


    <div   className="InnerBox-1"   >  

    </div>
 


    <div className="InnerBox-2">  
     
     <div  className="description1_login"> 
      <p  className="description1-text"> Welcome on board !</p>
     </div>  

      <div className="input_text1"> 
      <input  className="input_box_text" placeholder="Enter your email or user id"    onChange={onChangeEmail } /> 
      </div> 

      <div className="input_text2"> 
      <input  className="input_box_text" placeholder="Enter your password"  onChange={  onChangePassword} /> 
      </div>
      

      <div className="password-text"> 
        <p>Forgot password?</p>
        <p>Click here </p>
      </div>

      <div className="button"   onClick={ () => {  goToHome()  }}>
            <p>Log in</p>
     </div>  

     <div className="description2_login">

      <p>For any login related problem contact system admin!</p>
     </div>
    </div>
  
       
    </div>
  );
}

export default Login ;