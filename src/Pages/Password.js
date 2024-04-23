
import {Link , useNavigate  , useLocation  } from "react-router-dom" ; 
import { useState  , useEffect } from "react";   
import axios from "axios"  ;    
import  "../Style/Login.css"  ;  
import login from "../Images/login.jpg"  ; 








function Password() {      

    const location = useLocation(); 
    const  navigate = useNavigate() ;  

   //// // console.log( location.state.userId )  ;

  
  // // console.log(  location.state.typeId   )  ; 
  // // console.log(  location.state.data  )  ; 
  // // console.log(  location.state.userInfo   )  ; 
  // // console.log(  location.state.screentype   )  ; 


    const [ password1 , setPassword1 ] = useState(""); 
    const [ password2 , setPassword2 ] = useState(""); 
     



    const resetPassword = (  ) => {       
          
       // // console.log(  password1) ;  
       // // console.log(  password2) ;  
       // // console.log(  location.state.userId  ) ;  
       // // console.log(  location.state.token  ) ;  
         

        

       if( password1 === password2  &&     location.state.screentype ===  "resetpassword"   &&  location.state.typeId !== "student"   ){
            

            axios({ 
    
                url : "https://learn-up.app/admin/reset_password"  ,  
                method : "POST"  ,   
                data : {
                  
                    "_id" : location.state.data._id  , 
                    "new_password" :  password2
           
                }
           
               }).then( ( res) => {   
           
                 
               // // console.log( res.data) ;  
                 
                 if(  res.data.status === "success"){
                  
                   alert(  res.data.message) ;  
              //   navigate(  "/home/dashboard/client/editclient"   , {   state: {  typeId : "client"   ,   data :   location.state.data   ,   programName : location.state.programName    , type : location.state.type  ,  userInfo :  location.state.userInfo   } }  , { replace : false}  )  }    
                 } 
              else {
       
               alert(  res.data.message) ; 
              } 
       
       
           
               } ).catch(( err) => { 
                  // // console.log( "error") ;
           
                }  ) ;   


          

        } 
        else if( password1 === password2  &&     location.state.screentype ===  "resetpassword"   &&    location.state.typeId === "student"    ){
            
          
             // console.log("hmghjghj")  ; 

               axios({ 
    
                url : "https://learn-up.app/admin/s_reset_password"  ,  
                method : "POST"  ,   
                data : {
                  
                    "_id" : location.state.data._id  , 
                    "new_password" :  password2
           
                }
           
               }).then( ( res) => {   
           
                 
               // // console.log( res.data) ;  
                 
                 if(  res.data.status === "success"){
                  
                   alert(  res.data.message) ;  
              //   navigate(  "/home/dashboard/client/editclient"   , {   state: {  typeId : "client"   ,   data :   location.state.data   ,   programName : location.state.programName    , type : location.state.type  ,  userInfo :  location.state.userInfo   } }  , { replace : false}  )  }    
                 } 
              else {
       
               alert(  res.data.message) ; 
              } 
       
       
           
               } ).catch(( err) => { 
                  // // console.log( "error") ;
           
                }  ) ;   


          

        }
        else{
             
            alert( "password not matched!");
        }
      
    
    }   
    

    return( 

   <div  className="OuterBox"  style={{  backgroundImage : `url(${login })`,  backgroundSize : "contain"   , backgroundRepeat : "no-repeat"   , backgroundPosition : "center"}}  >   

      
<div   className="InnerBox-1"   >  

</div>
  

<div className="InnerBox-2"  style={{  display : "flex"  , alignItems :"center"  , justifyContent : "center"}}>   


    <div  style={{ width : "100%"  ,height : "35%"  , display : "flex" ,  flexDirection : "column"  , justifyContent : "space-between"}}> 
   

    <input type="text"   style={{ width : "50%"  ,height : "20%"  , borderRadius : 25  ,   border : "1px solid #5E81F4"  , padding : "2%" }}     name="password1"  placeholder="Enter new password"    value= { password1}   onChange={( e) => { setPassword1( e.target.value )}}   /> 
     
    <input type="text"   style={{ width : "50%"  ,height : "20%"  , borderRadius : 25  ,   border : "1px solid #5E81F4"  , padding : "2%" }}     name="password2"  placeholder="Re-enter new password"   value= { password2}  onChange={ ( e) => { setPassword2( e.target.value )}} />    

   

     <div   style={{ width : "50%"  ,height : "20%"  , display : "flex"  , justifyContent : "center"}} >
    <input     style={{ width : "50%"  ,height : "100%" , borderRadius : 25   , backgroundColor : "#5E81F4"  , color : "#FFF"  ,  border : "0px solid red" }}      type="button" value = "Save Password"   onClick={ () => {  resetPassword() }}  /> 
    </div>
   {/*  <div>  
        <p>For any login related problem contact system admin!</p> 
    </div>  */}
    </div>
</div> 


   </div>


    )
} 



export default  Password ; 