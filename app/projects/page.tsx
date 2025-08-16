import Image from "next/image";
import projects from "../data/projects.json";

export default function Projects() {
  return (
    <section className="py-12">
      <div className="container mx-auto grid grid-cols-1 md:grid-cols-3 gap-6">
        {projects.map((project) => (
          <a key={project.title} href={project.link} className="block group">
            <div className="overflow-hidden rounded-lg shadow-lg">
              <Image
                src={project.image}
                alt={project.title}
                width={400}
                height={300}
                className="object-cover group-hover:scale-105 transition-transform"
              />
            </div>
            <h3 className="mt-4 text-lg font-semibold">{project.title}</h3>
            <p className="text-sm ">{project.description}</p>
          </a>
        ))}
      </div>
    </section>
  );
}
