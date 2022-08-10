import React from 'react'
import loader from "../spinner.gif";

export default function Spinner() {
  return (
    <div >
      <img src={loader} className="App-logo"  alt="Loading" /> 
    </div>
  )
}
