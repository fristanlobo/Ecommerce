import React from 'react'
import ROLE from '../common/role'
import { IoMdClose } from 'react-icons/io'
const ChangeUserRole = () => {
    return (
        <div className='fixed w-full h-full flex z-10 justify-between items-center top-0 bottom-0 left-0 right-0'>
            <div className='mx-auto bg-white shadow-md p-4 w-full max-w-sm'>

                <button className='block ml-auto'>
                    <IoMdClose />
                </button>

                <h1 className='pb-4 text-lg'>Change User Role</h1>

                <p>Name :</p>
                <p>Email:</p>

                <div className='justify-between items-center flex'>
                    <p>Role</p>
                    <select className='border px-4 py-1'>
                        {
                            Object.values(ROLE).map(e1 => {
                                return (
                                    <option>{e1}</option>
                                )
                            })
                        }

                    </select>
                </div>

                <button className='w-fit mx-auto py-2 px-3 rounded-full block border bg-red-600 text-white hover:bg-red-700 hover:text-white'>Change Role</button>

            </div>
        </div>
    )
}

export default ChangeUserRole