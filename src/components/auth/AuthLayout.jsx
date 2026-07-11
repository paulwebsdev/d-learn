import { GraduationCap } from "lucide-react";

function AuthLayout({ children }) {
  return (
    <section className="min-h-screen bg-slate-50">

      <div className="mx-auto flex min-h-screen max-w-7xl">

        {/* Left Side */}
        <div className="hidden w-1/2 flex-col justify-center bg-blue-600 p-16 text-white lg:flex">

          <div className="flex items-center gap-3">

            <div className="flex h-14 w-14 items-center justify-center rounded-2xl bg-white text-blue-600">
              <GraduationCap size={30} />
            </div>

            <h1 className="text-4xl font-extrabold">
              D Learn
            </h1>

          </div>

          <h2 className="mt-12 text-5xl font-bold leading-tight">
            Learn Smarter.
            <br />
            Achieve More.
          </h2>

          <p className="mt-6 max-w-md text-lg text-blue-100">
            Join thousands of students preparing for JAMB,
            Post-UTME, JUPEB, Direct Entry and more with
            structured lessons and CBT practice.
          </p>

        </div>

        {/* Right Side */}
        <div className="flex w-full items-center justify-center p-6 lg:w-1/2">

          {children}

        </div>

      </div>

    </section>
  );
}

export default AuthLayout;