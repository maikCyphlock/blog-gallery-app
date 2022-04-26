import ImageSrc from 'next/image'
import Head from 'next/head'
import Navbar from '../components/navbar'

export default function App() {
  return (
    <>
      <Head>
        <title>Maikcyphlock | blog | gallery</title>
      </Head>
      <Navbar />

      <div className="relative min-h-screen min-w-max bg-black">
        <ImageSrc
          src="/landing.jpg"
          className="absolute blur-sm"
          objectFit="cover"
          objectPosition="center"
          layout="fill"
        />

        <div className=" absolute  flex h-full w-full flex-col items-center  justify-center p-5">
          <h1 className="text-6xl font-bold text-emerald-50 md:text-8xl">
            GREEN BLOG
          </h1>
          <h2 className="text-2xl font-semibold text-emerald-800 md:text-4xl">
            by maikol
          </h2>
        </div>
      </div>
    </>
  )
}
