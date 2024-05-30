
import React from 'react'; 
import "../Components/ConfirmationBox.css" ; 
import {  useNavigate } from "react-router-dom" ; 
import { useState  , useEffect} from "react";
import axios from "axios"  ;  
import CloseIcon from '@mui/icons-material/Close'; 
import { Button } from '@mui/base';



const ConfirmationBox = (  props ) => {

  const  navigate = useNavigate() ; 
  

  const Logout  = ()  => {
       
     localStorage.removeItem('items')  ;  
      navigate(  "/login"  ,   { replace : false}  )  ;
   
   }







  return( props.trigger) ?( 

          <div className="logout_popup" >
        <div   className="logout_popup_inner" >
         <div   className="logout_popup_inner_div1">
           <p style={ {  fontWeight : "400" }}>Do you want to logout ?</p> 
         </div> 
         <div className="logout_popup_inner_div2" >
             <button className="logout_popup_button" onClick={ () => {  Logout()  }  }>
                Yes
             </button>
             <button className="logout_popup_button"  onClick={ () => {   props.setTrigger ( false ) }  }>
                No
             </button>
         </div>

        </div>
       
          </div> ): <div> </div> ; 


}

export default ConfirmationBox  ;