import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter  , Route , Routes }  from "react-router-dom"  ; 
import './index.css';
import reportWebVitals from './reportWebVitals'; 




// real page imports  

import Course from './Pages/Course'; 
import GettingStarted from './Pages/GettingStarted' ;  
import Login from "./Pages/Login" ;  
import Home from "./Pages/Home" ;  
import SchoolView from "./Pages/SchoolView"    ; 
import StudentView from "./Pages/StudentView"  ;  
import AddAccount from './Pages/AddAccount'; 
import FacilitatorView from  "./Pages/FacilitatorView"  ;
import BusinessPlan from './Pages/BusinessPlan';  
import CourseDetails from './Pages/CourseDetails'; 
import EditAccount from './Pages/EditAccount'; 
import RequireAuth from './Pages/RequireAuth';  
import Password from './Pages/Password';
import Feedback  from './Pages/Feedback.js';
import StudentAnswer from './Pages/StudentAnswer.js';
import   PrivacyPolicyAndTC from "./Pages/PrivacyPolicyAndTC.js"  ;







const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
   <BrowserRouter> 
         
       {/* // real routes    
       // client app  routes
 */}
   <Routes> 
      
 <Route path= "/"   >  
 <Route index element={<GettingStarted />} />  
 <Route path= "login"  element ={  <Login/>  } />   
 <Route path= "policy"  element ={  <PrivacyPolicyAndTC/>  } />



    
 <Route  element = {<RequireAuth /> }> 
 <Route path= "home"  >  
 <Route path= "resetpassword"  element ={  <Password/>  } />   
   <Route index element ={  <Home/> } />   
   <Route path= "dashboard" >
        <Route index  element ={  <SchoolView />  } />   
        <Route  path= "addschool"  element ={  <AddAccount/> }  /> 
        <Route  path= "editschool"  element ={  <EditAccount/> }  />   
        <Route  path= "facilitator"  element ={  <FacilitatorView/> }  />    
        <Route  path= "addfacilitator"  element ={  <AddAccount/> }  /> 
        <Route  path= "editfacilitator"  element ={  <EditAccount/> }  />   


        <Route  path= "student"  >
           <Route index  element ={  <StudentView /> }  />  
           <Route  path= "addstudent"  element ={  <AddAccount/> }  />
           <Route  path= "editstudent"  element ={  <EditAccount/> }  />    
           <Route  path= "viewplan"  element ={  <Feedback /> }  />   
           <Route  path= "studentanswer"  element ={  <StudentAnswer /> }  />  
        </Route>   

        
   </Route>  
   <Route path= "viewcourse"  >
       <Route index  element ={  <Course /> } />   
       <Route  path= "permanentcoursedetails"  element ={  <CourseDetails /> } />  
   </Route>
 </Route>   
  </Route>



  
 </Route>
</Routes>     



       
  </BrowserRouter> 
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
