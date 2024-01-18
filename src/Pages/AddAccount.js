import { useState } from "react"; 
import Sidebar  from "../Sidebar" ;   
import {Link , useNavigate  , useLocation} from "react-router-dom" ; 
import "../Style/AddAccount.css" ;
import axios from "axios"  ;  



 // hiii

function AddAccount() {     
    

    const location = useLocation();  
    const  navigate = useNavigate() ; 
 
 

    const [ assignedProgram ,   setAssignedProgram  ]   = useState( location.state.programId) ; 
    const [  typeId  , setTypeId ]   = useState( location.state.typeId   ) ;  


   
  
    console.log( "addaccount" ) ; 
  console.log( location.state.schoolId ) ; 
  console.log( location.state.typeId  ) ; 
  console.log( location.state.clientId ) ; 
  console.log( location.state.programId ) ;  
  // console.log( location.state.programName) ;    
  















        



      // to add new facilitator in the database 
    const addFacilitator  = (  event  ) => { 
       


      console.log( event.target.name.value) ;   
      console.log( event.target.email.value) ;    
      console.log( event.target.password.value) ;    
      console.log( event.target.reset_password.value) ;    
      

      if(  event.target.password.value !== event.target.reset_password.value  ) {
         
          alert( "Password  mismatched!") ;  
         
      } else {

        axios({ 

                url : "http://localhost:8000/facilitator/f_registration"  ,   

                method : "POST"  , 
                data : {
                  
                        "facilitator_name"  :  event.target.name.value  , 
                        "email_id" :  event.target.email.value  , 
                        "password"  : event.target.password.value  , 
                        "type_id" : "facilitator" ,  
                        "program_id" : location.state.programId ,   
                        "school_id" : location.state.schoolId 
                }
          
               }).then( ( res) => {   
          
                  if(   res.data.message ===  "Registered Successfully."    ){
                    
   
              
                    alert( "Registered Successfully.")  ;  
                    console.log(  res.data.data) ;  

         navigate(  "/home/dashboard/facilitator"   ,    { state: {    typeId :    "client"    ,   schoolId : location.state.schoolId  , programId : location.state.programId ,   userInfo :  location.state.userInfo  ,  data : location.state.data       }}    , { replace : false}  )   ;
                  } 
                  else {
          
                    alert(   res.data.message  )  ;
                  }
                 
               } ).catch(( err) => { 
                   console.log( "error") ;
          
                }  ) ;  
      
           

      }

      event.preventDefault();
    }
  
   




  
 



    // to add new school in the database 
    const addSchool = ( event)  => { 
    

      
      console.log( event.target.name.value) ;   
      console.log( event.target.email.value) ;    
      console.log( event.target.password.value) ;    
      console.log( event.target.repeat_password.value) ;    
      console.log( event.target.contact_person.value) ;    
      

      if(  event.target.password.value !== event.target.repeat_password.value  ) {
         
        alert( "Please check password again!") ;   

       
       } else {

        axios({ 

              url : "http://localhost:8000/admin/s_registration"  ,   

              method : "POST"  ,  

              data : {
                
                "school_name" : event.target.name.value ,
                "email_id" : event.target.email.value , 
                "password" : event.target.password.value ,
                 "type_id" : "school"  ,
                 "contact_person" :   event.target.contact_person.value  ,
                 "program_id" : location.state.programId   , 
                 "client_id" :  location.state.clientId ,    
               
              }
        
             }).then( ( res) => {   
        
                if(   res.data.message ===  "Registered Successfully."    ){
                 
                  alert( "Registered Successfully.")  ;  
                   
                  console.log( res.data.data) ; 

                  navigate(  "/home/dashboard"   ,   { state: {    typeId :    "client"   ,   programId : location.state.programId    , clientId :location.state.clientId  ,    userInfo :  location.state.userInfo    , data : location.state.data     }}     ,      { replace : false}  )   ;
    
                } 
                else {
        
                  alert(   res.data.message  )  ;
                }
               
             } ).catch(( err) => { 
                 console.log( "error") ;
        
              }  ) ;  
    
         

        }

     

        event.preventDefault() ; 
      } 

       





     
    
    
       
  

        // to add new student in the database 
     const  addStudent = ( event) => {

             
      console.log( event.target.name.value) ;   
      console.log( event.target.email.value) ;    
      console.log( event.target.password.value) ;    
      console.log( event.target.repeat_password.value) ;     
    

      event.target.sbtn.disabled =  true ; 

      setTimeout(() => {
        console.log("After two second") ;
        console.log( event.target.sbtn.disabled) ;
        event.target.sbtn.disabled =  false;
      }, 3000) 





      


     if(  event.target.password.value !== event.target.repeat_password.value  ) {
         
        alert( "Please check password again!") ;   

       
       } else {

        axios({ 

              url : "http://localhost:8000/admin/student_registration"  ,   

              method : "POST"  ,  

              data : {
                
                "student_name" :  event.target.name.value  ,
                "email_id" : event.target.email.value , 
                "password" :event.target.password.value  , 
                "type_id" :  "student"   , 
                "program_id"   : location.state.programId     ,
                 "school_id"   : location.state.schoolId    ,
                 
              }
        
             }).then( ( res) => {   
        
                if(   res.data.message ===  "Registered Successfully."    ){
                 
                  alert( "Registered Successfully.")  ; 
                 

                  console.log(  res.data.data) ;  


            navigate(  "/home/dashboard/student"      ,   { state: {     schoolId : location.state.schoolId  ,        programId : location.state.programId    ,    userInfo :  location.state.userInfo  , data : location.state.data     }}        ,  { replace : false}  )  
    
                } 
                else {
        
                  alert(   res.data.message  )  ;
                }
               
             } ).catch(( err) => { 
                 console.log( "error") ;
        
              }  ) ;  
    
         

        }

     
      event.preventDefault() ; 
         
     }
   
 

 






    switch( typeId )  { 
       



      case "facilitator" :   

      return( 
  
  
          <div className="form_outer_div">
     
          <div className="form_outer_div_sidebar" >
            <Sidebar   info = {  location.state.userInfo}   data = { location.state.data }    /> 
          </div>   
  
  
          
           <div className="form_outer_div_body">  
        


           
           <form className="addaccount_form"   style= {{  height : "65.99%" }}   onSubmit={  addFacilitator }    >    
      
               <div className="addaccount_form_row"  style= {{  height : "20%" }}> 
 


                           <div className="addaccount_admin_Form-Description" >   
                          <p className="header_text">Name of facilitator</p> 
                          </div>       


                          <div className="addaccount_admin_Form-Input" >   

                          <input type="text"
                                  name="name"
                                  className="addaccount_admin_input-box" 
                                  style={ { borderRadius : "16px"}} 
                                
                                  /> 
                          </div>  
                </div> 
       
                
                <div className="addaccount_form_row"  style= {{  height : "20%" }}>
                           <div className="addaccount_admin_Form-Description" >   
                          <p  className="header_text">Email id</p> 
                          </div>        
                          <div className="addaccount_admin_Form-Input" >  

                          <input type="text"
                                  name="email"
                                  className="addaccount_admin_input-box"  
                                  style={ { borderRadius : "16px"}}
                                  /> 
                          </div>  
                </div> 
                 

                <div className="addaccount_form_row"  style= {{  height : "20%" }}>
                           <div className="addaccount_admin_Form-Description" >   
                          <p  className="header_text">Password</p> 
                          </div>        
                          <div className="addaccount_admin_Form-Input" >         
                          <input type="text"
                                  name="password"
                                  className="addaccount_admin_input-box" 
                                  style={ { borderRadius : "16px"}}
                                  /> 
                          </div>  
                </div> 
            
               

                <div className="addaccount_form_row"  style= {{  height : "20%"  }}>
                           <div className="addaccount_admin_Form-Description" >   
                          <p  className="header_text">Repeat Password</p> 
                          </div>        
                          <div className="addaccount_admin_Form-Input" >         
                          <input type="text"
                                  name="reset_password"
                               
                                  className="addaccount_admin_input-box" 
                                  style={ { borderRadius : "16px"}}
                                  /> 
                          </div>  
                </div> 
       

                <div  className="addaccount_form_row_btn_div"  style= {{  height : "20%" }}> 
                        <input className="addaccount_form_row_btn"   style= {{  height : "60%" }}  type="submit" value="Submit" /> 
                </div>
                        
          </form>
  
                  <div > 

                  </div>
      
           </div>
           


           
            </div>
      )   ;  
 


       
      case "school" :   

      return( 
  
  
          <div className="form_outer_div">
     
          <div className="form_outer_div_sidebar" >
            <Sidebar   info = {  location.state.userInfo}    data = {  location.state.data}  /> 
          </div>   
  
  
          
           <div className="form_outer_div_body">  
        


           
           <form className="addaccount_form" onSubmit={ addSchool }    >    
      
               <div className="addaccount_form_row">
                           <div className="addaccount_admin_Form-Description" >   
                          <p  className="header_text">Name of school</p> 
                          </div>        
                          <div className="addaccount_admin_Form-Input" >         
                          <input type="text"
                                  name="name"
                                  className="addaccount_admin_input-box"
                                  /> 
                          </div>  
                </div> 
       
                
                <div className="addaccount_form_row">
                           <div className="addaccount_admin_Form-Description" >   
                          <p className="header_text">Email id</p> 
                          </div>        
                          <div className="addaccount_admin_Form-Input" >         
                          <input type="text"
                                  name="email"
                                  className="addaccount_admin_input-box"
                                  /> 
                          </div>  
                </div> 
                 

                <div className="addaccount_form_row">
                           <div className="addaccount_admin_Form-Description" >   
                          <p className="header_text">Password</p> 
                          </div>        
                          <div className="addaccount_admin_Form-Input" >         
                          <input type="text"
                                  name="password"
                                  className="addaccount_admin_input-box"
                                  /> 
                          </div>  
                </div> 
             
                <div className="addaccount_form_row">
                           <div className="addaccount_admin_Form-Description" >   
                          <p className="header_text">Repeat Password</p> 
                          </div>        
                          <div className="addaccount_admin_Form-Input" >         
                          <input type="text"
                                  name="repeat_password"
                                  className="addaccount_admin_input-box"
                                  /> 
                          </div>  
                </div> 
                
                <div className="addaccount_form_row">
                           <div className="addaccount_admin_Form-Description" >   
                          <p className="header_text">Name of contact person</p> 
                          </div>        
                          <div className="addaccount_admin_Form-Input" >         
                          <input type="text"
                                  name="contact_person"
                                  className="addaccount_admin_input-box"
                                  /> 
                          </div>  
                </div> 
                

                <div className="addaccount_form_row">
                <div className="addaccount_admin_Form-Description" >   
                          <p className="header_text">Program Assigned</p> 
                </div>     

                <div className="addaccount_admin_Form-Input" >         
                         
                 <p>{ assignedProgram }</p>
                 </div>  
    </div> 
        
  
           
           
  
        <div  className="addaccount_form_row_btn_div"> 
  <input className="addaccount_form_row_btn" type="submit" value="Submit" /> 
        </div>
                        
    </form>
  
                  <div > 

                  </div>
      
           </div>
          
            </div>
      )   ;  
       
       
        
     

      







      case "student" :   

      return( 
         
        <div className="form_outer_div">
     
        <div className="form_outer_div_sidebar" >
          <Sidebar    info = {  location.state.userInfo}   data = { location.state.data }    /> 
        </div>   


        
         <div className="form_outer_div_body">  
      


         
         <form className="addaccount_form"   style= {{  height : "65.99%" }}   onSubmit={  addStudent }    >    
     

             <div className="addaccount_form_row"  style= {{  height : "20%" }}>
                         <div className="addaccount_admin_Form-Description" >   
                        <p className="header_text">Name of student</p> 
                        </div>        
                        <div className="addaccount_admin_Form-Input" >         
                        <input type="text"
                                name="name"
                                className="addaccount_admin_input-box" 
                                style={ { borderRadius : "16px"}}
                                /> 
                        </div>  
              </div> 
     
              
              <div className="addaccount_form_row"  style= {{  height : "20%" }}>
                         <div className="addaccount_admin_Form-Description" >   
                        <p className="header_text">Email id</p> 
                        </div>        
                        <div className="addaccount_admin_Form-Input" >         
                        <input type="text"
                                name="email"
                                className="addaccount_admin_input-box"  
                                style={ { borderRadius : "16px"}}
                                /> 
                        </div>  
              </div> 
               

              <div className="addaccount_form_row"  style= {{  height : "20%" }}>
                         <div className="addaccount_admin_Form-Description" >   
                        <p className="header_text" >Password</p> 
                        </div>        
                        <div className="addaccount_admin_Form-Input" >         
                        <input type="text"
                                name="password"  
                                className="addaccount_admin_input-box" 
                                style={ { borderRadius : "16px"}}
                                /> 
                        </div>  
              </div> 
          
             

              <div className="addaccount_form_row"  style= {{  height : "20%"  }}>
                         <div className="addaccount_admin_Form-Description" >   
                        <p className="header_text">Repeat Password</p> 
                        </div>        
                        <div className="addaccount_admin_Form-Input" >         
                        <input type="text"
                                name="repeat_password"
                                className="addaccount_admin_input-box" 
                                style={ { borderRadius : "16px"}}
                                /> 
                        </div>  
              </div> 
     
    
    

         
         

                        <div  className="addaccount_form_row_btn_div"  style= {{  height : "20%" }}> 
                        <input  name= "sbtn"  className="addaccount_form_row_btn"   style= {{  height : "60%" }}  type="submit" value="Submit" /> 
                        </div>
                      
                    </form>

                <div > 

                </div>
    
         </div>
        
          </div>

      ) ;


     



      }
} 


export default AddAccount ; 