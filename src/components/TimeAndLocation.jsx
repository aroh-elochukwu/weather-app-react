import React from 'react'

function TimeAndLocation() {
  return (
    <div >
      <div className='flex items-center justify-center my-6 '>
        <p className='text-white text-xl font-extralight'>
          Tuesday, 10 January 2022 | Local time: 10:58 AM
        </p>
      </div>

      <div className='flex items-center justify-center my-3'>
        <p className='text-white text-3xl font-medium'>
          Winnipeg, MB
        </p>
      </div>
    </div>
  )
}

export default TimeAndLocation