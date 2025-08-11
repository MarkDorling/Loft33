import Link from 'next/link';
export const metadata = { title: 'Materials — Loft 33' };
export default function Page(){
  const items=[{slug:'weathermax',label:'Weathermax'},{slug:'sunbrella',label:'Sunbrella'},{slug:'tenara',label:'Tenara (PTFE thread)'}];
  return (
    <section className='section bg-secondary text-secondary'>
      <div className='container'>
        <h1 className='text-secondary'>Materials</h1>
        <ul className='mt-6 grid md:grid-cols-3 gap-4'>
          {items.map(it=>(
            <li key={it.slug} className='card p-5'>
              <p className='font-medium'>{it.label}</p>
              <Link className='underline mt-2 inline-block' href={`/materials/${it.slug}`}>Learn more</Link>
            </li>
          ))}
        </ul>
      </div>
    </section>
  )
}
