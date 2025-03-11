"use client";

import { Suspense, useEffect } from "react";
import useAuth from '@/Hooks/useAuth';
import Logo from '@/Shared/Logo';
import Link from 'next/link';
import { useRouter, useSearchParams } from 'next/navigation';
import { useState } from 'react';
import { useForm } from 'react-hook-form';
import { FaEye } from "@react-icons/all-files/fa/FaEye";
import { FaEyeSlash } from "@react-icons/all-files/fa/FaEyeSlash";
import Cookies from "js-cookie";
import { closeSwal, showError, showLoading, showSuccess } from "./Swal";

const LoginPage = () => {
    const searchParams = useSearchParams();
    const [message, setMessage] = useState('');
    const [pathName, setPathName] = useState('');
    useEffect(() => {
        setMessage(searchParams.get('message'));
        setPathName(searchParams.get('redirect'));
    }, [searchParams]);


    const router = useRouter();

    const { register, handleSubmit, formState: { errors }, reset } = useForm();
    const { signIn } = useAuth();
    const [showPassword, setShowPassword] = useState(false);

    const togglePasswordVisibility = () => {
        setShowPassword(prev => !prev);
    };

    function getUserToken() {
        return new Promise((resolve) => {
            const intervalId = setInterval(() => {
                const token = Cookies.get('userToken');
                if (token) {
                    clearInterval(intervalId); // Stop polling once the token is found
                    resolve(token);
                }
            }, 100); // Check every 100ms
        });
    }

    const onSubmit = (data) => {
        const email = data.email;
        const password = data.password;

        // Show the loading spinner
        showLoading()

        signIn(email, password)
            .then(async (res) => {
                const user = res.user;
                const token = await getUserToken();
                if (user && token) {
                    closeSwal();
                    showSuccess()
                }
                if (typeof window !== "undefined") {
                    const paymentLink = sessionStorage.getItem('paymentLink');
                    if (pathName) {
                        return router.replace(`${pathName}`); // Use `replace` instead of `push`
                    } else if (paymentLink) {
                        router.replace(paymentLink + `?prefilled_email=${user.email}`);
                        return sessionStorage.removeItem('paymentLink');
                    } else {
                        return router.replace('/');
                    }
                }
            })
            .catch((err) => {
                showError(err.code?.split('auth/')[1] || 'An error occurred during sign-in', 'Sign In Failed');
            });
    };

    return (
        <div className='h-screen flex items-center justify-center bg-white md:px-0 px-6'>
            <div className='w-full max-w-md bg-gray-100 rounded-[20px] border border-[#E0E0E0]'>
                <form className="card-body" onSubmit={handleSubmit(onSubmit)}>
                    <h3 className='text-center text-red-500'>{message}</h3>
                    <div className='w-3/4'>
                        <Logo />
                    </div>
                    <h2 className='text-base font-normal nunito'>Welcome back. Please enter your details</h2>
                    <div className="form-control">
                        <label className="label">
                            <span className="label-text text-[#5C6272] font-normal text-base nunito">Email/User name</span>
                        </label>
                        <input
                            type="email"
                            placeholder="emailaddress@gmail.com"
                            className="input input-bordered rounded-[10px] bg-[#FAFAFB] border border-[#5C6272]"
                            {...register('email', { required: 'Email is required' })}
                        />
                        {errors.email && <p className="text-red-500 text-sm">{errors.email.message}</p>}
                    </div>
                    <div className="form-control">
                        <label className="label">
                            <span className="label-text text-[#5C6272] font-normal text-base nunito">Password</span>
                        </label>
                        <div className='relative'>
                            <input
                                type={showPassword ? 'text' : 'password'}
                                placeholder="password"
                                className="input input-bordered rounded-[10px] bg-[#FAFAFB] border border-[#5C6272] w-full"
                                {...register('password', { required: 'Password is required' })}
                            />
                            {
                                !showPassword &&
                                <FaEye
                                    className='text-[#999999] absolute right-4 top-1/2 bottom-1/2 cursor-pointer'
                                    onClick={togglePasswordVisibility}
                                    style={{ transform: "translateY(-50%)" }}
                                />
                            }
                            {
                                showPassword &&
                                <FaEyeSlash
                                    className='text-[#999999] absolute right-4 top-1/2 bottom-1/2 cursor-pointer'
                                    onClick={togglePasswordVisibility}
                                    style={{ transform: "translateY(-50%)" }}
                                />
                            }
                        </div>
                        {errors.password && <p className="text-red-500 text-sm">{errors.password.message}</p>}
                        <label className="label">
                            <Link href="/login/resetPassword" className="label-text-alt link link-hover">Forgot password?</Link>
                        </label>
                    </div>
                    <div className="form-control w-full mx-auto">
                        <button type="submit" className="btn rounded-[10px] btn-primary bg-primary text-white">Login</button>
                        <label className="label mt-2">
                            <span className='text-[#AEAEAE] text-base nunito font-normal'>
                                Don’t have an account?
                                <Link href="/register" className="label-text-alt link link-hover underline text-base"> SignUp</Link>
                            </span>
                        </label>
                    </div>
                </form>
            </div>
        </div>
    );
};

export default function Login() {
    return (
        <Suspense>
            <LoginPage />
        </Suspense>
    );
}
