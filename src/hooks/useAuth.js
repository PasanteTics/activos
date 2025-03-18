import { useEffect, useState } from "react";
import { useLocation } from "wouter";
// import { socketStore, tokenStore } from "../stores";
import { useAxios } from "../hooks/useAxios";
import { useSocket } from "./useSocket";
import { proxy } from '../../package.json'
import { socketStore } from "../stores/socketStore";

export const useAuth = () => {

    const [auth, setAuth] = useState(false);

    const [_, navigate] = useLocation();
    const { socketConnect } = useSocket();
    // const { toast } = useToast();
    const { get } = useAxios();

    const { token, setToken } = tokenStore();
    const { socket } = socketStore();

    useEffect(() => {
        let subscribed = true;

        if (subscribed && token) verifyAuth();

        return () => subscribed = false;
    }, [token]);

    const verifyAuth = async () => {
        const { ok, message, data } = await get('/api/auth', {
            'Authorization': `Bearer ${token}`
        });

        if (!ok) {
            // toast({ title: '¡Atención!', description: message });
            setAuth(false);
            return;
        }
        console.log('asd')
        setAuth(true);
        socketConnect(proxy);
    }

    const logout = () => {
        setToken(null);
        setAuth(false);
        socket.disconnect();
        navigate('login', { replace: true });
    }

    return {
        auth,
        logout
    }
}