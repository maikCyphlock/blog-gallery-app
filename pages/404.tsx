import Link from 'next/link'

export default function Custom404() {
  return (
    <div className="flex  min-h-screen flex-col items-center justify-center">
      <h1 className="p-4 font-bold  ">404 - Page Not Found</h1>
      <Link href="/">
        <a className="rounded bg-green-500  p-4 text-green-100">Regresar</a>
      </Link>
    </div>
  )
}
