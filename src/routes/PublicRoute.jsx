import { useContext } from 'react';
import { Redirect } from 'wouter';
import { AuthContext } from '../context/AuthProvider';

export const PublicRoute = ({ children }) => {

    const  auth  = useContext(AuthContext);

    return !auth ? <>{ children }</> : <Redirect to='home' />;
}