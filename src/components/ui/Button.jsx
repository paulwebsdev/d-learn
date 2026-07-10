function Button({
  children,
  variant = "primary",
  type = "button",
  onClick,
}) {
  const styles = {
    primary:
      "bg-blue-600 text-white hover:bg-blue-700",

    secondary:
      "border border-gray-300 bg-white text-gray-800 hover:bg-gray-100",

    success:
      "bg-green-600 text-white hover:bg-green-700",
  };

  return (
    <button
      type={type}
      onClick={onClick}
      className={`rounded-xl px-6 py-3 font-semibold transition ${styles[variant]}`}
    >
      {children}
    </button>
  );
}

export default Button;