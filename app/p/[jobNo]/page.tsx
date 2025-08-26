// app/p/[jobNo]/page.tsx
// ─────────────────────────────────────────────────────────────────────────────
// Public marketing detail page for a single project.
// Route param is {jobNo}, e.g. /p/L33-8
// - Looks up the project record by jobNo in projects.json
// - Only renders if isProject === true (or is missing → treated as true)
// - Uses getProjectImages(jobNo) to render the full gallery
// - Adds OG metadata using the first discovered image
// ─────────────────────────────────────────────────────────────────────────────

import Image from "next/image";
import projects from "@/app/data/projects.json" assert { type: "json" };
import { getProjectImages } from "@/lib/getProjectImages";
import type { Metadata } from "next";

type Project = typeof projects[number];

export async function generateStaticParams() {
    // Pre-generate only the project detail pages that are marked as isProject.
    // This keeps /p/* scoped to public case studies.
    return (projects as Project[])
        .filter((p: any) => (typeof p.isProject === "boolean" ? p.isProject : true))
        .map((p) => ({ jobNo: String(p.jobNo).toLowerCase() }));
}

export async function generateMetadata(
    { params }: { params: { jobNo: string } }
): Promise<Metadata> {
    // Find the matching project by jobNo (case-insensitive).
    const p = (projects as Project[]).find(
        (x) => String(x.jobNo).toLowerCase() === params.jobNo.toLowerCase()
    );

    // If not found or explicitly not a project, fall back to a generic title.
    if (!p || ((p as any).isProject === false)) {
        return { title: "Project — Loft 33" };
    }

    // Use the first discovered image for social preview if available.
    const imgs = getProjectImages(String(p.jobNo));
    return {
        title: `${p.title} — Project — Loft 33`,
        description: (p as any).excerpt,
        openGraph: {
            title: p.title,
            description: (p as any).excerpt,
            images: imgs[0] ? [{ url: imgs[0] }] : undefined,
        },
    };
}

export default function Page({ params }: { params: { jobNo: string } }) {
    // Lookup record by jobNo; treat isProject === false as "not found" to avoid public exposure.
    const p = (projects as Project[]).find(
        (x) => String(x.jobNo).toLowerCase() === params.jobNo.toLowerCase()
    );
    if (!p || ((p as any).isProject === false)) {
        return (
            <section className="section bg-secondary text-secondary">
                <div className="container"><h1>Not found</h1></div>
            </section>
        );
    }

    // Auto-discover gallery images from public/project-images/{jobNo}/
    const imgs = getProjectImages(String(p.jobNo));

    return (
        <section className="section bg-secondary text-secondary">
            <div className="container">
                <h1 className="text-secondary">{p.title}</h1>
                {/* {(p as any).excerpt && <p className="mt-3 max-w-prose">{(p as any).excerpt}</p>} */}
                {Array.isArray(p.body) && p.body.map((text: string, i: number) => (
                    <p key={i} className="mt-2">{text}</p>
                ))}

                {/* Full-width, max height = viewport, no crop */}
                <div className="mt-6 space-y-6">
                    {imgs.map((src, i) => (
                        <figure key={src} className="flex justify-center">
                            <div className="rounded-xl overflow-hidden">
                                <Image
                                    src={src}
                                    alt={`${p.title} — image ${i + 1}`}
                                    width={2400}
                                    height={1600}
                                    sizes="100vw"
                                    className="w-full h-auto max-h-[80svh] object-contain"
                                    priority={i === 0}
                                />
                            </div>
                        </figure>

                    ))}
                </div>

                {/* Teaser to owner page (unlisted)
                <div className="mt-10 p-5 card">
                    <p className="font-medium">Care & Warranty</p>
                    <p className="mt-2 text-secondary/90">
                        See detailed care and warranty on the owner page.
                    </p>
                    <a href={`/j/${String(p.jobNo)}`} className="btn btn-primary mt-3 w-fit">Owner page</a>
                </div> */}
            </div>
        </section>
    );
}
