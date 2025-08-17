// app/projects/page.tsx
import Image from "next/image";
import projects from "../data/projects.json";
import { getProjectImages } from "@/lib/getProjectImages";

export default function Projects() {
  const list = projects as any[];
  return (
    <section className="py-12">
      <div className="container mx-auto grid grid-cols-1 md:grid-cols-3 gap-6">
        {list.map((p) => {
          const first = getProjectImages(p.jobNo)[0] ?? "/hero-image.jpg";
          return (
            <a key={p.jobNo} href={`/projects/${p.slug}`} className="block group">
              <div className="overflow-hidden rounded-lg shadow-lg">
                <Image src={first} alt={p.title} width={600} height={450} className="object-cover group-hover:scale-105 transition-transform" />
              </div>
              <h3 className="mt-4 text-lg font-semibold">{p.title}</h3>
              <p className="text-sm">{p.excerpt}</p>
            </a>
          );
        })}
      </div>
    </section>
  );
}
