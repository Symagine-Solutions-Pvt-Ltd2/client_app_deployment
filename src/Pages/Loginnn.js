import {Link, useNavigate , useLocation  } from "react-router-dom"  ;  
import "../Style/Login.css"  ;   
import Button from "../Components/Button";
import { useState  } from "react";
import axios from "axios"  ;   
import VisibilityIcon from '@mui/icons-material/Visibility';
import VisibilityOffIcon from '@mui/icons-material/VisibilityOff';





import login from "../Images/login.jpg"  ; 

function Login() {    

  
  const  navigate = useNavigate() ;  
  const[ email , setEmail] = useState( "") ; 
  const[ password , setPassword ] = useState( "") ; 
  const[ passwordVisibilty  , setPasswordVisibilty  ] = useState( false) ;  

  const onChangeEmail  = ( event ) => {
     

    //console.log(event.target.value); 
    setEmail( event.target.value);

    }   
  

   

    
  const onChangePassword  = ( event ) => {
     

    //console.log(event.target.value); 
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
          


      //console.log(   res.data ) ; 

        if(   res.data.message ===  "Login successful"    ){
            



          alert( "Login Successful!")  ;   
          localStorage.setItem('items', JSON.stringify( res.data.data.name));   
 
         navigate(  "/home"  ,    { state: {    typeId :  res.data.data.type_id  ,  userInfo : {  name : res.data.data.name   ,   type : res.data.data.type_id   }   }} ,  { replace : false}  )  ;

        } 
        else {

          alert( res.data.message)  ;
        }
       


     } ).catch(( err) => { 
         //console.log( "error") ;

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
    <div  className="OuterBox"  style={{  backgroundImage : `url(${login })`,  backgroundSize : "contain"   , backgroundRepeat : "no-repeat"   , backgroundPosition : "center"}}   > 


    <div   className="InnerBox-1"> 

   

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

      <input  className="input_box_text"    placeholder="Enter your email or user id"  onChange={ onChangeEmail } />  
      
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
      <input    id="password_input"   type="password" className="input_box_text"   placeholder="Enter your password"    onChange={ onChangePassword }/>  
    

      </div>
      

      <div className="password-text">  


       <input style = {{ height : "100%"   , width : "48%"  , display : "flex"  , color : "#5A6198"  , border : "0px solid red"  , paddingLeft : "2%"}}  type="text"  value="Forgot password (System Admin)?"  disabled />  
      <input  style = {{ height : "100%"  , color : "#F06B6D" , backgroundColor : "#F7E5E9"  , border : "0px solid red"  , textAlignLast : "center" }}  type="button" value= "Click here"   onClick={ () => {    navigate(  "/forgotpassword"  ,   { replace : false}  )  ; }}/> 
      
      </div>

      <button className="button"   style={{ border : "0px black" , color : "#ffffff"}}  onClick={ () => { goToHome() }}>
      Log In
     </button>  

     <div className="description2_login">

      <p  style={{  color : "#c23815" }}>Others contact System Admin  for login related problem</p>
     </div> 

    </div>
  
       
    </div>
  );
}

export default Login ;