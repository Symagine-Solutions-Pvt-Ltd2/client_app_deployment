import "../Style/BusinessPlan.css" ; 
import { useState } from "react"; 
import Sidebar from "../Sidebar"  ; 
import {Link , useNavigate  , useLocation} from "react-router-dom" ; 

 

function BusinessPlan() {    
      

    const  navigate = useNavigate() ;   
    const location = useLocation();  

    const goToNext = () => {
  
        navigate(  "/home/dashboard/client/addclient"   ,  { replace : false}  ) ; 
        // console.log("ASJghshGHS") ;  
 
 
 
 
       }  

    return(
   <div className="BusinessPlan" > 

    <div className="BusinessPlan_Sidebar" >
       <Sidebar   info = {  location.state.userInfo}  />
    </div> 
    <div className="BusinessPlan_Body" >   


    <div  className="clientview_body1"> 
             <p>hjxgajgj</p> 
             </div>



    <div className="clientview_table_outer_div_body2">   
    

    <div className="clientview_table_inner_div_column_name">  
    <div  style= {{   width: "15%"  ,  height: "100%"  , backgroundColor : "pink"  ,  borderRight : "1px solid black" }}>
    <p>Sl No</p>
    </div> 
    <div style= {{   width: "20%" , height: "100%"  , backgroundColor : "pink"  , borderRight : "1px solid black" }}>
      <p>Type</p>
    </div>
    <div style= {{   width: "20%" ,  height: "100%"  , backgroundColor : "pink" , borderRight : "1px solid black"}  }>
      <p>Name of task</p>
    </div>
    <div style= {{  width: "20%"  ,  height: "100%"  , backgroundColor : "pink"  , borderRight : "1px solid black"}}>
      <p>Number of Characters</p>
    </div> 
  
    <div style= {{   width: "25%"  ,    height: "100%"  , backgroundColor : "pink" , borderRight : "1px solid black"}}> 
    
    </div>  

   </div> 
   <div  className="clientview_table_inner_div_table_row">
     
     <p> business plan </p>
   </div>
   
   

   </div>   
   


   <div className="body3"> 

<div onClick={ () => { goToNext() } } className="add_new_program_button">
  <p>Add new client</p>
</div>

</div>

    


    </div>

   </div>
    )
} 

export default BusinessPlan;