import React from 'react'

const MyBtn = ({children, bg, ...props}) => {
  return (
    <button className={`flex items-center justify-center px-4 py-2 rounded-lg ${bg ? bg : 'bg-green-400'}`} {...props}>
        {children}
    </button>
  )
}

export default MyBtn