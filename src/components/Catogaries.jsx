import React from 'react'
import {HiHeart} from 'react-icons/hi'
function Categories() {
  return (
    <>
    <div className='py-2'>
        <ul className='flex justify-evenly text-xs mx-56'>
            <li className='hover:underline '><a href="#">Home</a></li>
            <li className='flex items-center gap-1 hover:underline'><a href="#">Saved</a><HiHeart/></li>
            <li className='hover:underline'><a href="#">Electronics</a></li>
            <li className='hover:underline'><a href="#">Motors</a></li>
            <li className='hover:underline'><a href="#">Fashion</a></li>
            <li className='hover:underline'><a href="#">Collectibles and Art</a></li>
            <li className='hover:underline'><a href="#">Sports</a></li>
            <li className='hover:underline'><a href="#">Healt & Beauty</a></li>
            <li className='hover:underline'><a href="#">Industrial Equipment</a></li>
            <li className='hover:underline'><a href="#">Home & Garden</a></li>
            <li className='hover:underline'><a href="#">Deals</a></li>
            <li className='hover:underline'><a href="#">Sell</a></li>
        </ul>
    </div>
    
    </>
  )
}

export default Categories