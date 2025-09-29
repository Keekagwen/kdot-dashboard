import { useMemo, useState } from "react";
import { projects as seed } from "../data/projects.js";

const sorters = {
  alpha: (a,b) => a.id.localeCompare(b.id),
  ntp:   (a,b) => new Date(a.ntp) - new Date(b.ntp),
  pending: (a,b) => a.pending - b.pending,
};

export default function ProjectsTable() {
  const [sortBy, setSortBy] = useState("alpha");
  const projects = useMemo(() => [...seed].sort(sorters[sortBy]), [sortBy]);

  return (
    <div className="card">
      <div style={{display:"flex",alignItems:"center",justifyContent:"space-between"}}>
        <h3 style={{marginTop:0}}>Active Projects:</h3>
        <div className="controls">
          <span style={{fontSize:14,opacity:.75}}>Sort by</span>
          <select
            aria-label="Sort projects"
            value={sortBy}
            onChange={e => setSortBy(e.target.value)}
            className="btn secondary"
          >
            <option value="alpha">Alphabetical A–Z</option>
            <option value="ntp">NTP</option>
            <option value="pending">Pending Changes</option>
          </select>
          <button className="btn">New Project</button>
          <button className="btn">Pending Changes</button>
        </div>
      </div>

      <div className="table-head" style={{marginTop:6,padding:"8px 8px"}}>
        <div>Purpose</div>
        <div>NTP</div>
        <div>Pending Changes</div>
        <div>Status</div>
      </div>

      {projects.map((p, i) => (
        <div className="row" key={`${p.id}-${i}`} role="row">
          <div>
            <div style={{fontWeight:700}}>{p.id}</div>
            <div style={{fontSize:12, color:"var(--muted)"}}>{p.vendor}</div>
          </div>
          <div>{p.ntp}</div>
          <div>{p.pending}</div>
          <div>
            <span className="badge">
              <span style={{width:8,height:8,borderRadius:999,background:"var(--success)"}} />
              {p.status}
            </span>
          </div>
        </div>
      ))}

      <div style={{textAlign:"center",marginTop:10}}>
        <a href="#" className="btn secondary">Show All Projects</a>
      </div>
    </div>
  );
}
