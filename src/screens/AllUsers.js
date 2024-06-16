import React, { useEffect, useState } from 'react'
import SummaryApi from '../common';
import { toast } from 'react-toastify';

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
                    </tr>

                </thead>

                <tbody>
                    {
                        alluser.map((el, index) => {
                            return (
                                <tr>
                                    <td>{index+1}</td>
                                    <td>{el?.name}</td>
                                    <td>{el?.email}</td>
                                    <td>{el?.role}</td>
                                    <td>{el?.createdAt}</td>
                                </tr>
                            )
                        })
                    }
                </tbody>
            </table>
        </div>
    )
}

export default AllUsers