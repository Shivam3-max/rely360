// ─────────────────────────────────────────────────────────────
// RELY360 — content spine
// ─────────────────────────────────────────────────────────────

export type Engine = {
  slug: string;
  index: string;
  name: string;
  short: string; // ≤15 words, per brief
  headline: [string, string]; // two-line poster headline
  problems: string[];
  approach: string[];
  impact: { metric: string; direction: "up" | "down" }[];
  services: string[];
};

export const engines: Engine[] = [
  {
    slug: "manufacturing-excellence",
    index: "01",
    name: "Manufacturing Excellence",
    short: "Factories that run faster, smarter, and without waste.",
    headline: [
      "Every minute of downtime has a cost.",
      "That's why we optimize every second.",
    ],
    problems: [
      "Machines run, but output never matches capacity.",
      "Bottlenecks move around the plant — nobody owns them.",
      "Layouts, changeovers, and planning fight against the operator.",
    ],
    approach: [
      "Plant audit, bottleneck analysis, and OEE baselining across every line.",
      "Lean, TPM, 5S, and Kaizen deployed on the floor — not in slides.",
      "Layout, line balancing, and production planning rebuilt around flow.",
    ],
    impact: [
      { metric: "Machine OEE", direction: "up" },
      { metric: "Cycle Time", direction: "down" },
      { metric: "Capacity", direction: "up" },
      { metric: "Downtime", direction: "down" },
    ],
    services: [
      "Plant Audits",
      "Lean Manufacturing",
      "OEE Improvement",
      "Capacity Enhancement",
      "Cycle Time Reduction",
      "Line Balancing",
      "TPM",
      "5S",
      "Kaizen",
      "Bottleneck Analysis",
      "Plant Layout Optimization",
      "Production Planning",
    ],
  },
  {
    slug: "cost-intelligence",
    index: "02",
    name: "Cost Intelligence",
    short: "Every rupee saved lands directly on the bottom line.",
    headline: [
      "You don't have a cost problem.",
      "You have a visibility problem.",
    ],
    problems: [
      "Purchase prices drift upward because nobody re-costs them.",
      "Scrap, rework, and energy quietly consume the margin.",
      "Working capital sits frozen in inventory that shouldn't exist.",
    ],
    approach: [
      "Clean sheet costing on every major bought-out part and process.",
      "Structured vendor negotiation and alternate vendor development.",
      "Scrap, energy, and working capital attacked as measurable projects.",
    ],
    impact: [
      { metric: "Cost Per Unit", direction: "down" },
      { metric: "Procurement Savings", direction: "up" },
      { metric: "Inventory Turns", direction: "up" },
      { metric: "Material Yield", direction: "up" },
    ],
    services: [
      "Clean Sheet Costing",
      "Vendor Negotiation",
      "Purchase Optimization",
      "Material Cost Reduction",
      "Inventory Optimization",
      "Energy Cost Reduction",
      "Scrap Reduction",
      "Rework Reduction",
      "Working Capital Optimization",
      "Alternate Vendor Development",
    ],
  },
  {
    slug: "quality-systems",
    index: "03",
    name: "Quality Systems",
    short: "World-class quality systems that customers can feel.",
    headline: [
      "Quality isn't a department.",
      "It's the reason customers come back.",
    ],
    problems: [
      "First pass yield stays low while inspection headcount grows.",
      "Customer complaints repeat because root causes are never closed.",
      "Certifications exist on paper but not on the floor.",
    ],
    approach: [
      "ISO, IATF, BIS, CE — implemented as working systems, not binders.",
      "APQP, PPAP, FMEA, and control plans wired into daily production.",
      "Root cause discipline that kills recurring complaints permanently.",
    ],
    impact: [
      { metric: "First Pass Yield", direction: "up" },
      { metric: "Rework", direction: "down" },
      { metric: "Customer Complaints", direction: "down" },
      { metric: "Cost of Quality", direction: "down" },
    ],
    services: [
      "ISO Implementation",
      "IATF",
      "BIS / CE / UL / RoHS",
      "Internal Audits",
      "Supplier Quality",
      "Root Cause Analysis",
      "First Pass Yield Improvement",
      "APQP",
      "PPAP",
      "FMEA",
      "Control Plans",
      "Complaint Reduction",
    ],
  },
  {
    slug: "people-performance",
    index: "04",
    name: "People Performance",
    short: "Organizations that scale beyond their founders.",
    headline: [
      "Machines don't transform factories.",
      "People do.",
    ],
    problems: [
      "Everything depends on three people — and they're always busy.",
      "No SOPs, no KPIs, no structure: only tribal knowledge.",
      "Supervisors firefight because nobody developed them into leaders.",
    ],
    approach: [
      "Organization structure, job descriptions, and SOPs built function by function.",
      "KPI and KRA frameworks that make performance visible weekly.",
      "Leadership and supervisor development that compounds every quarter.",
    ],
    impact: [
      { metric: "Employee Productivity", direction: "up" },
      { metric: "Manpower Dependency", direction: "down" },
      { metric: "Skill Coverage", direction: "up" },
      { metric: "Attrition Risk", direction: "down" },
    ],
    services: [
      "Organization Structure",
      "SOP Development",
      "KPI Framework",
      "KRA Design",
      "Performance Management",
      "Leadership Development",
      "Supervisor Training",
      "Competency Mapping",
      "Succession Planning",
      "Employee Engagement",
    ],
  },
  {
    slug: "business-strategy",
    index: "05",
    name: "Business Strategy",
    short: "Growth with clarity — planned, measured, reviewed.",
    headline: [
      "Hope is not a strategy.",
      "A reviewed plan is.",
    ],
    problems: [
      "The business grows, but profitability doesn't follow.",
      "Decisions run on instinct because there is no MIS worth reading.",
      "Annual plans exist in January and vanish by March.",
    ],
    approach: [
      "Business diagnostics that expose exactly where profit leaks.",
      "Annual operating plans with management dashboards that stay alive.",
      "Pricing, expansion, and profitability strategy reviewed every month.",
    ],
    impact: [
      { metric: "EBITDA", direction: "up" },
      { metric: "Decision Speed", direction: "up" },
      { metric: "Plan Adherence", direction: "up" },
      { metric: "Margin Leakage", direction: "down" },
    ],
    services: [
      "Business Planning",
      "Growth Strategy",
      "Profitability Improvement",
      "Market Expansion",
      "Business Diagnostics",
      "Annual Operating Plans",
      "Management Dashboards",
      "MIS Reporting",
      "Pricing Strategy",
      "Business Reviews",
    ],
  },
  {
    slug: "growth-engine",
    index: "06",
    name: "Growth Engine",
    short: "Demand generation that fills capacity you just unlocked.",
    headline: [
      "The best factory in India still needs",
      "someone to know it exists.",
    ],
    problems: [
      "Sales depends on two relationships and one exhibition a year.",
      "The brand looks smaller than the business actually is.",
      "No funnel, no CRM, no visibility on where enquiries die.",
    ],
    approach: [
      "Industrial brand strategy and a web presence built to convert.",
      "B2B lead generation across SEO, LinkedIn, Google, and Meta.",
      "Dealer, distributor, and sales funnel systems with CRM discipline.",
    ],
    impact: [
      { metric: "Qualified Leads", direction: "up" },
      { metric: "Revenue Growth", direction: "up" },
      { metric: "Marketing ROI", direction: "up" },
      { metric: "Sales Cycle", direction: "down" },
    ],
    services: [
      "Brand Strategy",
      "Industrial Branding",
      "Website Development",
      "SEO",
      "Google Ads",
      "LinkedIn Marketing",
      "B2B Lead Generation",
      "Dealer Development",
      "Sales Funnel Design",
      "CRM Implementation",
      "Content Marketing",
    ],
  },
  {
    slug: "digital-transformation",
    index: "07",
    name: "Digital Transformation",
    short: "Technology that makes the whole system visible.",
    headline: [
      "You can't improve",
      "what you can't see.",
    ],
    problems: [
      "Data lives in registers, Excel, and one accountant's memory.",
      "ERP was bought years ago — half-implemented, fully resented.",
      "Leaders discover problems weeks after they happened.",
    ],
    approach: [
      "ERP and CRM consulting that fits the business, not the vendor.",
      "Power BI dashboards for production, quality, sales, and cash.",
      "AI adoption and workflow automation where it actually pays back.",
    ],
    impact: [
      { metric: "Data Visibility", direction: "up" },
      { metric: "Reporting Lag", direction: "down" },
      { metric: "Manual Effort", direction: "down" },
      { metric: "Digital Maturity", direction: "up" },
    ],
    services: [
      "ERP Consulting",
      "CRM Implementation",
      "Factory Digitization",
      "Power BI Dashboards",
      "Business Intelligence",
      "AI Adoption",
      "Workflow Automation",
      "Digital SOPs",
      "Production Dashboards",
      "Document Management",
    ],
  },
];

// ─────────────────────────────────────────────────────────────

export type Industry = {
  slug: string;
  name: string;
  line: string;
  challenges: string[];
  focus: string[]; // engine slugs
};

export const industries: Industry[] = [
  {
    slug: "electrical",
    name: "Electrical",
    line: "Switchgear, wiring devices, panels — where BIS compliance meets brutal price pressure.",
    challenges: [
      "Copper and polymer cost volatility eating fixed-price contracts",
      "BIS and quality documentation slowing new SKU launches",
      "Assembly lines balanced for volumes that no longer exist",
    ],
    focus: ["cost-intelligence", "quality-systems", "manufacturing-excellence"],
  },
  {
    slug: "automotive",
    name: "Automotive & Auto Components",
    line: "Tier-1 and Tier-2 suppliers living under IATF audits and annual price-downs.",
    challenges: [
      "OEM price-down letters arriving faster than internal cost reduction",
      "PPAP and APQP treated as paperwork instead of protection",
      "OEE stuck in the 50s while customers demand capacity confidence",
    ],
    focus: ["quality-systems", "manufacturing-excellence", "cost-intelligence"],
  },
  {
    slug: "packaging",
    name: "Packaging & Corrugation",
    line: "Thin-margin, high-volume converting where waste percentage is the whole game.",
    challenges: [
      "Paper and board yield losses invisible until month-end",
      "Changeover time destroying short-run profitability",
      "Customer complaints on print and dimensions repeating monthly",
    ],
    focus: ["cost-intelligence", "manufacturing-excellence", "quality-systems"],
  },
  {
    slug: "furniture",
    name: "Furniture",
    line: "Craft businesses scaling into factories — without losing the finish that sells.",
    challenges: [
      "Skilled-labour dependency capping output and quality consistency",
      "No standard times, so quoting is guesswork",
      "Brand and channel presence far behind product quality",
    ],
    focus: ["people-performance", "manufacturing-excellence", "growth-engine"],
  },
  {
    slug: "steel",
    name: "Steel & Metals",
    line: "Energy-hungry, asset-heavy operations where utilisation decides survival.",
    challenges: [
      "Furnace and mill energy costs drifting without accountability",
      "Yield losses buried in melt, scale, and trim",
      "Maintenance firefighting instead of planned reliability",
    ],
    focus: ["cost-intelligence", "manufacturing-excellence", "digital-transformation"],
  },
  {
    slug: "engineering",
    name: "Engineering & Industrial Equipment",
    line: "Low-volume, high-mix machine building where every project is its own factory.",
    challenges: [
      "Project costing that discovers losses only at delivery",
      "Design-to-production handoffs leaking weeks of lead time",
      "Aftermarket revenue potential left completely unmined",
    ],
    focus: ["business-strategy", "manufacturing-excellence", "growth-engine"],
  },
  {
    slug: "plastic",
    name: "Plastic & Injection Moulding",
    line: "Cycle-time economics: every second on the machine is money.",
    challenges: [
      "Cycle times set years ago and never challenged since",
      "Rejection hidden in regrind, so scrap looks free",
      "Mould maintenance reactive, downtime unplanned",
    ],
    focus: ["manufacturing-excellence", "cost-intelligence", "quality-systems"],
  },
  {
    slug: "electronics",
    name: "Electronics",
    line: "PLI-era assembly scaling fast — quality systems must scale faster.",
    challenges: [
      "First pass yield swinging with every new operator batch",
      "Component sourcing costs untracked against market curves",
      "Traceability demanded by customers, absent on the floor",
    ],
    focus: ["quality-systems", "digital-transformation", "people-performance"],
  },
  {
    slug: "pharma",
    name: "Pharmaceutical",
    line: "Compliance-first manufacturing where documentation is the product.",
    challenges: [
      "Audit readiness consuming leadership bandwidth year-round",
      "Batch cycle times constrained by paper-based workflows",
      "OEE conversations blocked by 'we're different' culture",
    ],
    focus: ["quality-systems", "digital-transformation", "manufacturing-excellence"],
  },
  {
    slug: "food-processing",
    name: "Food Processing & FMCG",
    line: "Freshness, yield, and line speed — margins live in the giveaway.",
    challenges: [
      "Overfill and giveaway silently taxing every batch",
      "Line stoppages during peak season demand",
      "Distribution expansion outpacing organisational capability",
    ],
    focus: ["manufacturing-excellence", "cost-intelligence", "growth-engine"],
  },
  {
    slug: "textile",
    name: "Textile & Consumer Products",
    line: "Fashion-cycle speed meeting factory-floor reality.",
    challenges: [
      "Style changeovers destroying line efficiency",
      "Quality claims from buyers eroding thin FOB margins",
      "Brand-building ambitions without a demand engine",
    ],
    focus: ["manufacturing-excellence", "growth-engine", "people-performance"],
  },
  {
    slug: "chemical",
    name: "Chemical",
    line: "Process industries where yield, energy, and safety converge.",
    challenges: [
      "Batch yields varying operator to operator",
      "Energy and utility costs untracked per product",
      "Safety and quality systems audited but not lived",
    ],
    focus: ["manufacturing-excellence", "cost-intelligence", "quality-systems"],
  },
];

// ─────────────────────────────────────────────────────────────

export type Architect = {
  slug: string;
  name: string;
  initials: string;
  role: string;
  facts: string[];
  bio: string;
};

export const architects: Architect[] = [
  {
    slug: "sandeep-sood",
    name: "Sandeep Sood",
    initials: "SS",
    role: "Manufacturing Excellence",
    facts: ["20+ Years", "Plant Leadership", "Operations Transformation"],
    bio: "Two decades as Plant Head in leading manufacturing organizations — operational excellence, productivity, cost optimization, and full factory transformation.",
  },
  {
    slug: "mohit-sapra",
    name: "Mohit Sapra",
    initials: "MS",
    role: "Quality & Operations",
    facts: ["Quality Systems", "Operational Excellence", "Plant Leadership"],
    bio: "GM, Quality Head, and Plant Head roles across manufacturing — quality systems, process optimization, and operational performance at scale.",
  },
  {
    slug: "arun-sharma",
    name: "Arun Sharma",
    initials: "AS",
    role: "Business Transformation",
    facts: ["Leadership", "Organizational Excellence", "Execution Systems"],
    bio: "Business consulting, organizational development, SOP design, and leadership development — strategic execution built for sustainable growth.",
  },
  {
    slug: "shivam-bhandari",
    name: "Shivam Bhandari",
    initials: "SB",
    role: "Growth & Digital",
    facts: ["Growth", "Technology", "Digital Transformation"],
    bio: "Marketing strategy, digital transformation, technology adoption, branding, lead generation, and automation — the demand and data side of manufacturing.",
  },
];

// ─────────────────────────────────────────────────────────────

export type Story = {
  slug: string;
  sector: string;
  title: string;
  problem: string;
  investigation: string;
  solution: string;
  results: { label: string; value: string; direction: "up" | "down" }[];
};

export const stories: Story[] = [
  {
    slug: "auto-components-oee",
    sector: "Auto Components · North India",
    title: "The line that was 'running at full capacity'",
    problem:
      "A Tier-2 supplier kept refusing new orders — every line was 'full'. Yet EBITDA was shrinking and the OEM was threatening dual-sourcing over delivery slips.",
    investigation:
      "Four weeks of floor-level OEE study revealed the truth: machines were occupied, not productive. True OEE was 52%. Changeovers took 3× the standard, and one bottleneck press dictated the entire plant's rhythm.",
    solution:
      "SMED on the bottleneck press, rebalanced lines around actual demand mix, TPM on the four critical machines, and a daily performance board reviewed at 9:00 AM sharp.",
    results: [
      { label: "OEE", value: "52% → 74%", direction: "up" },
      { label: "Capacity unlocked", value: "+28%", direction: "up" },
      { label: "Delivery misses", value: "−81%", direction: "down" },
      { label: "New capex needed", value: "₹0", direction: "down" },
    ],
  },
  {
    slug: "packaging-margin",
    sector: "Packaging · West India",
    title: "Profitable on every quote. Losing money every month.",
    problem:
      "A corrugated box maker quoted healthy margins on every job — and still closed most months near break-even. Nobody could explain where the margin went.",
    investigation:
      "Clean sheet costing across the top 40 SKUs exposed it: paper yield losses of 9%, unbilled design changes, energy costs allocated nowhere, and three customers who were quietly loss-making at any volume.",
    solution:
      "Re-priced the loss-making accounts, built a live yield dashboard on every corrugator shift, renegotiated kraft paper supply against a should-cost model, and tied supervisor incentives to waste percentage.",
    results: [
      { label: "Material yield", value: "+6.2 pts", direction: "up" },
      { label: "EBITDA margin", value: "3% → 9.5%", direction: "up" },
      { label: "Loss-making SKUs", value: "40 → 6", direction: "down" },
      { label: "Energy cost / tonne", value: "−14%", direction: "down" },
    ],
  },
  {
    slug: "electrical-quality",
    sector: "Electrical Equipment · NCR",
    title: "The customer complaint that kept coming back",
    problem:
      "A switchgear manufacturer faced the same field-failure complaint for the third year running. Each time: a report, an apology, a corrective action. Each time it returned.",
    investigation:
      "Root cause analysis traced the failure through assembly to an incoming component whose supplier had changed material grade — twice — without notification. Incoming inspection sampled the wrong parameter entirely.",
    solution:
      "Supplier quality agreements with change-control clauses, incoming inspection redesigned around failure modes (FMEA-driven), and a first-pass-yield board at every assembly cell.",
    results: [
      { label: "Field complaints", value: "−92%", direction: "down" },
      { label: "First pass yield", value: "86% → 97%", direction: "up" },
      { label: "Warranty cost", value: "−68%", direction: "down" },
      { label: "Key account retained", value: "100%", direction: "up" },
    ],
  },
  {
    slug: "engineering-growth",
    sector: "Industrial Equipment · Gujarat",
    title: "A world-class product nobody could find",
    problem:
      "A machine builder with genuinely superior equipment grew only through referrals. Two large relationships drove 70% of revenue — and one of them was consolidating vendors.",
    investigation:
      "The demand audit was blunt: no digital footprint, no funnel, no CRM, exhibition leads dying in inboxes. Meanwhile competitors with weaker machines ranked first on every search that mattered.",
    solution:
      "Industrial brand rebuild, technical content engine, LinkedIn + search campaigns aimed at plant heads, CRM with a weekly funnel review, and a dealer program for two new regions.",
    results: [
      { label: "Qualified enquiries / month", value: "4 → 31", direction: "up" },
      { label: "Revenue concentration", value: "70% → 41%", direction: "down" },
      { label: "Order book", value: "+2.4×", direction: "up" },
      { label: "Sales cycle", value: "−35%", direction: "down" },
    ],
  },
  {
    slug: "pharma-d2c-escape",
    sector: "Pharmaceutical · North India · Own — Brand & D2C",
    title: "Twenty years of manufacturing. Zero customers who knew their name.",
    problem:
      "A nutraceutical contract manufacturer produced for eleven brands at 9% margin, on 90-day credit. Two customers were 61% of revenue, and one had begun quietly qualifying a cheaper supplier. The promoter's entire net worth sat inside a business with no brand, no consumer, and no leverage.",
    investigation:
      "Category screening across their catalogue found three SKUs with genuine D2C economics: high repeat rate, strong margin headroom at consumer price, and shelf life that tolerated ecommerce. Everything else was correctly ruled out. The margin ladder was stark — a product leaving their gate at ₹58 retailed at ₹399 under a customer's label.",
    solution:
      "One brand, three SKUs. AYUSH and FSSAI registrations run as a parallel workstream, packaging and identity built from scratch, own store plus marketplaces sequenced deliberately, and a creative engine tuned to a CAC ceiling set before launch. Contribution margin per order reviewed every month — SKUs that missed it were killed, not defended.",
    results: [
      { label: "Contribution margin", value: "9% → 47%", direction: "up" },
      { label: "Receivable days on D2C revenue", value: "90 → 6", direction: "down" },
      { label: "Revenue from owned brand", value: "0 → 18%", direction: "up" },
      { label: "Top-2 customer dependence", value: "61% → 44%", direction: "down" },
    ],
  },
  {
    slug: "food-franchise-network",
    sector: "Food & Beverage · West India · Multiply — Franchise",
    title: "Four outlets that worked. Eleven franchisees who didn't.",
    problem:
      "A regional QSR brand had sold fifteen franchises in two years on the strength of four company outlets. Eleven were losing money, three had shut, and franchisee word-of-mouth had made new territory sales nearly impossible. The founder blamed the franchisees.",
    investigation:
      "The unit economics never survived transplantation. Company outlets carried rent negotiated years earlier and were run by the founder's own trained staff. Franchise outlets faced double the rent, no training curriculum, and a menu whose kitchen throughput collapsed at peak hours. The model was FOFO in markets that needed FOCO discipline.",
    solution:
      "Expansion frozen for seven months. Unit economics rebuilt honestly against real rent, kitchen redesigned for throughput, full operations manual and eleven-day training curriculum written, royalty restructured so franchisees reached payback inside 26 months. Two struggling markets converted to FOCO. Then — and only then — territory sales restarted with a qualification process that rejects more applicants than it accepts.",
    results: [
      { label: "Franchisee outlets profitable", value: "27% → 86%", direction: "up" },
      { label: "Average payback period", value: "41 → 24 months", direction: "down" },
      { label: "Network outlets", value: "15 → 38", direction: "up" },
      { label: "Franchisee churn", value: "−79%", direction: "down" },
    ],
  },
  {
    slug: "auto-component-exit",
    sector: "Auto Components · Pune · Unlock — Capital & Exit",
    title: "A business worth ₹90 crore that no buyer could actually buy",
    problem:
      "A promoter in his sixties wanted to exit within two years. An informal offer had arrived at roughly 4× EBITDA and he suspected it was low — but had no way to know, and no second party to compare it against.",
    investigation:
      "Sale-readiness diagnosis found exactly why the offer was low. Three years of financials that didn't reconcile to GST filings, 58% revenue in one OEM, related-party rent with no agreement, no MIS, and a business where the promoter personally approved every price. A buyer wasn't discounting the assets — they were discounting the risk of everything walking out with him.",
    solution:
      "An eighteen-month readiness programme before any buyer was approached: financials cleaned and audited consistently, a second-line management team built and given real authority, customer concentration reduced through deliberate account development, related-party arrangements formalised, and monthly MIS instituted. Then a proper process — information memorandum, data room, and nine counterparties approached in parallel rather than one.",
    results: [
      { label: "Closing multiple", value: "4.0× → 6.8× EBITDA", direction: "up" },
      { label: "Competing bidders", value: "1 → 5", direction: "up" },
      { label: "Customer concentration", value: "58% → 34%", direction: "down" },
      { label: "Promoter earn-out risk", value: "−60%", direction: "down" },
    ],
  },
  {
    slug: "electrical-compliance-rescue",
    sector: "Electrical Appliances · NCR · Govern — Compliance & Risk",
    title: "The diligence that stopped in week three",
    problem:
      "A growth investor had signed a term sheet at a valuation the promoter was delighted with. Diligence uncovered lapsed BIS certification on two running SKUs, a BOM that had drifted from the certified specification, and labour registers reconstructed the week before. The investor walked.",
    investigation:
      "Nothing found in diligence was new — it had accumulated over six years of growth outpacing systems. There was no compliance register, no renewal calendar, no owner. Certification was treated as a launch-day event rather than a live obligation, and engineering changed BOMs without anyone connecting that to the certificate.",
    solution:
      "A complete compliance map across factory, labour, environmental, product and corporate obligations — 94 items, each with status, owner and renewal date. Gaps closed in risk order. BOM change control formally linked to certification. Registers rebuilt and maintained live. A quarterly internal audit installed so the answer to 'can we survive an inspection tomorrow' became permanently yes.",
    results: [
      { label: "Compliance items current", value: "61% → 100%", direction: "up" },
      { label: "Diligence re-opened & closed", value: "9 months", direction: "up" },
      { label: "Valuation achieved vs original", value: "+12%", direction: "up" },
      { label: "Open audit findings", value: "−94%", direction: "down" },
    ],
  },
];

// ─────────────────────────────────────────────────────────────

export type JournalEntry = {
  slug: string;
  topic: string;
  title: string;
  dek: string;
  read: string;
  date: string;
  body: string[];
};

export const journal: JournalEntry[] = [
  {
    slug: "anatomy-of-profit-leakage",
    topic: "Profit Leakage",
    title: "The anatomy of profit leakage",
    dek: "Factories rarely lose money in one place. They lose it in hundreds of small places, every single day.",
    read: "6 min",
    date: "2026-06-12",
    body: [
      "Ask a plant head where the money goes and you'll get an answer about material costs or manpower. Both are usually wrong — not because they don't matter, but because they're the visible ten percent of an invisible problem.",
      "Profit leakage is structural. A machine running at 55% OEE doesn't appear on any P&L line. Neither does a changeover that takes ninety minutes instead of twenty, a purchase price that hasn't been challenged in three years, or a customer complaint handled by apology instead of root cause. Each leak is individually survivable. Together, they routinely consume five to ten points of EBITDA.",
      "The trap is departmental thinking. The production head optimizes output, quality optimizes compliance, purchase optimizes price — and the interactions between them, where the real losses live, belong to nobody. Rush production to hit dispatch numbers and rejection climbs. Squeeze vendors on price and line stoppages climb. Every department hits its KPI while the business misses its margin.",
      "The fix begins with a different question. Not 'how is each department performing?' but 'where does a rupee of revenue lose its way to becoming a rupee of profit?' Follow the rupee — through purchase, production, quality, dispatch, and collection — and the leaks reveal themselves with uncomfortable clarity.",
      "That's why we treat manufacturing as one system. Because the leaks don't respect your org chart.",
    ],
  },
  {
    slug: "oee-is-a-mirror",
    topic: "Manufacturing",
    title: "OEE is a mirror, not a metric",
    dek: "Most plants that measure OEE measure it wrong — and the ones that measure it right often can't look at it honestly.",
    read: "5 min",
    date: "2026-05-28",
    body: [
      "Overall Equipment Effectiveness is the most abused number in manufacturing. Plants quote 85% while running at 55%. The gap isn't dishonesty — it's definition. Exclude planned downtime, ignore minor stoppages, round up speed losses, and any machine looks world-class.",
      "Honest OEE hurts. It says the machine you bought for eight hours of value delivers four and a half. It says your changeover standard is fiction. It says the night shift runs twelve points below the day shift and has for two years.",
      "But honest OEE is also the cheapest capacity you will ever buy. Moving a bottleneck machine from 55% to 70% OEE is equivalent to buying 27% more machine — for the cost of discipline rather than capex. In our experience, most Indian mid-size plants hold 20–30% hidden capacity behind their OEE number.",
      "Start with one machine. The bottleneck. Measure it honestly for two weeks — every stop, every slow cycle, every defect. Don't fix anything yet; just look. The improvement agenda writes itself, and it will be nothing like what the monthly review meeting assumed.",
    ],
  },
  {
    slug: "sops-are-leadership",
    topic: "Leadership",
    title: "SOPs are a leadership act",
    dek: "The absence of standard operating procedures is never a documentation problem. It's a delegation problem wearing a disguise.",
    read: "5 min",
    date: "2026-05-09",
    body: [
      "Walk into a factory with no SOPs and you'll find something else missing too: leaders who can take a holiday. Everything routes through three people. Quality decisions, price approvals, machine settings, customer calls — all tribal knowledge, all bottlenecked.",
      "Owners often resist SOPs with the same sentence: 'our work can't be standardized.' What they mean is: 'my judgment is the product.' And in a ₹20 crore business, it genuinely is. The problem arrives at ₹50 crore, when judgment can't be everywhere at once, and the business starts making expensive decisions in its founder's absence — badly.",
      "A real SOP is not a laminated sheet. It's a transfer of judgment: this is what good looks like, this is what you check, this is when you escalate. Written that way, SOPs don't bureaucratize a business. They multiply its best thinking.",
      "The test of an SOP program isn't audit compliance. It's whether the plant runs better the week the owner is away than the week before. When that inverts, the organization has started to scale.",
    ],
  },
  {
    slug: "cost-of-poor-quality",
    topic: "Quality",
    title: "The real price of poor quality",
    dek: "Rejection is the visible cost. The invisible ones — expediting, inspection, distrust — are usually triple.",
    read: "4 min",
    date: "2026-04-17",
    body: [
      "When manufacturers calculate quality costs, they count scrap and rework. Real cost of poor quality is a pyramid, and scrap is only its visible tip.",
      "Below it: the second inspection added because the first can't be trusted. The premium freight to replace a rejected lot. The engineer flying to a customer with a corrective action report. The negotiating position destroyed at annual price discussions because your defect PPM is the first slide the customer shows.",
      "Deeper still: the orders you never won. Procurement teams talk to each other, and a reputation for quality problems closes doors silently — no rejection report, no complaint, just an RFQ list you're not on.",
      "First pass yield is the metric that captures the truth. Not final quality — anyone can inspect their way to shippable product. FPY asks: how much came out right the first time? Every point of FPY improvement is simultaneously a cost reduction, a capacity increase, and a sales argument. Few numbers work that hard.",
    ],
  },
  {
    slug: "digital-that-pays-back",
    topic: "Technology",
    title: "Digital transformation that actually pays back",
    dek: "Most factory digitization fails the same way: technology first, question second. Reverse the order and it pays for itself.",
    read: "5 min",
    date: "2026-03-30",
    body: [
      "Indian manufacturing is littered with half-dead ERPs. Bought with conviction, implemented with exhaustion, used as an expensive invoicing system. The pattern repeats because the sequence is wrong: software was chosen before the question it was meant to answer.",
      "Digitization pays back when it starts from a decision someone needs to make faster. Which machine loses the most money? Which customer's orders are actually profitable? Where is cash stuck? Each question defines the data needed, which defines the system needed — usually far simpler than what the vendor proposed.",
      "A live Power BI dashboard reading production data from three critical machines routinely delivers more value than a full MES nobody opens. A CRM with a disciplined weekly funnel review beats a marketing automation suite running on autopilot.",
      "Our rule: no technology without a named decision, a named decision-maker, and a payback estimate. It sounds restrictive. It's why our digital projects survive their first year.",
    ],
  },
  {
    slug: "growth-is-a-system",
    topic: "Growth",
    title: "Growth is a system, not a sales target",
    dek: "Ambitious revenue targets fail quietly every year. Demand systems compound quietly every year. Choose the second.",
    read: "5 min",
    date: "2026-03-08",
    body: [
      "Every January, manufacturing companies set growth targets. Twenty percent, thirty percent — chosen by aspiration, assigned to the sales head, reviewed with disappointment by August. The target was real; the system to achieve it never existed.",
      "A demand system asks mechanical questions. How many qualified enquiries does the business need per month to hit the number? Where will they come from — search, LinkedIn, dealers, exhibitions, referrals? What happens to an enquiry in the first hour, day, week? Who reviews the funnel, and what do they change when a stage underperforms?",
      "B2B industrial buyers changed faster than industrial sellers did. A plant head shortlists vendors from a phone screen at 11 PM before any salesperson knows the requirement exists. If your expertise isn't visible there, you're not losing deals — you're never entering them.",
      "The compounding is real. Month one, a technical article. Month six, page-one rankings for the searches that matter. Month twelve, inbound enquiries from companies you couldn't get meetings with. Systems are slower than heroics — and then, suddenly, much faster.",
    ],
  },
  {
    slug: "the-udhari-trap",
    topic: "Brand & D2C",
    title: "The udhari trap",
    dek: "Ninety-day credit isn't a payment term. It's an interest-free loan you make to your customer, funded by a loan you pay interest on.",
    read: "7 min",
    date: "2026-08-22",
    body: [
      "Every manufacturer in India understands udhari intuitively and almost nobody has ever put a number on it. So here is the number. A business doing ₹40 crore a year on 90-day terms has roughly ₹10 crore permanently parked inside its customers' businesses. Not late. Not disputed. Just structurally, by agreement, somewhere else.",
      "You financed that ₹10 crore. You may be paying eleven percent on a working capital line to do it. So the arithmetic is that you borrow money, at interest, to fund your customer's operations, and then thank them for the order.",
      "It gets worse when you look at what your customer does with the product. A contract manufacturer typically earns eight to twelve percent. The brand whose label goes on that product sells it at sixty to seventy. You carried the plant, the labour, the compliance, the quality liability, and the working capital — and you took the thinnest slice of the value chain you personally created.",
      "The usual response is to negotiate better terms. That rarely works, because terms are a function of power, and a commodity supplier has none. Chasing payment harder doesn't change the structure. Neither does adding another customer on the same terms.",
      "The structural answer is to sell something, to someone, who pays you at the time of purchase. That is what a direct-to-consumer brand actually is — not a marketing project, but a working capital transformation that happens to come with sixty percent margins attached. Same factory. Same product. Different buyer, different terms, different economics.",
      "It is not right for every product. Low average order value, thin repeat rates, brutal shipping economics, and heavy regulatory load can each kill it — and the honest first step is testing your catalogue against those constraints rather than launching on enthusiasm. But for most manufacturers there is at least one SKU sitting in the plant right now that would be worth five times more with your name on it.",
    ],
  },
  {
    slug: "franchise-before-you-are-ready",
    topic: "Franchise",
    title: "Most brands franchise two years too early",
    dek: "The first ten franchisees decide whether the next hundred are possible. Almost everyone sells them before the model is ready.",
    read: "6 min",
    date: "2026-08-05",
    body: [
      "Franchising is genuinely the most capital-efficient expansion route available to an Indian brand. Someone else funds the outlet, someone else runs it with an owner's attention, and you grow without raising equity or debt. Which is exactly why it is so often attempted before the business can support it.",
      "The failure pattern is consistent. A founder has two or three outlets that work well. They are in the founder's own city, on rent negotiated years ago, staffed by people the founder trained personally, and supervised by the founder walking in unannounced. On the strength of that, territories get sold.",
      "The franchisee then discovers what the model actually costs in a market where rent is double, no trained staff exist, and nobody walks in unannounced. There is no operations manual because the founder never needed one. Throughput collapses at peak because the process was never designed, only absorbed. Payback drifts past thirty-six months, which in a volatile market is another way of saying never.",
      "Then the second-order damage begins. Struggling franchisees talk to prospective franchisees. Territory sales dry up. The brand acquires a reputation among investors that takes years to shake — and the founder concludes, incorrectly, that they picked bad partners.",
      "The readiness test is unglamorous and answerable. Is the unit profitable without the founder standing in it? Can a competent stranger run it from written material? Does the payback maths survive realistic rent in a market you don't already own? Is the brand a reason a customer chooses you, or just a sign above a door?",
      "Answer those honestly and the sequencing becomes obvious: fix the unit, write the system, model the economics, then sell territories. Brands that do it in that order are the ones still expanding at outlet fifty.",
    ],
  },
  {
    slug: "why-most-smes-are-unsellable",
    topic: "Capital & Exit",
    title: "Why most SMEs are unsellable",
    dek: "The gap between what a business earns and what it fetches is almost never about the numbers. It is about who the numbers depend on.",
    read: "6 min",
    date: "2026-07-14",
    body: [
      "A promoter spends thirty years building a business, decides it is time to exit, and discovers something unpleasant: the offers are far below what the earnings would suggest, or there are no offers at all. The instinct is to blame the buyers. The reality is usually that the business, in its current state, cannot be bought.",
      "A buyer is not purchasing last year's EBITDA. They are purchasing the probability that it continues after the person who created it leaves. Every dependency on that person is a discount. Every undocumented process, every price approved personally, every relationship that exists in one man's phone — priced in, downward.",
      "The recurring findings are almost boringly consistent. Financials that don't reconcile to filings. Revenue concentrated in two accounts. Related-party rent with no agreement. No MIS. Informal employment arrangements. Processes that live in memory. Each is survivable in operation and expensive in diligence.",
      "The second problem is process. Most SME transactions happen because one interested party approached the promoter. With a single counterparty there is no competitive tension, no benchmark, and no leverage — and price in a transaction is set by competition, not by argument.",
      "The encouraging part is that all of this is fixable, and the fixing is worth more per hour than almost anything else a promoter can do at that stage. Eighteen months of deliberate preparation — clean books, a real second line, reduced concentration, formalised arrangements, documented systems — routinely moves the closing multiple by more than the entire cost of the exercise.",
      "The best time to make a business sellable is several years before you intend to sell it. The second best time is before you talk to the first buyer, not after.",
    ],
  },
  {
    slug: "governance-is-not-paperwork",
    topic: "Governance",
    title: "Governance is not paperwork",
    dek: "Compliance built for audit week delivers nothing. Compliance built into the operating rhythm quietly raises the value of the whole company.",
    read: "5 min",
    date: "2026-06-28",
    body: [
      "Ask most promoters about compliance and you get a slight grimace and a reference to their CA. It is understood as cost, as friction, as the thing that must be tidied before someone comes to look. Which is exactly why it fails at the only moments it matters.",
      "The Indian compliance load is genuinely heavy — factory, labour, environmental, product, tax and corporate obligations spread across departments that rarely talk to each other. Almost no mid-size business has a single register of what actually applies to it at its current size. Without that register there is no calendar, and without a calendar there is no owner, and things lapse quietly until an inspector, a customer auditor, or an investor's diligence team finds them.",
      "We have watched a signed term sheet evaporate over lapsed product certification and a bill of materials that had drifted from the certified specification. Nothing discovered was new. It had simply accumulated over years of growth outpacing systems, with no mechanism designed to catch it.",
      "The deeper issue is that the same weakness which creates compliance exposure also caps growth. A business with no defined structure, no authority matrix and no MIS cannot delegate. Every decision routes to the owner. Growth is therefore capped at exactly the limit of one person's attention — and that ceiling is invisible until you hit it.",
      "Governance done properly is not filing. It is the conversion of a promoter's business into an institution: something that can be audited, financed, franchised, inherited or sold without depending on any individual's memory. That is not overhead. On the day someone puts a valuation on your company, it is most of the argument.",
    ],
  },
];

// ─────────────────────────────────────────────────────────────

export type AssessmentQuestion = {
  id: number;
  engine: string; // engine slug
  question: string;
  options: { label: string; score: number }[];
};

const scale = (a: string, b: string, c: string, d: string) => [
  { label: a, score: 0 },
  { label: b, score: 1 },
  { label: c, score: 2 },
  { label: d, score: 3 },
];

export const assessmentQuestions: AssessmentQuestion[] = [
  // Manufacturing Excellence
  {
    id: 1,
    engine: "manufacturing-excellence",
    question: "Do you measure OEE (Overall Equipment Effectiveness) on your critical machines?",
    options: scale(
      "We don't measure OEE",
      "We estimate it occasionally",
      "We track it, but don't act on it weekly",
      "Measured daily, reviewed weekly, improved monthly"
    ),
  },
  {
    id: 2,
    engine: "manufacturing-excellence",
    question: "How predictable is your daily production output against plan?",
    options: scale(
      "Output varies wildly — plans are aspirations",
      "We hit plan roughly half the time",
      "Mostly on plan, with regular firefighting",
      "≥95% plan adherence, deviations root-caused"
    ),
  },
  {
    id: 3,
    engine: "manufacturing-excellence",
    question: "When did you last reduce a changeover or cycle time deliberately?",
    options: scale(
      "Never studied it",
      "Over a year ago",
      "In the last year, on some lines",
      "Continuous program with measured gains"
    ),
  },
  // Cost Intelligence
  {
    id: 4,
    engine: "cost-intelligence",
    question: "Do you know the should-cost of your top purchased items?",
    options: scale(
      "We negotiate on last year's price",
      "Rough benchmarks for a few items",
      "Should-cost models for some categories",
      "Clean sheet costing drives every major negotiation"
    ),
  },
  {
    id: 5,
    engine: "cost-intelligence",
    question: "How visible are your scrap, rework, and energy costs?",
    options: scale(
      "Buried in overall costs",
      "Known annually, at company level",
      "Tracked monthly by department",
      "Live, per line/shift, with owners and targets"
    ),
  },
  {
    id: 6,
    engine: "cost-intelligence",
    question: "How many days of working capital sit in your inventory?",
    options: scale(
      "We don't track inventory days",
      "We know it, it keeps growing",
      "Stable, reviewed quarterly",
      "Actively optimized with turns improving year on year"
    ),
  },
  // Quality Systems
  {
    id: 7,
    engine: "quality-systems",
    question: "Do you measure First Pass Yield — right first time, before rework?",
    options: scale(
      "Only final rejection is tracked",
      "FPY estimated for key products",
      "FPY tracked, improvement sporadic",
      "FPY on every line with rising trend"
    ),
  },
  {
    id: 8,
    engine: "quality-systems",
    question: "When a customer complaint arrives, what usually happens?",
    options: scale(
      "Apologize, replace, move on",
      "Report filed, cause rarely closed",
      "Root cause found for major issues",
      "Every complaint closed at root cause — repeats are rare"
    ),
  },
  {
    id: 9,
    engine: "quality-systems",
    question: "How would your quality systems survive a surprise customer audit tomorrow?",
    options: scale(
      "It would be a bad day",
      "We'd need a week's notice",
      "Mostly ready, some gaps",
      "Audit-ready every day — systems are lived, not staged"
    ),
  },
  // People Performance
  {
    id: 10,
    engine: "people-performance",
    question: "If your three best people took a month off, what happens?",
    options: scale(
      "The business would seize up",
      "Serious disruption, we'd survive",
      "Some functions slow down",
      "Systems run the business — people improve it"
    ),
  },
  {
    id: 11,
    engine: "people-performance",
    question: "Do employees have written SOPs, KPIs, and clear responsibilities?",
    options: scale(
      "Mostly verbal and tribal knowledge",
      "Job descriptions exist, rarely used",
      "SOPs and KPIs for key roles",
      "Every role: SOP, KPI, review rhythm"
    ),
  },
  {
    id: 12,
    engine: "people-performance",
    question: "How are supervisors and future leaders developed?",
    options: scale(
      "They learn by surviving",
      "Occasional external training",
      "Structured training, no follow-through",
      "Deliberate development with succession planning"
    ),
  },
  // Business Strategy
  {
    id: 13,
    engine: "business-strategy",
    question: "Do you have an annual operating plan that's still alive in Q3?",
    options: scale(
      "No formal annual plan",
      "A budget exists, rarely revisited",
      "Plan reviewed quarterly",
      "Monthly reviews against plan drive decisions"
    ),
  },
  {
    id: 14,
    engine: "business-strategy",
    question: "Do you know which products and customers actually make you money?",
    options: scale(
      "Gut feel only",
      "Overall margins known, not by product",
      "Product-level margins, updated sometimes",
      "Live product & customer profitability shapes pricing"
    ),
  },
  {
    id: 15,
    engine: "business-strategy",
    question: "How does leadership get business performance information?",
    options: scale(
      "By asking around",
      "Month-end accounts, weeks late",
      "Monthly MIS with key numbers",
      "Dashboards reviewed weekly, decisions logged"
    ),
  },
  // Growth Engine
  {
    id: 16,
    engine: "growth-engine",
    question: "Where do your new customers come from?",
    options: scale(
      "Referrals and old relationships only",
      "Exhibitions plus referrals",
      "Some inbound from web/marketing",
      "A measured multi-channel demand system"
    ),
  },
  {
    id: 17,
    engine: "growth-engine",
    question: "Does your brand presence match the quality of your business?",
    options: scale(
      "We look far smaller than we are",
      "Basic website, rarely updated",
      "Decent presence, no strategy behind it",
      "Brand actively builds trust before the first meeting"
    ),
  },
  {
    id: 18,
    engine: "growth-engine",
    question: "Is there a sales funnel someone reviews every week?",
    options: scale(
      "Enquiries live in inboxes",
      "An Excel tracker, updated sometimes",
      "CRM exists, discipline varies",
      "CRM + weekly funnel review + conversion targets"
    ),
  },
  // Digital Transformation
  {
    id: 19,
    engine: "digital-transformation",
    question: "How much of your factory data is digital and current?",
    options: scale(
      "Registers and memory",
      "Excel, updated when possible",
      "ERP partially used",
      "Live dashboards across production, quality, sales, cash"
    ),
  },
  {
    id: 20,
    engine: "digital-transformation",
    question: "How quickly does leadership learn about a problem on the floor?",
    options: scale(
      "When a customer tells us",
      "Days later, in reports",
      "Same week, through reviews",
      "Same day — the system surfaces it automatically"
    ),
  },
];

// ─────────────────────────────────────────────────────────────

export const wheel = [
  { key: "operations", label: "Operations", note: "Machines, flow, and output — the physics of profit." },
  { key: "quality", label: "Quality", note: "Right first time. Every time. Measurably." },
  { key: "purchase", label: "Purchase", note: "Every rupee negotiated with evidence, not habit." },
  { key: "people", label: "People", note: "Leadership and skill that scale beyond founders." },
  { key: "technology", label: "Technology", note: "Visibility. Speed. Decisions made on data." },
  { key: "marketing", label: "Marketing", note: "Demand generation that fills unlocked capacity." },
  { key: "strategy", label: "Strategy", note: "One plan. Reviewed monthly. Owned by everyone." },
];

export const leaks = [
  "Rework",
  "Downtime",
  "Poor Purchasing",
  "Weak Leadership",
  "Disconnected Systems",
  "Poor Visibility",
  "Lost Sales",
];

export const framework = [
  { step: "Discover", note: "Business diagnostics, plant assessment, financial review, leadership interviews." },
  { step: "Diagnose", note: "Where exactly does a rupee of revenue lose its way to profit?" },
  { step: "Design", note: "Transformation roadmap, KPI framework, ROI analysis, change strategy." },
  { step: "Implement", note: "On-site execution. SOPs deployed. Teams trained. Systems built." },
  { step: "Measure", note: "KPI dashboards. Monthly reviews. No guesswork — only evidence." },
  { step: "Optimize", note: "Continuous improvement initiatives compounding quarter on quarter." },
  { step: "Scale", note: "Long-term advisory as the business grows into new markets." },
];

export const kpis = [
  "Machine OEE",
  "First Pass Yield",
  "Cost Per Unit",
  "Material Yield",
  "Procurement Savings",
  "Employee Productivity",
  "Customer Complaints",
  "Delivery Performance",
  "Inventory Turns",
  "Marketing ROI",
  "Revenue Growth",
  "EBITDA",
];
