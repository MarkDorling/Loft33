"use client";

import { motion } from "framer-motion";
import { Shield, Sofa, SunMedium } from "lucide-react";

export default function ServicesMatrixPage() {
  const sectors: Array<{ name: string; services: Record<string, string[]> }> = [
    {
      name: "Marine",
      services: {
        "Custom Cockpit Cushion Sets": [
          "Designed for comfort, made to fit your seating perfectly, and built with marine-grade foams and fabrics that last season after season.",
        ],
        "Full Boat Covers & Protective Sets": [
          "From simple trailer-boat covers to matched helm, BBQ, and equipment covers — all tailored for your vessel’s layout.",
        ],
        "Aft Shade & Boom Tent Solutions": [
          "Stylish, easy-to-use shade for those long days on the water, with hardware and fabrics chosen for UV protection and saltwater resistance.",
        ],
      },
    },
    {
      name: "Residential",
      services: {
        "Outdoor Lounge & Seating Upgrades": [
          "Complete cushion sets for patios, decks, and pool areas — custom sizes, colours, and comfort levels.",
        ],
        "Protective Cover Sets": [
          "BBQs, fridges, outdoor kitchens, and garden equipment — protected year-round without compromising on style.",
        ],
        "Umbrella & Awning Fabric Refresh": [
          "Replace tired fabric on existing frames for a fast, cost-effective outdoor update.",
        ],
      },
    },
    {
      name: "Commercial",
      services: {
        "High-Durability Seating & Cushions": [
          "Banquettes, benches, and beer garden runs — upholstered for heavy use in weather-exposed areas.",
        ],
        "Venue & Equipment Covers": [
          "Heaters, cabinets, BBQs, and marina gear — all covered to look sharp and last longer.",
        ],
        "Café & Venue Awning Refresh": [
          "Fabric replacement for existing shade structures to keep your venue looking fresh and welcoming.",
        ],
      },
    },
  ];

  const whyChoose = [
    "Patterned to fit, not just pulled tight",
    "Only premium marine-grade fabrics and hardware",
    "Designed for daily use and long-term durability",
  ];

  const icons = [Shield, Sofa, SunMedium];

  return (
    <main className="bg-primary text-primary min-h-screen">
      {/* Intro + Why Choose */}
      <section className="container mx-auto px-4 pt-12 md:pt-16">
        <motion.div
          initial={{ opacity: 0, y: 12 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.4 }}
          className="rounded-3xl p-6 md:p-10 border border-lightgrey shadow-lg bg-secondary text-secondary"
        >
          <div className="grid gap-6 md:grid-cols-3 items-start">
            <div className="md:col-span-2">
              <h1 className="text-4xl md:text-5xl font-semibold tracking-tight">Services</h1>
              <p className="mt-4 leading-relaxed max-w-2xl">
                At Loft 33, we create fit-for-purpose textile solutions for boats, homes, and commercial spaces. Every piece is patterned for a perfect fit, made from premium materials, and built to handle the elements.
              </p>
              <p className="mt-4">
                We focus on three key services per sector — so you can see straight away what we do best in your world.
              </p>
            </div>
            <div className="rounded-2xl p-6 bg-secondary text-secondary border border-lightgrey shadow-sm">
              <h2 className="text-lg font-medium">Why choose Loft 33</h2>
              <div className="mt-3 space-y-2 text-sm leading-relaxed">
                {whyChoose.map((line) => (
                  <div key={line}>{line}</div>
                ))}
              </div>
            </div>
          </div>
        </motion.div>
      </section>

      {/* Sector matrix */}
      <section className="container mx-auto px-4 py-12 md:py-16">
        <div className="space-y-8 md:space-y-10">
          {sectors.map((sector, i) => (
            <motion.div
              key={sector.name}
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.2 }}
              transition={{ duration: 0.35, delay: i * 0.05 }}
              className="rounded-3xl border border-lightgrey shadow-lg overflow-hidden bg-secondary text-secondary"
            >
              <div className="px-6 md:px-8 py-5 bg-secondary">
                <h2 className="text-2xl md:text-3xl font-semibold tracking-tight">{sector.name}</h2>
              </div>
              <div className="grid md:grid-cols-3">
                {Object.entries(sector.services).map(([title, desc], idx) => {
                  const Icon = icons[idx];
                  return (
                    <div
                      key={title}
                      className={`relative p-6 md:p-7 bg-secondary text-secondary border-t border-lightgrey ${
                        idx > 0 ? "md:border-l" : ""
                      }`}
                    >
                      <div className="inline-flex items-center gap-2 font-medium mb-4">
                        <span className="inline-grid place-items-center h-8 w-8 rounded-xl border border-lightgrey">
                          {Icon && <Icon className="h-4 w-4" aria-hidden />}
                        </span>
                        <h3 className="text-lg">{title}</h3>
                      </div>
                      <div className="leading-relaxed text-sm">{desc[0]}</div>
                    </div>
                  );
                })}
              </div>
            </motion.div>
          ))}
        </div>
      </section>

      {/* CTA (use your existing button styles) */}
      <section className="container mx-auto px-4 pb-24">
        <div className="rounded-3xl p-8 md:p-10 border border-lightgrey shadow-lg bg-secondary text-secondary text-center">
          <h3 className="text-2xl md:text-3xl font-semibold">Ready to start?</h3>
          <p className="mt-3 max-w-2xl mx-auto">
            Tell us your sector and what you need covered, upholstered, or shaded. We’ll come back with options and a practical path forward.
          </p>
          <div className="mt-6 flex items-center justify-center gap-3">
            <a href="/contact" className="btn btn-primary">Talk to Loft 33</a>
            <a href="/projects" className="btn btn-secondary">See recent work</a>
          </div>
        </div>
      </section>
    </main>
  );
}
