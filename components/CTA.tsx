'use client';
import { trackMailClick, trackTelClick } from '@/lib/analytics';

export default function CTA(){
  return (
    <section className='section'>
      <div className='container flex flex-col md:flex-row items-center justify-between gap-4'>
        <h2 className='md:max-w-xl text-secondary'>Ready to protect your boat? Let’s discuss your project today.</h2>
        <div className='flex gap-3'>
          <a href='tel:0407065174' className='btn btn-primary' onClick={()=>trackTelClick('cta')}>Call Mark</a>
          <a href='mailto:mark@loft33.au?subject=Boat%20cover%20enquiry' className='btn btn-secondary' onClick={()=>trackMailClick('cta')}>Email Mark</a>
        </div>
      </div>
    </section>
  )
}
