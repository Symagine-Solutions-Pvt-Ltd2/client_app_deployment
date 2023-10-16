import {Link , useNavigate  , useLocation} from "react-router-dom" ; 
import { useState   , useEffect } from "react"; 
import Sidebar from "../Sidebar"  ; 
import "../Style/ClientView.css" ; 
import axios from "axios"  ; 


 




// popup 
import Popup from "../Components/Popup";
  





function SchoolView() {    
     
   

   // for popup 
   const[ popupInfo  , setPopupInfo ] = useState("") ;
   const[ popup  , setPopup ] = useState( false) ; 
  
 


    
    const [ data , setData ] = useState( []); 
    const  navigate = useNavigate() ;  
    const location = useLocation();  
    const [  typeId  , setTypeId ]   = useState( location.state.typeId   ) ;  
    const [  clientId   , setClientId  ]   = useState( location.state.clientId   ) ;   
    const [  programId   , setProgramId  ]   = useState( location.state.programId  ) ;   
 



  
    console.log("in school view ")  ; 
    
    console.log( location.state.typeId ) ;   

    console.log( location.state.userId ) ;  

    console.log(location.state.programId ) ;  
  

    console.log( data) ; 


    
    const goToNext = () => {
  
       navigate(  "/home/dashboard/addschool"   ,   { state: {    typeId : "school"  ,   clientId : clientId ,   programId : programId   , programName : "program87"   }}   ,  { replace : false}  ) ; 
       console.log("ASJghshGHS") ;  

      }   
    
 



      useEffect(() => {   

      if(  typeId === "client"){

      

        axios({ 
  
         url : "http://localhost:8000/admin/ca_school"  ,  
         method : "POST"  , 
         data : {
           
                  "search_key" :  clientId   , 
                "page_no" :  1 ,
                 "limit" : 100000   
  
         }
  
        }).then( ( res) => {   
  
  
          console.log(  res.data.data ) ; 
           setData(  res.data.data ) ;  
           
           
         //  console.log(   res.data.data[1].name )  ;
  
        } ).catch(( err) => {  
            console.log( "error") ;
  
         }  ) ;   



        }else if(   typeId === "facilitator"  ){


          axios({ 
  
            url : "http://localhost:8000/facilitator/s_facilitator"  ,  
            method : "POST"  , 

            data : { 

               "_id" : "652d52ab74af052340fc5644"
     
            }
     
           }).then( ( res) => {   
     
     
            // console.log(  res.data.data ) ; 
            
            const newarr = [  res.data.data ] ;  
            setData( newarr) ;
          //  console.log(  newarr )  ; 
     
           } ).catch(( err) => {  
               console.log( "error") ;
     
            }  ) ;   
   

        }

  
    } , [])  ; 
 
  
   
    
    
    

    
    const  handleStatusChange = ( cs  ) => {    
    
      setPopupInfo( cs) ;
      console.log( cs) ;
       setPopup( true)  ;
      
 } 










    switch( typeId )  {  
    
    case "client" :  


    return(  


  
        <div className="clientview">  
    
                <div className="clientview_sidebar" >
                       <Sidebar /> 
                </div> 
                <div className="clientview_body">   


                

                <Popup  trigger= { popup  } setTrigger={ setPopup }   >
            <h3> {popupInfo } </h3>
          </Popup>


                 
                 <div  className="clientview_body1"> 
               
                 </div>
                
                  <div className="clientview_table_outer_div_body2">   
        
    
                   <div className="clientview_table_inner_div_column_name">  


                


               <div    className="clientview_table_row_box"    style= {{   width: "7%"  ,  height: "100%"   ,  borderRight : "1px solid black" }}>
               <p>Sl No</p>
               </div> 
               <div    className="clientview_table_row_box"   style= {{   width: "14%" , height: "100%"  , borderRight : "1px solid black" }}>
                 <p>Name of school</p>
               </div>
               <div    className="clientview_table_row_box"  style= {{   width: "17%" ,  height: "100%"  , borderRight : "1px solid black"}  }>
                 <p>Contact Person</p>
               </div>
               <div    className="clientview_table_row_box"  style= {{  width: "13%"  ,  height: "100%"   , borderRight : "1px solid black"}}>
                 <p>Contact Email Id</p>
               </div> 
               <div  className="clientview_table_row_box"   style= {{   width: "12%"  ,  height: "100%" , borderRight : "1px solid black"}}> 
                <p>Facilitators</p>
               </div> 

               <div   className="clientview_table_row_box"  style= {{  width: "12%"  ,    height: "100%"   , borderRight : "1px solid black"}}> 
                <p>Students</p>
               </div> 
               <div className="clientview_table_row_box"  style= {{   width: "7%"  ,    height: "100%"  , borderRight : "1px solid black"}}> 
                <p>Account status</p>
               </div> 
               <div   className="clientview_table_row_box" style= {{   width: "18%"  ,    height: "100%"  , borderRight : "1px solid black"}}> 
                <p>Account status</p>
               </div>
              

              
    
                  </div>  



                  <div  className="clientview_table_inner_div_table_row">
                     
                       


{
                data.map( (  el   , index )  => ( 

    
                  <div  key= {  index} style= {{ width : "100%" , height: "25%"   , display : "flex" , flexDirection : "row"   ,   borderBottom : "1px solid black"}} > 




                  <div   className="clientview_table_row_box"    style= {{   width: "7%"  ,  height: "100%"   ,  borderRight : "1px solid black" }}>
                   <p> {index+1}</p>
                   </div>  

                   <div  className="clientview_table_row_box"  style= {{   width: "14%" , height: "100%"  , borderRight : "1px solid black" }}>
                     <p> {  el.school_name}</p>
                   </div>
                   <div   className="clientview_table_row_box"  style= {{   width: "17%" ,  height: "100%"   , borderRight : "1px solid black"}  }>
                     <p> {  el.contact_person}</p>
                   </div>
                   <div  className="clientview_table_row_box"   style= {{  width: "13%"  ,  height: "100%"  , borderRight : "1px solid black"  , overflow : "hidden"}}>
                     <p> { el.email_id}</p>
                   </div> 
                   <div  className="clientview_table_row_box"   style= {{   width: "12%"  ,  height: "100%"  , borderRight : "1px solid black"  , display: "flex"  ,   flexDirection : "row"}}>   


                   <div  className="clientview_table_row_box"  style={{ height: "100%"  , width : "20%"}}>  
                           <p> { el.total_facilitator } </p> 

                                </div>
                               
              <input    style={{ height: "40%"  , width : "60%"}}   type="button" value = "view"  onClick={()  => {        navigate(  "/home/dashboard/facilitator"   ,     { state: {       schoolId : data[index]._id  ,      programName : "prijk"  ,    programId :  data[index].program_id         }}           ,     { replace : false}  )  }  } /> 
                             
                   </div>   


            <div  className="clientview_table_row_box"  style= {{   width: "12%"  ,  height: "100%" , borderRight : "1px solid black"  , display: "flex"  ,   flexDirection : "row"}}>  

                     <div  className="clientview_table_row_box"   style={{ height: "40%"  , width : "20%"}}> 
                               <p> { el.total_students } </p>
                     </div>
                           
                    <input  style={{ height: "40%"  , width : "80%"}}   type="button" value = "view"  onClick={()  => {        navigate(  "/home/dashboard/student"      ,   { state: {     schoolId : data[index]._id ,        programId :  data[index].program_id   }}        ,  { replace : false}  )  }  } /> 
                        
                   </div>  


                   <div   className="clientview_table_row_box"  style= {{  width: "7%"  ,    height: "100%"  , borderRight : "1px solid black"}}> 
                    <p> { el.status } </p>
                   </div>  

            <div    className="clientview_table_row_box"   style= {{   width: "18%"  ,    height: "100%"  , borderRight : "1px solid black"  ,  display: "flex"  ,   flexDirection : "row"}}> 
                      

            <input   style={{ height: "40%"  , width : "40%"}}   type="button" value = "Status"    onClick= { () => {handleStatusChange( el.school_name) } }   /> 
                            
                             
           <input   style={{ height: "40%"  , width : "40%"}}   type="button" value = "Edit"  onClick={()  => {        navigate(  "/home/dashboard/editschool"   ,  { state: {    typeId : "school"   ,    data : el   ,  type : "system_admin"     }}   , { replace : false}  )  }  } />   





                   </div>
    

                 </div>  

))                 }

                  </div>
                  
                  
        
                  </div> 
    
                  <div className="body3"> 
    
                  <div onClick={ () => { goToNext() } } className="add_new_program_button">
                    <p> Add new school </p>
                  </div>
                
                  </div>
                
                </div>
    
    
    
        </div>
        ) ;    

     
      
     

















        case "facilitator" :   
    
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


                


               <div    className="clientview_table_row_box"    style= {{   width: "7%"  ,  height: "100%"   ,  borderRight : "1px solid black" }}>
               <p>Sl No</p>
               </div> 
               <div    className="clientview_table_row_box"   style= {{   width: "14%" , height: "100%"  , borderRight : "1px solid black" }}>
                 <p>Name of school</p>
               </div>
               <div    className="clientview_table_row_box"  style= {{   width: "17%" ,  height: "100%"  , borderRight : "1px solid black"}  }>
                 <p>Contact Person</p>
               </div>
               <div    className="clientview_table_row_box"  style= {{  width: "20%"  ,  height: "100%"   , borderRight : "1px solid black"}}>
                 <p>Contact Email Id</p>
               </div> 
               <div  className="clientview_table_row_box"   style= {{   width: "15%"  ,  height: "100%" , borderRight : "1px solid black"}}> 
                <p>Facilitators</p>
               </div> 

               <div   className="clientview_table_row_box"  style= {{  width: "15%"  ,    height: "100%"   , borderRight : "1px solid black"}}> 
                <p>Students</p>
               </div> 
               <div className="clientview_table_row_box"  style= {{   width: "12%"  ,    height: "100%"  , borderRight : "1px solid black"}}> 
                <p>Account status</p>
               </div>  


             {/*   <div   className="clientview_table_row_box" style= {{   width: "18%"  ,    height: "100%"  , borderRight : "1px solid black"}}> 
                <p>Account status</p>
               </div>
               */}

              
    
                  </div>  



                  <div  className="clientview_table_inner_div_table_row">
                     
                       


{
                data.map( (  el   , index )  => ( 

    
                  <div  key= {  index} style= {{ width : "100%" , height: "25%"   , display : "flex" , flexDirection : "row"   ,   borderBottom : "1px solid black"}} > 




                  <div   className="clientview_table_row_box"    style= {{   width: "7%"  ,  height: "100%"   ,  borderRight : "1px solid black" }}>
                   <p> {index+1}</p>
                   </div>  

                   <div  className="clientview_table_row_box"  style= {{   width: "14%" , height: "100%"  , borderRight : "1px solid black" }}>
                     <p> {  el.school_name}</p>
                   </div>
                   <div   className="clientview_table_row_box"  style= {{   width: "17%" ,  height: "100%"   , borderRight : "1px solid black"}  }>
                     <p> {  el.contact_person}</p>
                   </div>
                   <div  className="clientview_table_row_box"   style= {{  width: "20%"  ,  height: "100%"  , borderRight : "1px solid black"  , overflow : "hidden"}}>
                     <p> { el.email_id}</p>
                   </div> 
                   <div  className="clientview_table_row_box"   style= {{   width: "15%"  ,  height: "100%"  , borderRight : "1px solid black"  , display: "flex"  ,   flexDirection : "row"}}>   


                   <div  className="clientview_table_row_box"  style={{ height: "100%"  , width : "20%"}}>  
                           <p>2</p>
                                </div>
                               
              <input    style={{ height: "40%"  , width : "60%"}}   type="button" value = "view"  onClick={()  => {     navigate(  "/home/dashboard/facilitator"   ,     { state: {    typeId : typeId ,    schoolId : data[index]._id.$oid ,       programId :  data[index].program_id         }}           ,     { replace : false}  )  }  } /> 
                             
                   </div>   


            <div  className="clientview_table_row_box"  style= {{   width: "15%"  ,  height: "100%" , borderRight : "1px solid black"  , display: "flex"  ,   flexDirection : "row"}}>  

                     <div  className="clientview_table_row_box"   style={{ height: "40%"  , width : "20%"}}> 
                               <p>2</p>
                     </div>
                           
                    <input  style={{ height: "40%"  , width : "80%"}}   type="button" value = "view"  onClick={()  => {  navigate(  "/home/dashboard/student"      ,   { state: {     schoolId : data[index]._id.$oid ,        programId :  data[index].program_id   }}        ,  { replace : false}  )  }  } /> 
                        
                   </div>  


                   <div   className="clientview_table_row_box"  style= {{  width: "12%"  ,    height: "100%"  , borderRight : "1px solid black"}}> 
                    <p>Active</p>
                   </div>  

       

                 </div>  

))                 }

                  </div>
                  
                  
        
                  </div> 
    
                  <div className="body3"> 
                   
                  </div>
                
                </div>
    
    
    
        </div>

        ) ;
    }
} 

export default SchoolView;