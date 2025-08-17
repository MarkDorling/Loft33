// app/projects/[slug]/page.tsx
import Image from "next/image";
import { notFound } from "next/navigation";
import projects from "../../data/projects.json";
import { getProjectImages } from "@/lib/getProjectImages";

type Project = {
  jobNo: string;
  slug: string;
  title: string;
  excerpt: string;
  body: string[];
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
  const imgs = getProjectImages(p.jobNo);
  return {
    title: `${p.title} — Loft 33`,
    description: p.excerpt,
    openGraph: { title: p.title, description: p.excerpt, images: imgs[0] ? [{ url: imgs[0] }] : [] },
  };
}

export default function ProjectPage({ params }: { params: { slug: string } }) {
  const p = getProjectBySlug(params.slug);
  if (!p) notFound();

  const images = getProjectImages(p.jobNo); // ← auto-discovered

  return (
    <section className="section bg-secondary text-secondary">
      <div className="container">
        <p className="text-sm opacity-70">{p.jobNo}</p>
        <h1 className="text-secondary">{p.title}</h1>
        <p className="mt-3 max-w-prose">{p.excerpt}</p>

        <div className="mt-4 flex flex-wrap gap-3 text-sm opacity-80">
          {p.location && <span className="inline-flex items-center rounded-full border border-lightgrey px-3 py-1">{p.location}</span>}
          {p.year && <span className="inline-flex items-center rounded-full border border-lightgrey px-3 py-1">{p.year}</span>}
          {p.materials?.map((m) => (
            <span key={m} className="inline-flex items-center rounded-full border border-lightgrey px-3 py-1">{m}</span>
          ))}
        </div>

            {/* Gallery — full width (stacked) */}
            {images.length > 0 && (
            <div className="mt-6 space-y-4">
                {images.map((src, i) => (
                <figure key={src} className="overflow-hidden rounded-xl">
                    <Image
                    src={src}
                    alt={`${p.title} — image ${i + 1}`}
                    width={2400}               // big enough source for large screens
                    height={1600}
                    sizes="100vw"              // tell browser it spans the full viewport width (inside container)
                    className="w-full h-auto object-cover"
                    priority={i === 0}         // first image eager-load
                    />
                </figure>
                ))}
            </div>
            )}


        <article className="mt-8 prose prose-invert max-w-none">
          {p.body?.map((para, i) => <p key={i}>{para}</p>)}
        </article>

        <div className="mt-10 flex gap-3">
          <a href="mailto:mark@loft33.au?subject=Project%20enquiry" className="btn btn-primary">Email Mark</a>
          <a href="tel:0447091898" className="btn btn-secondary">Call 0447091898</a>
        </div>
      </div>
    </section>
  );
}

export const revalidate = 60; // detects new images within ~1 minute
