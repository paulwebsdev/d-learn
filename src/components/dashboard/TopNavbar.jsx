import { Bell, Search } from "lucide-react";
import { useAuth } from "../../context/AuthContext";

function TopNavbar() {
  const { user } = useAuth();

  return (
    <header className="flex items-center justify-between border-b bg-white px-8 py-4">

      <div className="relative w-96">

        <Search
          size={18}
          className="absolute left-4 top-1/2 -translate-y-1/2 text-slate-400"
        />

        <input
          type="text"
          placeholder="Search courses..."
          className="w-full rounded-xl border border-slate-300 py-3 pl-11 pr-4 outline-none focus:border-blue-600"
        />

      </div>

      <div className="flex items-center gap-6">

        <button className="relative">

          <Bell size={24} />

          <span className="absolute -right-1 -top-1 h-2 w-2 rounded-full bg-red-500"></span>

        </button>

        <div className="text-right">

          <p className="font-semibold">
            {user?.name || "Student"}
          </p>

          <p className="text-sm text-slate-500">
            {user?.email || "student@dlearn.com"}
          </p>

        </div>

        <div className="flex h-11 w-11 items-center justify-center rounded-full bg-blue-600 text-lg font-bold text-white">
          {user?.name?.charAt(0) || "S"}
        </div>

      </div>

    </header>
  );
}

export default TopNavbar;