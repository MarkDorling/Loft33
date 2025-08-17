// app/materials/[slug]/page.tsx
import Link from 'next/link';
import type { Metadata } from 'next';
import { materials } from '../_data';

export function generateStaticParams() {
  return materials.map((m) => ({ slug: m.slug }));
}

export function generateMetadata({ params }: { params: { slug: string } }): Metadata {
  const m = materials.find((x) => x.slug === params.slug);
  return {
    title: m ? `${m.name} — Materials — Loft 33` : 'Materials — Loft 33',
    description: m?.tagline,
  };
}

export default function MaterialPage({ params }: { params: { slug: string } }) {
  const m = materials.find((x) => x.slug === params.slug);
  if (!m) {
    return (
      <section className="section">
        <div className="container">
          <h1>Not found</h1>
          <p className="mt-2">That material doesn’t exist.</p>
          <Link className="btn btn-secondary mt-6" href="/materials">
            Back to Materials
          </Link>
        </div>
      </section>
    );
  }

  return (
    <section className="section bg-secondary text-secondary">
      <div className="container">
        <nav className="text-sm opacity-70 mb-4">
          <Link href="/materials" className="underline">Materials</Link> <span>›</span> {m.name}
        </nav>

        <header className="mb-6">
          <div className="text-sm opacity-70">{m.category}</div>
          <h1 className="text-secondary">{m.name}</h1>
          <p className="mt-3 max-w-2xl">{m.tagline}</p>
        </header>

        <div className="grid gap-8 md:grid-cols-3">
          <article className="md:col-span-2 card p-6">
            <h2 className="text-xl">Why we specify it</h2>
            <p className="mt-3">{m.intro}</p>

            <div className="mt-6 grid gap-6 sm:grid-cols-2">
              <div>
                <h3 className="font-semibold">Best for</h3>
                <ul className="mt-2 list-disc pl-5 space-y-1">
                  {m.bestFor.map((b) => <li key={b}>{b}</li>)}
                </ul>
              </div>
              <div>
                <h3 className="font-semibold">Why we use it</h3>
                <ul className="mt-2 list-disc pl-5 space-y-1">
                  {m.whyWeUseIt.map((b) => <li key={b}>{b}</li>)}
                </ul>
              </div>
            </div>

            <div className="mt-6">
              <h3 className="font-semibold">Trade-offs</h3>
              <ul className="mt-2 list-disc pl-5 space-y-1">
                {m.tradeOffs.map((b) => <li key={b}>{b}</li>)}
              </ul>
            </div>

            {m.care && (
              <div className="mt-6">
                <h3 className="font-semibold">Care tips</h3>
                <ul className="mt-2 list-disc pl-5 space-y-1">
                  {m.care.map((b) => <li key={b}>{b}</li>)}
                </ul>
              </div>
            )}

            <div className="mt-8 flex gap-3">
              <Link href="/materials" className="btn btn-secondary">Back</Link>
              <a href="mailto:mark@loft33.au?subject=Loft%2033%20materials%20advice"
                 className="btn btn-primary">
                Ask which material suits my boat
              </a>
            </div>
          </article>

          <aside className="card p-6">
            <h2 className="text-xl">At a glance</h2>
            <ul className="mt-3 space-y-2 text-sm">
              <li><span className="font-medium">Category:</span> {m.category}</li>
              <li><span className="font-medium">Use cases:</span> {m.bestFor.join(', ')}</li>
            </ul>
            <p className="mt-4 text-sm opacity-70">
              We specify materials case-by-case. If you have a specific use or mooring conditions, ask us—there are smart variations within each brand line.
            </p>
          </aside>
        </div>
      </div>
    </section>
  );
}
