function DashboardLayout({ children }) {
  return (
    <div>
      <aside>
        Student Sidebar
      </aside>

      <main>
        {children}
      </main>
    </div>
  );
}

export default DashboardLayout;