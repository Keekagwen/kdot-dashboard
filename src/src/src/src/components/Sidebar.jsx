export default function Sidebar() {
  return (
    <aside className="sidebar">
      <div className="brand">
        <div className="logo" aria-hidden />
        <div>
          <h1>KDOT</h1>
          <small>Keep Kansans Moving Forward</small>
        </div>
      </div>

      <nav className="nav">
        <a href="#" className="active">🏠 Dashboard</a>

        <div className="group">
          <div className="label">Project List</div>
          <a href="#">💵 Pay Estimates</a>
          <a href="#">📝 Change Orders</a>
          <a href="#">💳 Advance Request</a>
        </div>

        <div className="group">
          <div className="label">Account</div>
          <a href="#">👤 Account</a>
          <a href="#">📥 My Requests</a>
          <a href="#">⚙️ Settings</a>
          <a href="#">🚪 Log Out</a>
        </div>
      </nav>
    </aside>
  );
}
