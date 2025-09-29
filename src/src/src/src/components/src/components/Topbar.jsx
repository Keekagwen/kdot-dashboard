export default function Topbar() {
  return (
    <header className="topbar">
      <div className="left">
        <h2>Project Admin</h2>
        <div style={{opacity:.8,fontSize:13}}>
          Keep the Construction Office Moving Forward. <em>Not brought to you by KDOT</em>
        </div>
      </div>

      <div className="search" role="search">
        <svg width="18" height="18" viewBox="0 0 24 24" fill="none" aria-hidden>
          <path d="M21 21l-4.3-4.3" stroke="#fff" strokeWidth="2" strokeLinecap="round"/>
          <circle cx="11" cy="11" r="7" stroke="#fff" strokeWidth="2"/>
        </svg>
        <input aria-label="Search" placeholder="Search here" />
      </div>

      <div className="user">
        <div>
          <div style={{fontWeight:700}}>Micheala Everitt</div>
          <div style={{opacity:.8,fontSize:12}}>Construction Assistant</div>
        </div>
        <div className="avatar" />
      </div>
    </header>
  );
}
