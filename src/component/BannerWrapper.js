import React from 'react'
import { Link } from "react-router-dom";

export default function BannerWrapper() {
  return (
    <div className='banner-wrapper margin-60'>
      <div className="banner">
      <h1 className='text-light'>Want to Hear more "About Us"</h1>
        <Link className='btn btn-primary mt-5' to="/about">View More</Link>
      </div>
    </div>
  )
}
