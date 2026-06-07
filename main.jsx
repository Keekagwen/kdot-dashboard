import React, { useMemo, useState } from 'react';
import { createRoot } from 'react-dom/client';
import {
  AlertTriangle, ArrowRight, Bell, BookOpen, CalendarDays, CheckCircle2,
  ChevronDown, ClipboardCheck, CloudSun, Construction, ExternalLink, FileText,
  FolderOpen, GraduationCap, HardHat, Home, Info, Link as LinkIcon, Mail, Map,
  MonitorCog, Phone, Search, ShieldCheck, Siren, Star, TerminalSquare, ToolCase,
  TrafficCone, Users, Wrench
} from 'lucide-react';
import './styles.css';

const navItems = [
  { id: 'home', label: 'Home', icon: Home },
  { id: 'tools', label: 'Tools', icon: Wrench },
  { id: 'knowledge', label: 'Knowledge Base', icon: BookOpen },
  { id: 'resources', label: 'Resources', icon: FolderOpen },
  { id: 'training', label: 'Training', icon: GraduationCap },
  { id: 'projects', label: 'Project Info', icon: Construction },
  { id: 'announcements', label: 'Announcements', icon: Bell },
];

const quickStats = [
  { label: 'Active Projects', value: '23' },
  { label: 'Working Days Charging', value: '8' },
  { label: 'Change Orders Pending', value: '5' },
  { label: 'Pay Estimates In Process', value: '6' },
];

const tools = [
  { title: 'AWP Hub', icon: MonitorCog, items: ['AASHTOWare Login', 'DWR Guidance', 'Daily Diary Guidance', 'AWP Navigation Tips', 'Common Errors / Fixes', 'Training Resources'] },
  { title: 'Forms & Templates', icon: FileText, items: ['Form 221 – Advance Request', 'Form 259 – Contractor Application', 'Form 260 – Materials Certification', 'Contractor Notices', 'Deficiency Templates', 'Closeout Forms'] },
  { title: 'Construction Calculators', icon: TerminalSquare, items: ['HMA Tonnage Calculator', 'Working Days Calculator', 'Stationing Calculator', 'Excavation Calculator', 'Pay Reduction Calculator', 'Liquidated Damages Calculator'] },
  { title: 'Quick Links', icon: LinkIcon, items: ['SharePoint', 'Teams', 'OnBase', 'KanDrive', 'KART', 'Outlook Shared Mailbox'] },
  { title: 'Systems & Applications', icon: ToolCase, items: ['AASHTOWare', 'KDOT Intranet', 'Power BI Dashboards', 'KDOT Connect', 'Web Mail', 'GIS Map Viewer'] },
  { title: 'Office Tools', icon: Wrench, items: ['Daily Field Report', 'Weather Radar', 'Milepost Tool', 'Unit Price Look Up', 'Unit Conversion', 'Fuel Price Finder'] },
];

const knowledgeCards = [
  { title: 'Contract Administration', icon: ClipboardCheck, description: 'Change orders, working days, suspensions, claims, time extensions, and contractor notices.' },
  { title: 'Documentation & Inspection', icon: FileText, description: 'Daily diaries, DWRs, material certification, photo documentation, and audit expectations.' },
  { title: 'SWPPP / Environmental', icon: CloudSun, description: 'WPCM guidance, BMP resources, erosion control, stabilization, and inspection requirements.' },
  { title: 'Traffic Control', icon: TrafficCone, description: 'MUTCD references, TMP guidance, detours, work zones, and signing standards.' },
  { title: 'Construction References', icon: BookOpen, description: 'Standard specifications, construction manual, documentation manual, special provisions, and memos.' },
  { title: 'Policies & Procedures', icon: ShieldCheck, description: 'Internal workflows, communication guidance, operating procedures, and office expectations.' },
  { title: 'Claims & Disputes', icon: AlertTriangle, description: 'Claim documentation, dispute tracking, escalation guidance, and resolution support.' },
  { title: 'Safety & Health', icon: HardHat, description: 'Work zone safety, StormReady resources, hazardous weather, and emergency procedures.' },
  { title: 'Office Procedures', icon: MonitorCog, description: 'Internal office workflows, forms usage, correspondence, and coordination practices.' },
];

const resources = ['Standard Specifications 2015', 'Construction Manual', 'Documentation Manual', 'Area Engineer Manual', 'MUTCD 11th Edition', 'FHWA Contract Administration Manual', 'Temporary Erosion Control Manual', 'Acquisition / ROW Resources'];
const events = [
  { date: 'MAY 23', title: 'AWP System Update', time: 'All Day' },
  { date: 'MAY 28', title: 'Project Preconstruction Meeting', time: '8:30 AM' },
  { date: 'JUN 04', title: 'StormReady Training', time: '9:00 AM – 12:00 PM' },
  { date: 'JUN 11', title: 'Semi-Final Walk Through', time: '8:00 AM' },
];
const announcements = [
  { type: 'critical', title: 'New Construction Memo 25-06', date: 'May 20, 2025' },
  { type: 'warning', title: 'AWP System Update – May 23, 2025', date: 'May 19, 2025' },
  { type: 'info', title: 'District 4 Semi-Final Meetings Scheduled', date: 'May 18, 2025' },
  { type: 'success', title: 'StormReady Training – June 4, 2025', date: 'May 16, 2025' },
];
const projectRows = [
  { project: 'KA-7451', route: 'US-69', contractor: 'APAC-Kansas', status: 'Active', inspector: 'Assigned', days: 'Charging' },
  { project: 'KA-7352', route: 'Centennial St', contractor: 'RoadSafe', status: 'Traffic Control', inspector: 'Assigned', days: 'Review' },
  { project: 'KA-6510', route: 'US-59', contractor: 'TBD', status: 'Preconstruction', inspector: 'Pending', days: 'Not Started' },
  { project: 'KA-5149', route: 'US-69', contractor: 'Mission', status: 'Closeout', inspector: 'Complete', days: 'N/A' },
];

function cx(...classes) { return classes.filter(Boolean).join(' '); }
function IconBadge({ icon: Icon }) { return <div className="icon-badge"><Icon size={26} /></div>; }
function SectionTitle({ icon: Icon, children }) { return <div className="section-title"><Icon size={25} /><h2>{children}</h2></div>; }
function Card({ children, className = '' }) { return <div className={cx('card', className)}>{children}</div>; }

function Header({ active, setActive }) {
  return <header className="site-header">
    <button className="brand" onClick={() => setActive('home')}>
      <div className="logo-text">K<span>D</span>OT</div>
      <div className="brand-divider" />
      <div className="brand-copy"><strong>Pittsburg</strong><small>Construction Office</small></div>
    </button>
    <nav className="top-nav">
      {navItems.map(item => { const Icon = item.icon; return <button key={item.id} onClick={() => setActive(item.id)} className={active === item.id ? 'active' : ''}><Icon size={17} />{item.label}</button>; })}
    </nav>
    <div className="corner-icon"><Wrench size={24} /></div>
  </header>;
}

function PageShell({ title, subtitle, children, icon: Icon = Construction }) {
  return <main className="page">
    <section className="hero-panel">
      <div className="eyebrow"><Icon size={24} /> KDOT Pittsburg Construction</div>
      <h1>{title}</h1>
      <p>{subtitle}</p>
    </section>
    {children}
  </main>;
}

function HomePage({ setActive }) {
  return <PageShell title="Pittsburg Construction" subtitle="Internal operations hub for tools, guidance, training, resources, project tracking, and office updates." icon={HardHat}>
    <div className="grid grid-3 mt"><Card className="span-2"><SectionTitle icon={ToolCase}>Quick Access</SectionTitle><div className="quick-grid">
      {[['tools','Quick Tools',Wrench],['resources','Resources',FolderOpen],['knowledge','Knowledge Base',BookOpen],['training','Training Library',GraduationCap],['projects','Project Info',Map],['announcements','Announcements',Bell]].map(([id,label,Icon]) => <button key={id} className="quick-tile" onClick={() => setActive(id)}><IconBadge icon={Icon}/><strong>{label}</strong><span>Open <ArrowRight size={16}/></span></button>)}
    </div></Card><Card><SectionTitle icon={Info}>Today</SectionTitle><div className="today"><small>Wednesday</small><strong>May 21, 2025</strong><small>Weather – Pittsburg</small><div className="weather"><CloudSun size={32}/><b>72°</b><span>Partly Cloudy</span></div><small>Office Announcement</small><p>Daily Diaries are due by 10:00 AM each day.</p></div></Card></div>
    <div className="grid grid-3 mt"><Card><SectionTitle icon={BookOpen}>Knowledge Base</SectionTitle>{knowledgeCards.slice(0,6).map(item => <button key={item.title} className="link-row" onClick={() => setActive('knowledge')}><span>{item.title}</span><ArrowRight size={16}/></button>)}</Card><Card><SectionTitle icon={ClipboardCheck}>Project Snapshot</SectionTitle><div className="stat-grid">{quickStats.map(s => <div className="stat" key={s.label}><strong>{s.value}</strong><span>{s.label}</span></div>)}</div></Card><Card><SectionTitle icon={CalendarDays}>Upcoming Events</SectionTitle>{events.map(e => <div className="event" key={e.title}><b>{e.date}</b><div><strong>{e.title}</strong><span>{e.time}</span></div></div>)}</Card></div>
  </PageShell>;
}

function ToolsPage() { return <PageShell title="Tools" subtitle="Quick access to systems, forms, calculators, links, and office tools." icon={Wrench}><div className="grid grid-3 mt">{tools.map(tool => { const Icon = tool.icon; return <Card key={tool.title}><SectionTitle icon={Icon}>{tool.title}</SectionTitle>{tool.items.map(item => <a key={item} href="#" className="link-row"><span>{item}</span><ArrowRight size={16}/></a>)}<button className="gold-button">View All</button></Card>; })}</div></PageShell>; }
function KnowledgePage() { const [query,setQuery] = useState(''); const filtered = useMemo(() => knowledgeCards.filter(card => `${card.title} ${card.description}`.toLowerCase().includes(query.toLowerCase())), [query]); return <PageShell title="Knowledge Base" subtitle="Searchable internal guidance organized by construction administration topic." icon={BookOpen}><div className="search-box mt"><Search size={20}/><input value={query} onChange={e=>setQuery(e.target.value)} placeholder="Search the Knowledge Base..."/></div><div className="grid grid-4 mt">{filtered.map(card => { const Icon = card.icon; return <Card key={card.title}><IconBadge icon={Icon}/><h3>{card.title}</h3><p>{card.description}</p><button className="text-button">View Topics <ArrowRight size={16}/></button></Card>; })}</div></PageShell>; }
function ResourcesPage() { const guidance = ['Asphalt','Concrete','Earthwork','Traffic Control','Stormwater / SWPPP','Materials Certification']; return <PageShell title="Resources" subtitle="Quick access to manuals, forms, specifications, tools, and project administration references." icon={FolderOpen}><Card className="mt"><SectionTitle icon={BookOpen}>Core Manuals & References</SectionTitle><div className="resource-grid">{resources.map(r => <a key={r} className="resource-card" href="#"><BookOpen size={38}/><strong>{r}</strong><span>Open PDF <ExternalLink size={14}/></span></a>)}</div></Card><div className="grid grid-3 mt"><Card><SectionTitle icon={FileText}>Forms & Templates</SectionTitle>{['Notice to Proceed (NTP)','PNOA / NOA Templates','Change Order Templates','Negative Pay Estimate Letters','Final Punch List','Semi-Final Checklist'].map(i => <a className="link-row" href="#" key={i}>{i}<ArrowRight size={16}/></a>)}</Card><Card><SectionTitle icon={MonitorCog}>Systems & Tools</SectionTitle>{['AASHTOWare Project (AWP)','OnBase','KART','KanDrive','eDOT / HaulHub','SharePoint Workspace'].map(i => <a className="link-row" href="#" key={i}>{i}<ArrowRight size={16}/></a>)}</Card><Card><SectionTitle icon={LinkIcon}>Quick Links</SectionTitle>{['Standard Drawings','Special Provisions','Approved Materials Lists','Bid Tabs','Contractor Payroll Resources','Utility Permit Resources'].map(i => <a className="link-row" href="#" key={i}>{i}<ArrowRight size={16}/></a>)}</Card></div><div className="grid grid-2 mt"><Card><SectionTitle icon={HardHat}>Construction Guidance Hub</SectionTitle>{guidance.map(i => <details key={i}><summary>{i}<ChevronDown size={16}/></summary><p>Specifications, checklists, common issues, best practices, and office reference material.</p></details>)}</Card><Card><SectionTitle icon={Users}>Helpful Contacts</SectionTitle>{[['Pittsburg Construction Office','(620) 231-XXXX'],['District 4 Construction Office','(620) 432-XXXX'],['Materials & Research Lab','(620) 672-XXXX'],['IT Help Desk','(785) 368-XXXX'],['AWP Support','(785) 296-XXXX']].map(([n,p]) => <div className="contact" key={n}><span>{n}</span><b>{p}</b></div>)}</Card></div></PageShell>; }
function TrainingPage() { const groups = [['AWP Training',['Daily Diaries','Daily Work Reports','Navigation','Pay Estimates']],['Inspector Training',['Documentation Best Practices','Materials Documentation','Field Inspection Guidance','Photo Documentation']],['Safety Training',['Work Zone Safety','Hazardous Weather','StormReady Resources','Emergency Procedures']],['Download Center',['Training PDFs','PowerPoints','Video Tutorials','SOP Quick Guides']]]; return <PageShell title="Training" subtitle="Training resources for AWP, inspection documentation, safety, construction administration, and office procedures." icon={GraduationCap}><div className="grid grid-2 mt">{groups.map(([title,items]) => <Card key={title}><SectionTitle icon={GraduationCap}>{title}</SectionTitle>{items.map(i => <a className="link-row" href="#" key={i}>{i}<ArrowRight size={16}/></a>)}</Card>)}</div></PageShell>; }
function ProjectsPage() { return <PageShell title="Project Dashboard" subtitle="Internal project status tracking for active projects, closeout, pay estimates, materials, payroll, and GIS resources." icon={Construction}><div className="grid grid-4 mt">{quickStats.map(s => <Card className="stat big" key={s.label}><strong>{s.value}</strong><span>{s.label}</span></Card>)}</div><Card className="mt"><SectionTitle icon={Map}>Active Projects Dashboard</SectionTitle><div className="table-wrap"><table><thead><tr>{['Project','Route','Contractor','Status','Inspector','Working Days'].map(h=><th key={h}>{h}</th>)}</tr></thead><tbody>{projectRows.map(r => <tr key={r.project}><td>{r.project}</td><td>{r.route}</td><td>{r.contractor}</td><td><span className="pill">{r.status}</span></td><td>{r.inspector}</td><td>{r.days}</td></tr>)}</tbody></table></div></Card></PageShell>; }
function AnnouncementsPage() { const iconMap = { critical: AlertTriangle, warning: Siren, info: Info, success: CheckCircle2 }; return <PageShell title="Announcements" subtitle="Office updates, construction alerts, events, training notices, system outages, and team highlights." icon={Bell}><div className="grid grid-3 mt"><Card className="span-2"><SectionTitle icon={Bell}>Office Announcements</SectionTitle>{announcements.map(a => { const Icon = iconMap[a.type]; return <div className="announce" key={a.title}><Icon size={24}/><div><strong>{a.title}</strong><span>{a.date}</span></div><ArrowRight size={16}/></div>})}</Card><Card><SectionTitle icon={Star}>Team Corner</SectionTitle><p>Employee highlights, certifications earned, project milestones, and the occasional award for surviving another pay estimate cycle.</p><button className="gold-button">View Team Updates</button></Card></div></PageShell>; }
function SitemapPage() { return <PageShell title="Site Map" subtitle="Internal navigation structure for the KDOT Pittsburg Construction office portal." icon={Map}><Card className="mt sitemap"><div className="sitemap-home"><Home size={40}/><strong>Home</strong><span>Central dashboard and office command center</span></div><div className="sitemap-nodes">{[['Resources','Specs, Manuals, SWPPP, FHWA, ROW'],['Tools','Calculators, AWP, Forms, Templates'],['Training','AWP, Inspector, Safety, Downloads'],['Project Info','Active Projects, Closeout, GIS, Tracking'],['Announcements','Updates, Alerts, Events, Team Corner']].map(([t,d])=><div key={t}><strong>{t}</strong><span>{d}</span></div>)}</div></Card></PageShell>; }

function App() {
  const [active, setActive] = useState('home');
  const pages = { home: <HomePage setActive={setActive}/>, tools: <ToolsPage/>, knowledge: <KnowledgePage/>, resources: <ResourcesPage/>, training: <TrainingPage/>, projects: <ProjectsPage/>, announcements: <AnnouncementsPage/>, sitemap: <SitemapPage/> };
  return <><Header active={active} setActive={setActive}/>{pages[active]}<footer><div><b>KDOT Pittsburg Construction Office</b><span>District 4 | Area 4</span></div><button onClick={()=>setActive('sitemap')}>View Site Map</button><div><span><Phone size={16}/> (620) 231-XXXX</span><span><Mail size={16}/> pittsburg.const@ks.gov</span></div></footer></>;
}

createRoot(document.getElementById('root')).render(<App />);
