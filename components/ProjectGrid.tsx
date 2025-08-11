export default function ProjectGrid(){
  const items=[
    {title:'RIB console cover',caption:'Weathermax 80, Tenara thread, bound edges.'},
    {title:'Sports cruiser bimini & clears',caption:'Pattern-matched for tension and visibility.'},
    {title:'Hardtop sunshade',caption:'Low-sag span using reinforced webbing.'},
  ];
  return (
    <section className='section bg-secondary text-secondary'>
      <div className='container'>
        <h2 className='text-secondary'>Selected Projects</h2>
        <div className='mt-6 grid md:grid-cols-3 gap-6'>
          {items.map((it,i)=>(
            <article key={i} className='card overflow-hidden'>
              <div className='aspect-[4/3] bg-lightgrey flex items-center justify-center text-secondary'>Image</div>
              <div className='p-4'>
                <p className='font-medium'>{it.title}</p>
                <p className='text-sm text-secondary/90 mt-1'>{it.caption}</p>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  )
}
