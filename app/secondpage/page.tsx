import Image from 'next/image'
import Link from 'next/link'

export default function SecondPage() {
  return (
    <main className='w-full h-screen grid place-items-center'>
    <h1 className='text-3xl font-bold'>Second Page</h1>
    <Link href={'/'} className='hover:underline underline-offset-2 py-2'>Home Page</Link>
  </main>
  )
}
