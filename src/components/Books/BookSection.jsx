import React from 'react'
import Navbar from '../Navbar'
import Footers from '../Footers'
import Books from '../Books'

function BookSection() {
  return (
    <>
    <Navbar />
    <div className=''>
        <Books />
    </div>
    <Footers />
    </>
  )
}

export default BookSection