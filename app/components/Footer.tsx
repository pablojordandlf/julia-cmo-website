import Link from "next/link";

export default function Footer() {
  return (
    <footer className="bg-[#F5F5F5] border-t border-[#E5E5E5]">
      <div className="max-w-[1280px] mx-auto px-6 lg:px-8 py-16">
        <div className="flex flex-col items-center gap-8">
          {/* Logo */}
          <Link href="/" className="font-mono text-2xl font-bold text-[#1A1A1A]">
            JL.
          </Link>

          {/* Links */}
          <div className="flex flex-wrap justify-center gap-6">
            <Link
              href="/about"
              className="text-sm font-medium text-[#737373] hover:text-[#1A1A1A] transition-colors"
            >
              About
            </Link>
            <Link
              href="/case-studies"
              className="text-sm font-medium text-[#737373] hover:text-[#1A1A1A] transition-colors"
            >
              Case Studies
            </Link>
            <Link
              href="/contact"
              className="text-sm font-medium text-[#737373] hover:text-[#1A1A1A] transition-colors"
            >
              Contact
            </Link>
            <a
              href="https://linkedin.com"
              target="_blank"
              rel="noopener noreferrer"
              className="text-sm font-medium text-[#737373] hover:text-[#1A1A1A] transition-colors"
            >
              LinkedIn
            </a>
            <a
              href="mailto:julia@email.com"
              className="text-sm font-medium text-[#737373] hover:text-[#1A1A1A] transition-colors"
            >
              Email
            </a>
          </div>

          {/* Copyright */}
          <p className="text-sm text-[#737373]">
            © 2025 Julia. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}
