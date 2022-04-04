import  BlurImage from '../components/Blurimage';
import { createClient } from '@supabase/supabase-js'
import Image from 'next/image'
import { useState } from 'react'
import Navbar from '../components/navbar'


type Image = {
  id: number
  href: string
  imageSrc: string
  name: string
  username: string
}

export async function getStaticProps() {
  const supaBaseAdmin = createClient(
    process.env.NEXT_PUBLIC_SUPABASE_URL || '',
    process.env.SUPABASE_SERVICE_ROLE_KEY || ''
  )

  const {data} = await supaBaseAdmin
  .from('images')
  .select('*')
  .order('id');
  return {
    props: {
      images:data
    },
  }
}


export default function Gallery({images}: {images: Image[]}) {
  return (
    <>
    <Navbar />
    <div className="box-border mx-auto max-w-2xl py-16 px-4 sm:py-24 sm:px-6 lg:max-w-7xl lg:px-8">
      <div className="grid grid-cols-1 gap-y-10 gap-x-6 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 xl:gap-x-8">
        {
          images.map((image) => (
            <BlurImage key={image.id} image={image} />
          ))
        }
      </div>
    </div>
    </>
  )
}



