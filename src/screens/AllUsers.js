import React, { useEffect, useState } from 'react'
import SummaryApi from '../common';
import { toast } from 'react-toastify';
import moment from 'moment';
import { MdModeEdit } from "react-icons/md";
import ChangeUserRole from '../components/ChangeUserRole';

const AllUsers = () => {
    const [alluser, setAllUser] = useState([]);

    const fetchUser = async () => {
        const fetchApiData = await fetch(SummaryApi.all_user.url, {
            method: SummaryApi.all_user.method,
            credentials: 'include'
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
                    <tr>
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
                                        <button className='bg-green-100 p-2 rounded-full cursor-pointer hover:bg-green-500 hover:text-white'><MdModeEdit /></button>
                                    </td>
                                </tr>
                            )
                        })
                    }
                </tbody>
            </table>

            <ChangeUserRole />
        </div>
    )
}

export default AllUsers