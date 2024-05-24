import { Navigate, useLocation } from "react-router-dom";
import UseAdmin from "../Hooks/UseAdmin";
import useAuth from "../Hooks/useAuth";


const AdminRoute = (children) => {
    const  [isAdmin, isAdminLoading] = UseAdmin()
    const { user, loading } = useAuth()
    const location = useLocation()

    if(loading || isAdminLoading){
        return <span className="loading loading-spinner text-neutral"></span>
    }
    if(user && isAdmin){
        return children;
    }

    return <Navigate to='/login' state={{from: location}} replace></Navigate>
};

export default AdminRoute;