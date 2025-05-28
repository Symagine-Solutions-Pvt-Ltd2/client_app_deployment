import "../Style/StudentView.css" ; 
import {Link , useNavigate  , useLocation  } from "react-router-dom" ; 
import { useState  , useEffect } from "react"; 
import Sidebar from "../Sidebar"  ;  
import axios from "axios"  ;  
import SearchIcon from '@mui/icons-material/Search';  

import BusinessPlanPopup from "../Components/BusinessPlanPopUp";
  



// popup 
import Popup from "../Components/Popup"; 




function StudentView() {    
  
    // for popup 
    const[ popupInfo  , setPopupInfo ] = useState("") ;
    const[ popup  , setPopup ] = useState( false) ; 
    const[ userNameForPopup  , setUserNameForPopup ] = useState( "") ; 
    const [  searchInput   , setSearchInput ]   = useState( "nil") ;   
        const[ businessPlanPopup  , setBusinessPlanPopup ] = useState( false) ;
   const[ businessPlanInfo  , setBusinessPlanInfo ] = useState("") ;

  const [ data , setData ] = useState( []);  
    const  navigate = useNavigate() ;   
    const location = useLocation();  
    const [  schoolId  , setSchoolId   ]   =  useState( location.state.schoolId ) ; 
    const [  programId  , setProgramId  ]   = useState( location.state.programId) ;   

  


   // // console.log( "studentview" )  ; 
   // // console.log(  location.state.schoolId  )  ;
   // // console.log( location.state.programId )  ; 
    


    const goToNext = () => {
  
       navigate(  "/home/dashboard/student/addstudent"   ,  { state: {    typeId : "student"   ,      schoolId: schoolId   , programId :  programId     ,    userInfo :  location.state.userInfo ,    data : location.state.data       }}   ,  { replace : false}  ) ; 
       // console.log("ASJghshGHS") ;  




      }  




      useEffect(() => { 

        axios({ 
  
         url : "https://learn-up.app/admin/a_student"  ,  
         method : "POST"  ,  


         data : {
           
                "search_key" :  schoolId  , 
                "page_no" :  1 ,
                 "limit" : 10000   
  
         }
  
        }).then( ( res) => {   
  
  
         // // console.log(  res.data.data ) ; 
          if(   res.data.message  === "Information retrieve successfully"  ){
           
            setData(  res.data.data ) ; 
}
           
         // // // console.log(   res.data.data[1].name )  ;
  
        } ).catch(( err) => {   

           // // console.log( "error") ;
  
         }  ) ; 
  
    } , [  popup] )  ; 




 




    const  handleStatusChange = ( cs  ) => {    
    
      setPopupInfo( cs) ;
      //// // console.log( cs) ;
      setUserNameForPopup( cs.student_name) ;
        setPopup( true)  ;
       
 } 

   

 const onSearch  = () => {  


  console.log(  searchInput ) ;     



  axios({ 
 
   url : "https://learn-up.app/admin/search_student"  ,   

   method : "POST"  , 
   data : {
     
    "search_key" :   location.state.schoolId , 
    "page_no" :  1 ,
     "limit" : 100000    , 
     "search" :  searchInput


   }

  }).then( ( res) => {   


    console.log( res ) ;
     
    if(  res.data.message === "Data not found") {
      alert("Data not found");
      setData([]);
    } else if(  res.data.message === "Information retrieve successfully" ) {
      console.log(  res ) ;
      setData( res.data.data);
    } else {
      alert("Data not found");
      setData([]);
    }
  }
         ).catch(( err) => {  
      //console.log( "error") ;

   }  ) ; 
    
} 

  


    const  handleBplanStatusChange = ( cs  ) => {    
     

      console.log( location.state.schoolId ) ;
      
      if( location.state.schoolId !== ""){
       setBusinessPlanInfo( location.state.schoolId  ) ;

      } 
      // //console.log( cs) ;
      //  setUserNameForPopup( cs.student_name) ;
        setBusinessPlanPopup( true)  ;
      
 } 
  



    return(
       
    <div className="studentview">  
 


    <div className="studentview_sidebar" >
           <Sidebar  info = {  location.state.userInfo}  data ={ location.state.data }    /> 
    </div>  
   
    <div className="studentview_body">   

      <BusinessPlanPopup  trigger= { businessPlanPopup  } setTrigger={ setBusinessPlanPopup }   data={ businessPlanInfo}   />
     
    <Popup  trigger= { popup  } setTrigger={ setPopup }   data={ popupInfo}  >
                <h3>{userNameForPopup}</h3>
          </Popup>


     <div  className="studentview_body1">  
       

     <div className="studentview_body1_search_div"> 


       
<i style={{ position : "absolute" }}>  
 <button className="studentview_body1_search_button"   onClick={() => { onSearch() }}>
 <SearchIcon sx={{   fontSize : 26    }}/> 
 </button>
  </i>
<input   className="studentview_body1_search_input"   type="text" placeholder="Search by name..."    onChange={  ( e ) => {  setSearchInput( e.target.value )} }/>  


</div>




     </div>
     

       
      <div className="studentview_table_outer_div_body2">   




       <div className="studentview_table_inner_div_column_name">   


       <div  className="studentview_table_row_box"   style= {{   width: "8%"  ,  height: "100%"    ,  borderRight : "1px solid #B6B7D0" }}>
       <p className="header_text">Sl No</p>
       </div> 
       <div  className="studentview_table_row_box" style= {{   width: "16%" , height: "100%"   , borderRight : "1px solid #B6B7D0" }}>
         <p className="header_text"  style ={{  textAlign : "center" }} >Name of school</p>
       </div>
       <div  className="studentview_table_row_box"  style= {{   width: "17%" ,  height: "100%"  , borderRight : "1px solid #B6B7D0"}  }>
         <p className="header_text" style ={{  textAlign : "center" }}>Name of student</p>
       </div>
       <div  className="studentview_table_row_box"   style= {{  width: "11%"  ,  height: "100%"   , borderRight : "1px solid #B6B7D0"  }}> 

         <p  className="header_text"  style={{ textAlign : "center"}}>Status (submitted Business Plan)</p>
       </div> 
       <div  className="studentview_table_row_box"  style= {{   width: "11%"  ,  height: "100%"  , borderRight : "1px solid #B6B7D0"}}> 
        <p className="header_text" style={{ textAlign : "center"}} >Certificate issued</p>
       </div> 

       <div className="studentview_table_row_box"   style= {{  width: "11%"  ,    height: "100%"   , borderRight : "1px solid #B6B7D0"  , justifyContent : "center"}}> 
        <p className="header_text" style={{ textAlign : "center"}} >View Business Plan</p>
       </div> 
      
        
       <div className="studentview_table_row_box"   style= {{   width: "11%"  ,    height: "100%"   , borderRight : "1px solid #B6B7D0"}}> 
        <p className="header_text" style ={{  textAlign : "center" }}>Account Status</p>
       </div>

       <div   className="studentview_table_row_box"  style= {{   width: "15%"  ,    height: "100%"   , borderRight : "1px solid #B6B7D0"}}> 
        <p className="header_text">Account status</p>
       </div>
    </div>   
  









      <div  className="studentview_table_inner_div_table_row"  >
          



         {  
         
         data.map( (  el   , index )  => ( 


      <div    key= { index }   style= {{ width : "100%" , height: "25%"  , borderRight : "1px solid #B6B7D0"  , display : "flex" , flexDirection : "row"  ,  borderBottom : "1px solid #B6B7D0"  }} > 


      <div   className="studentview_table_row_box"   style= {{   width: "8%"  ,  height: "100%"    ,  borderRight : "1px solid #B6B7D0" }}>
       <p> { index+1 }</p>
       </div> 

       <div  className="studentview_table_row_box"   style= {{   width: "16%" , height: "100%"    , borderRight : "1px solid #B6B7D0" }}>
         <p> {  el.school_name }</p>
       </div>
       <div className="studentview_table_row_box"   style= {{   width: "17%" ,  height: "100%"   , borderRight : "1px solid #B6B7D0"}  }>
         <p> {  el.student_name}</p>
       </div>
       <div className="studentview_table_row_box"   style= {{  width: "11%"  ,  height: "100%"  , borderRight : "1px solid #B6B7D0"}}>
         <p>  {  el.bp_submitted} </p>
       </div>  

       <div className="studentview_table_row_box"   style= {{  width: "11%"  ,  height: "100%"  , borderRight : "1px solid #B6B7D0"}}>
         <p> {  el.certificate}</p>
       </div>  

       <div  className="studentview_table_row_box"  style= {{  width: "11%"  ,  height: "100%"    , borderRight : "1px solid #B6B7D0"}}>
 


      <input   className="inner_table_btn"   style={{ height: "40%"  , width : "60%"   ,border: "0px solid red" }}  type="button" value = "view"  onClick={()  => {     navigate(  "/home/dashboard/student/viewplan"   ,    { state: {   schoolId:  location.state.schoolId ,    programId :  location.state.programId   ,     data1 : location.state.data  ,    userInfo :  location.state.userInfo   , data : el     }}     ,       { replace : false}  )      }  } /> 
            

       </div> 


    




       <div  className="studentview_table_row_box" style= {{  width: "11%"  ,    height: "100%"  , borderRight : "1px solid #B6B7D0"}}> 
        <p> { el.status }</p>
       </div>   


       <div   className="studentview_table_row_box" style= {{   width: "15%"  ,    height: "100%"  , borderRight : "1px solid #B6B7D0"  ,  display: "flex"  ,   flexDirection : "row"   , justifyContent : "space-around"}}> 
                    


         <input   className="inner_table_btn"      style={{ height: "40%"  , width : "40%"   ,border: "0px solid red" }}  type="button" value = "status"  onClick={()  => {  handleStatusChange( el)  }  } /> 
                     
                       
        <input   className="inner_table_btn"     style={{ height: "40%"  , width : "40%"   ,border: "0px solid red" }}   type="button" value = "edit"  onClick={()  => {        navigate(  "/home/dashboard/student/editstudent"   ,    { state: {  typeId : "student"   ,     data1 : el   ,    userInfo :  location.state.userInfo   , data : location.state.data   }}     ,       { replace : false}  )  }  } /> 
                       
       </div>

</div> 
   



         ))

          }  





        

      </div>
        
        

       


        
      </div>  

       


           <div className="studentview_body3"  > 
        
             <div className="studentview_body3_inner_view1"   >
            
              <button  className= "schoolview_body3_inner_view_button3"    onClick={ () => { handleBplanStatusChange(  )}}    >
              <p> Business plan submission </p>
            </button>

            <button onClick={ () => { goToNext() } } className="schoolview_body3_inner_view_button3">
              <p> Add new student </p>
            </button>  

             </div> 
          
      </div>


       


    </div>
  




  </div>

    ) ;    





} 

export default StudentView;