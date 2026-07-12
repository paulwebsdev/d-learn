import DashboardLayout from "../../layouts/DashboardLayout";

function Dashboard() {
  return (
    <DashboardLayout>
      <h1 className="text-3xl font-bold">
        Welcome to D Learn 👋
      </h1>

      <p className="mt-2 text-slate-600">
        This is your student dashboard.
      </p>
    </DashboardLayout>
  );
}

export default Dashboard;