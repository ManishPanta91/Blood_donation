import React from 'react'

const Detail = () => {
  return (
    <div className='flex  items-center max-w-7xl mx-auto  justify-center w-full mt-10'>
        <div className='space-x-30 flex '>
        <div style={{color:" #CD1C18"}}>
            <h1 className='text-4xl font-bold'>1,248</h1>
            <p className='font-serif text-2xl'>Total Donors</p>
        </div>
         <div style={{color:" #CD1C18"}}>
            <h1 className='text-4xl font-bold'>827</h1>
            <p className='font-serif text-2xl '>Blood requests Fulfilled</p>
        </div>
         <div style={{color:" #CD1C18"}}>
            <h1 className='text-4xl font-bold'>56</h1>
            <p className='font-serif text-2xl'>Cities Covered</p>
        </div>
        </div>
    </div>
  )
}

export default Detail