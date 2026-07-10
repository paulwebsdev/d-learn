import StepCard from "./StepCard";
import { howItWorks } from "../../constants/howItWorks";

function HowItWorks() {
  return (
    <section className="bg-slate-50 py-24">
      <div className="mx-auto max-w-7xl px-6">

        <div className="mx-auto max-w-3xl text-center">

          <span className="rounded-full bg-blue-100 px-4 py-2 text-sm font-semibold text-blue-700">
            How It Works
          </span>

          <h2 className="mt-6 text-4xl font-extrabold text-slate-900">
            Start Learning in Three Easy Steps
          </h2>

          <p className="mt-5 text-lg leading-8 text-slate-600">
            Joining D Learn is simple. Create an account,
            choose your programme and begin preparing for success.
          </p>

        </div>

        <div className="mt-16 grid gap-10 md:grid-cols-3">

          {howItWorks.map((step) => (
            <StepCard
              key={step.id}
              {...step}
            />
          ))}

        </div>

      </div>
    </section>
  );
}

export default HowItWorks;