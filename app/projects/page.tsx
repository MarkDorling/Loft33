// app/projects/page.tsx
// ─────────────────────────────────────────────────────────────────────────────
// Public "Projects" index/grid. This is the SEO-friendly landing page.
// It reads metadata (title/excerpt) from app/data/projects.json,
// and pulls the cover image for each project by scanning the
// /public/project-images/{jobNo}/ folder using getProjectImages().
// Only items with isProject === true are shown in the grid.
// ─────────────────────────────────────────────────────────────────────────────

import Image from "next/image";
import Link from "next/link";

// Import the single source of truth for job/project metadata.
// NOTE: the `assert { type: "json" }` keeps TS happy in strict projects.
import projects from "@/app/data/projects.json" assert { type: "json" };

// Auto-discovers image files from /public/project-images/{jobNo}/ at build time.
import { getProjectImages } from "@/lib/getProjectImages";

// Infer the record type from the JSON file itself.
// This keeps the types aligned with your data without a separate interface.
type Project = typeof projects[number];

export const metadata = { title: "Projects — Loft 33" };

export default function ProjectsPage() {
  // If older records don't have isProject, default to true so nothing disappears.
  const items = (projects as Project[]).filter((p: any) =>
    typeof p.isProject === "boolean" ? p.isProject : true
  );

  return (
    <section className="section bg-secondary text-secondary">
      <div className="container">
        <h1 className="text-secondary">Selected Projects</h1>

        <div className="mt-6 grid grid-cols-1 md:grid-cols-3 gap-6">
          {items.map((p) => {
            // Scan /public/project-images/{jobNo}/ for any valid image files.
            // NOTE: This runs on the server at build-time (fs is not available in the browser).
            // If the folder doesn't exist or is empty, imgs will be [].
            const imgs = getProjectImages(String(p.jobNo));
            const cover = imgs[0]; // first image as the card cover

            return (
              <article key={String(p.jobNo)} className="card overflow-hidden">
                {/* Detail page lives at /p/{jobNo} */}
                <Link href={`/p/${String(p.jobNo)}`} className="block group">
                  <div className="aspect-[4/3] relative overflow-hidden">
                    {cover ? (
                      <Image
                        src={cover}
                        alt={p.title}
                        fill
                        sizes="(min-width: 768px) 33vw, 100vw"
                        className="object-cover group-hover:scale-105 transition-transform duration-300"
                        // NOTE: next/image optimises the file at the given path.
                        // No auto-discovery inside next/image itself — that's what getProjectImages() did above.
                      />
                    ) : (
                      // Graceful empty state if a project has no images yet.
                      <div className="absolute inset-0 bg-lightgrey grid place-items-center">
                        <span className="text-secondary/70">No image</span>
                      </div>
                    )}
                  </div>

                  <div className="p-4">
                    <p className="font-medium">{p.title}</p>
                    {(p as any).excerpt && (
                      <p className="text-sm text-secondary/90 mt-1">
                        {(p as any).excerpt}
                      </p>
                    )}
                  </div>
                </Link>
              </article>
            );
          })}
        </div>
      </div>
    </section>
  );
}
