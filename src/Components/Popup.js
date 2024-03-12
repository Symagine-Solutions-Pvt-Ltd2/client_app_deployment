

import React from 'react'; 
import "../Components/Popup.css" ; 
import { useState  , useEffect} from "react";
import axios from "axios"  ;  
import CloseIcon from '@mui/icons-material/Close';


 



const Popup = (  props ) => {
  
  const userDetails  =  props.data ; 

  console.log( userDetails  ) ; 

   
  

  const [ status  , setStatus  ] = useState( "");

 

  const statusChange = ( value )  => { 
       
   



    if(  userDetails.type_id === "school" ){
 
       
     // alert( value) ;          
                 
       axios({ 
     
       url : "https://learn-up.app/admin/school_sc"  ,   
 
       method : "POST"  ,  
 
       data : {
         
         
            "_id" : userDetails._id , 
            "client_id" :  userDetails.client_id ,
            "status" : value    , 
            "program_id" :  userDetails.program_id   
 
       }
 
      }).then( ( res) => {   
 
       console.log( res) ; 
       alert( res.data.message) ;  
      props.setTrigger( false ) ;
        
      } ).catch(( err) => { 
          console.log( "error") ;
 
       }  ) ;   
 
  
 
   } 
    else if(  userDetails.type_id === "facilitator" ){

                    
     axios({ 
  
    url : "https://learn-up.app/admin/facilitator_sc"  ,   

    method : "POST"  ,  

    data : {
      
      
         "_id" : userDetails._id , 
         "school_id" :  userDetails.school_id ,
               "status" : value    , 
               "program_id" :  userDetails.program_id 

    }

   }).then( ( res) => {   

    console.log( res) ; 
    alert( res.data.message) ;  
   props.setTrigger( false ) ;
     
   } ).catch(( err) => { 
       console.log( "error") ;

    }  ) ;  

// alert( value) ; 

}   
else if(   userDetails.type_id === "student"  ) {
    



   axios({ 
 
   url : "https://learn-up.app/admin/student_sc"  ,   

   method : "POST"  ,  

   data : {
     
     
        "_id" : userDetails._id , 
        "school_id" :  userDetails.school_id ,
         "status" : value    , 
         "program_id" :  userDetails.program_id 

   }

  }).then( ( res) => {   

   console.log( res) ; 
   alert( res.data.message) ;  
  props.setTrigger( false ) ;
    
  } ).catch(( err) => { 
      console.log( "error") ;

   }  ) ;   
 
//  alert( value) ; 



}






   
 


   


  
  }
  










    return( props.trigger) ?( 

            <div className="popup" >
              <div className="popup-inner"   style = {{ borderRadius : 20  }} >  

                    <div className="popup-inner-body1"   style={{ backgroundColor : "#5A6199"  ,  borderTopLeftRadius : 20  , borderTopRightRadius : 20}}> 

                     <button className="close-btn"   style={{ backgroundColor : "#5A6199"  }}   onClick={ () => {  props.setTrigger( false ) }  }>
                     <CloseIcon  sx={{ color: "#FFFFFF"  , fontSize : 35   }}/>
                      </button>   
                    
                    </div> 

                     <div  className="popup-inner-body2"     >
                      

                      <p> Do you want to change the status of </p>
                        <p> {  props.children } </p>

            
                     </div>
                
                     
                     <div className="popup-inner-body3"   style={{ backgroundColor : "#5A6199" , borderBottomLeftRadius : 20 , borderBottomRightRadius : 20 }}> 
  


                    <input style = {{ borderRadius : 15   , backgroundColor : "#A4A4BC"}}  className="popup-inner-body2-button"    type="button" value = "Active" 
                        onClick={()  => {  statusChange( "active") }} /> 

                    <input  style = {{ borderRadius : 15   , backgroundColor : "#A4A4BC" }}  className="popup-inner-body2-button"     type="button" value = "Inactive"  
                       onClick={()  => {  statusChange( "inactive") }} />  
 
                      <input  style = {{ borderRadius : 15   , backgroundColor : "#F06B6E" ,  color : "#FFF" }}   className="popup-inner-body2-button"    type="button" value = "Delete"  
                          onClick={()  => {  statusChange( "delete") }}  />  

                    </div> 


              </div>
      
            </div> ): <div> </div> ; 


}

export default Popup  ;