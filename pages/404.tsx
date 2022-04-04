import Link from "next/link";

export default function Custom404() {
    return (
    <div className="min-h-screen  justify-center items-center flex flex-col">
      <h1 className="p-4 font-bold  ">404 - Page Not Found</h1>
      <Link  href="/">
      <a className="p-4 text-green-100  bg-green-500 rounded">Regresar</a>
      </Link>
    </div>
    )
  }