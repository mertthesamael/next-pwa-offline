import Image from 'next/image'
import Link from 'next/link'

export default function Home() {
  return (
    <main className='w-full h-screen grid place-items-center'>
      <h1 className='text-3xl font-bold'>First Page</h1>
      <Link href={'/secondpage'} className='hover:underline underline-offset-2'>Second Page</Link>
    </main>
  )
}
