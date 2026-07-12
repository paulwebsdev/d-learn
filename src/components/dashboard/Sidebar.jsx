import { Link, useLocation } from "react-router-dom";
import {
  LayoutDashboard,
  BookOpen,
  ClipboardList,
  BarChart3,
  User,
  Settings,
  LogOut,
} from "lucide-react";

function Sidebar() {
  const location = useLocation();

  const menuItems = [
    {
      name: "Dashboard",
      icon: LayoutDashboard,
      path: "/dashboard",
    },
    {
      name: "My Courses",
      icon: BookOpen,
      path: "/dashboard/courses",
    },
    {
      name: "CBT Practice",
      icon: ClipboardList,
      path: "/dashboard/cbt",
    },
    {
      name: "Results",
      icon: BarChart3,
      path: "/dashboard/results",
    },
    {
      name: "Profile",
      icon: User,
      path: "/dashboard/profile",
    },
    {
      name: "Settings",
      icon: Settings,
      path: "/dashboard/settings",
    },
  ];

  return (
    <aside className="flex h-screen w-64 flex-col border-r bg-white">

      <div className="border-b p-6">

        <h1 className="text-2xl font-bold text-blue-600">
          D Learn
        </h1>

      </div>

      <nav className="flex-1 p-4">

        {menuItems.map((item) => {
          const Icon = item.icon;

          return (
            <Link
              key={item.path}
              to={item.path}
              className={`mb-2 flex items-center gap-3 rounded-xl px-4 py-3 transition ${
                location.pathname === item.path
                  ? "bg-blue-600 text-white"
                  : "text-slate-700 hover:bg-slate-100"
              }`}
            >
              <Icon size={20} />

              {item.name}
            </Link>
          );
        })}

      </nav>

      <div className="border-t p-4">

        <button
          className="flex w-full items-center gap-3 rounded-xl px-4 py-3 text-red-600 transition hover:bg-red-50"
        >
          <LogOut size={20} />

          Logout
        </button>

      </div>

    </aside>
  );
}

export default Sidebar;