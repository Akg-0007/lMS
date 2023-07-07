import React from 'react'
import './toaster.css'
import { ToastContainer, toast } from 'react-toastify';
 import 'react-toastify/dist/ReactToastify.css';
const Popup = ({message, state}) => {
     toast[state](message,{hideProgressBar: true,className:state,});

  return (
    <div>
        <ToastContainer  className="custom-toast-container" />
    </div>
  )
}

export default Popup