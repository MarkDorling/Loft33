import Link from 'next/link';

export default function Footer(){
  return (
    <footer className='bg-primary text-primary mt-16'>
      <div className='container py-10 flex flex-col md:flex-row items-start justify-between gap-6'>
        <div>
          <p className='font-semibold text-lg'>Loft 33</p>
          <p className='opacity-80'>ABN 82 470 704 661</p>
        </div>
        <div className='flex gap-6'>
          <Link href='/warranty' className='underline'>Warranty</Link>
          <Link href='/privacy' className='underline'>Privacy</Link>
        </div>
        <div className='opacity-80 text-sm'>© {new Date().getFullYear()} Loft 33</div>
      </div>
    </footer>
  )
}
