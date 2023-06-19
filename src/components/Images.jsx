'use client'
import Image from 'next/image'
import { useState } from 'react'
import React from 'react'
import { MdOutlineDoubleArrow } from 'react-icons/md'
import { TfiArrowCircleLeft, TfiArrowCircleRight } from 'react-icons/tfi'
import {RxDotFilled} from 'react-icons/rx'

function ImageSlider() {    
    const [current, setCurrent] = useState(0);


    const images = [
        {

            src : '/Images/dp.jpg'
        },
        {

           src : '/Images/desk2.jpg'
        },
        {

            src : '/Images/desk3.jpg'
        },
        {

            src : '/Images/desk4.png'
        },
        {

            src : '/Images/desk5.jpg'
        },
        {
            src : '/Images/ecom.png'
        }
    ];
    const gotoNextSlide = (imageIndex) => {
        setCurrent(imageIndex)
    }
    return (
        <>
            <div className='grid place-items-center '>
                <Image src={images[current].src} alt='ecom' width={1400} height={600} className='border-2 border-gray-800 h-96'  />
                <div className='absolute top-1/2 left-8 -translate-y-full cursor-pointer rounded-full bg-slate-200/30 p-2 ' onClick={()=>
                {
                    setCurrent(current === 0 ? images.length - 1 : current - 1);
                }}>
                    <TfiArrowCircleLeft />
                </div>
                <div className='absolute top-1/2 right-8 rounded-full cursor-pointer bg-slate-200/30 p-2 -translate-y-full' onClick={()=>
                {
                    setCurrent(current === images.length - 1 ? 0 : current + 1);
                }}>
                    <TfiArrowCircleRight />
                </div>
               
                <div className='flex justify-center py-2 top-4 cursor-pointer'>
                    {images.map((image,imageIndex)=>(
                        <div key={imageIndex} onClick={()=>gotoNextSlide(imageIndex)} className={`${current===imageIndex?' text-blue-500 ':''}`}>
                            <RxDotFilled/>
                        </div>
                    ))}
                </div>
            </div>
            <div className='flex justify-between mx-48 my-10  bg- py-7 px-10 rounded-md bg-[#0E2954]'>
                <div>
                    <h1 className='text-3xl text-white '>Deals of the day</h1>
                    <p className='text-sm text-white'>Check out deals on top brands!</p>
                </div>
                <Button/>
            </div>
           
        </>
    )
}

export default ImageSlider


const Button = () =>{
    return (
        <div className='hover:bg-[#0E2954] cursor-pointer group w-40  relative  text-white   '>
                
                    <button className='text-5xl  absolute group-hover:translate-x-[90px] transition-transform duration-500   top-1/2 left-1 -translate-y-1/2'><MdOutlineDoubleArrow /></button>

                </div>
    )
}