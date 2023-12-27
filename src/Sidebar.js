
import {Link  , useNavigate } from "react-router-dom"  ;  
import "./Style/Sidebar.css"  ;    
import  logo1 from "./Images/logo1.png" ;  
import LogoutIcon from '@mui/icons-material/Logout';  
import { useState  , useEffect  } from "react"; 



// import this component to  render  the sidebar in every page 
function SideBar(   props ) {
 
    
    

   const  navigate = useNavigate() ; 
   /* console.log( props.info) ;   */
  
   const [  userInfo   , setUserInfo ]   = useState({ }  ) ;   

     
  

     
   useEffect(() => { 

      if(   props.info.type === "client"){
          
         
        let  newUser = {
           name : props.info.name , 
           type : "Client"
        }
        setUserInfo( newUser ) ;
      }

      else  if(   props.info.type === "school"){
          
         
        let  newUser = {
           name : props.info.name , 
           type : "School"
        }
        setUserInfo( newUser ) ;
      } 
    
      else  if(   props.info.type === "facilitator"){
          
         
        let  newUser = {
           name : props.info.name , 
           type : "Facilitator"
        }
        setUserInfo( newUser ) ;
      } 


        

 } , [ props.info.type])  ; 




   




   const Logout  = ()  => {
       


      localStorage.removeItem('items')  ; 
      navigate(  "/login"  ,   { replace : false}  )  ;

   }










   return(
    <div  className= "Sidebar"  style={{ borderTopRightRadius: 25  , borderBottomRightRadius : 25}}>
      <div  className="Sidebar-description"   style={{ borderRadius: 25}}>    
           
         <div   className="Sidebar-Program-Name-div" style={ {  borderRadius : 25}} >    
           
                    <div className="Sidebar-Program-Name-inner-div"  style={ { justifyContent : "center"}}>
             
                         <img src={ logo1}  alt= { "ccv"}  height={"100%"}  />   
                     </div>   
         </div>


         <div   className="Sidebar-profile-Name-div" > 
    
                     <div style= {{ height : "60%"  , width:"40%"  , backgroundColor : "white"  ,  borderRadius : "50%" }}>
                         <p> RM</p>
                       </div>
         </div>  
          

         < div  className="Sidebar-Admin-info-div" > 
                <div  style={{  height: "55%"  }}>
                 <p  style={{ color : "white"}}> {  userInfo.name } </p>
                 </div> 

                 <div  style={{  height: "35%"  }}>
                <p style={{ color : "white"}}>  {  userInfo.type  } </p>
                  </div>
         </div>  

          

         <div   className="Sidebar-Program-Home-Button-div" >  

         <input style={{ backgroundColor : "#B7B7D0" ,  width : "52.70%" , height : "50.88%"  , borderRadius : 25   , border : "0px"}}  type= "button"   value = "Home"   
          onClick={ () => {     navigate(  "/home"  ,    { state: {    typeId :  props.info.type  ,  userInfo : {  name : props.info.name   ,   type : props.info.type   }   , data : props.data  }} ,  { replace : false}  )  ; }}
         /> 

                 
            </div>    



      </div>  


         <div className="Sidebar-logout-box">   

   
                      <button className="Sidebar-logout-button"  onClick={ () => {  Logout()  }  }> 
                         
                      <div style={{height : "100%" , width :"40%"  , display : "flex"  , alignItems : "center" , justifyContent : "center"}}>
                  
                      <LogoutIcon  sx={{ color: "#F06B6D"  , fontSize : 22    }}/>
                    
                      </div> 

                      <div style={{height : "100%" , width :"60%"   ,  display : "flex"  , alignItems : "center" }}>

                         <p style={{ color : "#F06B6D"  , fontSize : 14  , textAlign : "end"  }}>Log out</p>
                      </div>
                        
      
                      </button>  
         </div>
    </div>

   ) ; 
}

export default SideBar ;  





