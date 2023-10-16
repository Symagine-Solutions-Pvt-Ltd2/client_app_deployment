import { useState } from "react"; 
import Sidebar  from "../Sidebar" ;   
import {Link , useNavigate  , useLocation} from "react-router-dom" ; 
import "../Style/AddAccount.css" ;
import axios from "axios"  ;  





function AddAccount() {     
    
    // const [ name , setName ]   = useState( location.state.name  ) ; 
    const location = useLocation(); 

   
   const [  typeId  , setTypeId ]   = useState( location.state.typeId   ) ;  
    const  navigate = useNavigate() ; 
 
    
     // to keep track of the program 
     const [ assignedProgram ,   setAssignedProgram  ]   = useState(  location.state.programName ) ;     
      //console.log(  location.state.programName) ; 

     // to keep track of the client name 
     const [ client ,   setClient   ]   = useState(   location.state.clientName  ) ;    
    //   console.log(  location.state.schoolName ) ; 
     
      // to select the admin type
     const [  admin ,   setAdmin  ]   = useState( "program_admin" ) ;  

 
          // to keep track of the school name 
     const [ school ,   setSchool  ]   = useState(   location.state.schoolName ) ;  



      // to add new facilitator in the database 
    const addFacilitator  = (  event  ) => { 
    

      
      console.log( event.target.name.value) ;   
      console.log( event.target.email.value) ;    
      console.log( event.target.password.value) ;    
      console.log( event.target.reset_password.value) ;    
      

      if(  event.target.password.value !== event.target.reset_password.value  ) {
         
          alert( "Please check password again!") ;  
         
      } else {

        axios({ 

                url : "http://localhost:8000/admin/f_registration"  ,   

                method : "POST"  , 
                data : {
                  
                        "facilitator_name"  :  event.target.name.value  , 
                        "email_id" :  event.target.email.value  , 
                        "password"  : event.target.password.value  , 
                        "type_id" : "facilitator" ,  
                        "school_name" :  school ,  
                         "program_name" : assignedProgram   , 
                }
          
               }).then( ( res) => {   
          
                  if(   res.data.message ===  "Registered Successfully."    ){
                   
                    alert( "Registered Successfully.")  ; 
                    navigate(  "/home/dashboard/facilitator"   ,     { state: {      schoolName : school   ,   programName : assignedProgram     }}   ,   { replace : false}  )   ;
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
                 "program_name" : assignedProgram   , 
                 "client_name" : client ,    
               
              }
        
             }).then( ( res) => {   
        
                if(   res.data.message ===  "Registered Successfully."    ){
                 
                  alert( "Registered Successfully.")  ; 
               
                  navigate(  "/home/dashboard"   ,    { state : { clientName : client , programName : assignedProgram    } }    ,   { replace : false}  )   ;
    
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
      

      if(  event.target.password.value !== event.target.repeat_password.value  ) {
         
        alert( "Please check password again!") ;   

       
       } else {

        axios({ 

              url : "http://localhost:8000/admin/student_registration"  ,   

              method : "POST"  ,  

              data : {
                
                "student_name" : event.target.name.value ,
                "email_id" : event.target.email.value , 
                "password" : event.target.password.value ,
                 "type_id" : "student"  , 
                 "program_name" : assignedProgram   , 
                 "school_name" :  school   ,    
               
              }
        
             }).then( ( res) => {   
        
                if(   res.data.message ===  "Registered Successfully."    ){
                 
                  alert( "Registered Successfully.")  ; 
               
                  navigate(  "/home/dashboard/student"   ,    { state : {  schoolName :  school    , programName : assignedProgram    } }    ,   { replace : false}  )   ;
    
                } 
                else {
        
                  alert(   res.data.message  )  ; 

                }
               
             } ).catch(( err) => { 
                 console.log( "error") ;
        
              }  ) ;  
    
         

        }

     

        event.preventDefault() ; 
         
          
       //    navigate( navigate(  "/home/dashboard/client/student"   ,  { replace : false}  )  ) ;
     }
   
 






    switch( typeId )  { 




      case "system_admin_facilitator" :   

      return( 
  
  
          <div className="form_outer_div">
     
          <div className="form_outer_div_sidebar" >
            <Sidebar /> 
          </div>   
  
  
          
           <div className="form_outer_div_body">  
        


           
           <form className="addaccount_form"   style= {{  height : "65.99%" }}   onSubmit={  addFacilitator }    >    
      
               <div className="addaccount_form_row"  style= {{  height : "20%" }}>
                           <div className="admin_Form-Description" >   
                          <p>Name of facilitator</p> 
                          </div>        
                          <div className="admin_Form-Input" >   

                          <input type="text"
                                  name="name"
                                  className="admin_input-box" 
                                  style={ { borderRadius : "16px"}} 
                                
                                  /> 
                          </div>  
                </div> 
       
                
                <div className="addaccount_form_row"  style= {{  height : "20%" }}>
                           <div className="admin_Form-Description" >   
                          <p>Email id</p> 
                          </div>        
                          <div className="admin_Form-Input" >  

                          <input type="text"
                                  name="email"
                                  className="admin_input-box"  
                                  style={ { borderRadius : "16px"}}
                                  /> 
                          </div>  
                </div> 
                 

                <div className="addaccount_form_row"  style= {{  height : "20%" }}>
                           <div className="admin_Form-Description" >   
                          <p>Password</p> 
                          </div>        
                          <div className="admin_Form-Input" >         
                          <input type="text"
                                  name="password"
                                  className="admin_input-box" 
                                  style={ { borderRadius : "16px"}}
                                  /> 
                          </div>  
                </div> 
            
               

                <div className="addaccount_form_row"  style= {{  height : "20%"  }}>
                           <div className="admin_Form-Description" >   
                          <p>Repeat Password</p> 
                          </div>        
                          <div className="admin_Form-Input" >         
                          <input type="text"
                                  name="reset_password"
                               
                                  className="admin_input-box" 
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
            <Sidebar /> 
          </div>   
  
  
          
           <div className="form_outer_div_body">  
        


           
           <form className="addaccount_form" onSubmit={ addSchool }    >    
      
               <div className="addaccount_form_row">
                           <div className="admin_Form-Description" >   
                          <p>Name of school</p> 
                          </div>        
                          <div className="admin_Form-Input" >         
                          <input type="text"
                                  name="name"
                                  className="admin_input-box"
                                  /> 
                          </div>  
                </div> 
       
                
                <div className="addaccount_form_row">
                           <div className="admin_Form-Description" >   
                          <p>Email id</p> 
                          </div>        
                          <div className="admin_Form-Input" >         
                          <input type="text"
                                  name="email"
                                  className="admin_input-box"
                                  /> 
                          </div>  
                </div> 
                 

                <div className="addaccount_form_row">
                           <div className="admin_Form-Description" >   
                          <p>Password</p> 
                          </div>        
                          <div className="admin_Form-Input" >         
                          <input type="text"
                                  name="password"
                                  className="admin_input-box"
                                  /> 
                          </div>  
                </div> 
             
                <div className="addaccount_form_row">
                           <div className="admin_Form-Description" >   
                          <p>Repeat Password</p> 
                          </div>        
                          <div className="admin_Form-Input" >         
                          <input type="text"
                                  name="repeat_password"
                                  className="admin_input-box"
                                  /> 
                          </div>  
                </div> 
                
                <div className="addaccount_form_row">
                           <div className="admin_Form-Description" >   
                          <p>Name of contact person</p> 
                          </div>        
                          <div className="admin_Form-Input" >         
                          <input type="text"
                                  name="contact_person"
                                  className="admin_input-box"
                                  /> 
                          </div>  
                </div> 
                

                <div className="addaccount_form_row">
                <div className="admin_Form-Description" >   
                          <p>Program Assigned</p> 
                </div>     

                <div className="admin_Form-Input" >         
                         
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
          <Sidebar /> 
        </div>   


        
         <div className="form_outer_div_body">  
      


         
         <form className="addaccount_form"   style= {{  height : "65.99%" }}   onSubmit={  addStudent }    >    
    
             <div className="addaccount_form_row"  style= {{  height : "20%" }}>
                         <div className="admin_Form-Description" >   
                        <p>Name of student</p> 
                        </div>        
                        <div className="admin_Form-Input" >         
                        <input type="text"
                                name="name"
                                className="admin_input-box" 
                                style={ { borderRadius : "16px"}}
                                /> 
                        </div>  
              </div> 
     
              
              <div className="addaccount_form_row"  style= {{  height : "20%" }}>
                         <div className="admin_Form-Description" >   
                        <p>Email id</p> 
                        </div>        
                        <div className="admin_Form-Input" >         
                        <input type="text"
                                name="email"
                                className="admin_input-box"  
                                style={ { borderRadius : "16px"}}
                                /> 
                        </div>  
              </div> 
               

              <div className="addaccount_form_row"  style= {{  height : "20%" }}>
                         <div className="admin_Form-Description" >   
                        <p>Password</p> 
                        </div>        
                        <div className="admin_Form-Input" >         
                        <input type="text"
                                name="password"
                                className="admin_input-box" 
                                style={ { borderRadius : "16px"}}
                                /> 
                        </div>  
              </div> 
          
             

              <div className="addaccount_form_row"  style= {{  height : "20%"  }}>
                         <div className="admin_Form-Description" >   
                        <p>Repeat Password</p> 
                        </div>        
                        <div className="admin_Form-Input" >         
                        <input type="text"
                                name="repeat_password"
                                className="admin_input-box" 
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

      ) ;


     



      }
} 


export default AddAccount ; 