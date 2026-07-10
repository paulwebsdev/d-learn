function StepCard({
  step,
  icon: Icon,
  title,
  description,
}) {
  return (
    <div className="text-center">

      <div className="mx-auto flex h-20 w-20 items-center justify-center rounded-full bg-blue-100 text-blue-600">
        <Icon size={34} />
      </div>

      <p className="mt-5 text-sm font-bold tracking-widest text-blue-600">
        STEP {step}
      </p>

      <h3 className="mt-3 text-2xl font-bold text-slate-900">
        {title}
      </h3>

      <p className="mt-4 leading-7 text-slate-600">
        {description}
      </p>

    </div>
  );
}

export default StepCard;