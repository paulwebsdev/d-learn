import {
  BookOpen,
  Trophy,
  Calendar,
  CheckCircle2,
  Flame,
} from "lucide-react";

function DashboardPreview() {
  return (
    <div className="rounded-3xl bg-white p-6 shadow-2xl border border-slate-200">

      {/* Header */}
      <div className="flex items-center justify-between">
        <div>
          <p className="text-sm text-slate-500">
            Good Morning 👋
          </p>

          <h2 className="text-2xl font-bold text-slate-900">
            Welcome Back!!
          </h2>
        </div>

        <div className="rounded-2xl bg-blue-100 p-3">
          <BookOpen className="text-blue-600" size={26} />
        </div>
      </div>

      {/* Progress */}
      <div className="mt-8">
        <div className="mb-2 flex justify-between">
          <span className="font-medium text-slate-700">
            Course Progress
          </span>

          <span className="font-bold text-blue-600">
            82%
          </span>
        </div>

        <div className="h-3 rounded-full bg-slate-200">
          <div className="h-3 w-4/5 rounded-full bg-blue-600"></div>
        </div>
      </div>

      {/* Today's Tasks */}
      <div className="mt-8">

        <h3 className="mb-4 font-semibold text-slate-900">
          Today's Tasks
        </h3>

        <div className="space-y-3">

          <div className="flex items-center gap-3 rounded-xl bg-slate-50 p-3">
            <CheckCircle2 className="text-green-500" size={20} />
            <span>Mathematics CBT</span>
          </div>

          <div className="flex items-center gap-3 rounded-xl bg-slate-50 p-3">
            <BookOpen className="text-blue-500" size={20} />
            <span>Physics Lesson</span>
          </div>

          <div className="flex items-center gap-3 rounded-xl bg-slate-50 p-3">
            <Calendar className="text-orange-500" size={20} />
            <span>Mock Exam - Saturday</span>
          </div>

        </div>

      </div>

      {/* Bottom Cards */}
      <div className="mt-8 grid grid-cols-2 gap-4">

        <div className="rounded-2xl bg-orange-50 p-4">
          <Flame className="text-orange-500" />
          <p className="mt-2 text-sm text-slate-500">
            Study Streak
          </p>

          <h3 className="text-xl font-bold">
            12 Days
          </h3>
        </div>

        <div className="rounded-2xl bg-blue-50 p-4">
          <Trophy className="text-blue-600" />
          <p className="mt-2 text-sm text-slate-500">
            Mock Score
          </p>

          <h3 className="text-xl font-bold">
            85%
          </h3>
        </div>

      </div>

    </div>
  );
}

export default DashboardPreview;