function Loader() {
  return (
    <div className="flex min-h-screen flex-col items-center justify-center bg-slate-50">

      <div className="flex h-20 w-20 items-center justify-center rounded-3xl bg-blue-600 text-3xl font-bold text-white shadow-lg">
        D
      </div>

      <h1 className="mt-6 text-3xl font-bold text-slate-900">
        D Learn
      </h1>

      <p className="mt-2 text-slate-500">
        Learn. Practice. Succeed.
      </p>

      <div className="mt-8 h-10 w-10 animate-spin rounded-full border-4 border-slate-200 border-t-blue-600"></div>

    </div>
  );
}

export default Loader;