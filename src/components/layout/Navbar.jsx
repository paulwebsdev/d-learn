import { useState } from "react";
import { Link } from "react-router-dom";
import { Menu, X } from "lucide-react";
import Button from "../ui/Button";

function Navbar() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  return (
    <header className="sticky top-0 z-50 border-b border-slate-200 bg-white/80 backdrop-blur-lg">
      <div className="mx-auto flex h-20 max-w-7xl items-center justify-between px-6">

        {/* Logo */}
        <Link
          to="/"
          className="flex items-center gap-2"
        >
          <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-blue-600 text-lg font-bold text-white">
            D
          </div>

          <div>
            <h1 className="text-xl font-extrabold text-slate-900">
              D Learn
            </h1>

            <p className="text-xs text-slate-500">
              Learn. Practice. Succeed.
            </p>
          </div>
        </Link>

        {/* Desktop Navigation */}
        <nav className="hidden items-center gap-8 md:flex">

          <a
            href="#home"
            className="font-medium text-slate-600 transition hover:text-blue-600"
          >
            Home
          </a>

          <a
            href="#programs"
            className="font-medium text-slate-600 transition hover:text-blue-600"
          >
            Programs
          </a>

          <a
            href="#features"
            className="font-medium text-slate-600 transition hover:text-blue-600"
          >
            Features
          </a>

          <a
            href="#faq"
            className="font-medium text-slate-600 transition hover:text-blue-600"
          >
            FAQ
          </a>

          <Link
            to="/contact"
            className="font-medium text-slate-600 transition hover:text-blue-600"
          >
            Contact
          </Link>

        </nav>

        {/* Right Side */}
        <div className="hidden items-center gap-4 md:flex">

          <Link
            to="/login"
            className="font-medium text-slate-700 transition hover:text-blue-600"
          >
            Login
          </Link>

          <Link to="/register">
            <Button>
              Get Started
            </Button>
          </Link>

        </div>

        {/* Mobile Menu Button */}
        <button
  onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
  className="rounded-xl border border-slate-200 p-2 transition hover:bg-slate-100 md:hidden"
  aria-label="Toggle Menu"
>
  {mobileMenuOpen ? (
    <X size={22} />
  ) : (
    <Menu size={22} />
  )}
</button>

      </div>

      {mobileMenuOpen && (
  <div className="border-t border-slate-200 bg-white md:hidden">

    <nav className="flex flex-col px-6 py-4">

      <a
        href="#home"
        onClick={() => setMobileMenuOpen(false)}
        className="py-3 text-slate-700 hover:text-blue-600"
      >
        Home
      </a>

      <a
        href="#programs"
        onClick={() => setMobileMenuOpen(false)}
        className="py-3 text-slate-700 hover:text-blue-600"
      >
        Programs
      </a>

      <a
        href="#features"
        onClick={() => setMobileMenuOpen(false)}
        className="py-3 text-slate-700 hover:text-blue-600"
      >
        Features
      </a>

      <a
        href="#faq"
        onClick={() => setMobileMenuOpen(false)}
        className="py-3 text-slate-700 hover:text-blue-600"
      >
        FAQ
      </a>

      <Link
        to="/contact"
        onClick={() => setMobileMenuOpen(false)}
        className="py-3 text-slate-700 hover:text-blue-600"
      >
        Contact
      </Link>

      <hr className="my-4" />

      <Link
        to="/login"
        onClick={() => setMobileMenuOpen(false)}
        className="py-3 text-slate-700 hover:text-blue-600"
      >
        Login
      </Link>

      <Link
        to="/register"
        onClick={() => setMobileMenuOpen(false)}
      >
        <Button className="mt-3 w-full">
          Get Started
        </Button>
      </Link>

    </nav>

  </div>
)}

    </header>
  );
}

export default Navbar;