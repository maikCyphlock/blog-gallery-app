import  BlurImage from '../components/Blurimage';
import { Image } from '../types' ;
import  ImageSrc from 'next/image';
import Head from 'next/head';
import Navbar from '../components/navbar'



export default function App() {
  return (
    <>
    <Head>
      <title>Maikcyphlock | blog | gallery</title>
    </Head>
    <Navbar />

   
   <div className="relative min-h-screen min-w-max bg-black">
  
   <ImageSrc src="/landing.jpg" className='absolute blur-sm' objectFit='cover' objectPosition='center' layout='fill'/>

   <div className='<z-1 absolute  flex justify-center h-full items-center flex-col  w-full p-5'>
      <h1 className='font-bold text-emerald-50 text-6xl md:text-8xl'>GREEN BLOG</h1>
      <h2 className='text-2xl font-semibold md:text-4xl text-emerald-800'>by maikol</h2>
    </div>
       
   </div>

    
  
    </>
  )
}



