import { useState  , useEffect } from "react"; 
import Sidebar from "../Sidebar"  ;
import "../Style/ClientView.css" ; 
import {Link , useNavigate  , useLocation} from "react-router-dom" ;
import axios from "axios"  ;  
import { PDFDownloadLink, Document, Page  , Text  ,  StyleSheet   , View  , Image   } from '@react-pdf/renderer'


function Feedback() {    

  const [ data , setData ] = useState( []); 
  const [ feedbackArray , setFeedbackArray ] = useState( []);  

    const location = useLocation();    
    const  navigate = useNavigate() ; 



   // console.log(  location.state.data )  ; 
   // console.log(  location.state.userInfo )  ; 
   // console.log(  location.state.typeId )  ; 
   // console.log(  location.state.schoolId )  ;
   // console.log(  location.state.programId )  ; 
   // console.log(  "feedback" )  ;
    



    
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
            
           // console.log( location.state.data.bp_answer[index] ) ; 
           // console.log(  el) ;
           // console.log(  index ) ;   

            let data1 = { 
             "id"  :  index , 
              "task" :  el.task_name ,
              "ans" : location.state.data.bp_answer[index].text   , 
              "image" :  location.state.data.bp_answer[index].image 
            }  
            
          tempData3.push( data1) ; 
          

          } );

              setFeedbackArray( location.state.data.bp_feedback )  ;
              setData( tempData3)  ; 

         }
    
 
       } ).catch(( err) => {  
          // console.log( "error") ;
 
        }  ) ; 

  } else{
    

    setTimeout(() => {
      alert( "Business Plan not submitted by student !") ;
    }, 500) 
  
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
    
    // console.log( "dhjzga") ;   
      
    // console.log( feedbackArray ) ;   
    

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
          navigate(  "/home/dashboard/client/student"      ,   { state: {    typeId :  location.state.typeId   ,   schoolId :   location.state.schoolId  ,      programId : location.state.programId    , userInfo :  location.state.userInfo      }}        ,  { replace : false}  ) 
          } else{

            alert(  res.data.message) ;  
          }
 



     } ).catch(( err) => { 
        // console.log( "error") ;

      }  ) ;  
 





 } 
 
  



  // to download images of bplan answers submitted by students 
   
 const  bpAnswerImageDownload = ( img_url  ) => {   

   // console.log(  img_url )  ; 
 

    if( img_url != ""){
     
          
      axios({ 
      
        url : "https://learn-up.app/admin/bp_feedback"  ,   
  
        method : "GET"  , 
  
       }).then( ( res) => {   
  
  
       } ).catch(( err) => { 
          // console.log( "error") ;
  
        }  ) ;  



    }else{


      alert( "No image found") ;
    }

 }   


  

 
   
const MyDoc = () => {  
  
 
 return(
 <Document> 
      <Page >
    <View>
      <Text style={{  fontWeight : 800 }}  >Student Name : </Text>
      <Text style= {{ fontWeight : 200 }}>{ location.state.data.student_name }</Text>
       <Text>    </Text>
       <br />
       <br />
       <Text style={{  fontWeight : 800 }}  >School Name : </Text>
      <Text>{ location.state.data.school_name }</Text>
      <Text>    </Text>
      <Text>Business Plan : </Text>
      <Text>    </Text>
    </View>
   {
    data.map( ( el   , index ) => {
     return(
     <View key={ index } >   
          
       <Text>   </Text>
        <Text>Task Name : { el.task}</Text>
        <Text>Student Answer :  {  el.ans } </Text> 
        <Image   src= "https://learn-up.s3.eu-central-1.amazonaws.com/9102_20240215_083356_087544.jpg"   style={{ width : "350px" , height : "350px"}}    /> 
        </View>
     )
   }

   ) 
}   


</Page>
 </Document>
)  ; 

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
               
               <div    className="clientview_table_row_box"  style= {{   width: "30%" , height: "100%"   , borderRight : "1px solid #B6B7D0" }}>
                 <p className="header_text">Details</p>
               </div>
               <div   className="clientview_table_row_box"  style= {{   width: "25%" ,  height: "100%"  , borderRight : "1px solid #B6B7D0"  }  }>
                 <p className="header_text">Student's answer</p>
               </div> 
               <div   className="clientview_table_row_box"  style= {{   width: "7%" ,  height: "100%"  , borderRight : "1px solid #B6B7D0" }  }>
                 <p className="header_text">Img</p>
               </div>
               <div  className="clientview_table_row_box"   style= {{  width: "30%"  ,  height: "100%"    , borderRight : "1px solid #B6B7D0"}}>
                 <p className="header_text">Feedback</p>
               </div> 
               <div   className="clientview_table_row_box"  style= {{   width: "8%"  ,  height: "100%"  }}> 
               </div> 


              </div>  



              <div  className="clientview_table_inner_div_table_row">
                   
              {   
               


              data.map( (  el  , index   )  => ( 


                <div  key= { index }    style={ {  width : "100%" , height: "33.3%"   , display : "flex" , flexDirection : "row"   ,   borderBottom : "1px solid #B6B7D0" } }>  



               <div   className="clientview_table_row_box_scrollable"  style= {{   width: "30%" , height: "100%", borderRight : "1px solid #B6B7D0" }}>
                 <p> {  el.task} </p>
               </div>
               <div  className="clientview_table_row_box_scrollable"  style= {{   width: "25%" ,  height: "100%" , borderRight : "1px solid #B6B7D0"}  }>
                 <p> {  el.ans } </p>
               </div> 

               <div  className="clientview_table_row_box"   style= {{   width: "7%"  ,  height: "100%"  , borderRight : "1px solid #B6B7D0"  , display:"flex"  , flexDirection :"row"  , justifyContent: "space-around"}}>  
             
                <button  style = {{  height : "40%"  , width : "70%"   , backgroundColor : "#FCC046"  , border : "0px"  , borderRadius :  15 }}  onClick={() => {   bpAnswerImageDownload(  el.image)  }}>Img</button>   
        </div>  



               <div    className="clientview_table_row_box"  style= {{  width: "30%"  ,  height: "100%"   , borderRight : "1px solid #B6B7D0"}}>
                
               <input type="text"   style={{ width : "80%"  ,height : "60%"  , borderRadius : 15  ,   border : "1px solid #5E81F4" }}   defaultValue = {  feedbackArray[index] }    name="feedback"  onChange={  ( e ) => { updateAnswer( e ,   index  ) }}     /> 

               </div>  


               <div  className="clientview_table_row_box"   style= {{   width: "8%"  ,  height: "100%"    , display:"flex"  , flexDirection :"row"  , justifyContent: "space-around"}}>  
             
               <button  style = {{  height : "40%"  , width : "70%"   , backgroundColor : "#FCC046"  , border : "0px"  , borderRadius :  15 }}  onClick={() => {  }}>Share</button>   
               </div> 


              </div>  
            
              
              ) )

              }
            </div>  

            <div className="clientview_table_inner_div_column_name"  style={ { height : "25%"}}>  
               
               <div    className="clientview_table_row_box"  style= {{   width: "30%" , height: "100%"   , borderRight : "1px solid #B6B7D0" }}>
                 <p className="header_text">Task Completed</p>
               </div>
               <div   className="clientview_table_row_box"  style= {{   width: "32%" ,  height: "100%"  , borderRight : "1px solid #B6B7D0"}  }>
                 <p className="header_text" > {location.state.data.task_completed}  / {location.state.data.task_score } </p>
               </div>
               <div  className="clientview_table_row_box"   style= {{   width: "37%"  ,  height: "100%"  , display:"flex"  , flexDirection :"row"  , justifyContent: "space-around"}}>  
             
             <button  style = {{  height : "40%"  , width : "50%"   , backgroundColor : "#FCC046"  , border : "0px"  , borderRadius :  15   , fontWeight : 600 }}  onClick={() => {  navigate(  "/home/dashboard/student/studentanswer"      ,   { state: {     userInfo :  location.state.userInfo     ,    data :  location.state.data    }}        ,  { replace : false}  )   }}>See Student Answers</button>   
             </div> 
               


              </div>  


              </div> 

              <div className="clientview_body3"   >  
               
               <div    style ={{   width : "60%"  , height : "50%"  ,  display : "flex"  , flexDirection : "row"  , justifyContent : "flex-end"}}  >

        
               <button   className="add_new_program_button" style={{  height : "60%"  ,  padding : "5px"  ,  fontWeight : "600"    }} onClick={() => {}}>  
               <PDFDownloadLink document={<MyDoc />} fileName="business_plan.pdf"  style={{ textDecoration: 'none' }}>
                 {({ blob, url, loading, error }) => (loading ? 'Loading document...' : <p style={{ color : "black"   }}> Download</p>)}
                 </PDFDownloadLink>
               </button>   

               <button  style={ {  height : "60%"  ,  padding : "5px"   ,    backgroundColor:"#FCC046"  , marginTop : "2%"  ,     marginRight : "5%" , 
    borderWidth: "0" , 
    borderRadius:  "25px"   ,  fontWeight : "600" }} onClick={() => {    submitFeedback()  }}> Approve (to allow download of certificate) </button>  
             
             {/*  <div  style = {{ width : "25%"  , height : "100%"  ,  padding : "2"   , borderRadius: 25 ,   fontWeight : 600 }}   onClick={ () => { submitFeedback() } }  className="add_new_program_button">
                <p  style={ { textAlign : "center"  }}>Approve (to allow download of certificate)</p>
              </div> */}
             
              </div> 

              </div>
             
            </div>



    </div> 



      
    


    )  ;

}   



export default Feedback ; 