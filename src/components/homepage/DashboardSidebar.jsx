import {
  LayoutDashboard,
  BookOpen,
  ClipboardCheck,
  Trophy,
  Settings
} from "lucide-react";

function DashboardSidebar() {
  return (
    <div className="w-48 border-r border-slate-200 bg-slate-50 p-5">

      <h3 className="mb-8 text-lg font-bold text-blue-600">
        D Learn
      </h3>

      <div className="space-y-5">

        <div className="flex items-center gap-3 text-blue-600 font-semibold">
          <LayoutDashboard size={20} />
          Dashboard
        </div>

        <div className="flex items-center gap-3 text-slate-600">
          <BookOpen size={20} />
          Courses
        </div>

        <div className="flex items-center gap-3 text-slate-600">
          <ClipboardCheck size={20} />
          CBT
        </div>

        <div className="flex items-center gap-3 text-slate-600">
          <Trophy size={20} />
          Results
        </div>

        <div className="flex items-center gap-3 text-slate-600">
          <Settings size={20} />
          Settings
        </div>

      </div>

    </div>
  );
}

export default DashboardSidebar;