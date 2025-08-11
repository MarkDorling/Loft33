export const metadata = { title: 'Contact — Loft 33' };
export default function Page(){
  return (
    <section className='section bg-secondary text-secondary'>
      <div className='container'>
        <h1 className='text-secondary'>Contact</h1>
        <div className='mt-6 flex flex-col gap-3'>
          <a href='tel:0407065174' className='btn btn-primary w-fit'>Call 0407 065 174</a>
          <a href='mailto:mark@loft33.au?subject=Boat%20cover%20enquiry' className='btn btn-secondary w-fit'>Email mark@loft33.au</a>
        </div>
        <p className='mt-6 text-sm text-secondary/90'>ABN 82 470 704 661</p>
      </div>
    </section>
  )
}
