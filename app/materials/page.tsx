// app/materials/page.tsx
import Link from 'next/link';
import { categoriesInOrder, materials } from './_data';

export const metadata = { title: 'Materials — Loft 33' };

export default function MaterialsIndex() {
  const grouped = categoriesInOrder.map(cat => ({
    cat,
    items: materials.filter(m => m.category === cat),
  }));

  return (
    <section className="section bg-secondary text-secondary">
      <div className="container">
        <header className="mb-8">
          <h1 className="text-secondary">Materials</h1>
          <p className="mt-3 max-w-2xl">
            We specify trusted, premium materials for marine conditions. Explore what we use and why.
          </p>
        </header>

        <div className="space-y-10">
          {grouped.map(({ cat, items }) => (
            <div key={cat}>
              <h2 className="mb-4">{cat}</h2>
              <ul className="grid gap-4 md:grid-cols-2 lg:grid-cols-3">
                {items.map((m) => (
                  <li key={m.slug} className="card p-6 flex flex-col">
                    <div className="text-sm opacity-70">{m.category}</div>
                    <h3 className="mt-1 text-xl font-semibold">{m.name}</h3>
                    <p className="mt-2 text-sm">{m.tagline}</p>
                    <Link
                      href={`/materials/${m.slug}`}
                      className="btn btn-secondary mt-4 w-fit"
                      aria-label={`Learn more about ${m.name}`}
                    >
                      Learn more
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
