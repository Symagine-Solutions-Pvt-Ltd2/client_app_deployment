
import {Link , useNavigate  , useLocation} from "react-router-dom" ; 
import { useState   , useEffect  } from "react"; 
import Sidebar from "../Sidebar"  ; 
import axios from "axios"  ; 



function CourseDetails() {    
     

   // const location = useLocation(); 
    //const [ typeId , setTypeId ] =  useState( location.state.typeId   ) ;   
    const  navigate = useNavigate() ;  
    const location = useLocation();  

  


  const [ data , setData ] = useState( []); 
  const [  typeId  , setTypeId ]   = useState( location.state.typeId   ) ;  
  const [  contentType ,  setContentType   ]   = useState( location.state.type  ) ; 
  const [  courseName  ,  setCourseName  ]   = useState(  location.state.courseName ) ; 
  const [  contentName  ,  setContentName  ]   = useState(  location.state.name  ) ; 
 

  console.log(   location.state.typeId  )  ;
  console.log(   location.state.type  )  ;
  console.log(    location.state.courseName  )  ;
  console.log(  location.state.name  )  ;


  useEffect(() => { 
    

   if( location.state.type === "module"  ) {

   
    axios({   

     url : "http://localhost:8000/admin/module_am"  ,    
     
     method : "POST"  , 
     data : { 


      "course_name" : courseName   ,
      "module_name" : contentName , 
      "type_id"  :   contentType

     }

    }).then( ( res) => {   

      console.log(  "details" ) ;
      console.log(  res ) ; 
      setData(  res.data.data ) ;  
    

    } ).catch(( err) => {  
        console.log( "error") ;

     }  ) ; 
 
 

    }
    else  if (   location.state.type === "workshop"    ) {
      

      axios({   

        url : "http://localhost:8000/admin/module_am"  ,    
        
        method : "POST"  , 
        data : { 
   
   
         "course_name" : courseName   ,
         "module_name" : contentName , 
         "type_id"  :   contentType
   
        }
   
       }).then( ( res) => {   
   
         console.log(  "details" ) ;
         console.log(  res ) ; 
        //  setData(  res.data.data ) ;  
       
   
       } ).catch(( err) => {  
           console.log( "error") ;
   
        }  ) ; 
    
         

    }

} , [])  ; 

  









  
   console.log( location.state.typeId  ) ; 
     






  


    switch( typeId )  {  


   case "permanent_course_content" :   


   return( 


    <div className="clientview">  

    <div className="clientview_sidebar" >
           <Sidebar /> 
    </div>  

    <div className="clientview_body">   

    
     <div  className="clientview_body1"> 
     <p>hjxgajgj</p> 
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
     <input  className="clientview_table_row_button"    style={{ height: "40%"  , width : "25%"  ,  border: "0px solid red" }}   type="button" value = "View"  onClick={()  => { navigate(  "/home/viewcourse/permanentcoursedetails"   ,     { state: {    typeId : "permanent_course_content" }}    ,     { replace : false}  )   }  } /> 
                  
                            
</div> 

</div>



 ))
}


  </div>



     
     
     </div> 


 




      <div className="body3"> 

     
      </div>
    
    </div>



</div> 


) ;     


  

    }
} 

export default CourseDetails;