import React, { useEffect, useState } from 'react'
import SummaryApi from '../common';
import { toast } from 'react-toastify';
import moment from 'moment';
import { MdModeEdit } from "react-icons/md";
import ChangeUserRole from '../components/ChangeUserRole';

const AllUsers = () => {
    const [alluser, setAllUser] = useState([]);
    const [openUpdateRole, setopenUpdateRole] = useState(false);
    const [userDetailData, setUserDetailData] = useState({
        name: '',
        email: '',
        role: '',
        _id:''
    })
    const fetchUser = async () => {
        const fetchApiData = await fetch(SummaryApi.all_user.url, {
            method: SummaryApi.all_user.method,
            credentials: 'include',
            headers: { 'Content-Type': 'application/json' },
        })
        const dataResponse = await fetchApiData.json();
        if (dataResponse.success) {
            setAllUser(dataResponse.data)
        }
        else {
            toast.error(dataResponse.message)
        }
    }

    useEffect(() => {
        fetchUser();
    }, [])
    return (
        <div className='bg-white pb-4'>
            <table className='w-full userTable'>
                <thead>
                    <tr className='bg-black text-white'>
                        <th>Sr No</th>
                        <th>Name</th>
                        <th>Email</th>
                        <th>Role</th>
                        <th>Created Date</th>
                        <th>Action</th>
                    </tr>

                </thead>

                <tbody>
                    {
                        alluser.map((el, index) => {
                            return (
                                <tr>
                                    <td>{index + 1}</td>
                                    <td>{el?.name}</td>
                                    <td>{el?.email}</td>
                                    <td>{el?.role}</td>
                                    <td>{moment(el?.createdAt).format('ll')}</td>
                                    <td>
                                        <button
                                            className='bg-green-100 p-2 rounded-full cursor-pointer hover:bg-green-500 hover:text-white'
                                            onClick={() => {
                                                setUserDetailData({
                                                    name: el?.name,
                                                    email: el?.email,
                                                    role: el?.role,
                                                    _id:el?._id
                                                })
                                                setopenUpdateRole(true)
                                            }}
                                        >
                                            <MdModeEdit />
                                        </button>
                                    </td>
                                </tr>
                            )
                        })
                    }
                </tbody>
            </table>
            {
                openUpdateRole && (
                    <ChangeUserRole
                        onclose={() => setopenUpdateRole(false)}
                        name={userDetailData.name}
                        email={userDetailData.email}
                        role={userDetailData.role}
                        userId={userDetailData._id}
                        callFunc={fetchUser}
                    />
                )
            }


        </div>
    )
}

export default AllUsers