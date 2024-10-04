import React from 'react'

const Mymodal = ({ visible, onClose}) => {
    const handleOnClose = () => {
        onClose();
    };

    if (!visible) return null;

  return (
    <div onClick={handleOnClose} className='fixed inset-0 bg-black bg-opacity-30 backdrop-blur-sm flex justify-center items-center'>
        <div className='bg-white p-2 rounded'>
            <p>My Modal</p>
        </div>
    </div>
  )
}

export default Mymodal