

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
     
       url : "http://3.123.37.47:5000/admin/school_sc"  ,   
 
       method : "POST"  ,  
 
       data : {
         
         
            "_id" : userDetails._id , 
            "client_id" :  userDetails.client_id ,
                  "status" : value   
 
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
  
    url : "http://3.123.37.47:5000/admin/facilitator_sc"  ,   

    method : "POST"  ,  

    data : {
      
      
         "_id" : userDetails._id , 
         "school_id" :  userDetails.school_id ,
               "status" : value   

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
 
   url : "http://3.123.37.47:5000/admin/student_sc"  ,   

   method : "POST"  ,  

   data : {
     
     
        "_id" : userDetails._id , 
        "school_id" :  userDetails.school_id ,
         "status" : value   

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
              <div className="popup-inner" >  

                    <div className="popup-inner-body1"> 

                     <button className="close-btn" onClick={ () => {  props.setTrigger( false ) }  }>
                     <CloseIcon  sx={{ color: "#FFFFFF"  , fontSize : 35   }}/>
                      </button>   
                    
                    </div> 

                     <div  className="popup-inner-body2"   >
                      

                      <p> Do you want to change the status of </p>
                     {  props.children }  

            
                     </div>
                
                     
                     <div className="popup-inner-body3" > 
  


                    <input style = {{ borderRadius : 15   , backgroundColor : "#B7B7D1"}}  className="popup-inner-body2-button"    type="button" value = "Active" 
                        onClick={()  => {  statusChange( "active") }} /> 

                    <input  style = {{ borderRadius : 15   , backgroundColor : "#B7B7D1" }}  className="popup-inner-body2-button"     type="button" value = "Inactive"  
                       onClick={()  => {  statusChange( "inactive") }} />  
 
                      <input  style = {{ borderRadius : 15   , backgroundColor : "#F06B6E" ,  color : "#FFF" }}   className="popup-inner-body2-button"    type="button" value = "Delete"  
                          onClick={()  => {  statusChange( "delete") }}  />  

                    </div> 


              </div>
      
            </div> ): <div> </div> ; 


}

export default Popup  ;