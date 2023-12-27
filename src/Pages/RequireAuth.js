import { useLocation, Navigate, Outlet } from "react-router-dom";

const RequireAuth = () => {
    const location = useLocation();
    

     console.log (localStorage.getItem('items')); 
   

    return (
            localStorage.getItem('items')
                ? <Outlet /> 
                : <Navigate to="/login"  state = {{ from : location}} replace />
    );
}

export default RequireAuth;