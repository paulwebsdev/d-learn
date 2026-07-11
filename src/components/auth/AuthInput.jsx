function AuthInput({
  label,
  type = "text",
  placeholder,
  value,
  onChange,
  required = false,
  error,
}) {
  return (
    <div className="mb-5">

      <label className="mb-2 block font-medium text-slate-700">
        {label}

        {required && (
          <span className="ml-1 text-red-500">*</span>
        )}
      </label>

      <input
        type={type}
        placeholder={placeholder}
        value={value}
        onChange={onChange}
        required={required}
        autoComplete={type === "email" ? "email" : "off"}
        className={`w-full rounded-xl border px-4 py-3 outline-none transition focus:ring-4 ${
          error
            ? "border-red-500 focus:border-red-500 focus:ring-red-100"
            : "border-slate-300 focus:border-blue-600 focus:ring-blue-100"
        }`}
      />

      {error && (
        <p className="mt-2 text-sm text-red-500">
          {error}
        </p>
      )}

    </div>
  );
}

export default AuthInput;