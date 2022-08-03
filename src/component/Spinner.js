import React from 'react'
import loader from "../loader.svg"

export default function Spinner() {
  return (
    <div>
      <img src={loader} className="App-logo"  width="60" alt="Loading" /> 
    </div>
  )
}
