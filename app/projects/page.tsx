// app/projects/page.tsx
import Image from "next/image";
import projects from "../data/projects.json";

export const metadata = { title: "Projects — Loft 33" };

export default function ProjectsPage() {
  return (
    <section className="py-12 bg-secondary text-secondary">
      <div className="container mx-auto grid grid-cols-1 md:grid-cols-3 gap-6">
        {(projects as any[]).map((p) => (
          <a key={p.jobNo} href={`/projects/${p.slug}`} className="block group">
            <div className="overflow-hidden rounded-lg shadow-lg">
              <Image
                src={p.images?.[0] ?? "/placeholder.jpg"}
                alt={p.title}
                width={600}
                height={450}
                className="object-cover aspect-[4/3] w-full h-auto group-hover:scale-105 transition-transform"
              />
            </div>
            <h3 className="mt-4 text-lg font-semibold">{p.title}</h3>
            <p className="text-sm">{p.excerpt}</p>
          </a>
        ))}
      </div>
    </section>
  );
}
