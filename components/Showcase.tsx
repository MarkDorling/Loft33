export default function Showcase() {
  return (
    <section className="section bg-secondary text-secondary">
      <div className="container">
        <h2 className="text-secondary">Recent Work</h2>

        <div className="mt-6 grid md:grid-cols-3 gap-6">
          {/* Project 1 */}
          <article className="card overflow-hidden">
            <div className="aspect-[4/3] bg-lightgrey flex items-center justify-center text-secondary">
              Project photo
            </div>
            <div className="p-4">
              <p className="font-medium">[Cover type] — [Boat model]</p>
              <p className="text-sm text-secondary/90 mt-1">
                Patterned in-house, laser-cut, stitched with Tenara® for UV resistance.
              </p>
            </div>
          </article>

          {/* Project 2 */}
          <article className="card overflow-hidden">
            <div className="aspect-[4/3] bg-lightgrey flex items-center justify-center text-secondary">
              Project photo
            </div>
            <div className="p-4">
              <p className="font-medium">[Cover type] — [Boat model]</p>
              <p className="text-sm text-secondary/90 mt-1">Weathermax® fabric, reinforced stress points.</p>
            </div>
          </article>

          {/* Project 3 */}
          <article className="card overflow-hidden">
            <div className="aspect-[4/3] bg-lightgrey flex items-center justify-center text-secondary">
              Project photo
            </div>
            <div className="p-4">
              <p className="font-medium">[Cover type] — [Boat model]</p>
              <p className="text-sm text-secondary/90 mt-1">Clean finish, premium hardware.</p>
            </div>
          </article>
        </div>

        <div className="mt-8">
          <a href="mailto:mark@loft33.au?subject=Boat%20cover%20enquiry" className="btn btn-primary">Talk to Loft 33</a>
        </div>
      </div>
    </section>
  );
}
