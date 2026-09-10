// ─────────────────────────────────────────────────────────────
// RELY360 — The Value Ladder
// Five practices. One firm. From running a factory to owning an enterprise.
// ─────────────────────────────────────────────────────────────

export type Practice = {
  slug: string;
  index: string;
  verb: string; // OPERATE / OWN / MULTIPLY / UNLOCK / GOVERN
  name: string;
  short: string; // one line, ≤15 words
  rung: string; // what this rung of the ladder does
  headline: [string, string];
  thesis: string[]; // the argument, 2–3 paragraphs
  problems: { title: string; detail: string }[];
  approach: { phase: string; title: string; detail: string }[];
  outcomes: { metric: string; direction: "up" | "down" }[];
  services: string[];
  linksTo: { slug: string; why: string }[]; // how practices interlock
};

export const practices: Practice[] = [
  // ═══════════════════ 01 · OPERATE ═══════════════════
  {
    slug: "operations",
    index: "01",
    verb: "Operate",
    name: "Manufacturing & Operations Excellence",
    short: "Factories that run faster, leaner, and far more profitably.",
    rung: "Make the business profitable at its core.",
    headline: ["Every factory has hidden profit.", "We find it."],
    thesis: [
      "Manufacturers rarely fail for lack of orders. They fail because profit leaks every day — from machines running below rated speed, from changeovers nobody standardised, from purchase prices never challenged, from rework treated as part of the job.",
      "Each leak is individually survivable. Together they routinely consume five to ten points of EBITDA. And because they live in the gaps between departments, nobody owns them.",
      "This is the first rung of the ladder for a reason. A business that isn't profitable at its core cannot be branded, franchised, or sold at a serious multiple. Everything above depends on this being solved first.",
    ],
    problems: [
      {
        title: "Capacity you already own, invisible",
        detail:
          "Honest OEE in most Indian mid-size plants sits in the 50s. The gap between that and 70% is a machine you already paid for — hiding in plain sight.",
      },
      {
        title: "Costs negotiated on habit, not evidence",
        detail:
          "Without a should-cost model, the supplier's opening number anchors every negotiation. Three years of that compounds into permanent margin loss.",
      },
      {
        title: "Quality inspected in, not built in",
        detail:
          "First pass yield stays low while inspection headcount grows. The cost of poor quality — rework, scrap, claims, lost accounts — runs 3–8% of revenue, mostly off the books.",
      },
      {
        title: "Everything depends on three people",
        detail:
          "No SOPs, no KPIs, no structure — only tribal knowledge. The business cannot scale beyond the founder's attention span.",
      },
    ],
    approach: [
      {
        phase: "01",
        title: "Diagnose the whole system",
        detail:
          "A structured plant and business diagnostic across all seven operating functions — hundreds of checkpoints, scored, evidenced, and priced in rupees.",
      },
      {
        phase: "02",
        title: "Price every leak",
        detail:
          "Each finding becomes a number: OEE gap × contribution, waste % × material spend, should-cost gap × annual volume. Opinions become arithmetic.",
      },
      {
        phase: "03",
        title: "Implement on the floor",
        detail:
          "SMED on the bottleneck. Clean-sheet costing into negotiations. FPY boards at every cell. SOPs, KPIs, and daily reviews that survive our departure.",
      },
      {
        phase: "04",
        title: "Bank the savings",
        detail:
          "Every initiative carries a locked baseline and a monthly value entry, verified by the client's own finance team. We report banked rupees, not activity.",
      },
    ],
    outcomes: [
      { metric: "Machine OEE", direction: "up" },
      { metric: "Cost per unit", direction: "down" },
      { metric: "First pass yield", direction: "up" },
      { metric: "EBITDA", direction: "up" },
    ],
    services: [
      "Plant & Business Diagnostics",
      "OEE & Capacity Unlock",
      "Lean, TPM, 5S, Kaizen",
      "SMED & Changeover Reduction",
      "Clean-Sheet Costing",
      "Vendor Negotiation",
      "Quality Systems & FPY",
      "Rework & Scrap Reduction",
      "SOP & KPI Frameworks",
      "Manpower Productivity",
      "Energy & Utility Optimization",
      "Working Capital & Inventory",
    ],
    linksTo: [
      {
        slug: "capital",
        why: "Operational maturity is what a buyer or investor actually pays a premium for.",
      },
      {
        slug: "franchise",
        why: "You cannot replicate a unit whose economics you haven't yet proven.",
      },
    ],
  },

  // ═══════════════════ 02 · OWN ═══════════════════
  {
    slug: "brand-demand",
    index: "02",
    verb: "Own",
    name: "Brand, Demand & D2C Transformation",
    short: "Stop making margin for someone else's label. Own the customer.",
    rung: "Own the demand — and the margin that comes with it.",
    headline: ["You make the product.", "Someone else makes the margin."],
    thesis: [
      "Here is the arithmetic almost every Indian manufacturer lives inside and rarely says out loud. You manufacture at 8–12% margin. The brand whose label goes on your product sells it at 60–70%. You carry the plant, the labour, the compliance, the quality risk — and you take the thinnest slice of the value you created.",
      "Then you wait to be paid. Thirty days becomes forty-five, forty-five becomes ninety. Your working capital sits inside someone else's business, funding their growth. In India we have a gentle word for this: udhari. There is nothing gentle about what it does to a balance sheet.",
      "The escape is not a new factory. It is the same factory, the same product, and a direct line to the customer. A D2C brand you own changes three things simultaneously: you get paid before or within days of dispatch instead of after ninety, you capture the brand margin instead of donating it, and you finally own the customer relationship — the only asset in this chain that appreciates.",
    ],
    problems: [
      {
        title: "The udhari trap",
        detail:
          "Ninety-day receivables mean a quarter of your annual revenue is permanently parked in other people's businesses. You borrow working capital to fund your customers' cash flow, and pay interest for the privilege.",
      },
      {
        title: "Someone else's brand equity",
        detail:
          "Every unit you ship builds a brand you don't own. If that customer consolidates suppliers or moves offshore, twenty years of manufacturing excellence has no consumer who knows your name.",
      },
      {
        title: "Price-taker economics",
        detail:
          "Annual price-down letters, reverse auctions, and 'the market rate' — because a commodity manufacturer has no pricing power. Brands set prices. Factories accept them.",
      },
      {
        title: "Invisible to the buyers who matter",
        detail:
          "For those who stay B2B, the plant head shortlists vendors from a phone at 11 PM. If your expertise isn't visible there, you're not losing deals — you never entered them.",
      },
    ],
    approach: [
      {
        phase: "01",
        title: "Category & feasibility assessment",
        detail:
          "Not every product survives D2C. We test yours against average order value, repeat rate, shelf life, shipping economics, return risk, regulatory load, and genuine differentiation — before a rupee is spent.",
      },
      {
        phase: "02",
        title: "Brand creation",
        detail:
          "Name, identity, packaging, positioning, and story. The hardest part is rarely design — it is the shift from thinking like a supplier to thinking like a brand that a consumer chooses.",
      },
      {
        phase: "03",
        title: "Compliance & registration",
        detail:
          "FSSAI, CDSCO, AYUSH, BIS, legal metrology, trademark. In pharma, food, and cosmetics this is the step that quietly kills unprepared launches. We handle it as a workstream, not an afterthought.",
      },
      {
        phase: "04",
        title: "Channel architecture",
        detail:
          "Your own store, marketplaces, and quick commerce each behave differently on margin, settlement, and control. We sequence them deliberately instead of launching everywhere and bleeding everywhere.",
      },
      {
        phase: "05",
        title: "Performance marketing engine",
        detail:
          "Meta and Google campaigns, a creative production rhythm, and ruthless CAC discipline. Creative volume — not clever targeting — is what actually moves acquisition cost in India today.",
      },
      {
        phase: "06",
        title: "Retention & lifetime value",
        detail:
          "First order is bought; profit lives in the second and third. WhatsApp flows, subscriptions, and repeat architecture are built from launch, not bolted on after a plateau.",
      },
      {
        phase: "07",
        title: "Unit economics governance",
        detail:
          "Contribution margin per order, CAC to LTV, RTO control, and a monthly review that kills what doesn't pay. This is where most D2C brands fail, and where a manufacturer's discipline is an unfair advantage.",
      },
    ],
    outcomes: [
      { metric: "Gross margin per unit", direction: "up" },
      { metric: "Receivable days", direction: "down" },
      { metric: "Customer ownership", direction: "up" },
      { metric: "Revenue concentration", direction: "down" },
    ],
    services: [
      "D2C Feasibility & Category Fit",
      "Brand Strategy & Identity",
      "Packaging & Product Design",
      "Product Compliance & Registration",
      "Ecommerce Store Build",
      "Marketplace & Quick Commerce",
      "Performance Marketing",
      "Creative & Content Engine",
      "Retention, CRM & WhatsApp",
      "Unit Economics Governance",
      "Industrial B2B Marketing",
      "SEO & Lead Generation",
      "Dealer & Distributor Development",
      "Export Enquiry Generation",
    ],
    linksTo: [
      {
        slug: "operations",
        why: "A D2C brand exposes every quality and cost weakness directly to the consumer.",
      },
      {
        slug: "capital",
        why: "A branded business with owned customers is valued on a fundamentally different multiple.",
      },
    ],
  },

  // ═══════════════════ 03 · MULTIPLY ═══════════════════
  {
    slug: "franchise",
    index: "03",
    verb: "Multiply",
    name: "Franchise Development & Expansion",
    short: "Turn one profitable unit into a network that funds its own growth.",
    rung: "Replicate what works — with other people's capital.",
    headline: ["One profitable unit is a business.", "Fifty is an enterprise."],
    thesis: [
      "Franchising is the only expansion model where someone else funds your growth and runs it with an owner's attention. India already has a franchise sector worth roughly ₹800 billion across nearly 200,000 outlets — and it is still one of the least professionally executed expansion routes in the country.",
      "Most brands franchise too early. They sell territories before the unit economics are proven, before SOPs exist, before anyone can explain why a customer chooses them. The first ten franchisees underperform, word travels, and the brand spends years recovering from expansion it wasn't ready for.",
      "The work is not selling franchises. The work is making the unit worth replicating, designing an economic model where both sides genuinely win, and building the governance that keeps the fiftieth outlet as good as the first.",
    ],
    problems: [
      {
        title: "Expansion before proof",
        detail:
          "Selling territories on the strength of one good outlet in the founder's own city — with no evidence the model survives a different market, a different manager, or a different rent.",
      },
      {
        title: "Economics that only work for the franchisor",
        detail:
          "A royalty structure the franchisee cannot afford produces a network of resentful, underperforming partners. Payback maths is the deal, not the pitch deck.",
      },
      {
        title: "No operating system to hand over",
        detail:
          "Without SOPs, training, and standards, every franchisee reinvents the business badly — and the brand becomes a lottery for the customer.",
      },
      {
        title: "Model chosen by fashion, not fit",
        detail:
          "FOFO, FOCO, FICO, COCO and master franchise each demand different capital, control, and capability. Choosing the wrong one is a structural error no marketing can fix.",
      },
    ],
    approach: [
      {
        phase: "01",
        title: "Franchise readiness audit",
        detail:
          "Is the unit genuinely profitable without the founder standing in it? Is the brand a reason to buy? Are the processes teachable? We answer honestly, including when the answer is 'not yet'.",
      },
      {
        phase: "02",
        title: "Unit economics model",
        detail:
          "Investment schedule, working capital need, break-even month, payback period, and franchisee IRR — modelled for realistic markets, not the best one you have.",
      },
      {
        phase: "03",
        title: "Model & territory design",
        detail:
          "FOFO for capital-light speed, FOCO where operational control decides the brand, master or area development for regional scale. Territory sizing that prevents partners cannibalising each other.",
      },
      {
        phase: "04",
        title: "The operating system",
        detail:
          "Operations manual, training curriculum, launch playbook, supply chain terms, brand standards — everything a competent stranger needs to run your business the way you would.",
      },
      {
        phase: "05",
        title: "Legal & commercial structure",
        detail:
          "Franchise agreement, trademark protection, disclosure discipline, fee and royalty architecture, exit and termination terms. Built to survive the relationship going wrong.",
      },
      {
        phase: "06",
        title: "Franchisee acquisition",
        detail:
          "Positioning the opportunity, generating qualified investor enquiries, and — critically — filtering them. One wrong franchisee in a new city costs more than an empty territory.",
      },
      {
        phase: "07",
        title: "Network governance",
        detail:
          "Performance dashboards, audits, mystery shopping, and a support rhythm that makes franchisees more profitable every year. Retention beats recruitment.",
      },
    ],
    outcomes: [
      { metric: "Outlets", direction: "up" },
      { metric: "Capital deployed per outlet", direction: "down" },
      { metric: "Franchisee profitability", direction: "up" },
      { metric: "Network churn", direction: "down" },
    ],
    services: [
      "Franchise Readiness Audit",
      "Unit Economics Modelling",
      "Model Selection (FOFO / FOCO / FICO)",
      "Territory & Market Mapping",
      "Operations Manual & SOPs",
      "Training & Launch Playbooks",
      "Franchise Agreement Structuring",
      "Fee & Royalty Design",
      "Franchisee Lead Generation",
      "Partner Qualification",
      "Network Performance Governance",
      "Master & Area Development",
    ],
    linksTo: [
      {
        slug: "operations",
        why: "SOPs and KPI systems are the raw material a franchise network is built from.",
      },
      {
        slug: "brand-demand",
        why: "Nobody buys a franchise for a brand consumers have never chosen.",
      },
    ],
  },

  // ═══════════════════ 04 · UNLOCK ═══════════════════
  {
    slug: "capital",
    index: "04",
    verb: "Unlock",
    name: "Capital, M&A & Exit",
    short: "Access the value you've spent twenty years building.",
    rung: "Convert an operating business into realisable wealth.",
    headline: ["You've built value for twenty years.", "Can you actually access it?"],
    thesis: [
      "Most Indian promoters hold their entire net worth inside one illiquid, undiversified, promoter-dependent asset — and have no idea what it is worth or whether anyone could buy it.",
      "Capital comes in three forms and most businesses only ever try one. Debt funds working capital and equipment against assets and cash flow. Equity funds growth that debt cannot safely carry. And a sale — full or partial — converts decades of built value into liquidity, often while the promoter stays on to run it.",
      "The uncomfortable truth of this practice is that most SMEs are, today, unsellable: books that don't reconcile, revenue concentrated in two accounts, related-party transactions nobody wants to explain, no MIS, and a business that stops working when the promoter travels. Making a company financeable and sellable is the work. The transaction is just the last step.",
    ],
    problems: [
      {
        title: "Working capital funded expensively",
        detail:
          "Growth strangled by receivables while cheaper structured options — bill discounting, supply chain finance, equipment finance — go unused because nobody presented the business properly.",
      },
      {
        title: "No idea what the business is worth",
        detail:
          "Valuation expectations set by cousin's-friend anecdotes rather than EBITDA quality, growth trajectory, customer concentration, and systems maturity.",
      },
      {
        title: "Unsellable in its current state",
        detail:
          "Promoter dependency, unclean books, informal arrangements, and undocumented processes reduce buyer interest to bargain hunters — or to nobody at all.",
      },
      {
        title: "One buyer, no process",
        detail:
          "Most SME sales happen when a single interested party approaches. Without a competitive process, the seller has no leverage and no benchmark for what fair value looks like.",
      },
    ],
    approach: [
      {
        phase: "01",
        title: "Objective & readiness assessment",
        detail:
          "What does the promoter actually want — liquidity, growth capital, a partner, or an exit? Then an honest diagnosis of how financeable and sellable the business is today.",
      },
      {
        phase: "02",
        title: "Value creation before the transaction",
        detail:
          "Twelve to twenty-four months of deliberate work: clean financials, reduce concentration, systematise operations, document processes, resolve compliance gaps. This is where multiples are actually made.",
      },
      {
        phase: "03",
        title: "Valuation & structuring",
        detail:
          "Defensible valuation across methods, and a structure that fits the objective — full sale, majority, minority growth capital, slump sale, or strategic partnership.",
      },
      {
        phase: "04",
        title: "Documentation",
        detail:
          "Information memorandum, financial model, and data room built to withstand diligence. Preparation quality directly determines both price and probability of closing.",
      },
      {
        phase: "05",
        title: "Counterparty outreach",
        detail:
          "Strategic acquirers, financial investors, and lenders approached confidentially and in parallel — because competition, not persuasion, is what sets price.",
      },
      {
        phase: "06",
        title: "Diligence & negotiation",
        detail:
          "Managing financial, legal, and operational diligence; negotiating terms, earn-outs, warranties, and transition. Deals die in diligence far more often than in negotiation.",
      },
      {
        phase: "07",
        title: "Close & transition",
        detail:
          "Completion, integration or handover planning, and the promoter's own transition — which is as much a personal transaction as a financial one.",
      },
    ],
    outcomes: [
      { metric: "Valuation multiple", direction: "up" },
      { metric: "Cost of capital", direction: "down" },
      { metric: "Promoter liquidity", direction: "up" },
      { metric: "Concentration risk", direction: "down" },
    ],
    services: [
      "Working Capital & Debt Structuring",
      "Equipment & Project Finance",
      "Bill Discounting & Supply Chain Finance",
      "Growth & Private Equity Capital",
      "Business Valuation",
      "Sell-Side M&A",
      "Buy-Side M&A",
      "Sale Readiness Programme",
      "Information Memorandum & Data Room",
      "Financial Modelling",
      "Due Diligence Management",
      "Deal Negotiation & Closing",
      "Succession & Transition Planning",
    ],
    linksTo: [
      {
        slug: "operations",
        why: "Systems maturity and EBITDA quality are the two things buyers pay a premium for.",
      },
      {
        slug: "governance",
        why: "Compliance and documentation gaps are the most common reason deals collapse in diligence.",
      },
    ],
  },

  // ═══════════════════ 05 · GOVERN ═══════════════════
  {
    slug: "governance",
    index: "05",
    verb: "Govern",
    name: "Compliance, Risk & Business Consulting",
    short: "Growth without governance is just accumulating exposure.",
    rung: "Protect what has been built — and make it institutional.",
    headline: ["Growth without governance", "is just exposure."],
    thesis: [
      "Indian businesses carry an extraordinary compliance load — factory, labour, environmental, product, tax, and corporate — spread across departments that rarely speak to each other. Most owners genuinely do not know their exposure until an inspection, a customer audit, or a diligence process finds it for them.",
      "This practice serves manufacturers and service businesses alike, because the underlying problem is the same: a business that grew faster than its systems. Decisions live in one person's head, contracts are informal, records are reconstructed when someone asks, and delegation is impossible because nothing is defined.",
      "Governance is not paperwork. It is what converts a promoter's business into an institution — one that can be audited, financed, franchised, inherited, or sold without depending on any single individual's memory.",
    ],
    problems: [
      {
        title: "Exposure nobody has mapped",
        detail:
          "Licences lapsed, returns filed late, registers reconstructed before inspections, and no single view of what applies to this business at this size.",
      },
      {
        title: "Compliance staged, not lived",
        detail:
          "Systems built for audit week deliver zero operational benefit and fail the moment a customer arrives unannounced.",
      },
      {
        title: "The business cannot be delegated",
        detail:
          "No org structure, no defined authority, no MIS. Every decision routes through the owner, which caps growth precisely at the limit of one person's bandwidth.",
      },
      {
        title: "Informality that becomes expensive later",
        detail:
          "Undocumented arrangements with vendors, employees, and family shareholders are tolerable at ₹20 crore and catastrophic during a diligence at ₹200 crore.",
      },
    ],
    approach: [
      {
        phase: "01",
        title: "Compliance mapping",
        detail:
          "A complete register of what actually applies — factory, labour, environmental, product, tax, and corporate — with current status, owner, and renewal calendar for each.",
      },
      {
        phase: "02",
        title: "Gap closure",
        detail:
          "Prioritised by genuine risk rather than alphabetical order. Licences regularised, registers rebuilt, filings brought current, and the calendar handed to a named owner.",
      },
      {
        phase: "03",
        title: "Product & certification readiness",
        detail:
          "BIS, FSSAI, CDSCO, AYUSH, legal metrology, ISO and customer-specific standards — implemented as working systems that survive a surprise audit on any ordinary day.",
      },
      {
        phase: "04",
        title: "Organisation & delegation",
        detail:
          "Org structure, roles, authority matrix, SOPs, and KPIs so that decisions happen at the right level and the owner stops being the bottleneck.",
      },
      {
        phase: "05",
        title: "MIS & business governance",
        detail:
          "A monthly information pack leadership actually reads, a review calendar that runs regardless of who is travelling, and a documented action log.",
      },
      {
        phase: "06",
        title: "Risk & contract hygiene",
        detail:
          "Insurance adequacy, customer and vendor contract review, trademark and IP protection, and cleanup of related-party and family arrangements before they become someone else's leverage.",
      },
    ],
    outcomes: [
      { metric: "Audit readiness", direction: "up" },
      { metric: "Compliance exposure", direction: "down" },
      { metric: "Owner dependency", direction: "down" },
      { metric: "Decision speed", direction: "up" },
    ],
    services: [
      "Compliance Mapping & Registers",
      "Factory & Labour Compliance",
      "Environmental & Safety",
      "Product Certification (BIS / FSSAI / CDSCO / AYUSH)",
      "ISO, IATF & Customer Standards",
      "GST, ROC & Corporate Filings",
      "Org Structure & Authority Matrix",
      "SOP & Policy Frameworks",
      "MIS & Management Reporting",
      "Contract & Risk Review",
      "Trademark & IP Protection",
      "Service Business Operations Consulting",
    ],
    linksTo: [
      {
        slug: "capital",
        why: "A clean compliance record is a precondition for any serious investor or acquirer.",
      },
      {
        slug: "franchise",
        why: "You cannot license a brand you have not legally protected.",
      },
    ],
  },
];

export const practiceBySlug = (slug: string) =>
  practices.find((p) => p.slug === slug);

// ─────────────────────────────────────────────────────────────
// The udhari → D2C argument, in numbers.
// Used by the Margin Ladder on the Brand & Demand practice page.
// ─────────────────────────────────────────────────────────────

export const udhariFacts = [
  {
    stat: "60–70%",
    label: "Margin the brand captures",
    note: "on a product manufactured at 8–12% — the same product, from your line.",
  },
  {
    stat: "90 days",
    label: "Typical receivable cycle",
    note: "offline and distributor channels routinely run 90–150 days on payment.",
  },
  {
    stat: "7 days",
    label: "D2C settlement",
    note: "prepaid orders settle almost immediately; marketplaces in one to two weeks.",
  },
  {
    stat: "0",
    label: "Customers who know your name",
    note: "after twenty years of manufacturing under someone else's label.",
  },
];

// The ladder, as shown on the homepage.
export const ladder = practices.map((p) => ({
  slug: p.slug,
  index: p.index,
  verb: p.verb,
  name: p.name,
  rung: p.rung,
  short: p.short,
}));
