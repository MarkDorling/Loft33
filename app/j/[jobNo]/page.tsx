// app/j/[jobNo]/page.tsx
// ─────────────────────────────────────────────────────────────────────────────
// Owner-facing job page (unlisted). Short URL for QR codes: /j/{jobNo}
// - Renders for *every* record in projects.json (not filtered by isProject)
// - Uses getProjectImages(jobNo) for the install/owner gallery
// - Shows basic job meta and placeholders for Care/Warranty modules
// - You can later plug in real care/warranty content via profile IDs
// ─────────────────────────────────────────────────────────────────────────────

import Image from "next/image";
import projects from "@/app/data/projects.json" assert { type: "json" };
import { getProjectImages } from "@/lib/getProjectImages";

type Project = typeof projects[number];

export async function generateStaticParams() {
    // Pre-generate all owner pages — these are shared directly via link/QR.
    // If you want to limit which ones pre-render, filter here.
    return (projects as Project[]).map((p) => ({ jobNo: String(p.jobNo).toLowerCase() }));
}

export default function Page({ params }: { params: { jobNo: string } }) {
    // Case-insensitive job lookup
    const p = (projects as Project[]).find(
        (x) => String(x.jobNo).toLowerCase() === params.jobNo.toLowerCase()
    );
    if (!p) {
        return (
            <section className="section bg-secondary text-secondary">
                <div className="container"><h1>Not found</h1></div>
            </section>
        );
    }

    // Discover images in /public/project-images/{jobNo}/
    const imgs = getProjectImages(String(p.jobNo));

    // Render a human-readable completion date if present (ISO string expected).
    const completion =
        (p as any).dateCompleted &&
        new Date((p as any).dateCompleted as string).toLocaleDateString("en-AU", {
            year: "numeric",
            month: "short",
            day: "numeric",
        });

    return (
        <section className="section bg-secondary text-secondary">
            <div className="container">
                {/* Title + JobNo (uppercase for readability on owner pages) */}
                <h1 className="text-secondary">
                    {p.title}{" "}
                    <span className="text-secondary/60 text-base ml-2">
                        ({String(p.jobNo).toUpperCase()})
                    </span>
                </h1>

                {/* Quick facts */}
                <div className="mt-2 text-sm text-secondary/80 flex flex-wrap gap-3">
                    {(p as any).location && <span>Location: {(p as any).location}</span>}
                    {completion && <span>Completed: {completion}</span>}
                </div>

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

                {/* Job overview (optional copy blocks from JSON) */}
                {(p as any).excerpt || (p as any).body?.length ? (
                    <div className="mt-8 card p-5">
                        <p className="font-medium">About this job</p>
                        {(p as any).excerpt && (
                            <p className="mt-2 text-secondary/90 leading-relaxed">
                                {(p as any).excerpt}
                            </p>
                        )}
                        {(p as any).body?.length ? (
                            <div className="mt-3 space-y-3 text-secondary/90 leading-relaxed">
                                {(p as any).body.map((para: string, idx: number) => (
                                    <p key={idx}>{para}</p>
                                ))}
                            </div>
                        ) : null}
                    </div>
                ) : null}

                {/* Care (placeholder driven by careProfileIds; wire real prose later) */}
                <div className="mt-6 card p-5">
                    <p className="font-medium">Care</p>
                    {(p as any).careProfileIds?.length ? (
                        <ul className="list-disc ml-6 mt-2 text-secondary/90">
                            {(p as any).careProfileIds.map((id: string) => (
                                <li key={id}>
                                    <code className="px-1 py-0.5 bg-lightgrey/40 rounded">{id}</code>
                                </li>
                            ))}
                        </ul>
                    ) : (
                        <p className="mt-2 text-secondary/90">No care profiles attached yet.</p>
                    )}
                </div>

                {/* Warranty (placeholder; swap in your profile registry later) */}
                <div className="mt-6 card p-5">
                    <p className="font-medium">Warranty</p>
                    {(p as any).warrantyProfileId ? (
                        <p className="mt-2 text-secondary/90">
                            Covered by{" "}
                            <code className="px-1 py-0.5 bg-lightgrey/40 rounded">
                                {(p as any).warrantyProfileId}
                            </code>.
                        </p>
                    ) : (
                        <p className="mt-2 text-secondary/90">No warranty profile attached yet.</p>
                    )}
                </div>
            </div>
        </section>
    );
}
