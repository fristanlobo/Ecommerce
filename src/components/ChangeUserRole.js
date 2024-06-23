import React, { useState } from 'react'
import ROLE from '../common/role'
import { IoMdClose } from 'react-icons/io'
import SummaryApi from '../common';
import { toast } from 'react-toastify';
const ChangeUserRole = ({
    name,
    email,
    role,
    userId,
    onclose,
    callFunc
}) => {
    console.log("User Id ", userId)
    const [userRole, setUserRole] = useState(role);

    const handleOnChangeSelect = (e) => {
        setUserRole(e.target.value)
    }


    const updateUserRole = async () => {
        const fetchResponse = await fetch(SummaryApi.updateUser.url, {
            method: SummaryApi.updateUser.method,
            credentials: 'include',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify({
                userId: userId,
                role: userRole,
            })
        })

        const responseData = await fetchResponse.json();
        if (responseData.success) {
            toast.success(responseData.message)
            onclose();
            callFunc();
        }
    }

    return (
        <div className='fixed w-full h-full flex z-10 justify-between items-center top-0 bottom-0 left-0 right-0 bg-slate-200 bg-opacity-30'>
            <div className='mx-auto bg-white shadow-md p-4 w-full max-w-sm'>

                <button className='block ml-auto' onClick={onclose} >
                    <IoMdClose />
                </button>

                <h1 className='pb-4 text-lg'>Change User Role</h1>

                <p>Name : {name}</p>
                <p>Email: {email}</p>

                <div className='justify-between items-center flex my-4'>
                    <p>Role</p>
                    <select className='border px-4 py-1' value={userRole} onChange={handleOnChangeSelect}>
                        {
                            Object.values(ROLE).map(e1 => {
                                return (
                                    <option>{e1}</option>
                                )
                            })
                        }

                    </select>
                </div>

                <button className='w-fit mx-auto py-2 px-3 rounded-full block border bg-red-600 text-white hover:bg-red-700 hover:text-white' onClick={() => updateUserRole()}>Change Role</button>

            </div>
        </div>
    )
}

export default ChangeUserRole