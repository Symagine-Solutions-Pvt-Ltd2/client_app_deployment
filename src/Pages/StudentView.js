import "../Style/FacilitatorView.css"  ; 
import {Link , useNavigate  , useLocation  } from "react-router-dom" ; 
import { useState  , useEffect } from "react"; 
import Sidebar from "../Sidebar"  ;  
import axios from "axios"  ;  



function StudentView() {    
    
  const [ data , setData ] = useState( []);  
    const  navigate = useNavigate() ;   
    const location = useLocation();  
    const [  schoolId  , setSchoolId   ]   =  useState( location.state.schoolId ) ; 
    const [  programId  , setProgramId  ]   = useState( location.state.programId) ;   

  


    console.log( "studentview" )  ; 
    console.log(  location.state.schoolId  )  ;
    console.log( location.state.programId )  ; 
    


    const goToNext = () => {
  
       navigate(  "/home/dashboard/student/addstudent"   ,  { state: {    typeId : "student"   ,      schoolId: schoolId   , programId :  programId          }}   ,  { replace : false}  ) ; 
       console.log("ASJghshGHS") ;  




      }  




      useEffect(() => { 

        axios({ 
  
         url : "http://localhost:8000/admin/a_student"  ,  
         method : "POST"  ,  


         data : {
           
                "search_key" :  schoolId  , 
                "page_no" :  1 ,
                 "limit" : 10000   
  
         }
  
        }).then( ( res) => {   
  
  
          console.log(  res.data.data ) ; 
           setData(  res.data.data ) ;  
           
           
         //  console.log(   res.data.data[1].name )  ;
  
        } ).catch(( err) => {   

            console.log( "error") ;
  
         }  ) ; 
  
    } , [] )  ; 






    return(
       
    <div className="clientview">  
 


    <div className="clientview_sidebar" >
           <Sidebar /> 
    </div>  
   
    <div className="clientview_body">   

     
   


     <div  className="clientview_body1">  

     </div>
     

       
      <div className="clientview_table_outer_div_body2">   




       <div className="clientview_table_inner_div_column_name">   


       <div  className="clientview_table_row_box"   style= {{   width: "8%"  ,  height: "100%"    ,  borderRight : "1px solid black" }}>
       <p>Sl No</p>
       </div> 
       <div  className="clientview_table_row_box" style= {{   width: "11%" , height: "100%"   , borderRight : "1px solid black" }}>
         <p>Name of school</p>
       </div>
       <div  className="clientview_table_row_box"  style= {{   width: "11%" ,  height: "100%"  , borderRight : "1px solid black"}  }>
         <p>Name of student</p>
       </div>
       <div  className="clientview_table_row_box"   style= {{  width: "11%"  ,  height: "100%"   , borderRight : "1px solid black"  }}> 

         <p  style={{ textAlign : "center"}}>Status (submitted Business Plan)</p>
       </div> 
       <div  className="clientview_table_row_box"  style= {{   width: "11%"  ,  height: "100%"  , borderRight : "1px solid black"}}> 
        <p style={{ textAlign : "center"}} >Certificate issued</p>
       </div> 

       <div className="clientview_table_row_box"   style= {{  width: "11%"  ,    height: "100%"   , borderRight : "1px solid black"  , justifyContent : "center"}}> 
        <p style={{ textAlign : "center"}} >View Business Plan</p>
       </div> 
       <div  className="clientview_table_row_box" style= {{   width: "11%"  ,    height: "100%"   , borderRight : "1px solid black"}}> 
        <p>Download</p>
       </div>
        
       <div className="clientview_table_row_box"   style= {{   width: "11%"  ,    height: "100%"   , borderRight : "1px solid black"}}> 
        <p>Account Status</p>
       </div>

       <div   className="clientview_table_row_box"  style= {{   width: "15%"  ,    height: "100%"   , borderRight : "1px solid black"}}> 
        <p>Account status</p>
       </div>
    </div>   
  









      <div  className="clientview_table_inner_div_table_row"     style = {{height : "60%" }}>
          



         {  
         
         data.map( (  el   , index )  => ( 


      <div    key= { index }   style= {{ width : "100%" , height: "33.33%"  , borderRight : "1px solid black"  , display : "flex" , flexDirection : "row"  ,  borderBottom : "1px solid black"  }} > 


      <div   className="clientview_table_row_box"   style= {{   width: "8%"  ,  height: "100%"    ,  borderRight : "1px solid black" }}>
       <p> { index+1 }</p>
       </div> 

       <div  className="clientview_table_row_box"   style= {{   width: "11%" , height: "100%"    , borderRight : "1px solid black" }}>
         <p> {  el.school_name }</p>
       </div>
       <div className="clientview_table_row_box"   style= {{   width: "11%" ,  height: "100%"   , borderRight : "1px solid black"}  }>
         <p> {  el.student_name}</p>
       </div>
       <div className="clientview_table_row_box"   style= {{  width: "11%"  ,  height: "100%"  , borderRight : "1px solid black"}}>
         <p>Yes</p>
       </div>  

       <div className="clientview_table_row_box"   style= {{  width: "11%"  ,  height: "100%"  , borderRight : "1px solid black"}}>
         <p>Yes</p>
       </div>  

       <div  className="clientview_table_row_box"  style= {{  width: "11%"  ,  height: "100%"    , borderRight : "1px solid black"}}>
 


            <input  className="clientview_table_row_button"       style={{ height: "45%"  , width : "60%"   ,border: "0px solid red" }}  type="button" value = "view"  onClick={()  => {        navigate(  "/home/dashboard/student/viewplan"   ,  { replstuace : false}  )  }  } /> 
            

       </div> 


       <div className="clientview_table_row_box"  style= {{   width: "11%"  ,  height: "100%"  , borderRight : "1px solid black" , display: "flex"  ,   flexDirection : "row"}}> 
                        
                        <input     className="clientview_table_row_button"       style={{ height: "45%"  , width : "60%"   ,border: "0px solid red" }}  type="button" value = "download"    onClick={()  => {        navigate(  "/home/dashboard/client/school"   ,  { replace : false}  )  }  } /> 
                       
       </div>  




       <div  className="clientview_table_row_box" style= {{  width: "11%"  ,    height: "100%"  , borderRight : "1px solid black"}}> 
        <p> { el.status }</p>
       </div>   


       <div   className="clientview_table_row_box" style= {{   width: "15%"  ,    height: "100%"  , borderRight : "1px solid black"  ,  display: "flex"  ,   flexDirection : "row"   , justifyContent : "space-around"}}> 
                    


                     <input    className="clientview_table_row_button"       style={{ height: "45%"  , width : "40%"   ,border: "0px solid red" }}  type="button" value = "status"  onClick={()  => {        navigate(  "/home/dashboard/client/facilitator"   ,  { replace : false}  )  }  } /> 
                     
                       
                      <input   className="clientview_table_row_button"       style={{ height: "45%"  , width : "40%"   ,border: "0px solid red" }}   type="button" value = "edit"  onClick={()  => {        navigate(  "/home/dashboard/student/editstudent"   ,    { state: { typeId : "student"  }}     ,       { replace : false}  )  }  } /> 
                       
       </div>

</div> 
   



         ))

          }  





        

      </div>
        
        

      <div className="clientview_table_inner_div_column_name"  style = {{ backgroundColor : "#FFFFFF" }} >   
 



       <div  style= {{   width: "19%"  ,  height: "100%"    ,  borderRight : "1px solid black" }}>
       <p> Total </p>
       </div> 
  

       <div style= {{   width: "11%" ,  height: "100%"  , borderRight : "1px solid black"}  }>
         <p> 3 students </p>
       </div> 

       <div style= {{  width: "11%"  ,  height: "100%"   , borderRight : "1px solid black"}}>
         <p>  2 started submission </p>
       </div> 
       <div style= {{   width: "11%"  ,  height: "100%"  , borderRight : "1px solid black"}}> 
        <p>2 certificates issued</p>
       </div> 

       <div style= {{  width: "48%"  ,    height: "100%"   , borderRight : "1px solid black"}}> 
        <p>Export all business plans</p>
       </div> 
       
    </div>   


        
      </div>  

       




      <div className="body3"> 

      <div onClick={ () => { goToNext() } } className="add_new_program_button"   style= { {  backgroundColor : "#FCC046"}} >
        <p>Add new student</p>
      </div>
    
      </div>
     


       


    </div>
  




  </div>

    ) ;    





} 

export default StudentView;