import { Link } from "react-router-dom";
import { Menu } from "lucide-react";
import Button from "../ui/Button";

function Navbar() {
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
          className="rounded-xl border border-slate-200 p-2 transition hover:bg-slate-100 md:hidden"
          aria-label="Open Menu"
        >
          <Menu size={22} />
        </button>

      </div>
    </header>
  );
}

export default Navbar;