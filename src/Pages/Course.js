import { useState  , useEffect} from "react"; 
import Sidebar  from "../Sidebar" ;   
import {Link , useNavigate  , useLocation} from "react-router-dom" ; 
import "../Style/FacilitatorView.css" ;  
import axios from "axios"  ; 


function Course() {    
  


  const [ data , setData ] = useState( []); 
  const [ courseName  , setCourseName  ] = useState( "No Course Material"); 
    const location = useLocation(); 
   //   const [ typeId , setTypeId ] =  useState( location.state.typeId   ) ;   
    const  navigate = useNavigate() ; 
  
    
      

   console.log(  location.state.courseId)  ; 

      useEffect(() => { 
    


        axios({ 
  
         url : "http://localhost:8000/admin/course_details_id"  ,    
         
         method : "POST"  , 
         data : {
           
          "_id" :   location.state.courseId
  
         }
  
        }).then( ( res) => {   
  
          console.log(  "here" ) ;
          console.log(  res ) ; 
           setData(  res.data.data ) ;  
          setCourseName(  res.data.data[0].course_name  );
           
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
               <p>Name of course:  {  courseName  }  </p> 
               </div>
            
             </div>



            <div className="clientview_table_outer_div_body2"  style ={{ height : "80%"}}  >   
      



          <div className="clientview_table_inner_div_column_name"   >   
 



         <div  className="clientview_table_row_box"  style= {{   width: "15%"  ,  height: "100%"    ,  borderRight : "1px solid black" }}>
           <p>Sl No</p>
         </div>  

         <div  className="clientview_table_row_box"  style= {{   width: "40%" , height: "100%"   }}>
            <p>Type</p>
         </div>
        
           
         <div  className="clientview_table_row_box"  style= {{   width: "45%" , height: "100%"   }}>
            <p>Name</p>
         </div>
        
 
   </div>  





     <div  className="clientview_table_inner_div_table_row" >
        
  

  { 
     
     data.map( (  el  , index  )  => ( 

     <div   key={ index} style= {{ width : "100%" , height: "25%"   , display : "flex" , flexDirection : "row"   , borderBottom : "1px solid black" }} > 


   <div   className="clientview_table_row_box"  style= {{   width: "15%"  ,  height: "100%"    ,  borderRight : "1px solid black"    }}>


    <p>  {  index+1 }  </p>
    </div> 
    <div  className="clientview_table_row_box"   style= {{   width: "40%" , height: "100%"   , borderRight : "1px solid black" }}>
      <p> { el.type_id} </p>
    </div> 


    <div   className="clientview_table_row_box" style= {{   width: "45%" ,  height: "100%"  ,  display : "flex" , flexDirection : "row"}  }>
       


     <div   style={{ height: "40%"  , width : "55%"   }}  > 
      <p>{ el.name }</p>
    </div> 

   <input  className="clientview_table_row_button"    style={{ height: "40%"  , width : "25%"  ,  border: "0px solid red" }}   type="button" value = "View"  

   onClick={()  => { navigate(  "/home/viewcourse/permanentcoursedetails"   ,     { state: {    typeId : "permanent_course_content"   ,  courseName :  el.course_name   ,   type :  el.type_id  ,   name : el.name   }}    ,     { replace : false}  )   }  } /> 
                      
                                
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