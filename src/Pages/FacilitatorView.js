import {Link , useNavigate  , useLocation} from "react-router-dom" ; 
import { useState , useEffect  } from "react"; 
import Sidebar from "../Sidebar"  ;  
import axios from "axios"  ; 
import  "../Style/FacilitatorView.css" ; 




function  FacilitatorView() {    
     
    const [ data , setData ] = useState( []);
    const  navigate = useNavigate() ;   
    const location = useLocation();    
    const [  schoolName  , setSchoolName  ]   = useState( location.state.schoolName  ) ;  
    const [  programName  , setProgramName  ]   = useState( location.state.programName  ) ; 

 

    console.log( schoolName ) ; 
    console.log( location.state.programName ) ;

    const goToNext = () => {
  
       navigate(  "/home/dashboard/addfacilitator"   ,   { state: {    typeId : "system_admin_facilitator"    ,   schoolName : schoolName    , programName :  programName  }}   ,  { replace : false}  ) ; 
   

      }  
 

  


      
      useEffect(() => { 
    


        axios({ 
  
         url : "http://localhost:8000/facilitator/a_facilitator"  ,  
         method : "POST"  , 
         data : {
           
                  "search_key" : schoolName , 
                "page_no" :  1 ,
                 "limit" : 5   
  
         }
  
        }).then( ( res) => {   
  
  
          console.log(  res.data.data ) ; 
           setData(  res.data.data ) ;  
           
           
         //  console.log(   res.data.data[1].name )  ;
  
        } ).catch(( err) => {  
            console.log( "error") ;
  
         }  ) ; 
  
    } , [])  ; 
 
  



 

  return ( 


    <div className="clientview">  

            <div className="clientview_sidebar" >
                   <Sidebar /> 
            </div> 
            <div className="clientview_body">   



             <div  className="clientview_body1"> 
         
             </div>
             



              <div className="clientview_table_outer_div_body2">   
    
 



                <div className="clientview_table_inner_div_column_name"     >   



               <div   className="clientview_table_row_box"   style= {{   width: "10%"  ,  height: "40%"   ,  borderRight : "1px solid black" }}>
               <p>Sl No</p>
               </div>  


               <div   className="clientview_table_row_box"  style= {{   width: "25%" , height: "100%"   , borderRight : "1px solid black" }}>
                 <p>Name of facilitator</p>
               </div> 

               <div   className="clientview_table_row_box"  style= {{   width: "25%" ,  height: "100%"   , borderRight : "1px solid black"}  }>
                 <p>Email ID</p>
               </div>
               <div  className="clientview_table_row_box"  style= {{  width: "15%"  ,  height: "100%"  , borderRight : "1px solid black"}}>
                 <p>Account Status</p>
               </div> 
               <div    className="clientview_table_row_box" style= {{   width: "25%"  ,  height: "100%"  , borderRight : "1px solid black"}}> 
                <p>Account status</p>
               </div> 
   

  

              </div>    


              



               <div  className="clientview_table_inner_div_table_row">
                 
    


               {   
              
              data.map( (  el  , index  )  => ( 



                <div   key={  index  }    style={{   width : "100%"  ,   height: "25%"   ,     backgroundColor : "#FFFFFF"  , borderBottom : "1px solid black"   , display : "flex"  , flexDirection : "row"}}> 


               <div    className="clientview_table_row_box"     style= {{   width: "10%"  ,  height: "100%"  ,  borderRight : "1px solid black" }}>
               <p>  {  index+1 }   </p>
               </div>  


               <div     className="clientview_table_row_box" style= {{   width: "25%" , height: "100%"   , borderRight : "1px solid black" }}>
                 <p>   {  el.facilitator_name}    </p>
               </div> 
               
               <div    className="clientview_table_row_box"  style= {{   width: "25%" ,  height: "100%"  , borderRight : "1px solid black"}  }>
                 <p>  {   el.email_id}  </p>
               </div> 


               <div    className="clientview_table_row_box"   style= {{  width: "15%"  ,  height: "100%"   , borderRight : "1px solid black"}}>
                 <p>Account Status</p>
               </div>  



               <div  className="clientview_table_row_box"  style= {{   width: "25%"  ,  height: "100%" , borderRight : "1px solid black"  , display:"flex"  , flexDirection :"row"  , justifyContent: "space-around"}}>  


                 <input type="button"  value= "Status" className="clientview_table_row_button"    style= {{  width :"40%"  , height:"50%"  ,   border: "0px solid red" }}  /> 

                 <input type="button"  value= "Edit"   className="clientview_table_row_button"     style= {{ width :"40%"  , height:"50%" ,   border: "0px solid red" }}  />  




               </div> 


              </div>   

              ))


              }  


              </div> 
              
               



    
              </div> 

              <div className="body3"> 

              <div onClick={ () => { goToNext() } } className="add_new_program_button"  style= { {  backgroundColor : "#FCC046"}}>
                <p>Add new facilitator</p>
              </div>
            
              </div>
             
            </div>



    </div> 



    ) ;   

  
  
} 

export default FacilitatorView;