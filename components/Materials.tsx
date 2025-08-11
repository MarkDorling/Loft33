function Badge({label}:{label:string}){
  return <span className='inline-flex items-center rounded-full border border-lightgrey px-3 py-1 text-sm text-secondary'>{label}</span>
}
export default function Materials(){
  return (
    <section className='section bg-secondary text-secondary'>
      <div className='container'>
        <h2 className='text-secondary'>Materials & Quality</h2>
        <p className='mt-3 max-w-prose'>
          We specify premium materials only: Weathermax or Sunbrella fabrics, PTFE Tenara thread, and 316 stainless hardware.
        </p>
        <div className='mt-6 flex flex-wrap gap-3'>
          <Badge label='Weathermax' />
          <Badge label='Sunbrella' />
          <Badge label='Tenara (PTFE thread)' />
          <Badge label='316 stainless hardware' />
        </div>
      </div>
    </section>
  )
}
