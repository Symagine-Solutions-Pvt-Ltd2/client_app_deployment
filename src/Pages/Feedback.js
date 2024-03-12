import { useState  , useEffect } from "react"; 
import Sidebar from "../Sidebar"  ;
import "../Style/ClientView.css" ; 
import {Link , useNavigate  , useLocation} from "react-router-dom" ;
import axios from "axios"  ;  


function Feedback() {    

  const [ data , setData ] = useState( []); 

    const location = useLocation();    
    const  navigate = useNavigate() ; 

  
    const [ feedbackArray , setFeedbackArray ] = useState( []);  

    


    console.log(  location.state.programId )  ; 
    console.log(  location.state.schoolId )  ; 
    console.log(  location.state.data )  ; 
    console.log(  location.state.userInfo )  ; 
    console.log(  location.state.data1 )  ; 



    
    useEffect(() => {   
      
      
     if(    location.state.data.bp_name !== ""  ){ 

      axios({ 
  
        url : "https://learn-up.app/admin/all_bp"  ,  
        method : "POST"  , 
        data : {
          
          "search_key" :    location.state.data.bp_name  
 
        }
 
       }).then( ( res) => {   
 
 
        // console.log(  res.data ) ;  

         if( res.data.message === "Information retrieve successfully"){
        
  
          const  tempData = res.data.data ;  
          const tempData3 = [] ;

          tempData.map((  el , index ) => {
            
            /* console.log( location.state.data.bp_answer[index] ) ; 
            console.log(  el) ;
            console.log(  index ) ; */   

            let data1 = { 
             "id"  :  index , 
              "task" :  el.task_name ,
              "ans" : location.state.data.bp_answer[index]
            }  
            
          tempData3.push( data1) ; 
          

          } );

              setFeedbackArray( location.state.data.bp_feedback )  ;
              setData( tempData3) ; 

         }
      
 
       } ).catch(( err) => {  
           console.log( "error") ;
 
        }  ) ; 

  } 

} , [])  ; 


   
    
   const  updateAnswer = (  e ,  index  ) => {
     
  
    console.log ( index )  ;   
    console.log ( e.target.value )  ;   
    
    const demoFeedback  =  feedbackArray  ;
    demoFeedback[index]   =  e.target.value; 
    setFeedbackArray( demoFeedback)  ;   


    e.preventDefault() ; 
    
}




     // submit feedback    
    const  submitFeedback = (  ) => {    
    
     console.log( "dhjzga") ;   
      
     console.log( feedbackArray ) ;   
    

     axios({ 
      
      url : "https://learn-up.app/admin/bp_feedback"  ,   

      method : "POST"  , 
      data : {
        
        "_id" :   location.state.data._id , 
        "bp_feedback" : feedbackArray  ,
        "certificate" : "Yes" 
      }

     }).then( ( res) => {   

         // console.log( res) ; 
          
          
           if(   res.data.message === "Feedback added successfully"){
             
            alert( res.data.message  );
            navigate(  "/home/dashboard/student"      ,   { state: {     schoolId :  location.state.schoolId  ,        programId :   location.state.programId    ,    userInfo :  location.state.userInfo   ,   data : location.state.data1      }}        ,  { replace : false}  ) ;
          } else{

            alert(  res.data.message) ;  
          }
 



     } ).catch(( err) => { 
         console.log( "error") ;

      }  ) ;  
 





 } 
 




     

    return(  

    <div className="clientview" >  

            <div className="clientview_sidebar"  style={{ borderRadius : 25}} >
                   <Sidebar    info = {  location.state.userInfo}   /> 
            </div>  



            <div className="clientview_body"   style={ {  justifyContent : "flex-start"  , backgroundColor : "#fff" }}>   




             <div  className="clientview_body1" > 
          


             </div>
            
              <div className= "clientview_table_outer_div_body2" style={{  height : "70%"}}   >   
    

               <div className="clientview_table_inner_div_column_name"  style={ { height : "25%"}}>  
               
               <div    className="clientview_table_row_box"  style= {{   width: "25%" , height: "100%"   , borderRight : "1px solid #B6B7D0" }}>
                 <p className="header_text">Details</p>
               </div>
               <div   className="clientview_table_row_box"  style= {{   width: "25%" ,  height: "100%"  , borderRight : "1px solid #B6B7D0"}  }>
                 <p className="header_text">Student's answer</p>
               </div>
               <div  className="clientview_table_row_box"   style= {{  width: "30%"  ,  height: "100%"    , borderRight : "1px solid #B6B7D0"}}>
                 <p className="header_text">Feedback</p>
               </div> 
               <div   className="clientview_table_row_box"  style= {{   width: "20%"  ,  height: "100%"  }}> 
               </div> 


              </div>  



              <div  className="clientview_table_inner_div_table_row">
                   
              {   
               


              data.map( (  el  , index   )  => ( 


                <div  key= { index }    style={ {  width : "100%" , height: "33.3%"   , display : "flex" , flexDirection : "row"   ,   borderBottom : "1px solid black" } }>  



               <div   className="clientview_table_row_box"  style= {{   width: "25%" , height: "100%", borderRight : "1px solid black" }}>
                 <p> {  el.task} </p>
               </div>
               <div  className="clientview_table_row_box"  style= {{   width: "25%" ,  height: "100%" , borderRight : "1px solid black"}  }>
                 <p> {  el.ans } </p>
               </div> 


               <div    className="clientview_table_row_box"  style= {{  width: "30%"  ,  height: "100%"   , borderRight : "1px solid black"}}>
                
               <input type="text"   style={{ width : "80%"  ,height : "60%"  , borderRadius : 15  ,   border : "1px solid #5E81F4" }}   defaultValue = {  feedbackArray[index] }    name="feedback"  onChange={  ( e ) => { updateAnswer( e ,   index  ) }}     /> 

               </div>  


               <div  className="clientview_table_row_box"   style= {{   width: "20%"  ,  height: "100%"  , borderRight : "1px solid black"  , display:"flex"  , flexDirection :"row"  , justifyContent: "space-around"}}>  
             
               <button  style = {{  height : "40%"  , width : "36%"   , backgroundColor : "#FCC046"  , border : "0px"  , borderRadius :  15 }}  onClick={() => { submitFeedback()   }}>Share</button>   
               </div> 


              </div>  
            
              
              ) )

              }
            </div> 
            <div className="clientview_table_inner_div_column_name"  style={ { height : "25%"}}>  
               
               <div    className="clientview_table_row_box"  style= {{   width: "33%" , height: "100%"   , borderRight : "1px solid #B6B7D0" }}>
                 <p className="header_text">Task Completed</p>
               </div>
               <div   className="clientview_table_row_box"  style= {{   width: "33%" ,  height: "100%"  , borderRight : "1px solid #B6B7D0"}  }>
                 <p className="header_text">bkkk</p>
               </div>
               <div  className="clientview_table_row_box"   style= {{   width: "33%"  ,  height: "100%"  , display:"flex"  , flexDirection :"row"  , justifyContent: "space-around"}}>  
             
             <button  style = {{  height : "40%"  , width : "50%"   , backgroundColor : "#FCC046"  , border : "0px"  , borderRadius :  15   , fontWeight : 600 }}  onClick={() => {  }}>See Student Answers</button>   
             </div> 
               


              </div>  
              </div> 

              <div className="body3"> 

              <div  style = {{ width : "25%"  , height : "34%"  ,  padding : "2" , borderRadius: 25}}   onClick={ () => { submitFeedback() } }  className="add_new_program_button">
                <p  style={ { textAlign : "center"}}>Approve (to allow download of certificate)</p>
              </div>
            
              </div>
             
            </div>



    </div> 



      
    


    )  ;

}   



export default Feedback ; 