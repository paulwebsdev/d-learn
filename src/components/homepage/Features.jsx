import FeatureCard from "./FeatureCard";
import { features } from "../../constants/features";

function Features() {
  return (
    <section
      id="features"
      className="bg-white py-24"
    >
      <div className="mx-auto max-w-7xl px-6">

        {/* Heading */}

        <div className="mx-auto max-w-3xl text-center">

          <span className="rounded-full bg-blue-100 px-4 py-2 text-sm font-semibold text-blue-700">
            Why Choose D Learn?
          </span>

          <h2 className="mt-6 text-4xl font-extrabold text-slate-900">
            Everything You Need To Pass
          </h2>

          <p className="mt-5 text-lg leading-8 text-slate-600">
            D Learn combines quality lessons, CBT practice,
            mock examinations and performance tracking into
            one powerful learning platform.
          </p>

        </div>

        {/* Cards */}

        <div className="mt-16 grid gap-8 md:grid-cols-2 lg:grid-cols-3">

          {features.map((feature) => (
            <FeatureCard
              key={feature.id}
              {...feature}
            />
          ))}

        </div>

      </div>
    </section>
  );
}

export default Features;