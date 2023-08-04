import React from 'react'
import spinner from '../assets/Spinner.gif'

function Spinner() {
  return (
    <div className="relative">
      {" "}
      <div className="absolute  inset-0  flex justify-center items-center z-50">
        <div className=" rounded-full h-20 w-20  ">
        <img src={spinner} className="w-50 h-auto" alt="loading" />
        </div>
      </div>{" "}
    </div>
  )
}

export default Spinner
