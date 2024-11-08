import { useContext } from "react";
import { AuthContext } from "../AuthenticationContext/AuthProvider";
import { Navigate, useLocation } from "react-router-dom";

const Protectedroutes = ({children}) => {
    const location = useLocation()
    const {user} = useContext(AuthContext)
    if(user){
        return children
    }

    return <Navigate to={'/login'} state={location.pathname}></Navigate>
};

export default Protectedroutes;