import { useState  , useEffect} from "react"; 
import Sidebar  from "../Sidebar" ;   
import {Link , useNavigate  , useLocation} from "react-router-dom" ; 
import "../Style/FacilitatorView.css" ;  
import axios from "axios"  ; 


function Course() {    
  


  const [ data , setData ] = useState( []);
    const location = useLocation(); 
   //   const [ typeId , setTypeId ] =  useState( location.state.typeId   ) ;   
    const  navigate = useNavigate() ; 
  
    
    const onTrigger = (  event  ) => { 
    

       // console.log( typeId) ; 
        console.log("bhjgjgj") ; 
          
       // navigate(  "/home/course"   ,    { state: {    typeId : "course"  }}  ,    { replace : false}  )   ;
    
    
        event.preventDefault();
      }

       

      useEffect(() => { 
    


        axios({ 
  
         url : "http://localhost:8000/admin/Course_wmb"  ,    
         
         method : "POST"  , 
         data : {
           
            "course_name" : "Future_new"  
  
         }
  
        }).then( ( res) => {   
  
          console.log(  "here" ) ;
          console.log(  res ) ; 
           setData(  res.data.data ) ;  
           
           
         //  console.log(   res.data.data[1].name )  ;
  
        } ).catch(( err) => {  
            console.log( "error") ;
  
         }  ) ; 
  
    } , [])  ; 
 
      



    return( 
    
       
        <div className="clientview" > 


     
        <div className="clientview_sidebar" >
          <Sidebar /> 
        </div>   


        
       <div className="clientview_body"  >    
 

            <div  className="clientview_body1"  style ={{ height : "12%"}} > 
               
               <div style={{  backgroundColor : "pink"  , height : "60%"  }} >
               <p>Name of course: xxsöeldfmsdl </p> 
               </div>
            
             </div>



            <div className="clientview_table_outer_div_body2"  style ={{ height : "80%"}}  >   
      



          <div className="clientview_table_inner_div_column_name"   >   
 



         <div  className="clientview_table_row_box"  style= {{   width: "15%"  ,  height: "100%"    ,  borderRight : "1px solid black" }}>
           <p>Sl No</p>
         </div> 
         <div  className="clientview_table_row_box"  style= {{   width: "85%" , height: "100%"   }}>
            <p>Type</p>
         </div>
        
   
 
   </div>  





     <div  className="clientview_table_inner_div_table_row" >
        
  

  { 
     
     data.map( (  el  , index  )  => ( 

     <div   key={ index} style= {{ width : "100%" , height: "25%"   , display : "flex" , flexDirection : "row"}} > 


   <div   className="clientview_table_row_box"  style= {{   width: "15%"  ,  height: "100%"    ,  borderRight : "1px solid black"   }}>
    <p>  {  index+1 }  </p>
    </div> 
    <div  className="clientview_table_row_box"   style= {{   width: "40%" , height: "100%"   , borderRight : "1px solid black" }}>
      <p> Future Founders - fr - 2023 </p>
    </div> 


    <div   className="clientview_table_row_box" style= {{   width: "45%" ,  height: "100%"  ,  display : "flex" , flexDirection : "row"}  }>
      

         <input  className="clientview_table_row_button"    style={{ height: "40%"  , width : "25%"  ,  border: "0px solid red" }}   type="button" value = "View"  onClick={()  => {  navigate(  "/home/viewcourse/permanentcoursedetails"   ,   { state: {    typeId :  "permanent_course_content"  }}     , { replace : false}  )  }  } /> 
                      
                                
    </div> 

    </div>

 
 
     ))
}


      </div>
   
   

         
         
         </div> 


        </div> 
 






        </div>
         )  ;   

      
} 

export default Course;