function SectionTitle({ title, subtitle }) {
  return (
    <div className="text-center max-w-3xl mx-auto">

      <h2 className="text-4xl font-bold text-slate-900">
        {title}
      </h2>

      <p className="mt-4 text-slate-600 text-lg">
        {subtitle}
      </p>

    </div>
  );
}

export default SectionTitle;