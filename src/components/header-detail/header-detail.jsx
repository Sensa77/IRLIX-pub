import React from 'react';
import "./header-detail.scss"
import { Link } from "react-router-dom";

const HeaderDetail = () => {
  return (
    <div className='header'>
      <div className='header__img'></div>
      <Link to="/"><button type="button" className='header__back'><svg className='arrow__back' width="15" height="24" viewBox="0 0 15 24" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M0.383924 11.0671L11.0016 0.386228C11.5135 -0.128743 12.3439 -0.128743 12.8558 0.386228L14.0943 1.63216C14.6056 2.14658 14.6062 2.97977 14.0965 3.49529L5.68155 11.9997L14.0959 20.5047C14.6062 21.0202 14.6051 21.8534 14.0937 22.3678L12.8552 23.6138C12.3433 24.1287 11.5129 24.1287 11.001 23.6138L0.383924 12.9324C-0.127974 12.4174 -0.127974 11.582 0.383924 11.0671Z" fill="#C4C1CF"/>
</svg></button></Link>
    </div>
  )
}

export default HeaderDetail