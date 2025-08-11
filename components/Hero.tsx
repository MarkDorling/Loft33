'use client';
import Image from "next/image";


export default function Hero() {
  return (
    <section className="section bg-primary text-primary">
      <div className="container grid md:grid-cols-2 gap-8 items-center">
        <div>
          <h1 className="text-primary">Premium Marine Trimming, Crafted for Life on the Water</h1>
          <p className="mt-4 text-lg max-w-prose">
            Loft 33 designs and fabricates custom boat covers that look exceptional and last longer —
            using premium marine textiles and precision fabrication techniques.
          </p>
          <div className="mt-6 flex gap-3">
            <a href="mailto:mark@loft33.au?subject=Boat%20cover%20enquiry" className="btn btn-secondary">Get in touch</a>
            <a href="tel:0407065174" className="btn btn-primary">Call 0407 065 174</a>
          </div>
        </div>

        {/* Placeholder visual – swap with a hero image */}
        <div className="flex-1">
          <Image
            src="/hero-image.jpg" // from public folder
            alt="Custom marine cover"
            width={600}
            height={400}
            className="rounded-lg shadow-lg object-cover"
            priority
          />
        </div>
        </div>
    </section>
  );
}
