import Categories from '@/components/Catogaries'
import ImageSlider from '@/components/Images'
import NavBar2 from '@/components/NabBar2'
import NavBar from '@/components/NavBar'
import Image from 'next/image'

export default function Home() {
  return (
    <>
    <NavBar/>
    <NavBar2/>
    <Categories/>
    <ImageSlider/>
    </>
  )
}
