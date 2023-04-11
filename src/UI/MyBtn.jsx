import React from 'react'

const MyBtn = ({children, bg, ...props}) => {
  return (
    <button className={`flex items-center justify-center px-4 py-2 rounded-lg transition-colors duration-200 ease-linear ${bg ? bg : 'bg-green-400 hover:bg-green-500'}`} {...props}>
        {children}
    </button>
  )
}

export default MyBtn