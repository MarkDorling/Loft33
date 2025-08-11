export const metadata = { title: "About — Loft 33" };

export default function Page() {
  return (
    <section className="section bg-secondary text-secondary">
      <div className="container">
        <h1 className="text-secondary">About Loft 33</h1>

        <p className="mt-4 max-w-prose">
          Loft 33 is a fabrication studio based in Pittwater, specialising in premium marine covers and outdoor textiles.
          We combine modern tools — CAD patterning, digital templating and laser cutting — with traditional marine trimming
          skills to deliver a precise fit and a premium finish.
        </p>

        <p className="mt-4 max-w-prose">
          Every cover is specified for the marine environment: Weathermax® or Sunbrella® fabric, Tenara® PTFE thread and
          quality stainless hardware. The result is a clean look that lasts — in sun, salt and wind.
        </p>

        <p className="mt-4 max-w-prose">
          Loft 33 is led by Mark Dorling. When he’s not in the loft, Mark serves as Rear Commodore Centreboard at RPAYC,
          focused on growing junior sailing and strengthening the local sailing community.
        </p>

        <div className="mt-6 flex gap-3">
          <a href="mailto:mark@loft33.au?subject=Boat%20cover%20enquiry" className="btn btn-primary">Email Mark</a>
          <a href="tel:0407065174" className="btn btn-secondary">Call 0407 065 174</a>
        </div>
      </div>
    </section>
  );
}
