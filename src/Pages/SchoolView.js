import {Link , useNavigate  , useLocation} from "react-router-dom" ; 
import { useState  , useEffect  } from "react"; 
import Sidebar from "../Sidebar"  ; 
import "../Style/SchoolView.css" ; 
import axios from "axios"  ; 



//popup 
import Popup from "../Components/Popup";




function SchoolView() {    
     
    // for popup 
    const[ popupInfo  , setPopupInfo ] = useState("") ;
    const[ popup  , setPopup ] = useState( false) ; 


    const [ data , setData ] = useState( []); 
    const  navigate = useNavigate() ;  
    const location = useLocation();  
    const [  clientName  , setClientName  ]   = useState( location.state.clientName ) ; 
    const [  programName  , setProgramName  ]   = useState( location.state.programName ) ;   


    console.log( location.state.clientName ) ;  


    const goToNext = () => {
  
       navigate(  "/home/dashboard/addschool"   ,   { state: {    typeId : "school"   , clientName : clientName ,   programName : programName   }}   ,  { replace : false}  ) ; 
       console.log("ASJghshGHS") ;  

      }    


      useEffect(() => { 

        axios({ 
  
         url : "http://localhost:8000/admin/ac_school"  ,  
         method : "POST"  , 
         data : {
           
                  "search_key" : clientName , 
                "page_no" :  1 ,
                 "limit" : 10   
  
         }
  
        }).then( ( res) => {   
  
  
          console.log(  res.data.data ) ; 
           setData(  res.data.data ) ;  
           
           
         //  console.log(   res.data.data[1].name )  ;
  
        } ).catch(( err) => {  
            console.log( "error") ;
  
         }  ) ; 
  
    } , [])  ; 
 
  
    
   
     

                     // to handle delete , active , inactive  

                     const  handleStatusChange = ( cs  ) => {    
    
                      setPopupInfo( cs) ;
                      console.log( cs) ;
                       setPopup( true)  ;
                   

                 } 



    return(  


  
        <div className="schoolview">  
    
                <div className="schoolview_sidebar" >
                <Sidebar /> 
                </div>  

      
               
                <Popup  trigger= { popup  } setTrigger={ setPopup }   >
                 <h2> { popupInfo } </h2>
                </Popup>
               
       
                <div className="schoolview_body">  

                
                 <div  className="schoolview_body1"> 
                 <p>hjxgajgj</p> 
                 </div>
                 

                 
                 <div className="schoolview_table_outer_div_body2">    


        
    
                   <div className="schoolview_table_inner_div_column_name">   



                    <div  style= {{   width: "7%"  ,  height: "100%"  ,  borderRight : "1px solid black" }}>
                   <p>Sl No</p>
                   </div> 
                   <div style= {{   width: "14%" , height: "100%"  , borderRight : "1px solid black" }}>
                     <p>Name of school</p>
                   </div>
                   <div style= {{   width: "17%" ,  height: "100%"  ,  borderRight : "1px solid black"}  }>
                     <p>Contact Person</p>
                   </div>
                   <div style= {{  width: "9%"  ,  height: "100%"    , borderRight : "1px solid black"}}>
                     <p>Contact Email Id</p>
                   </div> 
                   <div style= {{   width: "14%"  ,  height: "100%"  , borderRight : "1px solid black"}}> 
                    <p>Facilitators</p>
                   </div>  
                   <div style= {{   width: "14%"  ,  height: "100%"   , borderRight : "1px solid black"}}> 
                    <p>Students</p>
                   </div> 
                   <div style= {{  width: "7%"  ,    height: "100%"   , borderRight : "1px solid black"}}> 
                    <p>Account Status</p>
                   </div> 
                   <div style= {{   width: "18%"  ,    height: "100%" }}> 
                    <p>Account status</p>
                   </div>
    



                  </div>  


 



                  <div    className="schoolview_table_inner_div_table_row">
                       

                  {
                data.map( (  el   , index )  => ( 
                
                     

                  <div  style = {{   width : "100%"  ,   height: "25%"   ,     backgroundColor : "#FFFFFF"  , borderBottom : "1px solid black"   , display : "flex"  , flexDirection : "row"}}   key ={ index}  > 
 
 

                 <div className="schoolview_table_row_box" style= {{   width: "7%"  ,  height: "100%"   ,  borderRight : "1px solid black" }}>
                   <p> { index+1 }</p>
                   </div>  


                   <div  className="schoolview_table_row_box"  style= {{   width: "14%" , height: "100%"   , borderRight : "1px solid black" }}>
                     <p> {  el.school_name}</p>
                   </div>
                   <div  className="schoolview_table_row_box"  style= {{   width: "17%" ,  height: "100%"   , borderRight : "1px solid black"}  }>
                     <p>Asdasd Fdslkfmsdicn</p>
                   </div>
                   <div  className="schoolview_table_row_box" style= {{  width: "9%"  ,  height: "100%"   , borderRight : "1px solid black"}}>
                     <p> Yes</p>
                   </div> 

                   <div className="schoolview_table_row_box"  style= {{   width: "14%"  ,  height: "100%"   , borderRight : "1px solid black"  , display: "flex"  ,   flexDirection : "row"  }}>   


                              <div className="schoolview_table_row_box"  style={{ height: "100%"  , width : "20%"  , alignItems : "center"  , justifyContent : "center"}}> 
                                       <p>2</p>
                                </div> 

                                
                                 <div  className="schoolview_table_row_box" style={{ height: "100%"  , width : "80%"}} > 

                                 
                                        <input type="button" value = "view"   className="schoolview_table_row_button"  style={{ height : "40%"  ,  width : "60%"   ,   border: "0px solid red" }} onClick={()  => {        navigate(  "/home/dashboard/facilitator"         ,   { state: {      schoolName : data[index].school_name   ,   programName : programName    }}    ,      { replace : false}  )  }  } />  


                                 </div>
                   </div>  
                   <div   style= {{   width: "14%"  ,  height: "100%" , borderRight : "1px solid black"  , display: "flex"  ,   flexDirection : "row"}}>  

                                <div  className="schoolview_table_row_box" style={{ height: "100%"  , width : "20%"}}> 
                                       <p>2</p>
                                </div>
                                 <div  className="schoolview_table_row_box"  style={{ height: "100%"  , width : "80%"}} > 


                                        <input type="button" value = "view"   className="schoolview_table_row_button"    style={{ height : "40%"  ,  width : "60%"   ,   border: "0px solid red" }}    onClick={()  => {        navigate(  "/home/dashboard/student"   ,     { state: {      schoolName : data[index].school_name   ,   programName : programName    }}       ,  { replace : false}  )  }  } /> 
                                 </div>
                   </div>  



                   <div  className="schoolview_table_row_box" style= {{  width: "7%"  ,    height: "100%"   , borderRight : "1px solid black"}}> 
                    <p>Active</p>
                   </div>  



                   <div style= {{   width: "18%"  ,    height: "100%"   , borderRight : "1px solid black"  ,  display: "flex"  ,   flexDirection : "row"}}> 
                      

                                 <div  className="schoolview_table_row_box" style={{ height: "100%"  , width : "40%"}}>  

                                      <input type="button"    style={{ height : "40%"  ,  width : "60%"   ,   border: "0px solid red" }} className="schoolview_table_row_button"   value = "Status"  onClick={()  => {        navigate(  "/home/dashboard/client/facilitator"   ,  { replace : false}  )  }  } /> 
                                </div> 


                                 <div  className="schoolview_table_row_box"  style={{ height: "100%"  , width : "40%"}} >
                                        <input type="button"   style={{ height : "40%"  ,  width : "60%"   ,   border: "0px solid red" }}    className="schoolview_table_row_button"  value = "Edit"  onClick={   () => {handleStatusChange(  el.school_name ) }   } /> 
                                 </div>
                   </div> 
     


                 </div>
  
                ))

                } 

 




                  </div>
                  
                   
              


        
                  </div> 
      




                  <div className="schoolview_body3"> 
    
                  <div onClick={ () => { goToNext() } } className="add_new_program_button"  style= { {  backgroundColor : "#FCC046"}}>
                    <p> Add new school </p>
                  </div>
                


                  </div>
                 
                     
                </div>
           
    
    
        </div>
        ) ;    


} 

export default SchoolView;