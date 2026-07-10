import TestimonialCard from "./TestimonialCard";
import { testimonials } from "../../constants/testimonials";

function Testimonials() {
  return (
    <section className="bg-white py-24">
      <div className="mx-auto max-w-7xl px-6">

        <div className="mx-auto max-w-3xl text-center">

          <span className="rounded-full bg-blue-100 px-4 py-2 text-sm font-semibold text-blue-700">
            Testimonials
          </span>

          <h2 className="mt-6 text-4xl font-extrabold text-slate-900">
            What Our Students Say
          </h2>

          <p className="mt-5 text-lg leading-8 text-slate-600">
            Hear from students who have used D Learn to prepare
            for their admission examinations.
          </p>

        </div>

        <div className="mt-16 grid gap-8 md:grid-cols-2 lg:grid-cols-3">

          {testimonials.map((testimonial) => (
            <TestimonialCard
              key={testimonial.id}
              {...testimonial}
            />
          ))}

        </div>

      </div>
    </section>
  );
}

export default Testimonials;