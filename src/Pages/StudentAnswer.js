import {Link, useNavigate , useLocation  } from "react-router-dom"  ;  
import { useState  , useEffect } from "react";
import axios from "axios"  ;    
import "../Style/StudentAnswer.css" ; 
import Sidebar from "../Sidebar"  ;




function StudentAnswer() {      

    const [ allData , setAllData ] = useState( []); 
 



    const location = useLocation();    
 //   const  navigate = useNavigate() ; 


    
    console.log(  "studans" )  ;
    console.log(  location.state.data )  ; 
   // console.log(  location.state.userInfo )  ; 
      




    const questionsArray = [
      {
        module_name: "Module 1",
        question: "What is JavaScript?",
        ans: "JavaScript is a programming language commonly used for creating interactive effects within web browsers."
      },
      {
        module_name: "Module 2",
        question: "What are the data types in JavaScript?",
        ans: "The data types in JavaScript include string, number, boolean, object, null, and undefined."
      },
      {
        module_name: "Module 3",
        question: "What is a closure in JavaScript?",
        ans: "A closure is a combination of a function and the lexical environment within which that function was declared."
      }, 

      {
        module_name: "Module 20",
        question: "What are ES6 arrow functions?",
        ans: "ES6 arrow functions are a more concise way to write function expressions in JavaScript."
      } , 



      {
        module_name: "Module 20",
        question: "What are ES6 arrow functions?",
        ans: "ES6 arrow functions are a more concise way to write function expressions in JavaScript."
      }  , 


      {
        module_name: "Module 20",
        question: "What are ES6 arrow functions?",
        ans: "ES6 arrow functions are a more concise way to write function expressions in JavaScript."
      }  , 



      {
        module_name: "Module 20",
        question: "What are ES6 arrow functions?",
        ans: "ES6 arrow functions are a more concise way to write function expressions in JavaScript."
      } , 
      
      {
        module_name: "Module 20",
        question: "What are ES6 arrow functions?",
        ans: "ES6 arrow functions are a more concise way to write function expressions in JavaScript."
      }
    ];
    
     






    useEffect(() => {   
      
   
         axios({ 
     
           url : "https://learn-up.app/admin/mota"  ,  
           method : "POST"  , 
           data : {
             
            "program_id" : location.state.data.program_id , 
            "student_id" :   location.state.data._id  
    
           } 
    
          }).then( ( res) => {   
       
            console.log(  res.data.data ) ; 

            


          let questionAnswerConnect = []  ;  





          for(  let i = 0 ; i < res.data.data.length ;  i++  ){
                  
                 let obj = res.data.data[i] ;
                 let objAns = location.state.data.student_module_details[i] ;
                 let firstKey = Object.keys( obj) ;  
                 let filterKey = firstKey.filter( ( el ) => {
                  return el !== "created_at" ; 
                })
                 
              //   console.log(  filterKey ) ; 
                
              questionAnswerConnect.push(   [ obj[filterKey[0]] ,objAns[filterKey[0]]] )  ; 
            
          }  


           console.log( questionAnswerConnect ) ; 
            
          let finalArrToRender  =[] ;
           



          questionAnswerConnect.map ((  el , index ) =>  {
            
            

             el[0].map(( item , ind)  => {
                 
               
              console.log( item ) ; 
              console.log( el[1][ind] ) ;   
             

              if( item.sub_type ===  "task_text" || item.sub_type ===  "quiz"  ||   item.sub_type === "upload_picture" ){
              let tempObj1 = {
                ques : item  ,
                ans :  el[1][ind]
              }  


          
              finalArrToRender.push(  tempObj1) ;
            }


            }) ; 
            


           }) ; 

           
           console.log( "here") ;
           console.log( finalArrToRender) ;
           setAllData( finalArrToRender) ;
          
        } ).catch(( err) => {  
            console.log(  err) ;
  
         }  ) ; 
   
           
     } , [])  ; 









    return( 
    <div className="answer_main_div" >  

    <div className="answer_main_div_sidebar"  style={{ borderRadius : 25}} >
                   <Sidebar    info = {  location.state.userInfo}   /> 
                   </div> 




       <div className="answer_main_div_body" >  
         
         <div className="answer_inner_div_1" > 
             
             <div style={ {width : "20%" , display : "flex"  , alignItems : 'center'  , justifyContent : "center"}} >
              <p  style={{ fontWeight : "700"  , fontSize : 22}}> Student Name  : </p> 
              </div>
              <div style={ {  display : "flex"  , alignItems : 'center'  , justifyContent : "center"}}  >
              <p> {  location.state.data.student_name} </p> 
              </div>
         </div> 

       <div  className="answer_inner_div_2">
         
       <div className="answer_inner_div_column_name">
        
       <div  className="answer_table_row_box" style= {{   width: "7%"  ,  height: "100%"    ,  borderRight : "1px solid #B6B7D0" }}>
       <p className="header_text">Sl No</p>
       </div>

       <div  className="answer_table_row_box"  style= {{   width: "11%" , height: "100%"    , borderRight : "1px solid #B6B7D0" }}>
         <p className="header_text"  style= {{ textAlign : "center"}}>Module Name</p>
       </div> 

       <div   className="answer_table_row_box" style= {{   width: "11%" ,  height: "100%"  , borderRight : "1px solid #B6B7D0"}  }>
         <p className="header_text" style= {{ textAlign : "center"}}>Content Name</p>
       </div>   

       <div   className="answer_table_row_box" style= {{   width: "11%" ,  height: "100%"  , borderRight : "1px solid #B6B7D0"}  }>
         <p className="header_text" style= {{ textAlign : "center"}}>Content  Type</p>

       </div>  

       <div   className="answer_table_row_box" style= {{   width: "30%" ,  height: "100%"  , borderRight : "1px solid #B6B7D0"}  }>
         <p className="header_text" style= {{ textAlign : "center"}}>Question</p>
         
       </div>  

       <div   className="answer_table_row_box" style= {{   width: "30%" ,  height: "100%"  }  }>
         <p className="header_text" style= {{ textAlign : "center"}}>Answer</p>
         
       </div>   

       </div>  

       <div className="answer_inner_div_table_row">    
      {
           allData.map( (  el   , index )  => (  

            <div  key={ index} style={{ width : "100%" , height : "25%"  , display : "flex"  , flexDirection : "row"   , borderBottom : "1px solid #B6B7D0"  }}>  


 <div  className="answer_table_row_box" style= {{   width: "7%"  ,  height: "100%"    ,  borderRight : "1px solid #B6B7D0" }}>
       <p > { index+1 } </p>
       </div>

       <div  className="answer_table_row_box"  style= {{   width: "11%" , height: "100%"    , borderRight : "1px solid #B6B7D0" }}>
         <p> { el.ques.module_name } </p>
       </div> 

       <div   className="answer_table_row_box" style= {{   width: "11%" ,  height: "100%"  , borderRight : "1px solid #B6B7D0"}  }>
         <p > {   el.ques.text_name ||   el.ques.quiz_name }</p>
       </div>   

       <div   className="answer_table_row_box" style= {{   width: "11%" ,  height: "100%"  , borderRight : "1px solid #B6B7D0"}  }>
         <p > {  el.ques.sub_type }</p>

       </div>  

       <div   className="answer_table_row_box_scrollable" style= {{   width: "30%" ,  height: "100%"  , borderRight : "1px solid #B6B7D0"}  }>
         <p > {  el.ques.enter_text }</p>
         
       </div>  

       <div   className="answer_table_row_box_scrollable" style= {{   width: "30%" ,  height: "100%"  }  }>
         <p > { el.ans } </p>
         
       </div>   
              </div>
            ))

      }
      </div>
    </div>
       </div>
    </div>
    );
} 



export default  StudentAnswer ;