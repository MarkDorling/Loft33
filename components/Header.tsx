import Link from "next/link";
import LogoMark from "./LogoMark";

export default function Header() {
  return (
    <header className="bg-primary text-primary sticky top-0 z-50">
      <div className="container mx-auto flex items-center justify-between px-6 py-4">
        <Link href="/" className="flex items-center gap-2 group" aria-label="Loft 33 home">
          <LogoMark className="w-24 h-24 transition-transform duration-200 group-hover:scale-105" />
          <span className="text-sm font-light tracking-wide opacity-90 group-hover:opacity-75">
            Premium Marine Trimming
          </span>
        </Link>

        <nav className="flex gap-6 text-sm">
          <Link href="/services" className="hover:underline">Services</Link>
          <Link href="/projects" className="hover:underline">Projects</Link>
          <Link href="/materials" className="hover:underline">Materials</Link>
          <Link href="/faqs" className="hover:underline">FAQs</Link>
          <Link href="/about" className="hover:underline">About</Link>
          <Link href="/contact" className="hover:underline">Contact</Link>
        </nav>
      </div>
    </header>
  );
}
