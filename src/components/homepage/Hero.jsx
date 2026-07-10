import Button from "../ui/Button";
import Badge from "../ui/Badge";
import DashboardPreview from "./DashboardPreview";

function Hero() {
  return (
    <section
      id="home"
      className="bg-gradient-to-b from-slate-50 via-white to-blue-50"
    >
      <div className="mx-auto grid min-h-[90vh] max-w-7xl items-center gap-16 px-6 py-20 lg:grid-cols-2">

        {/* Left Side */}
        <div>

          <Badge>
            🎓 Nigeria's Smart Learning Platform
          </Badge>

          <h1 className="mt-6 text-5xl font-extrabold leading-tight text-slate-900 lg:text-6xl">
            Prepare Smarter.
            <br />
            Get Admission Ready.
          </h1>

          <p className="mt-6 max-w-xl text-lg leading-8 text-slate-600">
            Prepare for Post-UTME, JUPEB, Direct Entry and
            Pre-Degree with structured lessons, CBT practice,
            mock examinations and performance tracking.
          </p>

          <div className="mt-10 flex flex-wrap gap-4">
            <Button>
              Start Learning
            </Button>

            <Button variant="secondary">
              Explore Programs
            </Button>
          </div>

          <div className="mt-10 flex flex-wrap gap-8">

            <div>
              <h2 className="text-3xl font-bold text-blue-600">
                20K+
              </h2>

              <p className="text-slate-600">
                CBT Questions
              </p>
            </div>

            <div>
              <h2 className="text-3xl font-bold text-blue-600">
                500+
              </h2>

              <p className="text-slate-600">
                Lessons
              </p>
            </div>

            <div>
              <h2 className="text-3xl font-bold text-blue-600">
                95%
              </h2>

              <p className="text-slate-600">
                Success Rate
              </p>
            </div>

          </div>

        </div>

        {/* Right Side */}

        <DashboardPreview />

      </div>
    </section>
  );
}

export default Hero;