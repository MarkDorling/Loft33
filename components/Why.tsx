export default function Why() {
  return (
    <section className="section bg-secondary text-secondary">
      <div className="container">
        <h2 className="text-secondary">Why Boat Owners Choose Loft 33</h2>
        <ul className="mt-6 grid md:grid-cols-3 gap-6">
          <li className="card p-5">
            <p className="font-medium">Premium Materials</p>
            <p className="mt-2 text-secondary/90">
              Weathermax®, Sunbrella®, Tenara® PTFE thread and 316 stainless hardware — specified for the marine environment.
            </p>
          </li>
          <li className="card p-5">
            <p className="font-medium">Tailored Fit</p>
            <p className="mt-2 text-secondary/90">
              Digitally patterned and precisely cut for <em>your</em> boat — not a “close enough” template.
            </p>
          </li>
          <li className="card p-5">
            <p className="font-medium">Built to Last</p>
            <p className="mt-2 text-secondary/90">
              Reinforced stress points, UV-stable stitching and clean finishing for a longer service life.
            </p>
          </li>
        </ul>
      </div>
    </section>
  );
}
