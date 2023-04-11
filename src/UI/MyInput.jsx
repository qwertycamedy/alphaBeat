import React from 'react'

const MyInput = ({classNames, ...props}) => {
  return (
    <input className={' rounded-lg w-full py-[7px] px-[15px] bg-slate-200 placeholder:text-gray-500 ' + classNames} type='text' {...props} />
  )
}

export default MyInput