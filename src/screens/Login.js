import React, { useContext, useState } from 'react';
import loginIcons from '../assest/signin.gif';
import { FaEye, FaEyeSlash } from 'react-icons/fa';
import { Link, useNavigate } from 'react-router-dom';
import SummaryApi from '../common';
import { toast } from 'react-toastify';
import Context from '../context';

const Login = () => {
    const [showPassword, setShowPassword] = useState(false);
    const [data, setData] = useState({
        email: "",
        password: "",
    })
    const navigate = useNavigate();
    const { fetchUserDetails } = useContext(Context);
    

    const handleOnChange = (e) => {
        const { name, value } = e.target
        setData((prev) => {
            return {
                ...prev,
                [name]: value
            }
        })
    }

    const handleSubmit = async (e) => {
        e.preventDefault();
        if (data.email && data.password) {
            const dataResponse = await fetch(SummaryApi.signIn.url, {
                credentials: 'include',
                method: SummaryApi.signIn.method,
                headers: {
                    "content-type": "application/json"
                },
                body: JSON.stringify(data)
            })
            const dataApi = await dataResponse.json();
            if (dataApi.success) {
                toast.success(dataApi.message);
                navigate('/');
                fetchUserDetails();
            }
            else {
                toast.error(dataApi.message)
            }
        }
        else {
            toast.error('Please enter username and password')
        }

    }
    return (
        <section id='login'>
            <div className='mx-auto container p-4'>

                <div className='bg-white p-4 w-full max-w-sm mx-auto'>
                    <div className='w-20 h-20 mx-auto'>
                        <img src={loginIcons} alt='login icon' />
                    </div>
                    <form className='pt-6' onSubmit={handleSubmit}>
                        <div className='grid'>
                            <label>Email :</label>
                            <div className='bg-slate-100 p-2 '>
                                <input
                                    type='email'
                                    placeholder='Enter Email'
                                    className='w-full h-full outline-none bg-transparent'
                                    onChange={handleOnChange}
                                    name='email'
                                    value={data.email}
                                />
                            </div>
                        </div>

                        <div>
                            <label>Password :</label>
                            <div className='bg-slate-100 p-2 flex'>
                                <input
                                    type={showPassword ? "text" : "password"}
                                    placeholder='Enter Password'
                                    className='w-full h-full outline-none bg-transparent'
                                    name='password'
                                    onChange={handleOnChange}
                                    value={data.password}
                                />
                                <div
                                    className='cursor-pointer text-xl'
                                    onClick={() => setShowPassword((prev) => !prev)}>
                                    <span>
                                        {
                                            showPassword ? (
                                                <FaEyeSlash />
                                            ) :
                                                (
                                                    <FaEye />
                                                )
                                        }
                                    </span>
                                </div>
                            </div>
                        </div>
                        <Link to={'/Forgot-password'} className='block w-fit ml-auto'>
                            Forgot Password ?
                        </Link>

                        <button className='bg-red-600 text-white px-6 py-2 w-full max-w-[150px] rounded-full hover:scale-110 transition-all mx-auto block mt-6 hover:bg-red-700'>Login</button>
                    </form>

                    <p className='my-5'>Don't have account ? <Link to={"/sign-up"} className='text-red-500 hover:text-red-700 hover:underline'>Sign Up</Link></p>
                </div>
            </div>
        </section>
    )
}

export default Login