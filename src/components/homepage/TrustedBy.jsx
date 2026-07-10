import {
  Star,
  Users,
  BookOpen,
  GraduationCap,
} from "lucide-react";

function TrustedBy() {
  return (
    <section className="bg-white py-16">
      <div className="mx-auto max-w-7xl px-6">

        {/* Heading */}
        <div className="text-center">

          <p className="text-blue-600 font-semibold uppercase tracking-wider">
            Trusted Learning Platform
          </p>

          <h2 className="mt-3 text-3xl font-bold text-slate-900">
            Helping Students Prepare With Confidence
          </h2>

          <p className="mt-4 text-slate-600 max-w-2xl mx-auto">
            Thousands of students use D Learn to prepare for
            Post-UTME, JUPEB, Direct Entry and other admission
            examinations.
          </p>

        </div>

        {/* Cards */}
        <div className="mt-12 grid gap-6 md:grid-cols-4">

          <div className="rounded-2xl border border-slate-200 p-6 text-center shadow-sm">

            <Users
              className="mx-auto text-blue-600"
              size={36}
            />

            <h3 className="mt-4 text-3xl font-bold">
              5,000+
            </h3>

            <p className="text-slate-600">
              Students
            </p>

          </div>

          <div className="rounded-2xl border border-slate-200 p-6 text-center shadow-sm">

            <BookOpen
              className="mx-auto text-blue-600"
              size={36}
            />

            <h3 className="mt-4 text-3xl font-bold">
              20K+
            </h3>

            <p className="text-slate-600">
              CBT Questions
            </p>

          </div>

          <div className="rounded-2xl border border-slate-200 p-6 text-center shadow-sm">

            <GraduationCap
              className="mx-auto text-blue-600"
              size={36}
            />

            <h3 className="mt-4 text-3xl font-bold">
              500+
            </h3>

            <p className="text-slate-600">
              Lessons
            </p>

          </div>

          <div className="rounded-2xl border border-slate-200 p-6 text-center shadow-sm">

            <Star
              className="mx-auto text-yellow-500"
              size={36}
            />

            <h3 className="mt-4 text-3xl font-bold">
              4.9/5
            </h3>

            <p className="text-slate-600">
              Student Rating
            </p>

          </div>

        </div>

      </div>
    </section>
  );
}

export default TrustedBy;