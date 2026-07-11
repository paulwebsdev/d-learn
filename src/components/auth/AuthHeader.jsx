import { GraduationCap } from "lucide-react";

function AuthHeader({ title, subtitle }) {
  return (
    <div className="mb-8 text-center">

      <div className="mx-auto flex h-16 w-16 items-center justify-center rounded-2xl bg-blue-600 text-white">
        <GraduationCap size={32} />
      </div>

      <h1 className="mt-5 text-3xl font-bold text-slate-900">
        {title}
      </h1>

      <p className="mt-2 text-slate-500">
        {subtitle}
      </p>

    </div>
  );
}

export default AuthHeader;