import { useEffect } from 'react';
import io from 'socket.io-client';
import { socketStore, tokenStore } from '../stores';

export const useSocket = () => {

    const { token } = tokenStore();
    const { socket, setSocket, setOnline } = socketStore();

    useEffect(() => {
        if(socket) {
            setOnline(socket.connected);
            socket.on('connect', () => setOnline(true));
            socket.on('disconnect', () => setOnline(false));
        } 

        return () => {
            socket?.off('connect');
            socket?.off('disconnect');
        }
    }, [socket]);

    const socketConnect = (urlServer) => {
        const sio = io(urlServer, {
            transports: ['websocket'],
            auth: { token }
        });

        setSocket(sio);
    }
    
    return {
        socketConnect
    }
}

// export const useSocket = (urlServer, auth) => {

//     const [online, setOnline] = useState(false);
//     const { token } = tokenStore();

//     const socket = useMemo(() => auth && io.connect(urlServer, {
//         transports: ['websocket'],
//         auth: {
//             token
//         }
//     }), [auth]);

//     useEffect(() => {
//         auth && setOnline(socket.connected);
//     }, [auth]);

//     useEffect(() => {
//         auth && socket.on('connect', () => setOnline(true));
//     }, [auth]);

//     useEffect(() => {
//         auth && socket.on('disconnect', () => setOnline(false));
//     }, [auth]);

//     return {
//         socket,
//         online
//     }
// }