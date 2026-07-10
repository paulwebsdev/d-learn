import ProgramCard from "./ProgramCard";
import { programs } from "../../constants/programs";

function Programs() {
  return (
    <section
      id="programs"
      className="bg-slate-50 py-24"
    >
      <div className="mx-auto max-w-7xl px-6">

        {/* Section Heading */}
        <div className="mx-auto max-w-3xl text-center">

          <span className="rounded-full bg-blue-100 px-4 py-2 text-sm font-semibold text-blue-700">
            Our Programmes
          </span>

          <h2 className="mt-6 text-4xl font-extrabold text-slate-900">
            Choose the Right Learning Path
          </h2>

          <p className="mt-5 text-lg leading-8 text-slate-600">
            Whether you're preparing for Post-UTME, JUPEB,
            Pre-Degree or JAMB CBT, D Learn provides everything
            you need to study with confidence.
          </p>

        </div>

        {/* Cards */}
        <div className="mt-16 grid gap-8 md:grid-cols-2 xl:grid-cols-4">

          {programs.map((program) => (
            <ProgramCard
              key={program.id}
              {...program}
            />
          ))}

        </div>

      </div>
    </section>
  );
}

export default Programs;