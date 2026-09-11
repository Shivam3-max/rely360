// ─────────────────────────────────────────────────────────────
// RELY360 — The five services
// Plain words. Every headline should make sense in one read.
// ─────────────────────────────────────────────────────────────

export type Practice = {
  slug: string;
  index: string;
  verb: string; // short, plain label used on the ladder
  name: string;
  short: string; // one line, plain
  rung: string; // what this step does, in plain words
  headline: [string, string];
  thesis: string[];
  problems: { title: string; detail: string }[];
  approach: { phase: string; title: string; detail: string }[];
  outcomes: { metric: string; direction: "up" | "down" }[];
  services: string[];
  linksTo: { slug: string; why: string }[];
};

export const practices: Practice[] = [
  // ═══════════════════ 01 ═══════════════════
  {
    slug: "operations",
    index: "01",
    verb: "Cut Costs",
    name: "Factory & Operations Improvement",
    short: "Make more profit from the factory you already own.",
    rung: "Stop the money your factory loses every day.",
    headline: ["Your factory is losing money", "every single day."],
    thesis: [
      "Most factories don't have an order problem. They have a leak problem. Machines run slower than they should. Changeovers take 90 minutes when they could take 30. Purchase prices haven't been questioned in three years. Rework is treated as normal.",
      "Each leak looks small on its own. Together they usually eat 5 to 10 percent of your profit every year. And because these problems sit between departments, nobody in the company actually owns them.",
      "This is the first step for a simple reason. A factory that isn't making good profit cannot be branded, franchised, or sold for a good price. Everything else depends on fixing this first.",
    ],
    problems: [
      {
        title: "You already own machines you're not using fully",
        detail:
          "In most Indian factories, machines actually run at 50-55% of their real capacity. Getting to 70% is like buying a new machine — except you already paid for this one.",
      },
      {
        title: "You buy on last year's price, not the right price",
        detail:
          "If you don't know what a part should cost to make, the supplier's first price becomes your price. Three years of this quietly costs you lakhs.",
      },
      {
        title: "Rework is eating profit nobody counts",
        detail:
          "Scrap, rework, extra checking, customer complaints — together this usually costs 3 to 8 percent of your total sales. Most of it never shows up in your accounts.",
      },
      {
        title: "Everything depends on 2 or 3 people",
        detail:
          "No written processes, no clear targets, no system — only what is in a few people's heads. The business cannot grow bigger than the owner's attention.",
      },
    ],
    approach: [
      {
        phase: "01",
        title: "We study your whole plant",
        detail:
          "A full check of your factory and business across all seven areas — hundreds of points, scored with evidence, and every problem converted into a rupee figure.",
      },
      {
        phase: "02",
        title: "We put a number on every leak",
        detail:
          "Machine gap × profit per unit. Waste % × material cost. Price gap × yearly quantity. Opinions become simple arithmetic everyone can check.",
      },
      {
        phase: "03",
        title: "We fix it on the shop floor",
        detail:
          "Faster changeovers. Better buying prices. Quality boards at every line. Written processes, clear targets, and daily reviews that continue after we leave.",
      },
      {
        phase: "04",
        title: "We prove the savings",
        detail:
          "Every improvement gets a starting figure and a monthly saving, checked by your own accounts team. We report money saved, not meetings held.",
      },
    ],
    outcomes: [
      { metric: "Machine output", direction: "up" },
      { metric: "Cost per unit", direction: "down" },
      { metric: "Rejections & rework", direction: "down" },
      { metric: "Profit", direction: "up" },
    ],
    services: [
      "Full Factory Audit",
      "Machine Output (OEE) Improvement",
      "Lean, TPM, 5S, Kaizen",
      "Faster Changeovers (SMED)",
      "Costing & Price Benchmarking",
      "Supplier Price Negotiation",
      "Quality Systems",
      "Rework & Scrap Reduction",
      "Written Processes (SOPs) & Targets",
      "Manpower Productivity",
      "Power & Fuel Cost Reduction",
      "Stock & Working Capital Control",
    ],
    linksTo: [
      {
        slug: "capital",
        why: "Buyers and investors pay much more for a factory that runs on systems.",
      },
      {
        slug: "franchise",
        why: "You cannot copy a business model until you have proved it makes money.",
      },
    ],
  },

  // ═══════════════════ 02 ═══════════════════
  {
    slug: "brand-demand",
    index: "02",
    verb: "Sell Direct",
    name: "Marketing & Your Own D2C Brand",
    short: "Start your own brand and sell straight to customers — for cash.",
    rung: "Stop selling on udhari. Start selling for cash.",
    headline: ["You make the product.", "Someone else earns the profit."],
    thesis: [
      "Here is the maths most Indian manufacturers live with every day. You make the product and earn 8 to 12 percent. The company whose name goes on the packet sells the same product and earns 60 to 70 percent. You carry the factory, the workers, the licences and the quality risk — and take the smallest share.",
      "Then you wait for your money. Thirty days becomes forty-five. Forty-five becomes ninety. This is udhari, and while you wait, your cash is sitting inside your buyer's business, helping them grow. You even borrow working capital and pay interest to keep this going.",
      "The way out is not a new factory. It is the same factory, the same product, and your own brand selling directly to the customer. Three things change at once: you get paid immediately instead of after 90 days, you keep the brand profit instead of giving it away, and you finally own the customer — the only thing in this chain that becomes more valuable over time.",
    ],
    problems: [
      {
        title: "Your money is stuck in udhari",
        detail:
          "At 90 days credit, roughly one quarter of your yearly sales is always sitting with your buyers. You borrow money to run the factory while funding their business for free.",
      },
      {
        title: "You are building someone else's name",
        detail:
          "Every box you ship makes another company's brand stronger. If that buyer changes supplier tomorrow, 20 years of good manufacturing leaves you with zero customers who know your name.",
      },
      {
        title: "You cannot set your own price",
        detail:
          "Yearly price-reduction letters, reverse auctions, 'market rate' — because a factory without a brand has no pricing power. Brands decide prices. Factories accept them.",
      },
      {
        title: "Buyers cannot find you online",
        detail:
          "Even for those staying B2B — purchase managers now search online before they call anyone. If you are not visible there, you are not losing orders. You never even got the enquiry.",
      },
    ],
    approach: [
      {
        phase: "01",
        title: "First we check if your product will work",
        detail:
          "Not every product sells well online. We check your price per order, repeat buying, shelf life, courier cost, return risk and licence requirements — before you spend a single rupee.",
      },
      {
        phase: "02",
        title: "We build the brand",
        detail:
          "Name, logo, packaging, positioning and story. The hardest part is not design. It is changing from thinking like a supplier to thinking like a brand customers choose.",
      },
      {
        phase: "03",
        title: "We complete the licences",
        detail:
          "FSSAI, CDSCO, AYUSH, BIS, weights and measures, trademark. In food, pharma and cosmetics this is exactly where unprepared launches get stuck. We handle it properly from day one.",
      },
      {
        phase: "04",
        title: "We choose where you sell",
        detail:
          "Your own website, Amazon and Flipkart, and quick commerce apps each work differently on profit and payment. We start in the right order instead of launching everywhere and losing money everywhere.",
      },
      {
        phase: "05",
        title: "We run the advertising",
        detail:
          "Meta and Google ads, regular new creatives, and strict control on what it costs to get one order. In India today, the number of ads you test matters more than clever targeting.",
      },
      {
        phase: "06",
        title: "We make customers buy again",
        detail:
          "The first order usually just covers its own cost. Real profit comes from the second and third. WhatsApp follow-ups and repeat offers are built in from the start, not added later.",
      },
      {
        phase: "07",
        title: "We keep the numbers honest",
        detail:
          "Profit per order, cost to get a customer versus what they spend over time, and returns control — reviewed every month, stopping whatever doesn't pay. This is where most D2C brands fail and where a factory owner's discipline is a real advantage.",
      },
    ],
    outcomes: [
      { metric: "Profit per unit", direction: "up" },
      { metric: "Days to get paid", direction: "down" },
      { metric: "Your own customers", direction: "up" },
      { metric: "Dependence on few buyers", direction: "down" },
    ],
    services: [
      "D2C Feasibility Check",
      "Brand Name & Identity",
      "Packaging Design",
      "Product Licences & Registration",
      "Website & Online Store",
      "Amazon, Flipkart & Quick Commerce",
      "Google & Meta Advertising",
      "Photos, Videos & Content",
      "WhatsApp & Repeat Sales",
      "Profit Tracking Per Order",
      "B2B Industrial Marketing",
      "Google Ranking (SEO) & Enquiries",
      "Dealer & Distributor Network",
      "Export Enquiry Generation",
    ],
    linksTo: [
      {
        slug: "operations",
        why: "When you sell directly, every quality and cost problem reaches the customer.",
      },
      {
        slug: "capital",
        why: "A business with its own brand and customers sells for a much higher price.",
      },
    ],
  },

  // ═══════════════════ 03 ═══════════════════
  {
    slug: "franchise",
    index: "03",
    verb: "Franchise",
    name: "Franchise Expansion",
    short: "Open more outlets using other people's money.",
    rung: "Copy what works — funded by your franchise partners.",
    headline: ["One outlet that earns well", "is a business. Fifty is a company."],
    thesis: [
      "Franchising is the only way to grow where someone else puts in the money and runs the outlet like an owner. India already has around ₹800 billion of franchise business and nearly 2 lakh outlets — and it is still one of the most badly executed ways of expanding in the country.",
      "Most brands start franchising too early. They sell territories before proving the outlet actually makes money, before writing down how it runs, before customers have any reason to prefer them. The first ten franchisees struggle, word spreads in the market, and the brand spends years recovering.",
      "The real work is not selling franchises. It is making one outlet genuinely worth copying, building a money model where both sides actually earn, and putting controls in place so the 50th outlet is as good as the first.",
    ],
    problems: [
      {
        title: "Expanding before the model is proven",
        detail:
          "Selling franchises based on one good outlet in your own city — with no proof it works in a different city, with a different manager, at a different rent.",
      },
      {
        title: "Only the brand owner makes money",
        detail:
          "If the royalty is too high for the franchisee to survive, you end up with unhappy partners and closed outlets. The payback calculation is the real deal — not the presentation.",
      },
      {
        title: "Nothing written down to hand over",
        detail:
          "Without written processes and training, every franchisee runs your business their own way, badly — and the customer never knows what to expect.",
      },
      {
        title: "Picking the wrong franchise model",
        detail:
          "FOFO, FOCO, FICO and master franchise each need different money and different control. Choosing wrongly is a mistake no amount of marketing can fix later.",
      },
    ],
    approach: [
      {
        phase: "01",
        title: "We check if you are ready",
        detail:
          "Does the outlet earn money when you are not standing there? Is your brand a reason customers choose you? Can the work be taught to a stranger? We tell you honestly — including when the answer is 'not yet'.",
      },
      {
        phase: "02",
        title: "We build the money model",
        detail:
          "Total investment needed, running capital, which month it breaks even, how many years to recover money, and what the franchisee actually earns — calculated for normal markets, not your best one.",
      },
      {
        phase: "03",
        title: "We pick the right model and territory",
        detail:
          "FOFO when you want fast growth with less money. FOCO when quality control decides your brand. Master or area franchise for whole regions. Plus territory sizes so partners don't eat into each other.",
      },
      {
        phase: "04",
        title: "We write down how it runs",
        detail:
          "Operations manual, training course, opening checklist, supply terms, brand rules — everything a capable stranger needs to run your business the way you would.",
      },
      {
        phase: "05",
        title: "We prepare the legal papers",
        detail:
          "Franchise agreement, trademark protection, fees and royalty structure, and exit terms. Written for the situation where the relationship goes wrong, not just when it goes well.",
      },
      {
        phase: "06",
        title: "We find the right franchisees",
        detail:
          "Presenting the opportunity properly, generating genuine investor enquiries, and — most importantly — rejecting the wrong ones. One bad franchisee in a new city costs more than an empty territory.",
      },
      {
        phase: "07",
        title: "We keep the network performing",
        detail:
          "Performance reports, audits, mystery shopping, and regular support that makes franchisees more profitable each year. Keeping good partners matters more than signing new ones.",
      },
    ],
    outcomes: [
      { metric: "Number of outlets", direction: "up" },
      { metric: "Your own money per outlet", direction: "down" },
      { metric: "Franchisee earnings", direction: "up" },
      { metric: "Outlet closures", direction: "down" },
    ],
    services: [
      "Franchise Readiness Check",
      "Investment & Payback Model",
      "Model Selection (FOFO / FOCO / FICO)",
      "Territory & City Mapping",
      "Operations Manual & Processes",
      "Training & Opening Support",
      "Franchise Agreement",
      "Fee & Royalty Structure",
      "Finding Franchise Partners",
      "Screening & Selection",
      "Network Performance Monitoring",
      "Master & Area Franchise",
    ],
    linksTo: [
      {
        slug: "operations",
        why: "Written processes and clear targets are what a franchise network is built on.",
      },
      {
        slug: "brand-demand",
        why: "Nobody pays money for a franchise of a brand customers have never heard of.",
      },
    ],
  },

  // ═══════════════════ 04 ═══════════════════
  {
    slug: "capital",
    index: "04",
    verb: "Raise or Sell",
    name: "Funding, Mergers & Acquisitions",
    short: "Raise money, sell your business, or buy another one.",
    rung: "Turn the business you built into money you can use.",
    headline: ["You built this for twenty years.", "Can you take money out of it?"],
    thesis: [
      "Most Indian business owners have their entire wealth locked inside one business — and have no real idea what it is worth or whether anyone would actually buy it.",
      "Money comes in three forms and most owners only ever try one. Loans fund raw material, machines and daily running. Equity (investor money) funds growth that loans cannot safely carry. And selling — fully or partly — turns 20 years of hard work into cash in hand, often while you continue running the company.",
      "The uncomfortable truth is that most Indian SMEs today cannot be sold: accounts that don't match, 70 percent of sales from two customers, family transactions nobody can explain, no proper reporting, and a business that stops working when the owner travels. Making a company fit to be funded or sold is the actual work. The deal itself is only the last step.",
    ],
    problems: [
      {
        title: "You are paying too much for working capital",
        detail:
          "Growth is blocked by money stuck in udhari, while cheaper options like bill discounting, machinery loans and supply chain finance go unused — because nobody presented the business properly to lenders.",
      },
      {
        title: "You don't know what your business is worth",
        detail:
          "Price expectations based on what someone's relative got, instead of real factors: profit quality, growth, customer spread and how well the business runs on systems.",
      },
      {
        title: "The business cannot be sold as it is today",
        detail:
          "Everything depending on the owner, unclear accounts, verbal arrangements and nothing written down. Serious buyers walk away and only bargain hunters remain.",
      },
      {
        title: "One buyer and no process",
        detail:
          "Most SME sales happen when one interested party approaches. With only one buyer at the table, you have no bargaining power and no idea if the price is fair.",
      },
    ],
    approach: [
      {
        phase: "01",
        title: "We understand what you actually want",
        detail:
          "Cash in hand, money for growth, a partner, or a full exit? Then an honest assessment of how fundable and sellable your business is right now.",
      },
      {
        phase: "02",
        title: "We increase the value first",
        detail:
          "One to two years of planned work: clean up accounts, reduce dependence on a few customers, put systems in place, write down processes, clear licence issues. This is where a higher price is actually created.",
      },
      {
        phase: "03",
        title: "We calculate a proper valuation",
        detail:
          "A value you can defend, and a structure that matches your goal — full sale, majority stake, minority investment for growth, or a business partnership.",
      },
      {
        phase: "04",
        title: "We prepare the documents",
        detail:
          "Business profile document, financial projections and a data room that can survive detailed checking. How well you prepare decides both the price and whether the deal closes at all.",
      },
      {
        phase: "05",
        title: "We approach buyers and investors",
        detail:
          "Competitor companies, investment funds and lenders — approached confidentially and several at the same time. Competition between buyers sets the price, not convincing one buyer.",
      },
      {
        phase: "06",
        title: "We handle checking and negotiation",
        detail:
          "Managing the buyer's financial, legal and operational verification, then negotiating price, payment terms and conditions. More deals die during checking than during price talks.",
      },
      {
        phase: "07",
        title: "We close and hand over",
        detail:
          "Completing the paperwork, planning the handover, and managing your own transition out — which is as much a personal decision as a financial one.",
      },
    ],
    outcomes: [
      { metric: "Business value", direction: "up" },
      { metric: "Interest cost", direction: "down" },
      { metric: "Cash in your hand", direction: "up" },
      { metric: "Dependence on few customers", direction: "down" },
    ],
    services: [
      "Working Capital & Loan Structuring",
      "Machinery & Project Finance",
      "Bill Discounting & Supply Chain Finance",
      "Investor & Private Equity Funding",
      "Business Valuation",
      "Selling Your Business",
      "Buying Another Business",
      "Getting Sale-Ready",
      "Business Profile & Data Room",
      "Financial Projections",
      "Managing Buyer Due Diligence",
      "Deal Negotiation & Closing",
      "Succession & Handover Planning",
    ],
    linksTo: [
      {
        slug: "operations",
        why: "Good profit and proper systems are the two things buyers pay extra for.",
      },
      {
        slug: "governance",
        why: "Licence and record problems are the most common reason deals fall apart.",
      },
    ],
  },

  // ═══════════════════ 05 ═══════════════════
  {
    slug: "governance",
    index: "05",
    verb: "Stay Compliant",
    name: "Compliance & Business Systems",
    short: "Fix licences, records and systems so the business runs without you.",
    rung: "Protect what you built and make it run on systems.",
    headline: ["Growing fast without systems", "is how problems start."],
    thesis: [
      "Indian businesses have a huge compliance load — factory, labour, pollution, product, tax and company law — spread across departments that rarely talk to each other. Most owners genuinely don't know their risk until an inspector, a customer audit or a buyer's verification finds it for them.",
      "This service is for manufacturers and service businesses alike, because the underlying problem is the same: the business grew faster than its systems. Decisions sit in one person's head, agreements are verbal, records get created only when someone asks, and work cannot be handed over because nothing is written down.",
      "Compliance is not paperwork. It is what turns one person's business into a proper company — one that can be audited, funded, franchised, passed to the next generation or sold, without depending on what one man remembers.",
    ],
    problems: [
      {
        title: "Nobody has listed your actual risk",
        detail:
          "Licences expired, returns filed late, registers prepared the night before an inspection, and no single list of what actually applies to a business of your size.",
      },
      {
        title: "Systems built only for audit day",
        detail:
          "Paperwork prepared for inspection week gives you no real benefit, and falls apart the moment a customer arrives without warning.",
      },
      {
        title: "Nothing can be handed over",
        detail:
          "No proper structure, no clear authority, no monthly reporting. Every decision comes to the owner, which limits growth to exactly what one person can handle.",
      },
      {
        title: "Verbal arrangements that get costly later",
        detail:
          "Undocumented understandings with suppliers, staff and family members are manageable at ₹20 crore turnover and become a serious problem when a buyer checks your business at ₹200 crore.",
      },
    ],
    approach: [
      {
        phase: "01",
        title: "We list everything that applies to you",
        detail:
          "A complete list of factory, labour, pollution, product, tax and company requirements — with current status, a responsible person, and renewal dates for each.",
      },
      {
        phase: "02",
        title: "We close the gaps",
        detail:
          "Sorted by real risk, not alphabetically. Licences regularised, registers rebuilt, pending filings completed, and the renewal calendar handed to a named person.",
      },
      {
        phase: "03",
        title: "We get your product certifications",
        detail:
          "BIS, FSSAI, CDSCO, AYUSH, weights and measures, ISO and customer-specific standards — set up as systems that work on a normal day, not just during audits.",
      },
      {
        phase: "04",
        title: "We build structure and delegation",
        detail:
          "Organisation chart, roles, who can approve what, written processes and targets — so decisions happen at the right level and the owner stops being the bottleneck.",
      },
      {
        phase: "05",
        title: "We set up monthly reporting",
        detail:
          "A monthly report the owner actually reads, a review meeting that happens whether or not you are travelling, and a written record of decisions taken.",
      },
      {
        phase: "06",
        title: "We check contracts and insurance",
        detail:
          "Is your insurance enough? Customer and supplier agreements reviewed, trademark protected, and family or related-party arrangements cleaned up before they become someone else's advantage.",
      },
    ],
    outcomes: [
      { metric: "Audit readiness", direction: "up" },
      { metric: "Legal risk", direction: "down" },
      { metric: "Dependence on owner", direction: "down" },
      { metric: "Speed of decisions", direction: "up" },
    ],
    services: [
      "Complete Compliance Checklist",
      "Factory & Labour Licences",
      "Pollution & Safety Compliance",
      "Product Certification (BIS / FSSAI / CDSCO / AYUSH)",
      "ISO, IATF & Customer Standards",
      "GST, ROC & Company Filings",
      "Organisation Structure & Authority",
      "Written Processes & Policies",
      "Monthly Reporting (MIS)",
      "Contract & Insurance Review",
      "Trademark Protection",
      "Systems for Service Businesses",
    ],
    linksTo: [
      {
        slug: "capital",
        why: "Clean licences and records are the first thing any investor or buyer checks.",
      },
      {
        slug: "franchise",
        why: "You cannot licence a brand name you have not legally protected.",
      },
    ],
  },
];

export const practiceBySlug = (slug: string) =>
  practices.find((p) => p.slug === slug);

// ─────────────────────────────────────────────────────────────
// The udhari problem, in four numbers.
// ─────────────────────────────────────────────────────────────

export const udhariFacts = [
  {
    stat: "60-70%",
    label: "What the brand earns",
    note: "on a product you made at 8-12% profit. Same product. Your factory.",
  },
  {
    stat: "90 days",
    label: "How long you wait for payment",
    note: "dealers and distributors commonly take 90 to 150 days to pay you.",
  },
  {
    stat: "Same day",
    label: "When a D2C brand gets paid",
    note: "online customers pay upfront. Marketplaces settle in one to two weeks.",
  },
  {
    stat: "Zero",
    label: "Customers who know your name",
    note: "after twenty years of making products under someone else's brand.",
  },
];

export const ladder = practices.map((p) => ({
  slug: p.slug,
  index: p.index,
  verb: p.verb,
  name: p.name,
  rung: p.rung,
  short: p.short,
}));
