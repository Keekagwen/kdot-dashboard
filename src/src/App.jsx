import Sidebar from "./components/Sidebar.jsx";
import Topbar from "./components/Topbar.jsx";
import GuidanceCard from "./components/GuidanceCard.jsx";
import ProjectsTable from "./components/ProjectsTable.jsx";

export default function App() {
  return (
    <div className="app">
      <Sidebar />
      <main className="content">
        <Topbar />
        <section className="grid">
          <GuidanceCard />
          <ProjectsTable />
        </section>
      </main>
    </div>
  );
}
