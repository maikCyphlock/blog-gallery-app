import { useState } from "react";
import Image from 'next/image'

type Image = {
    id: number
    href: string
    imageSrc: string
    name: string
    username: string
  }

function classnameBoolean(...classes: string[]) {
    return classes.filter(Boolean).join(' ')
  }
  
export default function BlurImage({
  image
}: {
  image: Image;
}) {
  const [isLoading, setLoading] = useState(true);
  return <a href={image.href} target="_blank" rel="noreferrer" className="group">
      <div className="aspect-w-1 aspect-h-1 w-full overflow-hidden rounded-lg shadow-lg bg-gray-200 xl:aspect-w-7 xl:aspect-h-8">
        <Image src={image.imageSrc} alt="" className={classnameBoolean('group-hover:opacity-75', isLoading ? 'scale-110 blur-2xl grayscale' : 'scale-100 blur-0 grayscale-0')} onLoadingComplete={() => setLoading(false)} layout="fill" objectFit="cover" />
      </div>
      <h3 className="mt-4 text-sm text-gray-700">{image.name}</h3>
      <p className="mt-1 text-lg font-medium text-gray-900">{image.username}</p>
    </a>;
}
  