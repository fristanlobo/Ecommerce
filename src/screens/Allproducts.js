import React, { useState } from 'react';
import UploadProduct from '../components/UploadProduct';

const Allproducts = () => {
  const [uploadProducts, setUploadProducts] = useState(false);


  const handleUpload = () => {
    setUploadProducts(true);
  }

  return (
    <div>
      <div className='bg-white py-2 px-2 flex justify-between items-center'>
        <h2 className='font-bold text-lg'>Allproducts</h2>
        <button
          className='border py-2 px-3 border-red-600 text-red-600 hover:bg-red-600 hover:text-white rounded-full transition-all'
          onClick={() => handleUpload()}
        >
          Upload Product
        </button>
      </div>
      {/**upload product component */}

      {
        uploadProducts && (
          <UploadProduct
            onClose={() => setUploadProducts(false)}
          />
        )
      }

    </div>

  )
}

export default Allproducts