import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import Link from "next/link";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "YourConsulting | Cloud & AI Solutions",
  description: "We help businesses scale with cloud, data and AI solutions.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${geistSans.variable} ${geistMono.variable} bg-gray-50 text-gray-900`}>
  
  {/* Navbar */}
  <header className="bg-white shadow-sm">
    <div className="max-w-7xl mx-auto px-6 py-4 flex justify-between items-center">
      <Link href="/" 
      className="text-xl font-bold text-blue-600 hover:opacity-80 transition">
  YourConsulting
</Link>

<nav className="space-x-6 hidden md:block">
  <Link href="/services" className="hover:text-blue-600">
    Services
  </Link>
  <Link href="/about" className="hover:text-blue-600">
    About
  </Link>
  <Link href="/contact" className="hover:text-blue-600">
    Contact
  </Link>
</nav>

      <button className="bg-blue-600 text-white px-5 py-2 rounded-lg hover:bg-blue-700 transition">
        Get Started
      </button>
    </div>
  </header>

  {children}

  {/* Footer */}
  <footer className="bg-gray-900 text-white py-8 mt-20">
    <div className="max-w-7xl mx-auto px-6 text-center">
      <p>© {new Date().getFullYear()} YourConsulting. All rights reserved.</p>
    </div>
  </footer>

</body>
    </html>
  );
}
