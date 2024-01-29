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

      url : "http://3.123.39.199:5000/admin/login"  ,  
      method : "POST"  , 
      data : {
        
        "email_id": email , 
        "password" : password  

      }

     }).then( ( res) => {     

      console.log( res ) ;

        if(   res.data.message ===  "Login successful"    ){
         
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
      <input  className="input_box_text"  style={{    border : "1px solid #5E81F4"  }} placeholder="Enter your email or user id"    onChange={onChangeEmail } /> 
      </div> 

      <div className="input_text2"> 
      <input  className="input_box_text" style={{    border : "1px solid #5E81F4"  }}  placeholder="Enter your password"  onChange={  onChangePassword} /> 
      </div>

      <div className="button"   onClick={ () => {  goToHome()  }}>
            <p  style= {{  color  : "#FFFFFF"  , fontWeight : 600  , fontSize : 16}}>Log in</p>
     </div>  

     <div className="description2_login">

     <p  style = {{ color  : "#c23815"}}>For login related problem contact System Admin</p>
     </div>  

    </div>
  
       
    </div>
  );
}

export default Login ;