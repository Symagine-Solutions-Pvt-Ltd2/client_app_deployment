
import React from 'react'; 
import "../Components/BusinessPlanPopUp.css" ; 
import { useState  , useEffect} from "react";
import axios from "axios"  ;  
import CloseIcon from '@mui/icons-material/Close'; 





const BusinessPlanPopup = (  props ) => {
  
    
  const schoolDetails  =  props.data ; 


     // to add new client in the database 
         const  addTest   = (  event  ) => { 
      
  
        console.log( schoolDetails)    ;   
        console.log( event.target.no_of_student.value) ;   
         console.log( event.target.start_date.value) ; 
          console.log( event.target.end_date.value) ; 
   
           axios({ 
        
                        url : "https://learn-up.app/offline_app/business_plan_submission_date"  ,   
        
                        method : "POST"  , 
                        data : {
                          
                                "s_id" : schoolDetails ,
                               "no_of_students" :  event.target.no_of_student.value  ,
                               "start_date" : event.target.start_date.value,
                                "end_date" : event.target.end_date.value
                        }
                  
                       }).then( ( res) => {
                        
                            console.log( res) ; 
                  
                      
                         
                       } ).catch(( err) => {  


                          console.log( err) ;
                  
                        }  ) ;  
              
                   
      
              event.preventDefault();
  
      }
      
  
  
  




  return( props.trigger) ?( 

          <div className="BusinessPlanPopup" > 

          <div className="businessplanpopup"> 
           

            <div className="businessplanpopup-inner-body1"> 

                   <button className="close-btnn"   style={{ backgroundColor : "#353B55"}}  onClick={ () => {  props.setTrigger( false ) }  }>
                   <CloseIcon  sx={{ color: "#FFFFFF"  , fontSize : 35   }}/>
                   </button>   
                  
             </div> 

             <form  className="businessplanpopup-inner-body2"  onSubmit={ addTest }   >
                    
                   <div className="businessplanpopup-inner-div1" > 
                 
  
                        <label  className='businessplanpopup-inner-div1_label1'  htmlFor="no_of_student">No of student :</label>
                        <input  className='businessplanpopup-inner-div1_input1' type="number" id="student" name="no_of_student" />
                        
                  </div> 

                 <div className="businessplanpopup-inner-div1" > 
                 
  
                         <label  className='businessplanpopup-inner-div1_label1'   htmlFor ="start_date">Start Date :</label>
                          <input className='businessplanpopup-inner-div1_input1' type="date" id="start" name="start_date" />
                        
                  </div> 

                 <div className="businessplanpopup-inner-div1" > 
                 
  
                         <label className='businessplanpopup-inner-div1_label1'  htmlFor="end_date">student Date :</label>
                          <input  className='businessplanpopup-inner-div1_input1' type="date" id="end" name="end_date" />
                        
                  </div> 
                  

                  <div className="businessplanpopup-inner-div1" > 


                   <input   type="submit"></input>

                   </div>
              </form> 

          </div>
           </div> ): <div> </div> ; 

}



export default BusinessPlanPopup  ;