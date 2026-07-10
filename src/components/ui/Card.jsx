function Card({ children, className = "" }) {
  return (
    <div
      className={`rounded-2xl bg-white shadow-lg border border-gray-100 ${className}`}
    >
      {children}
    </div>
  );
}

export default Card;