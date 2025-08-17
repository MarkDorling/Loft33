// app/projects/[slug]/page.tsx
import Image from "next/image";
import { notFound } from "next/navigation";
import projects from "../../data/projects.json";

type Project = {
  jobNo: string;
  slug: string;
  title: string;
  excerpt: string;
  body: string[];
  images: string[];
  materials?: string[];
  location?: string;
  year?: number | null;
};

const list = projects as Project[];

function getProjectBySlug(slug: string) {
  return list.find((p) => p.slug === slug);
}

export function generateStaticParams() {
  return list.map((p) => ({ slug: p.slug }));
}

export function generateMetadata({ params }: { params: { slug: string } }) {
  const p = getProjectBySlug(params.slug);
  if (!p) return {};
  return {
    title: `${p.title} — Loft 33`,
    description: p.excerpt,
    openGraph: {
      title: p.title,
      description: p.excerpt,
      images: p.images?.length ? [{ url: p.images[0] }] : []
    }
  };
}

export default function ProjectPage({ params }: { params: { slug: string } }) {
  const p = getProjectBySlug(params.slug);
  if (!p) notFound();

  return (
    <section className="section bg-secondary text-secondary">
      <div className="container">
        <p className="text-sm opacity-70">{p.jobNo}</p>
        <h1 className="text-secondary">{p.title}</h1>
        <p className="mt-3 max-w-prose">{p.excerpt}</p>

        <div className="mt-4 flex flex-wrap gap-3 text-sm opacity-80">
          {p.location && (
            <span className="inline-flex items-center rounded-full border border-lightgrey px-3 py-1">
              {p.location}
            </span>
          )}
          {p.year && (
            <span className="inline-flex items-center rounded-full border border-lightgrey px-3 py-1">
              {p.year}
            </span>
          )}
          {p.materials?.map((m) => (
            <span key={m} className="inline-flex items-center rounded-full border border-lightgrey px-3 py-1">
              {m}
            </span>
          ))}
        </div>

        {p.images?.length > 0 && (
          <div className="grid gap-4 md:grid-cols-3 mt-6">
            {p.images.map((src, i) => (
              <figure key={src} className="card overflow-hidden">
                <Image
                  src={src}
                  alt={`${p.title} — image ${i + 1}`}
                  width={1200}
                  height={900}
                  className="w-full h-auto object-cover"
                />
              </figure>
            ))}
          </div>
        )}

        <article className="mt-8 prose prose-invert max-w-none">
          {p.body?.map((para, i) => (
            <p key={i}>{para}</p>
          ))}
        </article>

        <div className="mt-10 flex gap-3">
          <a href="mailto:mark@loft33.au?subject=Project%20enquiry" className="btn btn-primary">Email Mark</a>
          <a href="tel:0447091898" className="btn btn-secondary">Call 0447091898</a>
        </div>
      </div>
    </section>
  );
}

export const revalidate = 60; // ISR revalidation
