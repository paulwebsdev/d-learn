function QuickActionCard({
  title,
  description,
  icon,
  onClick,
}) {
  return (
    <button
      onClick={onClick}
      className="w-full rounded-2xl bg-white p-5 text-left shadow-sm transition hover:-translate-y-1 hover:shadow-lg"
    >
      <div className="mb-4 text-blue-600">
        {icon}
      </div>

      <h3 className="text-lg font-semibold">
        {title}
      </h3>

      <p className="mt-2 text-sm text-slate-500">
        {description}
      </p>
    </button>
  );
}

export default QuickActionCard;