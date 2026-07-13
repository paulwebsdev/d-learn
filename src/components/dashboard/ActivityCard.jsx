function ActivityCard({ title, time }) {
  return (
    <div className="flex items-center justify-between rounded-xl border border-slate-200 bg-white p-4">
      <div>
        <h3 className="font-semibold">
          {title}
        </h3>

        <p className="mt-1 text-sm text-slate-500">
          {time}
        </p>
      </div>

      <span className="text-green-600 text-xl">
        ✓
      </span>
    </div>
  );
}

export default ActivityCard;