import { Link } from "react-router-dom";

function Footer() {
  return (
    <footer className="bg-slate-900 py-16 text-slate-300">
      <div className="mx-auto grid max-w-7xl gap-12 px-6 md:grid-cols-4">

        {/* Brand */}
        <div>
          <h2 className="text-2xl font-bold text-white">
            D Learn
          </h2>

          <p className="mt-4 leading-7">
            Helping students prepare for
            Post-UTME, JUPEB, Pre-Degree
            and JAMB examinations.
          </p>
        </div>

        {/* Company */}
        <div>
          <h3 className="font-semibold text-white">
            Company
          </h3>

          <ul className="mt-4 space-y-3">
            <li><Link to="/">Home</Link></li>
            <li><Link to="/about">About</Link></li>
            <li><Link to="/contact">Contact</Link></li>
          </ul>
        </div>

        {/* Programs */}
        <div>
          <h3 className="font-semibold text-white">
            Programmes
          </h3>

          <ul className="mt-4 space-y-3">
            <li>Post UTME</li>
            <li>JUPEB</li>
            <li>Pre-Degree</li>
            <li>JAMB CBT</li>
          </ul>
        </div>

        {/* Contact */}
        <div>
          <h3 className="font-semibold text-white">
            Contact
          </h3>

          <a
  href="mailto:support.dlearn@gmail.com"
  className="mt-4 inline-block transition hover:text-white"
>
  support.dlearn@gmail.com
</a>

          <p className="mt-2">
            Lagos, Nigeria
          </p>
        </div>

      </div>

      <div className="mt-12 border-t border-slate-800 pt-8 text-center text-sm">
        © {new Date().getFullYear()} D Learn. All rights reserved.
      </div>
    </footer>
  );
}

export default Footer;