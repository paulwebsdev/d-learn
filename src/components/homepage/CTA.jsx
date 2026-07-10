import { Link } from "react-router-dom";
import Button from "../ui/Button";

function CTA() {
  return (
    <section className="bg-blue-600 py-24">
      <div className="mx-auto max-w-4xl px-6 text-center">

        <span className="rounded-full bg-white/20 px-4 py-2 text-sm font-semibold text-white">
          Start Today
        </span>

        <h2 className="mt-6 text-4xl font-extrabold text-white">
          Your Admission Success Starts Here
        </h2>

        <p className="mt-6 text-lg leading-8 text-blue-100">
          Join thousands of students preparing smarter with
          structured lessons, CBT practice, mock exams and
          progress tracking.
        </p>

        <div className="mt-10 flex flex-col justify-center gap-4 sm:flex-row">

          <Link to="/register">
            <Button>
              Get Started Free
            </Button>
          </Link>

          <Link to="/programs">
            <Button variant="secondary">
              Explore Programmes
            </Button>
          </Link>

        </div>

      </div>
    </section>
  );
}

export default CTA;