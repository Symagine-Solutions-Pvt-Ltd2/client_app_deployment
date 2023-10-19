import { useState , useEffect } from "react"; 
import Sidebar  from "../Sidebar" ;   
import {Link , useNavigate  , useLocation   } from "react-router-dom" ; 
import "../Style/AddAccount.css" ;
import axios from "axios"  ;  
import "../Style/EditAccount.css"  ; 




function  EditAccount(  {  props }) {     
     
  


  const  navigate = useNavigate() ; 
  const location = useLocation();
  const [  typeId  , setTypeId ]   = useState( location.state.typeId   ) ;   
  const [  data  , setData ]   = useState( location.state.data   ) ;  

 
    console.log( data ) ;   
  
 // console.log( location.state.type) ;  
    

  
 




     const  editSchool  = (   event ) => {
 



        console.log( event.target.name.value) ;    
        console.log( event.target.email.value) ;      
        console.log( event.target.contact_person.value) ;  
         

      navigate(  "/home/dashboard/client/school"   ,   { state: {    typeId : location.state.type    ,  clientName : data.client_name     }}     ,      { replace : false}  )   ;
        
   //      console.log(  location.state.type    )   ; 


      
axios({ 
      
                      url : "http://localhost:8000/admin/e_school"  ,   
      
                      method : "POST"  ,  

                      data : {
                        
                              "school_name" : event.target.name.value  , 
                              "email_id" : event.target.email.value , 
                              "contact_person" : event.target.contact_person.value,  
                              "_id" : data._id ,  
                          
                      }
                
                     }).then( ( res) => {   
                  
                            
                          console.log( res) ; 

                       
                     } ).catch(( err) => { 
                         console.log( "error") ;
                
                      }  ) ;  
        



            event.preventDefault();

     }





  


    const  editFacilitator  = (   event ) => {
 



        console.log( event.target.name.value) ;    
        console.log( event.target.email.value) ;      
  
         

    navigate(  "/home/dashboard/client/facilitator"   ,    { state: {    typeId :  location.state.type  ,   school_name : data.school_name     }}    , { replace : false}  )   ;
        
   //      console.log(  location.state.type    )   ; 


      
axios({ 
      
                      url : "http://localhost:8000/facilitator/e_facilitator"  ,   
      
                      method : "POST"  ,  

                      data : {
                        
                              "facilitator_name" : event.target.name.value  , 
                              "email_id" : event.target.email.value , 
                              "_id" : data._id ,  
                          
                      }
                
                     }).then( ( res) => {   
                  
                            
                          console.log( res) ; 

                       
                     } ).catch(( err) => { 
                         console.log( "error") ;
                
                      }  ) ;  
        



                      
            event.preventDefault();

     }

   

     const  editStudent  = (   event ) => {
 
         
     
        console.log( event.target.name.value) ;    
        console.log( event.target.email.value) ;     
         
        
      navigate(  "/home/dashboard/client/student"   ,    { state: {     school_name : data.school_name     }}    , { replace : false}  )   ;
        
         

            
           axios({ 
      
        url : "http://localhost:8000/admin/student_e"  ,   

        method : "POST"  ,  

        data : {
          
                "student_name" : event.target.name.value  , 
                "email_id" : event.target.email.value , 
                "_id" : data._id ,  
            
        }
  
       }).then( ( res) => {   
    
              
            console.log( res) ; 

         
       } ).catch(( err) => { 
           console.log( "error") ;
  
        }  ) ;  
       



        event.preventDefault();

     }







   const handleCheckboxChange1 =() => {

        console.log("bvhjghhj")  ; 
   }
 



  switch( typeId )  { 







    case "facilitator" :   

           return(
        
            <div className="form_outer_div"> 


              <div className="form_outer_div_sidebar" >
            <Sidebar /> 
          </div>   
  
  
          
           <div className="form_outer_div_body">  
        


           
           <form className="addaccount_form"   style= {{  height : "65.99%"  }}  onSubmit={ editFacilitator     }    >    
      
               <div className="editaccount_form_row"  style= {{  height : "20%" }}>
                           <div className="admin_Form-Description" >   
                          <p>Name of facilitator</p> 
                          </div>        
                          <div className="admin_Form-Input" >   

                          <input type="text"
                                  name="name" 
                                  defaultValue={ data.facilitator_name      }
                                  className="admin_input-box" 
                                  style={ { borderRadius : "16px"}} 
                                
                                  /> 
                          </div>  
                </div> 
       
                
                <div className="editaccount_form_row"  style= {{  height : "20%" }}>
                           <div className="admin_Form-Description" >   
                          <p>Email id</p> 
                          </div>        
                          <div className="admin_Form-Input" >  

                          <input type="text"
                                  name="email" 
                                  defaultValue={ data.email_id  }
                                  className="admin_input-box"  
                                  style={ { borderRadius : "16px"}}
                                  /> 
                          </div>  
                </div> 
                 
       

                <div  className="editaccount_form_row_btn_div"  style= {{  height : "20%" }}> 
                        <input className="editaccount_form_row_btn"   style= {{  height : "60%" }}  type="submit" value="Submit" /> 
                </div>
                        
          </form>
  
                  <div > 

                  </div>
      
           </div>
           

             </div>
             ) ; 
             
              





    case "school" :   

             return(
          
              <div className="form_outer_div">
               <div className="form_outer_div_sidebar" >
            <Sidebar /> 
          </div>   
  
  
          
           <div className="form_outer_div_body">  
        


           
           <form className="addaccount_form"      onSubmit={   editSchool  } >    
      
               <div className="editaccount_form_row"> 

                           <div className="admin_Form-Description" >   
                          <p>Name of school</p> 
                          </div>       


                          <div className="admin_Form-Input" >     

                          <input type="text"
                                  name="name" 
                                  defaultValue= {  data.school_name }
                                  className="admin_input-box"
                                  /> 
                          </div>  
                </div> 
       
                
                <div className="editaccount_form_row">
                           <div className="admin_Form-Description" >   
                          <p>Email id</p> 
                          </div>        
                          <div className="admin_Form-Input" >         
                          <input type="text" 
                                   name = "email"
                                    defaultValue= {  data.email_id }
                                  className="admin_input-box"
                                  /> 
                          </div>  
                </div> 
                 

                
                
                <div className="editaccount_form_row">
                           <div className="admin_Form-Description" >   
                          <p>Name of contact person</p> 
                          </div>        
                          <div className="admin_Form-Input" >         
                          <input type="text" 
                              name ="contact_person"
                            defaultValue= {  data.contact_person     }   
                                  className="admin_input-box"
                                  /> 
                          </div>  
                </div> 
                

                <div className="editaccount_form_row">
                <div className="admin_Form-Description" >   
                          <p>Program Assigned</p> 
                </div>     

                <div className="admin_Form-Input" >         
                         
                 <p> {    data.program_name } </p>
                 </div>  
    </div> 
        
  
           
           
  
        <div  className="editaccount_form_row_btn_div"> 
                          <input className="editaccount_form_row_btn" type="submit" value="Submit" /> 
        </div>
                        
    </form>
  
                  <div > 

                  </div>
      
           </div>
               </div>
               ) ;  
  
    




    case "student" :   

               return(
            
                <div className="form_outer_div">
                 <div className="form_outer_div_sidebar" >
          <Sidebar /> 
        </div>   


        
         <div className="form_outer_div_body">  
      


         
         <form className="addaccount_form"   style= {{  height : "65.99%" }}    onSubmit={ editStudent}      >    
    
             <div className="editaccount_form_row"  style= {{  height : "20%" }}>
                         <div className="admin_Form-Description" >   
                        <p>Name of student</p> 
                        </div>        
                        <div className="admin_Form-Input" >         
                        <input type="text"
                                name="name"
                                 defaultValue={ data.student_name }
                                className="admin_input-box" 
                                style={ { borderRadius : "16px"}}
                                /> 
                        </div>  
              </div> 
     
              
              <div className="editaccount_form_row"  style= {{  height : "20%" }}>
                         <div className="admin_Form-Description" >   
                        <p>Email id</p> 
                        </div>        
                        <div className="admin_Form-Input" >         
                        <input type="text"
                                name="email"
                                defaultValue={ data.email_id    }
                                className="admin_input-box"  
                                style={ { borderRadius : "16px"}}
                                /> 
                        </div>  
              </div> 
               

        

                        <div  className="editaccount_form_row_btn_div"  style= {{  height : "20%" }}> 
                        <input className="editaccount_form_row_btn"   style= {{  height : "60%" }}  type="submit" value="Submit" /> 
                        </div>
                      
                    </form>

                <div > 

                </div>
    
         </div>
        
                 </div>
                 ) ;  
}
}


export default EditAccount ; 