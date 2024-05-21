import React, { useState } from 'react'
import loginIcons from '../assest/signin.gif';
import { FaEye, FaEyeSlash } from 'react-icons/fa';
import { Link, useNavigate } from 'react-router-dom';
import { imageTobase64 } from '../helpers/imageToBase64';
import SummaryApi from '../common';
import { toast } from 'react-toastify';

const SignUp = () => {
  const [showPassword, setShowPassword] = useState(false);
  const [showConfirmPassword, setConfirmShowPassword] = useState(false);
  const [data, setData] = useState({
    email: "",
    password: "",
    name: "",
    confirmPassword: "",
    profilePic: ""
  })

  const navigate=useNavigate()

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
    if (data.password === data.confirmPassword) {
      const dataResponse = await fetch(SummaryApi.signUp.url, {
        method: SummaryApi.signUp.method,
        headers: {
          "content-type": "application/json"
        },
        body: JSON.stringify(data)
      })
      const dataApi = await dataResponse.json();
      if(dataApi.success){
        toast.success(dataApi.message)
        navigate('/login')
      }
      else{
        toast.error(dataApi.message)
      }

    }
    else {
      console.log("Confirm password does not match password")
    }

  }

  const handleUploadPic = async (e) => {
    const file = e.target.files[0];
    const image = await imageTobase64(file);
    setData((prev) => {
      return {
        ...prev,
        profilePic: image
      }
    })
  }

  return (
    <section id='signup'>
      <div className='mx-auto container p-4'>

        <div className='bg-white p-4 w-full max-w-sm mx-auto'>
          <div className='w-20 h-20 mx-auto relative overflow-hidden rounded-full'>
            <div>
              <img
                src={data.profilePic || loginIcons}
                alt='Login icons'
              />
            </div>

            <form>
              <label>
                <div
                  className='text-xs bg-opacity-90 bg-slate-200 pb-4 pt-2 text-center absolute bottom-0 w-full cursor-pointer'>
                  Upload Picture
                </div>
                <input type='file' className='hidden' onChange={handleUploadPic} />
              </label>
            </form>

          </div>

          <form className='pt-6 flex flex-col gap-3' onSubmit={handleSubmit}>

            <div className='grid'>
              <label>Name :</label>
              <div className='bg-slate-100 p-2 '>
                <input
                  type='text'
                  placeholder='Enter Name'
                  className='w-full h-full outline-none bg-transparent'
                  onChange={handleOnChange}
                  name='name'
                  value={data.name}
                  required
                />
              </div>
            </div>

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
                  required
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
                  required
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

            <div>
              <label>Confirm Password :</label>
              <div className='bg-slate-100 p-2 flex'>
                <input
                  type={showConfirmPassword ? "text" : "password"}
                  placeholder='Re Enter the password'
                  className='w-full h-full outline-none bg-transparent'
                  name='confirmPassword'
                  onChange={handleOnChange}
                  value={data.confirmPassword}
                  required
                />
                <div
                  className='cursor-pointer text-xl'
                  onClick={() => setConfirmShowPassword((prev) => !prev)}>
                  <span>
                    {
                      showConfirmPassword ? (
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

            <button className='bg-red-600 text-white px-6 py-2 w-full max-w-[150px] rounded-full hover:scale-110 transition-all mx-auto block mt-6 hover:bg-red-700'>Sign Up</button>
          </form>

          <p className='my-5'>Already have account ? <Link to={"/login"} className='text-red-500 hover:text-red-700 hover:underline'>Login</Link></p>
        </div>
      </div>
    </section>
  )
}

export default SignUp