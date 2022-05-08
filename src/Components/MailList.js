import React from 'react'
import "./MailList.css"

export const MailList = () => {
  return (
    <div className='mail'>
     <h1 className='mailTitle'>
        Contact us ,enjoy the best deals
     </h1>
     <span className='mailDesc'>
        We will suggest you best deals that belongs to you
     </span>
     <div className='mailInput'>
    <input text="email" placeholder='Enter your email to help you out'/>
    <button>suggestion</button>
     </div>
    </div>
  )
}
