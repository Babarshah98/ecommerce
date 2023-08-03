import Image from 'next/image'
import Link from 'next/link'

export default function Home() {
  return (
    <div className='py-8 px-20 mt-10'>
   <ul className='flex gap-x-3'>
    <li>
      <Link href={'category/male'}>Male</Link>
    </li>
    <li>
      <Link href={'category/female'}>Female</Link>
    </li>
    <li>
      <Link href={'category/kids'}>Kids</Link>
    </li>
   </ul>
   </div>
  )
}
