export default function GuidanceCard() {
  return (
    <div className="card">
      <h3 style={{marginTop:0}}>Guidance &amp; Events:</h3>

      <div className="tabs">
        <span className="tab">Pay Estimates</span>
      </div>

      <div className="placeholder" />
      <div className="placeholder" />
      <div className="placeholder" />

      <div className="tabs" style={{marginTop:12}}>
        <span className="tab" style={{background:"linear-gradient(180deg,#2b53da,#2746be)"}}>
          Advance Request
        </span>
      </div>

      <div className="placeholder" />
      <div className="placeholder" />

      <div style={{display:"flex",gap:10,marginTop:14}}>
        <button className="btn">Requests Guidance</button>
        <button className="btn">New Event</button>
      </div>
    </div>
  );
}
