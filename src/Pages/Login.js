import {Link, useNavigate , useLocation  } from "react-router-dom"  ;  
import "../Style/Login.css"  ;   
import { useState  } from "react";
import axios from "axios"  ; 
import  login from "../Images/login.jpg"  ;  
import VisibilityIcon from '@mui/icons-material/Visibility';
import VisibilityOffIcon from '@mui/icons-material/VisibilityOff';

function Login() {    

  
  const  navigate = useNavigate() ;   


  const[ email , setEmail] = useState( "") ; 
  const[ password , setPassword ] = useState( "") ; 
  const[ passwordVisibilty  , setPasswordVisibilty  ] = useState( false) ;  

  const onChangeEmail  = ( event ) => {
     

    // console.log(event.target.value); 
    setEmail( event.target.value);

    }   
  

   
    
  const onChangePassword  = ( event ) => {
     

    // console.log(event.target.value); 
    setPassword ( event.target.value);

    }   
  
  //  function   for login 

  const goToHome = () => {
      

    axios({ 

      url : "https://learn-up.app/admin/login"  ,  
      method : "POST"  , 
      data : {
        
        "email_id": email , 
        "password" : password  

      }

     }).then( ( res) => {     

     // // console.log( res ) ;
    
        if(   res.data.message ===  "Login successful"   &&  ( res.data.data.type_id === "client"  || res.data.data.type_id === "school" || res.data.data.type_id === "facilitator"   )   ){
         
          alert( "login successful")  ;  
  
           
           
       

          if(   res.data.data.type_id === "client") {

          

         localStorage.setItem('items', JSON.stringify( res.data.data.client_name));
         navigate(  "/home"  ,    { state: {    typeId :  res.data.data.type_id   ,  data :  res.data.data  ,  userInfo : {  name : res.data.data.client_name   ,   type : res.data.data.type_id }         }} ,  { replace : false}  )  ;  
          
          

          }else if(  res.data.data.type_id === "facilitator" )  {


            localStorage.setItem('items', JSON.stringify( res.data.data.facilitator_name));
          navigate(  "/home"  ,    { state: {    typeId :  res.data.data.type_id   , data :  res.data.data   ,  userInfo : {  name : res.data.data.facilitator_name   ,   type : res.data.data.type_id }         }} ,  { replace : false}  )  ; 

          
          }else{
            

            localStorage.setItem('items', JSON.stringify( res.data.data.school_name));
            navigate(  "/home"  ,    { state: {    typeId :  res.data.data.type_id   ,  data :  res.data.data  , userInfo : {  name : res.data.data.school_name   ,   type : res.data.data.type_id }        }} ,  { replace : false}  )  ;

          }

        }else if(     res.data.message ===  "Login successful"  ){

          alert( "Invalid Credentials!")  ;  
        }else {

          alert( res.data.message)  ;
        }
       


     } ).catch(( err) => { 
        // // console.log( "error") ;

      }  ) ;  


   // navigate(  "/home"  ,   { replace : false}  )  ; 

    }     




    const onChangePasswordVisisbilty   = (  ) => {
        

      var x = document.getElementById("password_input"); 
  
      if (x.type === "password") {
        x.type = "text"; 
        setPasswordVisibilty( true );
      } else {
        x.type = "password"; 
        setPasswordVisibilty( false );
      } 
     
      
      } ; 
  
 

  return (
    <div  className="OuterBox"  style={{  backgroundImage : `url(${login })`,  backgroundSize : "contain"   , backgroundRepeat : "no-repeat"   , backgroundPosition : "center"}} > 


    <div   className="InnerBox-1"   >   


    <div style= {{ display : "flex"  , flexDirection : "row"}} >
    <button className="button_c"  style={{ backgroundColor : "#F7E5E9"  , textDecoration : "underline"}}   onClick={()  => {        navigate(  "/policy"   ,   { state: {    screenType  :  "privacyPolicy" }}     , { replace : false}  )  }  }  >Privacy policy</button> 
    <button className="button_c" style={{ backgroundColor : "#F7E5E9"  , textDecoration : "underline"}} onClick={()  => {        navigate(  "/policy"   ,   { state: {    screenType  :  "tandc" }}     , { replace : false}  )  }  } >Legal notice</button> 
    <p style={{ fontWeight : "bold", marginLeft: "5px"}}>&copy;</p> 
    <p  className="button_c"  style={{ fontWeight : "bold"}} >2024 - soceo </p> 
    </div>


    </div>
 


    <div className="InnerBox-2">  
     
     <div  className="description1_login"> 
      <p  className="description1-text"> Welcome on board !</p>
     </div>  

      <div className="input_text1"> 
      <input  className="input_box_text"  style={{    border : "1px solid #5E81F4"  }} placeholder="Enter your email or user id"    onChange={onChangeEmail } /> 
      </div> 

      <div className="input_text2">  
       

       <span class="ab"> {
 
       
       passwordVisibilty ?
       <button  className ="login_button"  onClick={ () => { onChangePasswordVisisbilty()}}>
       <VisibilityIcon sx={{   fontSize : 26    }}/> 
       </button>
       : 
       <button    className ="login_button" onClick={ () => { onChangePasswordVisisbilty()}} >
       <VisibilityOffIcon sx={{   fontSize : 26    }}/> 
       </button>
 }
        </span>
       <input   style={{    border : "1px solid #5E81F4"  }}  id="password_input"   type="password" className="input_box_text"   placeholder="Enter your password"    onChange={ onChangePassword }/>  
     
 
       </div> 

      <button className="button"    style={{ border : "0px black" , color : "#ffffff" , fontWeight : 600  , fontSize : 16}}  onClick={ () => { goToHome() }}>
      Log In
     </button>  

     <div className="description2_login">

     <p  style = {{ color  : "#c23815"}}>For login related problem contact System Admin</p>
     </div>  

    </div>
  
       
    </div>
  );
}

export default Login ;