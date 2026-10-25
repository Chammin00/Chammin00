// Interactive Portfolio Engine for Chase R. Hamilton
// Built to run seamlessly both via HTTP server and direct file:// double-click

const fallbackProjects = [
  {
    "id": "ollama-studio",
    "title": "Ollama Studio & AI Skill Knowledge Base",
    "category": "ai",
    "categoryLabel": "AI & LLM Systems",
    "badge": "Active Development",
    "type": "Local LLM Orchestration & Knowledge Hub",
    "description": "Self-contained local AI workbench and automated synchronization pipeline that compiles distributed agent skills into structured JSON knowledge bases, custom Modelfiles, and scheduled background daemons.",
    "techStack": ["Python 3.12", "Ollama", "Qwen 2.5 Coder", "Llama 3", "Windows Task Scheduler", "REST APIs"],
    "architecture": "Engineered an automated Python sync daemon (sync_skills_to_ollama.py) that reads markdown engineering skills, parses schemas, builds structured JSON knowledge bases, and compiles tailored Modelfiles for local Ollama instances. Includes dual client interfaces: a lightweight browser studio and a low-latency CLI terminal runner.",
    "businessImpact": "Delivers zero-latency local code completion, technical troubleshooting, and context-aware system administration without sending sensitive infrastructure data to third-party cloud APIs.",
    "interviewStar": {
      "situation": "Enterprise engineering teams require AI-assisted code generation and system debugging, but corporate security policies prevent sending proprietary codebases and logs to public LLM endpoints.",
      "task": "Build a secure, local-first LLM orchestration environment that automates custom model configuration and syncs operational runbooks directly into model system prompts.",
      "action": "Developed an automated Python pipeline that indexes local markdown skills, extracts tools and schemas, formats them into a 92KB structured knowledge base, generates an optimized Modelfile, and exposes both a web dashboard and headless CLI chat.",
      "result": "Created a 100% private, offline-capable AI engineering assistant running on local hardware with zero API subscription costs and immediate response times."
    }
  },
  {
    "id": "screen-reader",
    "title": "Kindle Narrator & Vision Screen Reader",
    "category": "ai",
    "categoryLabel": "AI & LLM Systems",
    "badge": "Active Development",
    "type": "Desktop Computer Vision & Neural Audio Synthesis",
    "description": "High-performance desktop accessibility utility designed for DRM-protected text and rapid technical reading. Uses native Windows bounding-box OCR and asynchronous neural text-to-speech to read books, code documentation, and whitepapers aloud.",
    "techStack": ["Python 3.12", "CustomTkinter", "Windows OCR API", "Edge-TTS Neural Voice", "Pillow"],
    "architecture": "Multi-threaded desktop GUI with a decoupled producer-consumer architecture. A screen capture thread captures target application windows, an OCR thread processes bounding boxes with confidence filtering, and an async audio streaming queue feeds Edge-TTS neural speech directly to system audio with automated page turning heuristics.",
    "businessImpact": "Enables power-readers, students, and visually impaired engineers to absorb dense technical manuals and DRM documentation hands-free at speeds up to 1.5x with natural human-grade neural voice synthesis.",
    "interviewStar": {
      "situation": "Technical literature, DRM-protected manuals, and scanned architectural diagrams are often inaccessible to standard text-to-speech utilities without clunky manual copy-pasting.",
      "task": "Create a smooth desktop application that continuously captures screen regions, extracts text accurately, and streams high-fidelity neural speech with automated page turning.",
      "action": "Built a Python utility utilizing native Windows OCR APIs for low-overhead bounding-box detection, integrated Microsoft Edge-TTS neural voice synthesis, and developed an intelligent page-turner module with persistent JSON bookmark tracking.",
      "result": "Delivered a rock-solid desktop application that automatically turns pages and narrates entire technical books with under 200ms latency between page turns."
    }
  },
  {
    "id": "using-ai-agents-for-profit",
    "title": "Autonomous Invoice & BOL Reconciliation",
    "category": "ai",
    "categoryLabel": "AI & LLM Systems",
    "badge": "Production-Ready",
    "type": "B2B AI Operations Engine",
    "description": "Enterprise operations engine that ingests vendor PDF invoices and Bills of Lading, extracts line items via deterministic algorithms, reconciles discrepancies in SQLite, and generates discrepancy audit alerts.",
    "techStack": ["FastAPI", "Python 3.12", "SQLite", "PyPDF2", "Jinja2", "Pytest"],
    "architecture": "FastAPI REST backend with an asynchronous ingestion worker. PDF documents are normalized, passed through regex/OCR extraction pipelines, validated against purchase order line items in SQLite, and rendered into an interactive executive audit dashboard.",
    "businessImpact": "Designed for mid-market logistics, HVAC, and supply-chain distributors to eliminate invoice overbilling. B2B retainer value: $2,500 setup + $500/month recurring ROI.",
    "interviewStar": {
      "situation": "Supply-chain and logistics companies lose up to 3-5% of total procurement spend to mismatched quantities, duplicate billings, and freight surcharges between invoices and Bills of Lading.",
      "task": "Engineer an automated reconciliation system capable of parsing unstructured PDF documents, detecting quantity/rate mismatches, and alerting billing teams before payments are processed.",
      "action": "Built an asynchronous FastAPI application with PyPDF2 parsing, SQLite transaction ledger, and deterministic reconciliation algorithms covered by 100% pytest test passes.",
      "result": "Eliminated manual paper audits, flagging pricing discrepancies in seconds with complete audit-trail traceability."
    }
  },
  {
    "id": "vulnguard",
    "title": "VulnGuard Enterprise",
    "category": "security",
    "categoryLabel": "Cybersecurity & Systems",
    "badge": "Deployable",
    "type": "ASP.NET Core .NET 10 Security Platform",
    "description": "Comprehensive vulnerability management system built on .NET 10.0 and SQLite/EF Core. Features automated patch tracking, system hardening services, cryptography tools, and executive security reporting.",
    "techStack": ["C#", "ASP.NET Core .NET 10", "EF Core", "SQLite", "NIST CSF"],
    "architecture": "Built using modern ASP.NET Core MVC architecture with Dependency Injection, Repository Pattern, Entity Framework Core migrations, and SHA-256 cryptographic file hashing. Services decouple vulnerability scoring from presentation layers.",
    "businessImpact": "Offers MSPs and internal IT departments automated posture scoring, vulnerability prioritization, and compliance tracking aligned with NIST CSF, SOC2, and ISO standards.",
    "interviewStar": {
      "situation": "Security teams struggle with vulnerability overload, where raw CVE feeds create alert fatigue without clear operational prioritization for IT patching teams.",
      "task": "Architect a centralized vulnerability and compliance platform that maps discovered weaknesses to NIST CSF domains and ranks actionable remediation tasks.",
      "action": "Designed and implemented an ASP.NET Core (.NET 10) platform with EF Core and SQLite, incorporating automated CVE triage scoring, system hardening advisory modules, and executive PDF reporting.",
      "result": "Delivered an enterprise-ready management platform that accelerates patch velocity and streamlines compliance auditing for both Linux and Windows infrastructure."
    }
  },
  {
    "id": "my-security",
    "title": "Sentinel PC Security Guard",
    "category": "security",
    "categoryLabel": "Cybersecurity & Systems",
    "badge": "Deployable",
    "type": "Endpoint Security & Audit Hub",
    "description": "Local endpoint security auditing service with real-time web dashboard. Collects live PowerShell telemetry on firewall posture, antivirus status, unquoted service paths, and critical Windows event logs.",
    "techStack": [".NET 10.0", "C#", "PowerShell 7", "Windows Event Logs", "Sysmon"],
    "architecture": "Lightweight C# background worker that invokes scoped PowerShell 7 audit scripts asynchronously, parses structured JSON outputs, evaluates local host hygiene, and serves a live web HUD.",
    "businessImpact": "Provides continuous endpoint hygiene assessment for workstations and servers without requiring heavy, expensive third-party enterprise agents.",
    "interviewStar": {
      "situation": "Off-the-shelf enterprise EDR agents often consume significant CPU/RAM and lack quick, transparent posture reporting for individual administrative workstations.",
      "task": "Create a lightweight local security watchdog that monitors essential host hardening indicators including Defender definitions, unquoted paths, and firewall state.",
      "action": "Engineered a hybrid .NET / PowerShell 7 telemetry engine that executes non-intrusive security checks and streams status updates to a real-time web interface.",
      "result": "Delivered an instant audit report identifying common privilege escalation vectors in under 3 seconds with minimal memory footprint."
    }
  },
  {
    "id": "spam-block",
    "title": "SpamShield & Data Broker Opt-Out Manager",
    "category": "security",
    "categoryLabel": "Cybersecurity & Systems",
    "badge": "Active Development",
    "type": "Privacy Automation & Threat Mitigation",
    "description": "Privacy protection engine that maps data brokers, compiles automated Gmail spam filter rules (XML & Python), and logs ongoing opt-out deletion requests across major consumer data aggregators.",
    "techStack": ["Python 3.12", "XML Engine", "JSON Database", "REST APIs", "Gmail API"],
    "architecture": "Python engine paired with data broker registry (data_brokers.json) and opt-out tracker. Compiles verified spam domain patterns directly into native Gmail XML filter archives for bulk upload, and tracks opt-out fulfillment deadlines.",
    "businessImpact": "Proactively shields personal and executive emails from phishing, spam campaigns, and malicious data harvesting networks.",
    "interviewStar": {
      "situation": "Executives and security professionals face persistent targeted phishing and unsolicited email campaigns due to public data broker aggregators sharing contact records.",
      "task": "Automate the opt-out workflow across hundreds of broker sites and generate deterministic email rules to stop unwanted traffic at the perimeter.",
      "action": "Constructed an automated opt-out registry engine that generates standard XML filter rule files ready for one-click Gmail import, alongside an opt-out compliance tracking ledger.",
      "result": "Blocked over 90% of recurring spam vectors and streamlined multi-broker privacy compliance tracking."
    }
  },
  {
    "id": "stock-watch",
    "title": "StockWatch Quant Screener & Backtester",
    "category": "quant",
    "categoryLabel": "Quant & Cloud Automation",
    "badge": "Active Development",
    "type": "Algorithmic Finance & Quantitative Screener",
    "description": "Multi-module quantitative analysis platform featuring high-speed technical screeners, modular backtesting engines, risk-reward calculators, and alert bots.",
    "techStack": ["Python 3.12", "Pandas", "TA-Lib / Custom Math", "UV Package Manager", "CLI"],
    "architecture": "Built with modern UV packaging and strict modularization: core config, data ingestion pipelines, technical screener modules, backtesting framework, and CLI bot orchestration. Features strict separation of strategy logic from execution.",
    "businessImpact": "Enables algorithmic trade evaluation, backtested Sharpe ratio calculations, and real-time market alert generation with zero human latency.",
    "interviewStar": {
      "situation": "Retail trading platforms often lock algorithmic screening and customizable strategy backtesting behind expensive paywalls with slow execution.",
      "task": "Develop a modular Python quantitative suite with high-throughput screening and historical strategy backtesting capabilities.",
      "action": "Built a clean architecture Python application using Pandas and modern vectorized math, featuring decoupled strategy modules and a rich CLI dashboard.",
      "result": "Provided instantaneous multi-factor screening and backtesting verification with full parameter transparency."
    }
  },
  {
    "id": "automate-my-day",
    "title": "Automate My Day Operations Daemon",
    "category": "quant",
    "categoryLabel": "Quant & Cloud Automation",
    "badge": "Deployable",
    "type": "Autonomous Operations & Media Suite",
    "description": "Multi-threaded desktop automation suite featuring intelligent video cropping (smart_cutter), dynamic audio SFX mixing, YouTube Shorts automated publishing daemon, and daily intelligence briefing aggregator.",
    "techStack": ["Python 3.12", "FFmpeg", "YouTube Data API v3", "PowerShell 7", "NVMe Backups"],
    "architecture": "Modular Python pipeline with sentinel daemon (background listener), scheduled tasks, audio mixing engine, and OAuth2 YouTube uploader. Manages automated nightly backups of 37 repositories to external NVMe storage with checksum verification.",
    "businessImpact": "Enables zero-touch content repurposing, automated cloud backups, and hands-free daily system triage for uninterrupted engineer productivity.",
    "interviewStar": {
      "situation": "Routine administrative tasks—including repo backups, media preparation, and system hygiene—can consume hours of engineering time each week.",
      "task": "Create a unified sentinel daemon that executes scheduled system hygiene, automated multi-repo backups, and media automation quietly in the background.",
      "action": "Engineered an asynchronous Python daemon coordinating FFmpeg media pipelines, PowerShell NVMe backup routines, and API uploaders.",
      "result": "Completely automated daily system backup and media processing, freeing up over 10 hours per week of manual operational effort."
    }
  },
  {
    "id": "track-home-value",
    "title": "Track Home Value Real Estate Analytics",
    "category": "quant",
    "categoryLabel": "Quant & Cloud Automation",
    "badge": "Deployable",
    "type": "Automated Property Equity Tracker",
    "description": "Autonomous property equity tracking script that logs monthly valuations, calculates equity appreciation, tracks amortization schedules, and renders an executive analytics dashboard.",
    "techStack": ["Python 3.12", "HTML5 / CSS3", "Chart.js", "CSV Time-Series"],
    "architecture": "Python tracking engine (tracker.py) that calculates equity trajectories, updates historical time-series datasets, and automatically generates an interactive responsive HTML5 dashboard with Chart.js visualization.",
    "businessImpact": "Provides precision financial visibility into primary real estate assets, mortgage principal reduction, and net worth growth.",
    "interviewStar": {
      "situation": "Homeowners and real estate investors need automated tracking of property equity and valuation shifts without subscribing to fragmented paid services.",
      "task": "Build an automated valuation tracker that records monthly equity changes and generates an interactive visual dashboard.",
      "action": "Constructed a lightweight Python tracking engine that logs time-series data to CSV and renders clean, interactive equity charts in HTML5.",
      "result": "Created an always-up-to-date visual dashboard tracking equity growth and loan amortization with zero ongoing maintenance."
    }
  },
  {
    "id": "comptia-exam-simulator",
    "title": "CompTIA Security+ SY0-701 Simulator",
    "category": "edtech",
    "categoryLabel": "EdTech & Cert Simulators",
    "badge": "Production-Ready",
    "type": "Interactive Web Examination Suite",
    "description": "Production-grade exam preparation suite replicating Pearson VUE interface. Includes multi-domain mock tests, Performance-Based Questions (PBQs), Web Speech API audio question narration, and timed exams.",
    "techStack": ["HTML5", "Vanilla JavaScript", "Web Speech API", "CSS Grid"],
    "architecture": "Client-side single page app (SPA) engine with randomized question sets, domain weighting, local storage state persistence, and PBQ drag-and-drop mechanics. Zero external build dependencies.",
    "businessImpact": "High-margin digital product ($29–$49 bundle). Ready for monetization on Gumroad / Whop or enterprise workforce training.",
    "interviewStar": {
      "situation": "Exam prep students face boring static question banks that fail to replicate the actual Pearson VUE testing environment and audio accessibility needs.",
      "task": "Build a zero-dependency web simulation of the CompTIA Security+ examination, complete with PBQ mechanics and audio narration.",
      "action": "Designed a responsive SPA utilizing HTML5, Web Speech API for voice question readouts, and randomized question pool indexing across all five official domains.",
      "result": "Delivered an authentic, high-retention exam simulator that prepares engineers for certification with real-time domain score breakdowns."
    }
  },
  {
    "id": "rhcsa-exam200",
    "title": "RHCSA EX200 Interactive Terminal & Study Kit",
    "category": "edtech",
    "categoryLabel": "EdTech & Cert Simulators",
    "badge": "Production-Ready",
    "type": "Linux Terminal Simulator & Lab Suite",
    "description": "Interactive browser terminal emulator mimicking Red Hat Enterprise Linux (RHEL 9) CLI. Includes realistic lab scenarios (LVM storage, SELinux, user permissions, systemd) with automated grading.",
    "techStack": ["Interactive Web Terminal", "RHEL 9", "Markdown", "JavaScript"],
    "architecture": "Custom JavaScript terminal parser simulating bash commands, filesystem navigation, piping, and regex-based response validation. Simulates live Linux environments completely in-browser.",
    "businessImpact": "Solves the #1 bottleneck for sysadmins preparing for Red Hat hands-on exams by offering instant browser lab practice without spinning up heavy local virtual machines.",
    "interviewStar": {
      "situation": "Preparing for the Red Hat Certified System Administrator (RHCSA) exam requires hands-on CLI practice, but spinning up multiple RHEL virtual machines can be resource-intensive.",
      "task": "Develop an interactive, browser-based terminal that simulates RHEL 9 commands, file systems, and automated scenario grading.",
      "action": "Built an in-browser terminal parser with virtual filesystem state, bash syntax handling, and regex validation checking task completion for LVM, SELinux, and systemd.",
      "result": "Created a lightweight, portable training lab that allows candidates to practice critical sysadmin scenarios on any device."
    }
  },
  {
    "id": "choogle",
    "title": "Choogle IT Knowledge & Multi-Cloud Outage Portal",
    "category": "security",
    "categoryLabel": "Cybersecurity & Systems",
    "badge": "Production-Ready",
    "type": "SysAdmin Operations & Multi-Cloud HUD",
    "description": "All-in-one technician dashboard featuring real-time public cloud and service outage monitoring, quick sysadmin cheatsheets, command references, and custom web search aggregator.",
    "techStack": ["JavaScript", "HTML5", "CSS3", "REST APIs", "Cloud Telemetry"],
    "architecture": "Fast-loading modular static hub with asynchronous API status pingers (AWS, Azure, Cloudflare, Google Cloud), searchable local index, and dark-mode workstation HUD.",
    "businessImpact": "Reduces incident discovery time during multi-cloud outages for tier 1-3 helpdesk and infrastructure engineers.",
    "interviewStar": {
      "situation": "During major infrastructure incidents, technicians waste valuable minutes verifying whether issues are internal or caused by public cloud provider outages.",
      "task": "Create a unified single-pane-of-glass status dashboard and quick-reference knowledge portal for tier 1-3 infrastructure engineers.",
      "action": "Built a centralized, dark-mode operations dashboard aggregating live cloud provider status feeds, command cheat-sheets, and diagnostic tools.",
      "result": "Dramatically cut mean-time-to-detection (MTTD) for external outages and streamlined daily engineer workflow."
    }
  }
];

let allProjects = fallbackProjects;
let currentFilter = 'all';
let searchQuery = '';
let activeModalProject = null;
let activeModalTab = 'overview';

document.addEventListener('DOMContentLoaded', () => {
  // Attempt to fetch from projects.json if served over HTTP
  if (window.location.protocol.startsWith('http')) {
    fetch('projects.json')
      .then(res => res.json())
      .then(data => {
        allProjects = data;
        initApp();
      })
      .catch(() => {
        initApp();
      });
  } else {
    initApp();
  }
});

function initApp() {
  updateCounts();
  renderProjects();
  setupFilterHandlers();
  setupSearchHandler();
  setupModalHandlers();
}

function updateCounts() {
  const getCount = (cat) => cat === 'all' ? allProjects.length : allProjects.filter(p => p.category === cat).length;
  
  const countAll = document.getElementById('count-all');
  const countAi = document.getElementById('count-ai');
  const countSecurity = document.getElementById('count-security');
  const countQuant = document.getElementById('count-quant');
  const countEdtech = document.getElementById('count-edtech');

  if (countAll) countAll.textContent = getCount('all');
  if (countAi) countAi.textContent = getCount('ai');
  if (countSecurity) countSecurity.textContent = getCount('security');
  if (countQuant) countQuant.textContent = getCount('quant');
  if (countEdtech) countEdtech.textContent = getCount('edtech');
}

function getBadgeClass(badge) {
  if (badge === 'Production-Ready') return 'badge-production';
  if (badge === 'Active Development') return 'badge-active';
  return 'badge-deployable';
}

function renderProjects() {
  const grid = document.getElementById('projectsGrid');
  if (!grid) return;

  grid.innerHTML = '';

  const filtered = allProjects.filter(p => {
    const matchesFilter = (currentFilter === 'all') || (p.category === currentFilter);
    const matchesSearch = !searchQuery || 
      p.title.toLowerCase().includes(searchQuery) ||
      p.description.toLowerCase().includes(searchQuery) ||
      p.techStack.some(t => t.toLowerCase().includes(searchQuery)) ||
      p.type.toLowerCase().includes(searchQuery);

    return matchesFilter && matchesSearch;
  });

  if (filtered.length === 0) {
    grid.innerHTML = `
      <div style="grid-column: 1 / -1; text-align: center; padding: 60px 20px; background: rgba(255,255,255,0.02); border-radius: 16px; border: 1px dashed var(--card-border);">
        <h3 style="color: #fff; margin-bottom: 8px;">No matching projects found</h3>
        <p style="color: var(--text-muted); font-size: 0.95rem;">Try clearing your search query or switching categories.</p>
        <button class="btn btn-secondary btn-sm" style="margin-top: 16px;" onclick="resetSearch()">Reset Filters</button>
      </div>
    `;
    return;
  }

  filtered.forEach(proj => {
    const card = document.createElement('div');
    card.className = 'project-card';
    
    card.innerHTML = `
      <div class="project-card-header">
        <span class="project-category-tag">${proj.categoryLabel}</span>
        <span class="badge-status ${getBadgeClass(proj.badge)}">${proj.badge}</span>
      </div>
      <h3 class="project-title">${proj.title}</h3>
      <div class="project-type">${proj.type}</div>
      <p class="project-desc">${proj.description}</p>
      
      <div class="tech-stack-chips">
        ${proj.techStack.map(t => `<span class="tech-chip">${t}</span>`).join('')}
      </div>

      <div class="project-card-footer">
        <button class="btn-card-action" onclick="openModal('${proj.id}', 'overview')">
          Deep Dive Architecture →
        </button>
        <button class="btn-star-link" onclick="openModal('${proj.id}', 'interview')">
          ★ STAR Story
        </button>
      </div>
    `;

    grid.appendChild(card);
  });
}

function resetSearch() {
  searchQuery = '';
  const searchInput = document.getElementById('projectSearch');
  if (searchInput) searchInput.value = '';
  currentFilter = 'all';
  document.querySelectorAll('.filter-btn').forEach(btn => {
    btn.classList.toggle('active', btn.dataset.filter === 'all');
  });
  renderProjects();
}

function setupFilterHandlers() {
  const buttons = document.querySelectorAll('.filter-btn');
  buttons.forEach(btn => {
    btn.addEventListener('click', () => {
      buttons.forEach(b => b.classList.remove('active'));
      btn.classList.add('active');
      currentFilter = btn.dataset.filter;
      renderProjects();
    });
  });
}

function setupSearchHandler() {
  const searchInput = document.getElementById('projectSearch');
  if (!searchInput) return;

  searchInput.addEventListener('input', (e) => {
    searchQuery = e.target.value.trim().toLowerCase();
    renderProjects();
  });
}

// Modal Logic
function setupModalHandlers() {
  const modal = document.getElementById('projectModal');
  const backdrop = document.getElementById('modalBackdrop');
  const closeBtn = document.getElementById('modalClose');

  const closeModal = () => {
    if (modal) {
      modal.classList.remove('active');
      modal.setAttribute('aria-hidden', 'true');
    }
  };

  if (backdrop) backdrop.addEventListener('click', closeModal);
  if (closeBtn) closeBtn.addEventListener('click', closeModal);

  document.addEventListener('keydown', (e) => {
    if (e.key === 'Escape' && modal && modal.classList.contains('active')) {
      closeModal();
    }
  });

  const tabButtons = document.querySelectorAll('.modal-tab-btn');
  tabButtons.forEach(btn => {
    btn.addEventListener('click', () => {
      tabButtons.forEach(b => b.classList.remove('active'));
      btn.classList.add('active');
      activeModalTab = btn.dataset.tab;
      renderModalTab();
    });
  });
}

window.openModal = function(projectId, tab = 'overview') {
  const proj = allProjects.find(p => p.id === projectId);
  if (!proj) return;

  activeModalProject = proj;
  activeModalTab = tab;

  const modal = document.getElementById('projectModal');
  const tabButtons = document.querySelectorAll('.modal-tab-btn');
  tabButtons.forEach(b => {
    b.classList.toggle('active', b.dataset.tab === tab);
  });

  renderModalTab();
  modal.classList.add('active');
  modal.setAttribute('aria-hidden', 'false');
};

function renderModalTab() {
  const container = document.getElementById('modalBody');
  if (!container || !activeModalProject) return;

  const p = activeModalProject;

  if (activeModalTab === 'overview') {
    container.innerHTML = `
      <div style="margin-bottom: 24px;">
        <span class="project-category-tag" style="display:inline-block; margin-bottom: 6px;">${p.categoryLabel} • ${p.badge}</span>
        <h2 id="modalTitle" style="font-size: 1.85rem; color: #fff; margin-bottom: 8px;">${p.title}</h2>
        <div style="color: var(--text-dim); font-size: 0.95rem; margin-bottom: 16px;">${p.type}</div>
        <p style="color: #cbd5e1; font-size: 1.05rem; line-height: 1.7;">${p.description}</p>
      </div>

      <div style="background: rgba(16, 185, 129, 0.08); border: 1px solid rgba(16, 185, 129, 0.25); border-radius: 12px; padding: 20px; margin-bottom: 24px;">
        <h4 style="color: #34d399; font-size: 0.82rem; text-transform: uppercase; letter-spacing: 0.05em; margin-bottom: 8px; font-weight: 700;">Commercial & Enterprise Impact</h4>
        <p style="color: #e2e8f0; font-size: 0.95rem; line-height: 1.6;">${p.businessImpact}</p>
      </div>

      <div>
        <h4 style="font-size: 0.82rem; text-transform: uppercase; color: var(--text-dim); letter-spacing: 0.05em; margin-bottom: 10px; font-weight: 700;">Technology Stack</h4>
        <div class="tech-stack-chips">
          ${p.techStack.map(t => `<span class="tech-chip" style="font-size: 0.82rem; padding: 6px 12px;">${t}</span>`).join('')}
        </div>
      </div>

      <div style="display: flex; gap: 12px; margin-top: 32px; border-top: 1px solid rgba(255,255,255,0.08); padding-top: 20px;">
        <button class="btn btn-primary btn-sm" onclick="switchModalTab('architecture')">Inspect Architecture →</button>
        <button class="btn btn-secondary btn-sm" onclick="switchModalTab('interview')">View Interview STAR Story</button>
      </div>
    `;
  } else if (activeModalTab === 'architecture') {
    container.innerHTML = `
      <div style="margin-bottom: 24px;">
        <span class="project-category-tag" style="display:inline-block; margin-bottom: 6px;">System Architecture Deep Dive</span>
        <h2 style="font-size: 1.85rem; color: #fff; margin-bottom: 8px;">${p.title}</h2>
        <div style="color: var(--text-dim); font-size: 0.95rem; margin-bottom: 16px;">${p.type}</div>
      </div>

      <div style="background: rgba(10, 14, 23, 0.8); border: 1px solid rgba(56, 189, 248, 0.25); border-radius: 12px; padding: 24px; margin-bottom: 24px;">
        <h4 style="color: var(--accent-cyan); font-size: 0.82rem; text-transform: uppercase; letter-spacing: 0.05em; margin-bottom: 12px; font-weight: 700;">Architectural Workflow & Engineering Rationale</h4>
        <p style="color: #cbd5e1; font-size: 0.98rem; line-height: 1.75;">${p.architecture}</p>
      </div>

      <div style="background: rgba(255,255,255,0.03); border: 1px solid var(--card-border); border-radius: 12px; padding: 20px; margin-bottom: 24px;">
        <h4 style="color: #fff; font-size: 0.85rem; text-transform: uppercase; margin-bottom: 12px; font-weight: 700;">Infrastructure & Deployment Highlights</h4>
        <ul style="list-style: none; display: flex; flex-direction: column; gap: 10px; color: var(--text-muted); font-size: 0.92rem;">
          <li style="padding-left: 18px; position: relative;"><span style="position: absolute; left: 0; color: var(--accent-cyan);">▹</span> Asynchronous task execution and event-driven worker segregation.</li>
          <li style="padding-left: 18px; position: relative;"><span style="position: absolute; left: 0; color: var(--accent-cyan);">▹</span> Strict state persistence with lightweight file/database layers (SQLite / JSON).</li>
          <li style="padding-left: 18px; position: relative;"><span style="position: absolute; left: 0; color: var(--accent-cyan);">▹</span> Production-ready error boundaries and headless automated failover daemons.</li>
        </ul>
      </div>

      <div style="display: flex; gap: 12px; margin-top: 24px; border-top: 1px solid rgba(255,255,255,0.08); padding-top: 20px;">
        <button class="btn btn-primary btn-sm" onclick="switchModalTab('interview')">Read Interview STAR Response →</button>
        <button class="btn btn-secondary btn-sm" onclick="switchModalTab('overview')">Back to Overview</button>
      </div>
    `;
  } else if (activeModalTab === 'interview') {
    const star = p.interviewStar;
    container.innerHTML = `
      <div style="margin-bottom: 20px;">
        <span class="project-category-tag" style="display:inline-block; margin-bottom: 6px; color: var(--accent-purple);">Candidate Interview Cheat-Sheet</span>
        <h2 style="font-size: 1.75rem; color: #fff; margin-bottom: 6px;">${p.title}</h2>
        <p style="color: var(--text-muted); font-size: 0.9rem;">Formulated using the <strong>STAR Method</strong> (Situation, Task, Action, Result) for behavioral and architectural interviews.</p>
      </div>

      <div style="display: flex; flex-direction: column; gap: 16px; margin-bottom: 24px;">
        <div style="background: rgba(255, 255, 255, 0.03); border: 1px solid var(--card-border); border-radius: 12px; padding: 16px 20px;">
          <div style="display: flex; align-items: center; gap: 10px; margin-bottom: 8px;">
            <span class="star-letter" style="background: #3b82f6;">S</span>
            <strong style="color: #93c5fd; font-size: 0.9rem; text-transform: uppercase;">Situation</strong>
          </div>
          <p style="color: #cbd5e1; font-size: 0.94rem; line-height: 1.6;">${star.situation}</p>
        </div>

        <div style="background: rgba(255, 255, 255, 0.03); border: 1px solid var(--card-border); border-radius: 12px; padding: 16px 20px;">
          <div style="display: flex; align-items: center; gap: 10px; margin-bottom: 8px;">
            <span class="star-letter" style="background: #a855f7;">T</span>
            <strong style="color: #d8b4fe; font-size: 0.9rem; text-transform: uppercase;">Task</strong>
          </div>
          <p style="color: #cbd5e1; font-size: 0.94rem; line-height: 1.6;">${star.task}</p>
        </div>

        <div style="background: rgba(255, 255, 255, 0.03); border: 1px solid var(--card-border); border-radius: 12px; padding: 16px 20px;">
          <div style="display: flex; align-items: center; gap: 10px; margin-bottom: 8px;">
            <span class="star-letter" style="background: #06b6d4;">A</span>
            <strong style="color: #67e8f9; font-size: 0.9rem; text-transform: uppercase;">Action</strong>
          </div>
          <p style="color: #cbd5e1; font-size: 0.94rem; line-height: 1.6;">${star.action}</p>
        </div>

        <div style="background: rgba(16, 185, 129, 0.08); border: 1px solid rgba(16, 185, 129, 0.25); border-radius: 12px; padding: 16px 20px;">
          <div style="display: flex; align-items: center; gap: 10px; margin-bottom: 8px;">
            <span class="star-letter" style="background: #10b981;">R</span>
            <strong style="color: #6ee7b7; font-size: 0.9rem; text-transform: uppercase;">Result & Metrics</strong>
          </div>
          <p style="color: #e2e8f0; font-size: 0.94rem; line-height: 1.6;">${star.result}</p>
        </div>
      </div>

      <div style="display: flex; gap: 12px; align-items: center; flex-wrap: wrap;">
        <button id="copyStarBtn" class="btn btn-primary btn-sm" onclick="copyStarStory()">
          📋 Copy STAR Story to Clipboard
        </button>
        <button class="btn btn-secondary btn-sm" onclick="switchModalTab('overview')">Back to Overview</button>
      </div>
    `;
  }
}

window.switchModalTab = function(tabName) {
  activeModalTab = tabName;
  const tabButtons = document.querySelectorAll('.modal-tab-btn');
  tabButtons.forEach(b => {
    b.classList.toggle('active', b.dataset.tab === tabName);
  });
  renderModalTab();
};

window.copyStarStory = function() {
  if (!activeModalProject) return;
  const p = activeModalProject;
  const star = p.interviewStar;

  const text = `PROJECT: ${p.title} (${p.type})\n\n[SITUATION]\n${star.situation}\n\n[TASK]\n${star.task}\n\n[ACTION]\n${star.action}\n\n[RESULT]\n${star.result}`;

  navigator.clipboard.writeText(text).then(() => {
    const btn = document.getElementById('copyStarBtn');
    if (btn) {
      btn.textContent = '✓ Copied to Clipboard!';
      btn.style.background = '#10b981';
      setTimeout(() => {
        btn.textContent = '📋 Copy STAR Story to Clipboard';
        btn.style.background = '';
      }, 2500);
    }
  });
};
