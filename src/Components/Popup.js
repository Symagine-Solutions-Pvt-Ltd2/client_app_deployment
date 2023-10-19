

import React from 'react'; 
import "../Components/Popup.css" ; 
import { useState  , useEffect} from "react";
import axios from "axios"  ;

 



const Popup = (  props ) => {
  
  const userDetails  =  props.data ; 

  console.log( props.data) ; 

   

  const [ status  , setStatus  ] = useState( "");

 

  const statusChange = ( value )  => { 
     
    alert( value) ; 
  }




    return( props.trigger) ?( 

            <div className="popup" >
              <div className="popup-inner" >  

                    <div className="popup-inner-body1"> 

                     <button className="close-btn" onClick={ () => {  props.setTrigger( false ) }  }>close</button>   
                    
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