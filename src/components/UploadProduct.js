import React, { useState } from 'react';
import { CgClose } from 'react-icons/cg';

const UploadProduct = ({
    onClose
}) => {

    const [data, setData] = useState({
        productName: "",
        brandName: "",
        category: "",
        productImage: "",
        description: "",
        price: "",
        sellingPrice: ""
    })

    const handleOnChange = () => {

    }

    return (
        <div className='fixed w-full h-full bg-slate-200 bg-opacity-35 top-0 left-0 right-0 bottom-0 flex justify-center items-center'>
            <div className='bg-white p-4 rounded w-full max-w-2xl h-full max-h-[80%]'>
                <div className='flex justify-between items-center'>
                    <h2 className='font-bold text-lg'>uploadProduct</h2>
                    <div
                        className='w-fit ml-auto text-2xl cursor-pointer'
                        onClick={onClose}
                    >
                        <CgClose />
                    </div>
                </div>

                <form className='grid p-4 gap-1'>
                    <label htmlFor='productName'>Product Name :</label>
                    <input
                        type='text'
                        id='productName'
                        placeholder='Enter Product Name'
                        value={data.productName}
                        onChange={handleOnChange}
                        className='p-2 bg-slate-100 border rounded'
                    />

                    <label htmlFor='brandName' className='mt-3'>Brand Name :</label>
                    <input
                        type='text'
                        id='brandName'
                        placeholder='Enter Brand Name'
                        value={data.brandName}
                        onChange={handleOnChange}
                        className='p-2 bg-slate-100 border rounded'
                    />
                </form>

            </div>
        </div>

    )
}

export default UploadProduct;