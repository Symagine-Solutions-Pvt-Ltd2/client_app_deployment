import "../Style/Home.css" ; 
import Sidebar from "../Sidebar"  ;   
import {Link, useNavigate , useLocation } from "react-router-dom"  ;   
import { useState  } from "react";



function Home () {
  
 
    const location = useLocation();  // to share data between one page to another while navigating 
    const  navigate = useNavigate() ;   

    const [  typeId  , setTypeId ]   = useState( location.state.typeId   ) ; 
    const [   clientId  , setClientId  ]   = useState(  location.state.data._id) ; 
    const [  programId , setProgramId ]   = useState( location.state.data.program_id ) ; 
 

  
    console.log(   location.state.data ) ; 
  //  console.log(   location.state.clientData ) ; 
    console.log(location.state.typeId ) ;
   

  

 const goToNext = () => {  

   

   console.log(  typeId) ;  
  
   console.log( programId) ;  

   
    navigate(  "/home/dashboard"   ,     { state: {    typeId : typeId  ,   clientId : clientId   , programId : programId   ,   data :   location.state.data   }}    ,     { replace : false}  )  ;
 
 
  }
  
   
  
  switch( typeId )  { 


   
         case "client" :  


  
          return( 

            <div className="home">  
            <div className="home-sidebar" >
                   <Sidebar /> 
            </div> 
            <div className="home-body">

            <div className="home-body1">
               
               <div className="home-body-inner-description1" > 

              <p>client</p> 

              <p>Ready to start your day with Future Founders?</p>
               </div>
            </div>
            <div className="home-body2">   


             
                <div  onClick={() => { goToNext() } }     className="home-body2-button1" style={{ backgroundColor : "#353B55"}} >
                   <p style={{ color : "white"}}>Dashboard</p>
                </div>  

                
                <div  onClick={() => { navigate(  "/home/viewcourse"  ,      { state: {    courseId :  location.state.data._id  }}  ,  { replace : false}  ) } }      className="home-body2-button1"  style={{ backgroundColor : "#B7B7D0"}} > 
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
                   <Sidebar /> 
            </div> 
            <div className="home-body">

            <div className="home-body1">
               
               <div className="home-body-inner-description1" > 

              <p> school </p> 

              <p>Ready to start your day with Future Founders?</p>
               </div>
            </div>
            <div className="home-body2">  
             
                <div  onClick={() => {    navigate(  "/home/dashboard"   ,     { state: {    typeId : typeId  ,  programId : programId   ,   data :   location.state.data   }}    ,     { replace : false}  )  ; } }    
                 className="home-body2-button1" style={{ backgroundColor : "#353B55"}} >
                   <p style={{ color : "white"}}>Dashboard</p>
                </div> 
                
                <div  onClick={() => { navigate(  "/home/viewcourse"  ,     { state: {    courseId : location.state.data._id  }} ,    { replace : false}  ) } }      className="home-body2-button1"  style={{ backgroundColor : "#B7B7D0"}} > 
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
                   <Sidebar /> 
            </div> 
            <div className="home-body">

            <div className="home-body1">
               
               <div className="home-body-inner-description1" > 

              <p>facilitator </p> 

              <p>Ready to start your day with Future Founders?</p>
               </div>
            </div>
            <div className="home-body2">  
              



                <div  onClick={() => {   navigate(  "/home/dashboard"   ,     { state: {    typeId : typeId  ,   userId : location.state.data._id  , programId : programId  }}    ,     { replace : false}  )   } }     className="home-body2-button1" style={{ backgroundColor : "#353B55"}} >
                   <p style={{ color : "white"}}>Dashboard</p>
                </div> 
                
                <div  onClick={() => { navigate(  "/home/viewcourse"  ,     { state: {    courseId : location.state.data._id  }}  ,    { replace : false}  ) } }      className="home-body2-button1"  style={{ backgroundColor : "#B7B7D0"}} > 
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