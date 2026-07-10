import { Star } from "lucide-react";

function TestimonialCard({
  name,
  programme,
  message,
  rating,
}) {
  return (
    <div className="rounded-3xl border border-slate-200 bg-white p-8 shadow-sm transition-all duration-300 hover:-translate-y-2 hover:shadow-xl">

      <div className="mb-5 flex gap-1">
        {[...Array(rating)].map((_, index) => (
          <Star
            key={index}
            size={18}
            className="fill-yellow-400 text-yellow-400"
          />
        ))}
      </div>

      <p className="leading-7 text-slate-600">
        "{message}"
      </p>

      <div className="mt-8">
        <h4 className="font-bold text-slate-900">
          {name}
        </h4>

        <p className="text-sm text-slate-500">
          {programme}
        </p>
      </div>

    </div>
  );
}

export default TestimonialCard;