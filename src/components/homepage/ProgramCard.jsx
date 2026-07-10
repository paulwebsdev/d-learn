import { Link } from "react-router-dom";
import Button from "../ui/Button";

const badgeColors = {
  blue: "bg-blue-100 text-blue-700",
  green: "bg-green-100 text-green-700",
  orange: "bg-orange-100 text-orange-700",
  purple: "bg-purple-100 text-purple-700",
};

function ProgramCard({
  icon: Icon,
  title,
  description,
  buttonText,
  link,
  badge,
  color,
}) {
  return (
    <div className="group relative overflow-hidden rounded-3xl border border-slate-200 bg-white p-8 shadow-sm transition-all duration-300 hover:-translate-y-2 hover:shadow-2xl">

      {/* Badge */}
      <span
        className={`absolute right-5 top-5 rounded-full px-3 py-1 text-xs font-semibold ${badgeColors[color]}`}
      >
        {badge}
      </span>

      {/* Icon */}
      <div className="flex h-16 w-16 items-center justify-center rounded-2xl bg-blue-100 text-blue-600 transition-all duration-300 group-hover:scale-110 group-hover:bg-blue-600 group-hover:text-white">
        <Icon size={32} />
      </div>

      {/* Title */}
      <h3 className="mt-6 text-2xl font-bold text-slate-900">
        {title}
      </h3>

      {/* Description */}
      <p className="mt-4 leading-7 text-slate-600">
        {description}
      </p>

      {/* Button */}
      <div className="mt-8">
        <Link to={link}>
          <Button variant="secondary">
            {buttonText}
          </Button>
        </Link>
      </div>

    </div>
  );
}

export default ProgramCard;