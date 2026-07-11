function AuthCard({ children }) {
  return (
    <div className="w-full max-w-md rounded-3xl bg-white p-8 shadow-xl border border-slate-200">

      {children}

    </div>
  );
}

export default AuthCard;