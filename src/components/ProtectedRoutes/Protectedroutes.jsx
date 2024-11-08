import { useContext } from "react";
import { AuthContext } from "../AuthenticationContext/AuthProvider";
import { Navigate } from "react-router-dom";

const Protectedroutes = ({children}) => {
    const {user} = useContext(AuthContext)
    if(user){
        return children
    }

    return <Navigate to={'/login'}></Navigate>
};

export default Protectedroutes;