import "../Style/Home.css" ; 
import Sidebar from "../Sidebar"  ;   
import {Link, useNavigate , useLocation } from "react-router-dom"  ;   
import { useState  } from "react"; 
import home_logo from "../Images/home_logo.png" ; 




function Home () {
  
 
    const location = useLocation();  // to share data between one page to another while navigating 
    const  navigate = useNavigate() ;   

    const [  typeId  , setTypeId ]   = useState( location.state.typeId   ) ; 
    const [   clientId  , setClientId  ]   = useState(  location.state.data._id) ; 
    const [  programId , setProgramId ]   = useState( location.state.data.program_id ) ; 
 

  
    console.log(   location.state.data ) ; 
     console.log(   location.state. userInfo  ) ; 
    console.log(location.state.typeId ) ;
   

  

 const goToNext = () => {  

   

   console.log(  typeId) ;  
  
   console.log( programId) ;  

   
    navigate(  "/home/dashboard"   ,     { state: {    typeId : typeId  ,   clientId :  location.state.data._id  , programId : programId   ,   data :   location.state.data  ,   userInfo :  location.state.userInfo    }}    ,     { replace : false}  )  ;
 
 
  }
  
   
  
  switch( typeId )  { 


   
         case "client" :  


  
          return( 

            <div className="home">  
            <div className="home-sidebar" >
                   <Sidebar   info = {  location.state.userInfo}   data = {  location.state.data} /> 
            </div> 
            <div className="home-body">

            <div className="home-body1">
                

                
               <div className="home-body-inner-description1" > 


               <p style={ { fontSize : 24 , fontWeight : 600  }}> {`Hi, ${location.state.userInfo.name}` } </p> 

                <p  style={ { fontSize : 14 , fontWeight : 400  }}>Ready to start your day with Future Founders?</p> 
              </div>  
             <div   className="home-body-illustration">
    
              <img src={ home_logo }  alt= { "ccv"}  height={"100%"}  />   
                 </div>

            <div style= {{ backgroundColor : "#D9D9D9"  , width : "5%" ,  height : "43.2%"   , borderTopRightRadius : 25  , borderBottomRightRadius : 25}}>
 

           </div>
            </div>
            <div className="home-body2">   


             
                <div  onClick={() => { goToNext() } }     className="home-body2-button1" style={{ backgroundColor : "#353B55"}} >
                   <p style={{ color : "white"}}>Dashboard</p>
                </div>  

                
                <div  onClick={() => { navigate(  "/home/viewcourse"  ,      { state: {    courseId :  location.state.data._id  ,   userInfo :  location.state.userInfo  ,  data :   location.state.data   }}  ,  { replace : false}  ) } }      className="home-body2-button1"  style={{ backgroundColor : "#B7B7D0"}} > 
                <p style={{ color : "white"}}>View Course</p>
                </div>
             
             </div>
              
              <div className="home-body3">
              



            </div>


            </div>
          
        </div> 

  

          )  ;   



         case "school" :  


  
          return( 

            <div className="home">  
            <div className="home-sidebar" >
                   <Sidebar     info = {  location.state.userInfo }   data = {  location.state.data}/> 
            </div> 
            <div className="home-body">

            <div className="home-body1">
               
            <div className="home-body-inner-description1" > 

            <p style={ { fontSize : 24 , fontWeight : 600  }}> {`Hi, ${location.state.userInfo.name}` } </p> 

<p  style={ { fontSize : 14 , fontWeight : 400  }}>Ready to start your day with Future Founders?</p> 
                </div>  
               <div   className="home-body-illustration">
    
               <img src={ home_logo }  alt= { "ccv"}  height={"100%"}  />   
                 </div>

                   <div style= {{ backgroundColor : "#D9D9D9"  , width : "5%" ,  height : "43.2%"   , borderTopRightRadius : 25  , borderBottomRightRadius : 25}}>
 

            </div>
            </div>
            <div className="home-body2">  
             
                <div  onClick={() => {    navigate(  "/home/dashboard"   ,     { state: {    typeId : typeId  ,  programId : programId   ,   data :   location.state.data    ,     userInfo :  location.state.userInfo   }}    ,     { replace : false}  )  ; } }    
                 className="home-body2-button1" style={{ backgroundColor : "#353B55"}} >
                   <p style={{ color : "white"}}>Dashboard</p>
                </div> 
                
                <div  onClick={() => { navigate(  "/home/viewcourse"  ,     { state: {    courseId : location.state.data._id   ,   userInfo :  location.state.userInfo   , data :   location.state.data }} ,    { replace : false}  ) } }      className="home-body2-button1"  style={{ backgroundColor : "#B7B7D0"}} > 
                <p style={{ color : "white"}}>View Course</p>
                </div>
             
             </div>
              
              <div className="home-body3">
              



            </div>


            </div>
          
        </div> 

  

          )  ;   





          case "facilitator" :  


  
          return( 

            <div className="home">  
            <div className="home-sidebar" >
                   <Sidebar     info = {  location.state.userInfo}  data = {  location.state.data} /> 
            </div> 
            <div className="home-body">

            <div className="home-body1">
               
               <div className="home-body-inner-description1" > 

           
               <p style={ { fontSize : 24 , fontWeight : 600  }}> {`Hi, ${location.state.userInfo.name}` } </p> 

                <p  style={ { fontSize : 14 , fontWeight : 400  }}>Ready to start your day with Future Founders?</p> 
               </div>  
               <div   className="home-body-illustration">
                  
               <img src={ home_logo }  alt= { "ccv"}  height={"100%"}  />   
               </div>
             
               <div style= {{ backgroundColor : "#D9D9D9"  , width : "5%" ,  height : "43.2%"   , borderTopRightRadius : 25  , borderBottomRightRadius : 25}}>
               
          
               </div>


            </div>
            <div className="home-body2">  
              



                <div  onClick={() => {   navigate(  "/home/dashboard"   ,     { state: {    typeId : typeId  ,   userId : location.state.data._id  , programId : programId   ,    userInfo :  location.state.userInfo       ,  data : location.state.data}}    ,     { replace : false}  )   } }     className="home-body2-button1" style={{ backgroundColor : "#353B55"}} >
                   <p style={{ color : "white"}}>Dashboard</p>
                </div> 
                
                <div  onClick={() => { navigate(  "/home/viewcourse"  ,     { state: {    courseId : location.state.data._id   ,    userInfo :  location.state.userInfo ,   data : location.state.data  }}  ,    { replace : false}  ) } }      className="home-body2-button1"  style={{ backgroundColor : "#B7B7D0"}} > 
                <p style={{ color : "white"}}>View Course</p>
                </div>  
             
             </div>
              
              <div className="home-body3">
              



            </div>


            </div>
          
        </div> 

  

          )  ;   





     
          }
}


export  default  Home ; 