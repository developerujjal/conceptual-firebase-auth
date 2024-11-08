import { createContext } from "react";
import PropTypes from 'prop-types';

const AuthContext = createContext(null)

const AuthenticationConext = ({ children }) => {
    return (
        <AuthContext.Provider>
            {children}
        </AuthContext.Provider>
    );
};

AuthenticationConext.propTypes = {
    children: PropTypes.node
}

export default AuthenticationConext;