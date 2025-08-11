export default function FAQ(){
  const faqs=[
    {q:'How long do covers last?',a:'With proper care, 5–10+ years depending on usage and storage.'},
    {q:'Lead time?',a:'Typically 2–4 weeks from measurement to installation.'},
    {q:'Warranty?',a:'Workmanship warranty from Loft 33, plus manufacturer warranties for materials.'},
  ];
  return (
    <section className='section bg-secondary text-secondary'>
      <div className='container'>
        <h2 className='text-secondary'>FAQs</h2>
        <div className='mt-6 grid md:grid-cols-3 gap-6'>
          {faqs.map((f,i)=>(
            <div key={i} className='card p-5'>
              <p className='font-medium'>{f.q}</p>
              <p className='mt-2 text-secondary/90'>{f.a}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
