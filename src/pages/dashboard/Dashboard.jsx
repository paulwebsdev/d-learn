import DashboardLayout from "../../layouts/DashboardLayout";
import StatCard from "../../components/dashboard/StatCard";
import QuickActionCard from "../../components/dashboard/QuickActionCard";
import ActivityCard from "../../components/dashboard/ActivityCard";

import {
  BookOpen,
  ClipboardList,
  Trophy,
  Clock,
  PlayCircle,
  BarChart3,
  User,
} from "lucide-react";

function Dashboard() {
  return (
    <DashboardLayout>
      <h1 className="text-3xl font-bold">
        Welcome back, Paul 👋
      </h1>

      <p className="mt-2 text-slate-600">
        Here's an overview of your learning progress.
      </p>

      {/* Statistics Cards */}
      <div className="mt-8 grid gap-6 md:grid-cols-2 xl:grid-cols-4">

        <StatCard
          title="Courses"
          value="12"
          icon={<BookOpen size={28} />}
          color="bg-blue-600"
        />

        <StatCard
          title="Exams"
          value="5"
          icon={<ClipboardList size={28} />}
          color="bg-green-600"
        />

        <StatCard
          title="Average Score"
          value="92%"
          icon={<Trophy size={28} />}
          color="bg-yellow-500"
        />

        <StatCard
          title="Study Hours"
          value="48"
          icon={<Clock size={28} />}
          color="bg-purple-600"
        />

      </div>

      {/* Quick Actions */}
      <h2 className="mt-10 mb-5 text-2xl font-bold">
        Quick Actions
      </h2>

      <div className="grid gap-6 md:grid-cols-2 xl:grid-cols-4">

        <QuickActionCard
          title="Start CBT"
          description="Begin a practice exam."
          icon={<PlayCircle size={32} />}
          onClick={() => console.log("Start CBT")}
        />

        <QuickActionCard
          title="Continue Learning"
          description="Resume your last lesson."
          icon={<BookOpen size={32} />}
          onClick={() => console.log("Continue Learning")}
        />

        <QuickActionCard
          title="View Results"
          description="Check your latest scores."
          icon={<BarChart3 size={32} />}
          onClick={() => console.log("View Results")}
        />

        <QuickActionCard
          title="Edit Profile"
          description="Update your account information."
          icon={<User size={32} />}
          onClick={() => console.log("Edit Profile")}
        />

      </div>

      <h2 className="mt-10 mb-5 text-2xl font-bold">
  Recent Activity
</h2>

<div className="space-y-4">

  <ActivityCard
    title="Completed HTML Quiz"
    time="Today • 10:30 AM"
  />

  <ActivityCard
    title="Started React Fundamentals"
    time="Yesterday • 4:15 PM"
  />

  <ActivityCard
    title="Completed Mathematics CBT"
    time="2 days ago"
  />

  <ActivityCard
    title="Scored 92% in English Test"
    time="3 days ago"
  />

</div>

    </DashboardLayout>
  );
}

export default Dashboard;