

import React from 'react'; 
import "../Components/Popup.css" ; 
import { useState  , useEffect} from "react";



const Popup = (  props ) => {
  
  








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
  


                    <input className="popup-inner-body2-button"    type="button" value = "Active"   /> 
                    <input  className="popup-inner-body2-button"    type="button" value = "Delete"   />  
                    <input  className="popup-inner-body2-button"     type="button" value = "Inactive"   />  
 


                    </div> 


              </div>
      
            </div> ): <div> </div> ; 


}

export default Popup  ;