import { Link } from "react-router-dom";
import { SearchX } from "lucide-react";
import Button from "../../components/ui/Button";

function NotFound() {
  return (
    <section className="flex min-h-[80vh] items-center justify-center bg-slate-50 px-6">
      <div className="max-w-lg text-center">

        <div className="mx-auto flex h-24 w-24 items-center justify-center rounded-full bg-blue-100">
          <SearchX
            size={50}
            className="text-blue-600"
          />
        </div>

        <h1 className="mt-8 text-7xl font-extrabold text-slate-900">
          404
        </h1>

        <h2 className="mt-4 text-3xl font-bold text-slate-900">
          Page Not Found
        </h2>

        <p className="mt-6 text-lg leading-8 text-slate-600">
          Sorry, the page you're looking for doesn't exist or may have been moved.
        </p>

        <div className="mt-10">
          <Link to="/">
            <Button>
              Back to Home
            </Button>
          </Link>
        </div>

      </div>
    </section>
  );
}

export default NotFound;