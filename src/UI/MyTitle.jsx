import React from 'react'

const MyTitle = ({children, ...props}) => {
  return (
    <h1 className='font-bold text-4xl' {...props}>
        {
            children
        }
    </h1>
  )
}

export default MyTitle