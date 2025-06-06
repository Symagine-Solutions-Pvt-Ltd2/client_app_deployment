import {Link , useNavigate  , useLocation} from "react-router-dom" ; 
import { useState , useEffect  } from "react"; 
import Sidebar from "../Sidebar"  ;  
import axios from "axios"  ; 
import  "../Style/FacilitatorView.css" ; 
import SearchIcon from '@mui/icons-material/Search';  


import Popup  from "../Components/Popup";




function  FacilitatorView() {    
      
 // for popup 
 const[ popupInfo  , setPopupInfo ] = useState("") ;
 const[ popup  , setPopup ] = useState( false) ; 
 const[ userNameForPopup  , setUserNameForPopup ] = useState( "") ; 
    const [ data , setData ] = useState( []);
    const  navigate = useNavigate() ;   
    const location = useLocation();    
    const [  schoolId  , setSchoolId]   = useState( location.state.schoolId ) ; 
     const [  programId  , setProgramId]   = useState( location.state.programId ) ; 
     const [  typeId  , setTypeId]   = useState( location.state.typeId  ) ;
     const [  searchInput   , setSearchInput ]   = useState( "nil") ;    
 
 

    // // console.log( "FacilitatorView" ) ; 
   // // console.log( location.state.schoolId ) ; 
   // // console.log( location.state.programId ) ;
   // // console.log( location.state.typeId ) ;
    
   
  

    const goToNext = () => {
  
       navigate(  "/home/dashboard/addfacilitator"   ,   { state: {    typeId : "facilitator"    ,   schoolId : schoolId    , programId :  programId  ,   userInfo :  location.state.userInfo  ,  data : location.state.data   }}   ,  { replace : false}  ) ; 
   

      }  
 

  


      
      useEffect(() => { 
    


        axios({ 
  
         url : "https://learn-up.app/facilitator/a_facilitator"  ,  
         method : "POST"  , 
         data : {
           
                  "search_key" : schoolId , 
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
  
    } , [ popup])  ; 
 
  

   


    const  handleStatusChange = ( cs  ) => {    
    
      setPopupInfo( cs) ;
      //// // console.log( cs) ;
      setUserNameForPopup( cs.facilitator_name) ;
        setPopup( true)  ;
      
 } 
  
    
      
 const onSearch  = () => {  


  console.log(  searchInput ) ;     



  axios({ 
 
   url : "https://learn-up.app/facilitator/search_facilitator"  ,   

   method : "POST"  , 
   data : {
     
    "search_key" : location.state.schoolId , 
    "page_no" :  1 ,
     "limit" : 100000    , 
     "search" : searchInput


   }

  }).then( ( res) => {   


    console.log( res  ) ;
     
     if(  res.data.message === "No data found") {
      alert("Data not found");
      setData([]);
    } else if(  res.data.message === "Information retrieve successfully" ) {
      console.log(  res ) ;
      setData( res.data.data);
    }else{
      alert("Data not found");
      setData([]);
    }
  
  }
         ).catch(( err) => {  
      //console.log( "error") ;

   }  ) ; 
    
}





      
 



 
    switch( typeId )  {  
 
 


  case "client" :    
  case "school" : 

  return ( 


    <div className="clientview">  

            <div className="clientview_sidebar" >
                   <Sidebar    info = {  location.state.userInfo}  data =  { location.state.data  }  /> 
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
    
 



                <div className="clientview_table_inner_div_column_name"     >   



               <div   className="clientview_table_row_box"   style= {{   width: "10%"  ,  height: "100%"   ,  borderRight : "1px solid #B6B7D0" }}>
               <p className="header_text">Sl No</p>
               </div>  


               <div   className="clientview_table_row_box"  style= {{   width: "25%" , height: "100%"   , borderRight : "1px solid #B6B7D0" }}>
                 <p className="header_text">Name of facilitator</p>
               </div> 

               <div   className="clientview_table_row_box"  style= {{   width: "25%" ,  height: "100%"   , borderRight : "1px solid #B6B7D0"}  }>
                 <p className="header_text">Email ID</p>
               </div>
               <div  className="clientview_table_row_box"  style= {{  width: "15%"  ,  height: "100%"  , borderRight : "1px solid #B6B7D0"}}>
                 <p className="header_text" >Account Status</p>
               </div> 
               <div    className="clientview_table_row_box" style= {{   width: "25%"  ,  height: "100%"  , borderRight : "1px solid #B6B7D0"}}> 
                <p className="header_text">Account status</p>
               </div> 
   

  

              </div>    


              



               <div  className="clientview_table_inner_div_table_row">
                 
    


               {   
              
              data.map( (  el  , index  )  => ( 



                <div   key={  index  }    style={{   width : "100%"  ,   height: "25%"   ,     backgroundColor : "#FFFFFF"  , borderBottom : "1px solid #B6B7D0"   , display : "flex"  , flexDirection : "row"}}> 


               <div    className="clientview_table_row_box"     style= {{   width: "10%"  ,  height: "100%"  ,  borderRight : "1px solid #B6B7D0" }}>
               <p>  {  index+1 }   </p>
               </div>  


               <div     className="clientview_table_row_box" style= {{   width: "25%" , height: "100%"   , borderRight : "1px solid #B6B7D0" }}>
                 <p>   {  el.facilitator_name}    </p>
               </div> 
               
               <div    className="clientview_table_row_box"  style= {{   width: "25%" ,  height: "100%"  , borderRight : "1px solid #B6B7D0"}  }>
                 <p>  {   el.email_id}  </p>
               </div> 


               <div    className="clientview_table_row_box"   style= {{  width: "15%"  ,  height: "100%"   , borderRight : "1px solid #B6B7D0"}}>
                 <p> { el.status } </p>
               </div>  



               <div  className="clientview_table_row_box"  style= {{   width: "25%"  ,  height: "100%" , borderRight : "1px solid #B6B7D0"  , display:"flex"  , flexDirection :"row"  , justifyContent: "space-around"}}>  


                 <input type="button"  className="inner_table_btn"  value= "Status"     style= {{  width :"36%"  , height:"40%"  ,   border: "0px solid red" }}     onClick= { () => {handleStatusChange( el) } }  /> 

                 <input type="button"   className="inner_table_btn"   value= "Edit"    style= {{ width :"36%"  , height:"40%" ,   border: "0px solid red" }}   onClick={ () =>{  navigate(  "/home/dashboard/editfacilitator"   ,  { state: {    typeId : "facilitator"   ,    data1 : el   ,    userInfo :  location.state.userInfo    ,  data : location.state.data     }}   , { replace : false}  )}} />  




               </div> 


              </div>   

              ))


              }  


              </div> 
              
               



    
              </div> 

              <div className="body3"> 

              <button onClick={ () => { goToNext() } } className="add_new_program_button"  style= { {  backgroundColor : "#FCC046"  , borderRadius : 15 , display : "flex"  , alignItems : "center"  , justifyContent : 'center'} }>
                <p>Add new facilitator</p>
              </button>
            
              </div>
             
            </div>



    </div> 



    ) ;   

    

    case "facilitator" : 

    return (

     
    <div className="clientview">  

    <div className="clientview_sidebar" >
           <Sidebar    info = {  location.state.userInfo}   data  = { location.state.data   }  /> 
    </div> 
    <div className="clientview_body">   



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





        <div className="clientview_table_inner_div_column_name"     >   



       <div   className="clientview_table_row_box"   style= {{   width: "12%"  ,  height: "100%"   ,  borderRight : "1px solid #B6B7D0" }}>
       <p className="header_text">Sl No</p>
       </div>  


       <div   className="clientview_table_row_box"  style= {{   width: "32%" , height: "100%"   , borderRight : "1px solid #B6B7D0" }}>
         <p className="header_text" >Name of facilitator</p>
       </div> 

       <div   className="clientview_table_row_box"  style= {{   width: "36%" ,  height: "100%"   , borderRight : "1px solid #B6B7D0"}  }>
         <p className="header_text">Email ID</p>
       </div>
       <div  className="clientview_table_row_box"  style= {{  width: "20%"  ,  height: "100%"  , borderRight : "1px solid #B6B7D0"}}>
         <p className="header_text">Account Status</p>
       </div> 




      </div>    


      



       <div  className="clientview_table_inner_div_table_row">
         



       {   
      
      data.map( (  el  , index  )  => ( 



        <div   key={  index  }    style={{   width : "100%"  ,   height: "25%"   ,     backgroundColor : "#FFFFFF"  , borderBottom : "1px solid #B6B7D0"   , display : "flex"  , flexDirection : "row"}}> 


       <div    className="clientview_table_row_box"     style= {{   width: "12%"  ,  height: "100%"  ,  borderRight : "1px solid #B6B7D0" }}>
       <p>  {  index+1 }   </p>
       </div>  


       <div     className="clientview_table_row_box" style= {{   width: "32%" , height: "100%"   , borderRight : "1px solid #B6B7D0" }}>
         <p>   {  el.facilitator_name}    </p>
       </div> 
       
       <div    className="clientview_table_row_box"  style= {{   width: "36%" ,  height: "100%"  , borderRight : "1px solid #B6B7D0"}  }>
         <p>  {   el.email_id}  </p>
       </div> 


       <div    className="clientview_table_row_box"   style= {{  width: "20%"  ,  height: "100%"   , borderRight : "1px solid #B6B7D0"}}>
         <p> { el.status } </p>
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

export default FacilitatorView;