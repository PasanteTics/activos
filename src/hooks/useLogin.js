import { useState } from "react";
import { tokenStore } from "../stores";
import { useAxios } from "../hooks";
import { useCounter } from "./useCounter";
import { navigate } from "wouter/use-browser-location";

export const useLogin = () => {

    const [idUser, setIdUser] = useState(null);
    const [email, setEmail] = useState(null);
    const [showInput, setShowInput] = useState(true);
    const [expired, setExpired] = useState(null);
    const [loading, setLoading] = useState(false);

    const { get } = useAxios();
    // const { toast } = useToast();
    const { countComplete, timeDown } = useCounter(expired);

    const { setToken } = tokenStore();

    const verifyEmail = async ({ email }, reset) => {
        try {
            setLoading(true);
            setEmail(email);

            const { ok, message, data: { user, expired } } = await get(`/api/auth/${ email }`);
            
            if(!ok) {
                setIdUser(null);
                setLoading(false);
                setShowInput(true);
                showToast(message);
                return;
            }
    
            reset();
            setIdUser(user._id);
            setExpired(expired);
            setShowInput(false);
            setLoading(false);
        } catch (error) {
            console.log(error);
            showToast(error.message);
        }

    }

    const verifyCode = async ({ code }) => {
        try {
            setLoading(true);
    
            const { ok, message, data } = await get(`/api/auth/${ idUser }/${ code }`);
    
            if(!ok) {
                setLoading(false);
                showToast(message);
                return;
            }
    
            setToken(data);
            setLoading(false);
            setShowInput(false);
            navigate('/', { replace: true });
        } catch (error) {
            console.log(error);
            // showToast(error.message);
        }
    }

    const resendCode = async () => {
        try {
            setLoading(true);
    
            const { ok, message, data: { expired } } = await get(`/api/auth/${ email }`);
           
            if(!ok) {
                setIdUser(null);
                setLoading(false);
                showToast(message);
                return;
            }
    
            setExpired(expired);
            setLoading(false);
        } catch (error) {
            console.log(error);
            showToast(error.message);
        }
    }

    // const showToast = (description) =>  toast({ title: '¡Atención!', description });

	return {
        verifyEmail,
        verifyCode,
        resendCode,
        showInput,
        loading,
        countComplete,
        timeDown
    }
} 