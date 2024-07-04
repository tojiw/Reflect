import Image from 'next/image'
import React, { useState } from 'react'
import circle from "../public/circle.svg"

const CircleWord = () => {
  const [circle, setCircle] = useState(false)

  const handleClick = () => {
    setCircle(!circle)
  }
  return (
    <div className='border border-black h-[10vh] cursor-pointer' onClick={handleClick}>
      {circle&&(
        <Image src='/circle.svg' alt='' width={100} height={100} className='absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 pointer-events-none'/>
      )}
    </div>
  )
}

export default CircleWord