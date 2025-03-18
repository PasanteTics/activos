import { useContext } from 'react';
import { Redirect } from 'wouter';
import { AuthContext } from '../context/AuthProvider';

export const PrivateRoute = ({ children }) => {

    const { auth } = useContext(AuthContext);

    return auth ? <>{ children }</> : <Redirect to='login' />;
}