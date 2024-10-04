import React, { useState } from 'react'
import Mymodal from './Mymodal'

const ModalBasic = () => {
  const [showMyModal, setShowMyModal] = useState(false)

  const handleOnClose = () => setShowMyModal(false)

  return (
    <>
      <button onClick={() => setShowMyModal(true)} className="bg-red-400 text-white px-3 py-2 rounded hover:scale-95 transition text-xl">
        Open Modal
      </button>

      <Mymodal onClose={handleOnClose} visible={showMyModal} /> 
    </>
  )
}

export default ModalBasic