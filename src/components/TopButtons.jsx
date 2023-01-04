import React from 'react'

function TopButtons() {
  const cities = [
    {
      id: 1,
      title: 'Winnipeg'
    },
    {
      id: 2,
      title: 'Edmonton'
    },
    {
      id: 3,
      title: 'Calgary'
    },
    {
      id: 4,
      title: 'Saskatchewan'
    },
    {
      id: 5,
      title: 'Ontario'
    },
  ]

  return (
    
    <div className='flex items-center justify-around my-6'>
      {cities.map(city =>  (
        <button key={city.id} className='text-white text-lg font-medium'>{city.title}</button>

      ))}
    </div>
  )
}

export default TopButtons