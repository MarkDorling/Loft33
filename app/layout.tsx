// app/layout.tsx
import './globals.css';
import type { Metadata } from 'next';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import { Analytics } from '@vercel/analytics/next';

export const metadata: Metadata = {
  title: 'Loft 33',
  description: 'Premium marine covers and outdoor textiles',
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    // Set your theme here: theme-1 .. theme-1
    <html lang="en" className="theme-3">
      <body className="min-h-screen flex flex-col bg-primary text-primary">
        <Header />
        <main className="flex-1">{children}</main>
        <Footer />
        <Analytics /> {/* ← added */}
      </body>
    </html>
  );
}
