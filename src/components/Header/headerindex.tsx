import React from 'react'

const Header = () => {
  return (
    <div className=' ' style={{backgroundColor:"rgba(100,100, 100, 0.5)"}}>
      <div className='max-w-[1200px] mx-auto flex justify-between items-center h-[4rem] text-white px-4' >
        <div className='text-white'>
            Gagan
        </div>
        <div>
            <a href="/">Axios</a>
        </div>
      </div>
    </div>
  )
}

export default Header
