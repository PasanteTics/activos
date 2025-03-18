// import React, { useEffect, useState } from 'react'
// import { useLoaderStore } from '../stores/useLoaderStore'
// import { CustomCustomButton } from '../components/CustomCustomButton'
// import { CustomInput } from '../components/formComponents/CustomInput'
// import { useForm } from 'react-hook-form'

// export const LoginPage = () => {

//     const { stopLoading } = useLoaderStore();
//     const [title, setTitle] = useState('Correo')
//     const [titleBtn, setTitleBtn] = useState('Verificar')
//     const { register, handleSubmit, formState: { errors } } = useForm();

//     useEffect(() => {

//         stopLoading();

//     }, [])

//     const onSubmit = (data) => {
//         console.log(data)
//     }

//     return (
//         <div className='flex flex-col h-screen w-dvw items-center m-auto justify-center'>
//             <form className='flex flex-col justify-center gap-y-2' onSubmit={handleSubmit(onSubmit)}>
//                 <CustomInput title={title} labelStyle={'font-semibold'} stylesInput={'w-[250px] '} {...register("correo")} />
//                 <CustomButton titulo={'Ingresar'} moreStyle={'mt-2 border self-end text-sm'} title={titleBtn} type='submit' />
//             </form>
//         </div>
//     )
// }

import React from "react";
import { motion } from 'framer-motion';
import { useForm } from 'react-hook-form';
import { useLogin } from "../hooks";
import { CustomButton, } from "../components/CustomButton";
import { CustomInput } from "../components/formComponents/CustomInput";

export const LoginPage = () => {

    const { handleSubmit, register, reset, formState: { errors }, setValue } = useForm();
    const { verifyEmail, verifyCode, resendCode, showInput, loading, countComplete, timeDown } = useLogin();

    return (
        <div className='flex flex-col h-screen w-dvw items-center m-auto justify-center'>
            <form className="flex flex-col justify-center gap-y-2"
                onSubmit={handleSubmit(showInput ? (field) => verifyEmail(field, reset) : verifyCode)}
            >
                {/* <motion.h1 initial={{ opacity: 0 }} animate={{ opacity: 1, transition: { type: 'keyframes', delay: .3, duration: 1 } }} className="font-bold text-2xl">Login</motion.h1> */}

                {showInput ?
                    (
                        <motion.div
                            className="flex flex-col"
                            initial={{ opacity: 0, x: window.outerWidth }}
                            animate={{ opacity: 1, x: 0 }}
                        >
                            <CustomInput
                                type="email"
                                placeholder="Ingresa el correo"
                                stylesInput={`focus:outline-none border px-2 ${errors.email ? 'focus:border-red-500 border-red-500' : 'focus:border-black'}`}
                                title={'Correo'}
                                labelStyle={'font-semibold mb-1.5'}
                                disabled={loading}

                                {...register('email', {
                                    required: true, pattern: {
                                        value: /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/,
                                    }
                                })}
                            />
                        </motion.div>
                    ) : (
                        <motion.div
                            initial={{ opacity: 0, x: -window.outerWidth }}
                            animate={{ opacity: 1, x: 0 }}
                            className="flex flex-col"
                        >
                            <CustomInput
                                type='numeric'
                                placeholder='Código'
                                disabled={loading}
                                maxLength={6}
                                className={`focus:outline-none border ${errors.code ? 'focus:border-red-500 border-red-500' : 'focus:border-black'}`}
                                {...register('code', { required: true, maxLength: 6, pattern: { value: /^[0-9]{6}$/ } })}
                                onChange={({ target: { value } }) => setValue('code', value.replace(/[^0-9]/g, ''))}
                            />

                            {
                                countComplete ? (
                                    <motion.div
                                        key="resend"
                                        initial={{ opacity: 0 }}
                                        animate={{ opacity: 1, transition: { type: 'keyframes', delay: .5, duration: 1 } }}
                                        className="flex justify-center gap-y-2 my-4"
                                    >
                                        <a className='text-sm cursor-pointer hover:underline' onClick={resendCode}>Reenviar código</a>
                                    </motion.div>
                                ) : (
                                    <motion.div
                                        key="countdown"
                                        initial={{ opacity: 0 }}
                                        animate={{ opacity: 1, transition: { type: 'keyframes', delay: .5, duration: 1 } }}
                                        className="flex justify-center gap-y-2 my-4"
                                    >
                                        <p className="text-sm">Solicite nuevamente el código en {' '}
                                            <span className="text-sm font-bold">{timeDown}</span> {' '}
                                            minutos.
                                        </p>
                                    </motion.div>
                                )
                            }
                        </motion.div>
                    )
                }

                <motion.div
                    className="flex flex-col justify-end"
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1, transition: { type: 'keyframes', delay: .5, duration: 1 } }}
                >
                    <CustomButton key="nextBtn" moreStyle="min-w-20  mt-2 border self-end  text-sm" disabledBtn={loading} type="submit">
                        {
                            loading ?
                                <div className="animate-spin  inline-block w-5 h-5 border-[3px] border-current border-t-transparent text-white rounded-full" role="status" aria-label="loading" />
                                : showInput ? 'Verificar' : 'Autenticar'
                        }
                    </CustomButton>
                </motion.div>
            </form>
        </div>
    )
}