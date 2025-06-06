import {Link , useNavigate  , useLocation} from "react-router-dom" ; 
import { useState   , useEffect } from "react"; 
import Sidebar from "../Sidebar"  ; 
import "../Style/ClientView.css" ; 
import axios from "axios"  ;  
import SearchIcon from '@mui/icons-material/Search';  


 




// popup 
import Popup from "../Components/Popup";
  





function SchoolView() {    
     
   

   // for popup 
   const[ popupInfo  , setPopupInfo ] = useState("") ;
   const[ popup  , setPopup ] = useState( false) ; 
   const[ userNameForPopup  , setUserNameForPopup ] = useState( "") ; 
   const [  searchInput   , setSearchInput ]   = useState( "nil") ;   


    
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
  
    console.log(location.state.clientId  ) ;  
   console.log(location.state.data) ; 


    
    const goToNext = () => {
  
       navigate(  "/home/dashboard/addschool"   ,   { state: {        typeId : "school"  ,   clientId : clientId ,   programId : programId   , programName : "program87"   ,     userInfo :  location.state.userInfo   ,    data :   location.state.data   }}   ,  { replace : false}  ) ; 
       // console.log("ASJghshGHS") ;  

      }   
    
 



      useEffect(() => {    



      if(  typeId === "client"){

      

        axios({ 
  
         url : "https://learn-up.app/admin/ca_school"  ,  
         method : "POST"  , 
         data : {
           
                  "search_key" : location.state.clientId   , 
                "page_no" :  1 ,
                 "limit" : 100000   
  
         }
  
        }).then( ( res) => {   
  
  
          console.log(  res.data ) ;  


           setData(  res.data.data ) ;  
           
           
         // // // console.log(   res.data.data[1].name )  ;
  
        } ).catch(( err) => {  
           // // console.log( "error") ;
  
         }  ) ;   



        }else if(   typeId === "facilitator"  ){


          axios({ 
  
            url : "https://learn-up.app/facilitator/s_facilitator"  ,  
            method : "POST"  , 

            data : { 

               "_id" :location.state.userId 
     
            }
     
           }).then( ( res) => {   
     
     
           // // console.log(  res.data.data ) ; 
            
            const newarr = [  res.data.data ] ;  
           setData( newarr) ;
         // // console.log(  newarr )  ; 
     
           } ).catch(( err) => {  
              // // console.log( "error") ;
     
            }  ) ;   
   

        }else  if(   typeId === "school" ) {
              

             alert("here") ; 
            
             console.log( location.state.data ) ;

          axios({ 
  
            url : "https://learn-up.app/admin/s_details"  ,  
            method : "POST"  , 

            data : { 

               "_id" : location.state.data._id
     
            }
     
           }).then( ( res) => {   
     
     
            console.log(  res) ; 
            
           
           setData( [res.data.data]  ) ;
         // // console.log(  newarr )  ; 
     
           } ).catch(( err) => {  
              // // console.log( "error") ;
     
            }  ) ; 

        // // console.log(  newarr )  ; 
        }

  
    } , [  popup])  ; 
 
  
   
    
    
    

    
    const  handleStatusChange = ( cs  ) => {    
    
      setPopupInfo( cs) ;
      //// // console.log( cs) ;
      setUserNameForPopup( cs.school_name) ;
        setPopup( true)  ;
      
      
 } 



 
  const handleChange1 = ( el ) => {
    
    
    console.log( el ) ;  
   

    
  axios({ 
 
   url : "https://learn-up.app/offline_app/offline_app_s"  ,   

   method : "POST"  , 
   data : {
    
        "s_id" :  el._id


   }

  }).then( ( res) => {   


    console.log( res ) ;
    alert( res.data.message) ; 
  }
  ).catch(( err) => {  
      //console.log( "error") ;

   }  )
   .finally(() => {
       window.location.reload();
  }); 
    
    


  }







   


    
 const onSearch  = () => {  


  console.log(  searchInput ) ;     



  axios({ 
 
   url : "https://learn-up.app/admin/client_s_s"  ,   

   method : "POST"  , 
   data : {
     
    "search_key" :  clientId  , 
    "page_no" :  1 ,
     "limit" : 100000    , 
     "search" :  searchInput


   }

  }).then( ( res) => {   


    console.log( res ) ;
     
     
    if(   res.data.message === "No data found"){
      
      alert(  "Data not found") ;
      setData([]) ;     

      
    }
    else if(  res.data.message === "Information retrieve successfully"  ) {

    // console.log(  res ) ;  
     setData( res.data.data) ; 

    }






  }
         ).catch(( err) => {  
      //console.log( "error") ;

   }  ) ; 
    
} 












    switch( typeId )  {  
    
    case "client" :  


    return(  


  
        <div className="clientview">  
    
                <div className="clientview_sidebar" >
                       <Sidebar   info = {  location.state.userInfo}    data = { location.state.data } /> 
                </div> 
                <div className="clientview_body">   


                

                <Popup  trigger= { popup  } setTrigger={ setPopup }   data={ popupInfo}  >
                <h3>{userNameForPopup}</h3>
                 </Popup>


                 
                 <div  className="clientview_body1">   


                 
      <div className="clientview_body1_search_div"> 


       
<i style={{ position : "absolute" }}>  
 <button className="clientview_body1_search_button"   onClick={() => { onSearch() }}>
 <SearchIcon sx={{   fontSize : 26    }}/> 
 </button>
  </i>
<input   className="clientview_body1_search_input"   type="text" placeholder="Search by name..."    onChange={  ( e ) => {  setSearchInput( e.target.value )} }/>  


</div>


               
                 </div>
                
                  <div className="clientview_table_outer_div_body2">   
        
    
                   <div className="clientview_table_inner_div_column_name">  


                


               <div    className="clientview_table_row_box"    style= {{   width: "7%"  ,  height: "100%"   ,  borderRight : "1px solid #B6B7D0"  }}>
               <p  className="header_text">Sl No</p>
               </div> 
               <div    className="clientview_table_row_box"   style= {{   width: "13%" , height: "100%"  , borderRight : "1px solid #B6B7D0" }}>
                 <p  className="header_text" >Name of school</p>
               </div>
               <div    className="clientview_table_row_box"  style= {{   width: "10%" ,  height: "100%"  , borderRight : "1px solid #B6B7D0"}  }>
                 <p className="header_text">Contact Person</p>
               </div>
               <div    className="clientview_table_row_box"  style= {{  width: "13%"  ,  height: "100%"   , borderRight : "1px solid #B6B7D0"}}>
                 <p className="header_text">Contact Email Id</p>
               </div> 
               <div  className="clientview_table_row_box"   style= {{   width: "10%"  ,  height: "100%" , borderRight : "1px solid #B6B7D0"}}> 
                <p className="header_text">Facilitators</p>
               </div> 

               <div   className="clientview_table_row_box"  style= {{  width: "10%"  ,    height: "100%"   , borderRight : "1px solid #B6B7D0"}}> 
                <p className="header_text">Students</p>
               </div> 
               <div className="clientview_table_row_box"  style= {{   width: "7%"  ,    height: "100%"  , borderRight : "1px solid #B6B7D0"}}> 
                <p className="header_text">Account status</p>
               </div> 
               <div   className="clientview_table_row_box" style= {{   width: "14%"  ,    height: "100%"  , borderRight : "1px solid #B6B7D0"}}> 
                <p className="header_text">Account status</p>
               </div>
                <div   className="clientview_table_row_box" style= {{   width: "8%"  ,    height: "100%"  ,  borderRight : "1px solid #B6B7D0" }}> 
                <p className="header_text">Study Mode</p>
                </div>
             
                <div   className="clientview_table_row_box" style= {{   width: "8%"  ,    height: "100%"  ,  borderRight : "1px solid #B6B7D0"  }}> 
                <p className="header_text">App Status</p>
                </div>
              

              
    
                  </div>  



                  <div  className="clientview_table_inner_div_table_row">
                     
                       


{
                data.map( (  el   , index )  => ( 

    
                  <div  key= {  index} style= {{ width : "100%" , height: "25%"   , display : "flex" , flexDirection : "row"   ,   borderBottom : "1px solid #B6B7D0"}} > 




                  <div   className="clientview_table_row_box"    style= {{   width: "7%"  ,  height: "100%"   ,  borderRight : "1px solid #B6B7D0" }}>
                   <p> {index+1}</p>
                   </div>  

                   <div  className="clientview_table_row_box"  style= {{   width: "13%" , height: "100%"  , borderRight : "1px solid #B6B7D0" }}>
                     <p> {  el.school_name}</p>
                   </div>
                   <div   className="clientview_table_row_box"  style= {{   width: "10%" ,  height: "100%"   , borderRight : "1px solid #B6B7D0"}  }>
                     <p> {  el.contact_person}</p>
                   </div>
                   <div  className="clientview_table_row_box"   style= {{  width: "13%"  ,  height: "100%"  , borderRight : "1px solid #B6B7D0"  , overflow : "hidden"}}>
                     <p> { el.email_id}</p>
                   </div> 
                   <div  className="clientview_table_row_box"   style= {{   width: "10%"  ,  height: "100%"  , borderRight : "1px solid #B6B7D0"  , display: "flex"  ,   flexDirection : "row"}}>   


                   <div  className="clientview_table_row_box"  style={{ height: "100%"  , width : "40%"}}>  
                           <p> { el.total_facilitators } </p> 

                                </div>
                               
              <input  className="inner_table_btn"   style={{ height: "40%"  , width : "50%"}}   type="button" value = "view"  onClick={()  => {        navigate(  "/home/dashboard/facilitator"   ,     { state: {    typeId : "client"  ,    schoolId : data[index]._id  ,      programName : "prijk"  ,    programId :  data[index].program_id   ,    userInfo :  location.state.userInfo     ,  data : location.state.data      }}           ,     { replace : false}  )  }  } /> 
                             
                   </div>   


            <div  className="clientview_table_row_box"  style= {{   width: "10%"  ,  height: "100%" , borderRight : "1px solid #B6B7D0"  , display: "flex"  ,   flexDirection : "row"}}>  

                     <div  className="clientview_table_row_box"   style={{ height: "40%"  , width : "40%"}}> 
                               <p> { el.total_students } </p>
                     </div>
                           
         <input    className="inner_table_btn"   style={{ height: "40%"  , width : "50%"}}   type="button" value = "view"  onClick={()  => {        navigate(  "/home/dashboard/student"      ,   { state: {     schoolId : data[index]._id ,        programId :  data[index].program_id  ,    userInfo :  location.state.userInfo    ,  data : location.state.data  }}        ,  { replace : false}  )  }  } /> 
                        
                   </div>  


                   <div   className="clientview_table_row_box"  style= {{  width: "7%"  ,    height: "100%"  , borderRight : "1px solid #B6B7D0"}}> 
                    <p> { el.status } </p>
                   </div>  

            <div    className="clientview_table_row_box"   style= {{   width: "14%"  ,    height: "100%"  , borderRight : "1px solid #B6B7D0"  ,  display: "flex"  ,   flexDirection : "row"  , justifyContent : "space-around"}}> 
                      

            <input    className="inner_table_btn"    style={{ height: "40%"  , width : "40%"}}   type="button" value = "Status"    onClick= { () => {handleStatusChange( el) } }   />       
                            
                             
           <input    className="inner_table_btn"    style={{ height: "40%"  , width : "40%"  }}   type="button" value = "Edit"  onClick={()  => {        navigate(  "/home/dashboard/editschool"   ,  { state: {    typeId : "school"   ,    data1 : el     ,    userInfo :  location.state.userInfo     }}   , { replace : false}  )  }  } />   

                   </div>


                        
             <div  className="clientview_table_row_box"  style={{ height: "100%"  , width : "8%" ,  borderRight : "1px solid #B6B7D0" }}>  
               
              {  el.study_mode ===  "online" ? <p>Online</p> : <p>Offline</p> } 
                 
            </div>

             <div  className="clientview_table_row_box"  style={{ height: "100%"  , width : "8%" ,  borderRight : "1px solid #B6B7D0" }}>  


                 {  el.study_mode !==  "online" ?
                         
               <input className="inner_table_btn"   style={{ height : "40%"  , width : "70%"}}   type="button" value ={  el.offline_app === "false" ? "Enable" : "Disable" }   onClick= { () => {handleChange1( el) } }   /> 
              
               : <p>Enabled</p>
                 }
            </div>



    

                 </div>  

))                 }

                  </div>
                  
                  
        
                  </div> 
    
                  <div className="body3"> 
    
                  <button onClick={ () => { goToNext() } } className="add_new_program_button"    style = {{  backgroundColor : "#FCC046"  , borderRadius : 15 , display : "flex"  , alignItems : "center"  , justifyContent : 'center' }}>
                    <p> Add new school </p>
                  </button>
                
                  </div>
                
                </div>
    
    
    
        </div>
        ) ;    

     
      
     

















        case "facilitator" :   
     



        return(
    

         
        <div className="clientview">  
    
                <div className="clientview_sidebar" >
                       <Sidebar   info = {  location.state.userInfo}   data= { location.state.data} /> 
                </div> 
                <div className="clientview_body">   

                 <div  className="clientview_body1">  


                   
                 </div>
                
                  <div className="clientview_table_outer_div_body2">   
        
    
                   <div className="clientview_table_inner_div_column_name">  


                


               <div    className="clientview_table_row_box"    style= {{   width: "7%"  ,  height: "100%"   ,  borderRight : "1px solid #B6B7D0" }}>
               <p className="header_text">Sl No</p>
               </div> 
               <div    className="clientview_table_row_box"   style= {{   width: "13%" , height: "100%"  , borderRight : "1px solid #B6B7D0" }}>
                 <p className="header_text">Name of school</p>
               </div>
               <div    className="clientview_table_row_box"  style= {{   width: "13%" ,  height: "100%"  , borderRight : "1px solid #B6B7D0"}  }>
                 <p className="header_text">Contact Person</p>
               </div>
               <div    className="clientview_table_row_box"  style= {{  width: "16%"  ,  height: "100%"   , borderRight : "1px solid #B6B7D0"}}>
                 <p className="header_text">Contact Email Id</p>
               </div> 
               <div  className="clientview_table_row_box"   style= {{   width: "12%"  ,  height: "100%" , borderRight : "1px solid #B6B7D0"}}> 
                <p className="header_text">Facilitators</p>
               </div> 

               <div   className="clientview_table_row_box"  style= {{  width: "12%"  ,    height: "100%"   , borderRight : "1px solid #B6B7D0"}}> 
                <p className="header_text">Students</p>
               </div> 
               <div className="clientview_table_row_box"  style= {{   width: "10%"  ,    height: "100%"  , borderRight : "1px solid #B6B7D0"}}> 
                <p className="header_text">Account status</p>
               </div>  
               
                <div   className="clientview_table_row_box" style= {{   width: "8%"  ,    height: "100%"  ,  borderRight : "1px solid #B6B7D0"  }}> 
                <p className="header_text" >Study Mode</p>
                </div>
                   <div   className="clientview_table_row_box" style= {{   width: "9%"  ,    height: "100%"  ,  borderRight : "1px solid #B6B7D0"  }}> 
                <p className="header_text">App Status</p>
                </div>
              

          
              
    
                  </div>  



                  <div  className="clientview_table_inner_div_table_row">
                     
                       


{
                data.map( (  el   , index )  => ( 

    
                  <div  key= {  index} style= {{ width : "100%" , height: "25%"   , display : "flex" , flexDirection : "row"   ,   borderBottom : "1px solid #B6B7D0"}} > 




                  <div   className="clientview_table_row_box"    style= {{   width: "7%"  ,  height: "100%"   ,  borderRight : "1px solid #B6B7D0" }}>
                   <p> {index+1}</p>
                   </div>  

                   <div  className="clientview_table_row_box"  style= {{   width: "13%" , height: "100%"  , borderRight : "1px solid #B6B7D0" }}>
                     <p> {  el.school_name}</p>
                   </div>
                   <div   className="clientview_table_row_box"  style= {{   width: "13%" ,  height: "100%"   , borderRight : "1px solid #B6B7D0"}  }>
                     <p> {  el.contact_person}</p>
                   </div>
                   <div  className="clientview_table_row_box"   style= {{  width: "16%"  ,  height: "100%"  , borderRight : "1px solid #B6B7D0"  , overflow : "hidden"}}>
                     <p> { el.email_id}</p>
                   </div> 
                   <div  className="clientview_table_row_box"   style= {{   width: "12%"  ,  height: "100%"  , borderRight : "1px solid #B6B7D0"  , display: "flex"  ,   flexDirection : "row"}}>   


                   <div  className="clientview_table_row_box"  style={{ height: "100%"  , width : "50%"}}>  
                           <p> { el.total_facilitators } </p>
                                </div>
                               
                    <input    className="inner_table_btn"   style={{ height: "40%"  , width : "40%"}}   type="button" value = "view"  onClick={()  => {     navigate(  "/home/dashboard/facilitator"   ,     { state: {    typeId : typeId ,    schoolId : data[index]._id.$oid ,       programId :  data[index].program_id      ,   userInfo :  location.state.userInfo    ,  data : location.state.data       }}           ,     { replace : false}  )  }  } /> 
                             
                   </div>   


            <div  className="clientview_table_row_box"  style= {{   width: "12%"  ,  height: "100%" , borderRight : "1px solid #B6B7D0"  , display: "flex"  ,   flexDirection : "row"}}>  

                     <div  className="clientview_table_row_box"   style={{ height: "60%"  , width : "50%"}}> 
                               <p> { el.total_students }</p>
                     </div>
                           
                 <input    className="inner_table_btn" style={{ height: "40%"  , width : "40%"}}   type="button" value = "view"  onClick={()  => {  navigate(  "/home/dashboard/student"      ,   { state: {     schoolId : data[index]._id.$oid ,        programId :  data[index].program_id ,   userInfo :  location.state.userInfo  ,  data : location.state.data     }}        ,  { replace : false}  )  }  } /> 
                        
                   </div>  


                   <div   className="clientview_table_row_box"  style= {{  width: "10%"  ,    height: "100%"  , borderRight : "1px solid #B6B7D0"}}> 
                    <p> {  el.status } </p>
                   </div>  

       
                    <div  className="clientview_table_row_box"  style={{ height: "100%"  , width : "8%" ,  borderRight : "1px solid #B6B7D0" }}>  
               
              {  el.study_mode ===  "online" ? <p>Online</p> : <p>Offline</p> } 
                 
                 </div>

             <div  className="clientview_table_row_box"  style={{ height: "100%"  , width : "9%" ,  borderRight : "1px solid #B6B7D0" }}>  


                 {  el.study_mode !==  "online" ?
                         
               <input className="inner_table_btn"   style={{ height : "40%"  , width : "70%"}}   type="button" value ={  el.offline_app === "false" ? "Enable" : "Disable" }   onClick= { () => {handleChange1( el) } }   /> 
              
               : <p>Enabled</p>
                 }

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
 







        case "school" :  

        return(
    

         
          <div className="clientview">  
      
                  <div className="clientview_sidebar" >
                         <Sidebar   info = {  location.state.userInfo}   data = {location.state.data }/> 
                  </div> 
                  <div className="clientview_body">  
                   <div  className="clientview_body1">   


                
                 
                   </div>
                  
                    <div className="clientview_table_outer_div_body2">   
          
      
                     <div className="clientview_table_inner_div_column_name">  
  
  
                  
  
  
                 <div    className="clientview_table_row_box"    style= {{   width: "7%"  ,  height: "100%"   ,  borderRight : "1px solid #B6B7D0" }}>
                 <p className="header_text">Sl No</p>
                 </div> 
                 <div    className="clientview_table_row_box"   style= {{   width: "15%" , height: "100%"  , borderRight : "1px solid #B6B7D0" }}>
                   <p className="header_text" >Name of school</p>
                 </div>
                 <div    className="clientview_table_row_box"  style= {{   width: "12%" ,  height: "100%"  , borderRight : "1px solid #B6B7D0"}  }>
                   <p className="header_text" >Contact Person</p>
                 </div>
                 <div    className="clientview_table_row_box"  style= {{  width: "18%"  ,  height: "100%"   , borderRight : "1px solid #B6B7D0"}}>
                   <p className="header_text" >Contact Email Id</p>
                 </div> 
                 <div  className="clientview_table_row_box"   style= {{   width: "10%"  ,  height: "100%" , borderRight : "1px solid #B6B7D0"}}> 
                  <p className="header_text"> Facilitators</p>
                 </div> 
  
                 <div   className="clientview_table_row_box"  style= {{  width: "10%"  ,    height: "100%"   , borderRight : "1px solid #B6B7D0"}}> 
                  <p className="header_text" >Students</p>
                 </div> 
                 <div className="clientview_table_row_box"  style= {{   width: "11%"  ,    height: "100%"  , borderRight : "1px solid #B6B7D0"}}> 
                  <p className="header_text">Account status</p>
                 </div>  
  
                  <div   className="clientview_table_row_box" style= {{   width: "8%"  ,    height: "100%"   ,  borderRight : "1px solid #B6B7D0"  }}> 
                <p className="header_text">Study Mode</p>
                </div>
               

                <div   className="clientview_table_row_box" style= {{   width: "9%"  ,    height: "100%"  ,  borderRight : "1px solid #B6B7D0"  }}> 
                <p className="header_text">App Status</p>
                </div>
              
            
                
      
                    </div>  
  
  
  
                    <div  className="clientview_table_inner_div_table_row">
                       
                         
  
  
  {
                  data.map( (  el   , index )  => ( 
  
      
                    <div  key= {  index} style= {{ width : "100%" , height: "25%"   , display : "flex" , flexDirection : "row"   ,   borderBottom : "1px solid #B6B7D0"}} > 
  
  
  
  
                    <div   className="clientview_table_row_box"    style= {{   width: "7%"  ,  height: "100%"   ,  borderRight : "1px solid #B6B7D0" }}>
                     <p> {index+1}</p>
                     </div>  
  
                     <div  className="clientview_table_row_box"  style= {{   width: "15%" , height: "100%"  , borderRight : "1px solid #B6B7D0" }}>
                       <p> {  el.school_name}</p>
                     </div>
                     <div   className="clientview_table_row_box"  style= {{   width: "12%" ,  height: "100%"   , borderRight : "1px solid #B6B7D0"}  }>
                       <p> {  el.contact_person}</p>
                     </div>
                     <div  className="clientview_table_row_box"   style= {{  width: "18%"  ,  height: "100%"  , borderRight : "1px solid #B6B7D0"  , overflow : "hidden"}}>
                       <p> { el.email_id}</p>
                     </div> 
                     <div  className="clientview_table_row_box"   style= {{   width: "10%"  ,  height: "100%"  , borderRight : "1px solid #B6B7D0"  , display: "flex"  ,   flexDirection : "row"}}>   
  
  
                     <div  className="clientview_table_row_box"  style={{ height: "100%"  , width : "50%"}}>  
                             <p> { el.total_facilitators } </p>
                                  </div>
                                 
                <input    className="inner_table_btn"    style={{ height: "40%"  , width : "40%"}}   type="button" value = "view"  onClick={()  => {     navigate(  "/home/dashboard/facilitator"   ,     { state: {    typeId : typeId ,    schoolId : el._id ,       programId :  el.program_id     ,   userInfo :  location.state.userInfo    ,  data : location.state.data      }}           ,     { replace : false}  )  }  } /> 
                               
                     </div>   
  
  
              <div  className="clientview_table_row_box"  style= {{   width: "10%"  ,  height: "100%" , borderRight : "1px solid #B6B7D0"  , display: "flex"  ,   flexDirection : "row"}}>  
  
                       <div  className="clientview_table_row_box"   style={{ height: "40%"  , width : "50%"}}> 
                                 <p> { el.total_students }</p>
                       </div>
                             
                      <input   className="inner_table_btn"  style={{ height: "40%"  , width : "40%"}}   type="button" value = "view"  onClick={()  => {  navigate(  "/home/dashboard/student"      ,   { state: {     schoolId : el._id ,        programId :   el.program_id   ,    userInfo :  location.state.userInfo   ,   data : location.state.data      }}        ,  { replace : false}  )  }  } /> 
                          
                     </div>  
  
  
                     <div   className="clientview_table_row_box"  style= {{  width: "11%"  ,    height: "100%"  , borderRight : "1px solid #B6B7D0"}}> 
                      <p> {  el.status } </p>
                     </div>  
                     
                                     
                      <div  className="clientview_table_row_box"  style={{ height: "100%"  , width : "8%" ,  borderRight : "1px solid #B6B7D0" }}>  
                        
                        {  el.study_mode ===  "online" ? <p>Online</p> : <p>Offline</p> } 
                          
                      </div>

                      <div  className="clientview_table_row_box"  style={{ height: "100%"  , width : "9%" ,  borderRight : "1px solid #B6B7D0" }}>  


                          {  el.study_mode !==  "online" ?
                                  
                        <input className="inner_table_btn"   style={{ height : "40%"  , width : "70%"}}   type="button" value ={  el.offline_app === "false" ? "Enable" : "Disable" }   onClick= { () => {handleChange1( el) } }   /> 
                        
                        : <p>Enabled</p>
                          }
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