import { Icons } from "@/components/icons";
import { HomeIcon } from "lucide-react";
import { Python } from "@/components/ui/svgs/python";
import { Postgresql } from "@/components/ui/svgs/postgresql";
import { RLang } from "@/components/ui/svgs/r-lang";
import { Tableau } from "@/components/ui/svgs/tableau";
import { PowerBI } from "@/components/ui/svgs/powerbi";
import { Databricks } from "@/components/ui/svgs/databricks";
import { GitHubIcon } from "@/components/ui/svgs/github-icon";
import { AWS } from "@/components/ui/svgs/aws";
import { Claude } from "@/components/ui/svgs/claude";

export const DATA = {
  name: "Daniel Santiago Guzman",
  initials: "DSG",
  url: "https://daniel-portfolio-lake.vercel.app/",
  location: "Seattle, WA",
  locationLink: "https://www.google.com/maps/place/seattle",
  description:
    "MS Business Analytics candidate at UW Foster actively seeking Data Analyst and Business Intelligence roles. Bridging analytics and strategy to drive measurable business impact.",
  summary:
    "I'm a MS Business Analytics candidate at the **University of Washington Foster School of Business** (GPA: 3.85, Top 10%) with 3+ years of experience transforming data into business strategy. I've built ML models that identified **847 vulnerabilities across 50K+ endpoints**, generated **$672K in incremental revenue** through territory optimization, and automated reporting pipelines that save **1,200+ work hours annually**. My work spans predictive modeling, causal inference, and business intelligence — always focused on the question that matters most: *what should we do next?*",
  avatarUrl: "https://avatars.githubusercontent.com/u/156631236?v=4",
  skills: [
    { name: "Python", icon: Python },
    { name: "SQL", icon: Postgresql },
    { name: "R", icon: RLang },
    { name: "Tableau", icon: Tableau },
    { name: "Power BI", icon: PowerBI },
    { name: "Databricks", icon: Databricks },
    { name: "Git/GitHub", icon: GitHubIcon },
    { name: "AWS", icon: AWS },
    { name: "Claude Code", icon: Claude },
    { name: "XGBoost", icon: null },
    { name: "Random Forest", icon: null },
    { name: "K-means", icon: null },
    { name: "ARIMA", icon: null },
    { name: "Prophet", icon: null },
    { name: "LSTM", icon: null },
    { name: "A/B Testing", icon: null },
    { name: "DiD", icon: null },
    { name: "Synthetic Control", icon: null },
    { name: "IPW", icon: null },
    { name: "Double ML", icon: null },
    { name: "Fine-Tuning", icon: null },
    { name: "RAG", icon: null },
    { name: "Prompt Engineering", icon: null },
    { name: "OpenAI API", icon: null },
    { name: "ETL Pipelines", icon: null },
    { name: "Plotly", icon: null },
    { name: "Seaborn", icon: null },
  ],
  navbar: [
    { href: "/", icon: HomeIcon, label: "Home" },
  ],
  contact: {
    email: "danielsantiagoguzman@gmail.com",
    tel: "",
    social: {
      LinkedIn: {
        name: "LinkedIn",
        url: "https://www.linkedin.com/in/danielguzman01/",
        icon: Icons.linkedin,
        navbar: true,
      },
      GitHub: {
        name: "GitHub",
        url: "https://github.com/DanielSantiagoGuzman",
        icon: Icons.github,
        navbar: true,
      },
      email: {
        name: "Send Email",
        url: "mailto:danielsantiagoguzman@gmail.com",
        icon: Icons.email,
        navbar: true,
      },
    },
  },

  work: [
    {
      company: "Re-Systems Group Americas",
      href: "#",
      badges: [],
      location: "Remote",
      title: "Business Data Analyst",
      logoUrl: "/re-systems-logo.png",
      start: "May 2024",
      end: "Feb 2026",
      bullets: [
        "Reduced executive reporting cycles from 5 days to 4 hours by building 28-KPI dashboards (Tableau, Power BI) across $3.45M in projects.",
        "Built an ML vendor risk model (Random Forest) on 75K+ transactions to proactively flag supply chain risks.",
        "Automated ETL pipelines processing 2M+ daily records, cutting manual data prep by 65% (Python, PostgreSQL).",
        "Improved on-time delivery to 94% across 150+ projects.",
      ],
    },
    {
      company: "PC Connection, Inc.",
      badges: [],
      href: "https://www.connection.com/",
      location: "Remote",
      title: "Business Solutions Analyst",
      logoUrl: "/pc-connection-logo.jpeg",
      start: "Apr 2023",
      end: "May 2024",
      bullets: [
        "Built an anomaly detection system (XGBoost) identifying 847 vulnerabilities across 50K+ endpoints, reducing incident response time from 72 to 8 hours.",
        "Generated $672K in incremental revenue via K-means territory optimization on 125K+ customer accounts.",
        "Saved 1,200+ annual work hours by automating 47 reports processing 3M+ monthly transactions.",
        "Recovered $428K in enterprise software waste through license optimization.",
      ],
    },
    {
      company: "Total Quality Logistics",
      href: "https://www.tql.com/",
      badges: [],
      location: "Cincinnati, OH",
      title: "Logistics Operations Analyst",
      logoUrl: "/tql-logo.png",
      start: "Jul 2022",
      end: "Mar 2023",
      bullets: [
        "Generated $363K in annual savings from 100K+ shipping route analysis using K-means clustering, PCA, and Power BI.",
        "Improved on-time delivery from 71% to 94% across 6 distribution centers.",
        "Supported $520K in contract savings via automated carrier scorecards for 200+ vendors (VBA, SQL).",
      ],
    },
  ],
  education: [
    {
      school: "University of Washington, Foster School of Business",
      href: "https://foster.uw.edu/",
      degree: "MS Business Analytics | GPA: 3.85/4.0 (Top 10%) | Expected June 2026",
      logoUrl: "https://identity.uw.edu/images/uw-logo.png",
      start: "2025",
      end: "2026",
    },
    {
      school: "University of Minnesota",
      href: "https://twin-cities.umn.edu/",
      degree: "BS Economics | Minor: Management & Statistics | May 2022",
      logoUrl: "https://1000logos.net/wp-content/uploads/2022/08/University-of-Minnesota-Logo.png",
      start: "2018",
      end: "2022",
    },
  ],
  projects: [
    {
      title: "Causal Ad Effectiveness — Rocket Fuel Campaign",
      href: "https://github.com/DanielSantiagoGuzman/rocketfuel-ad-effectiveness-analysis",
      dates: "2026",
      active: true,
      description:
        "**Business Problem:** Did a display ad campaign actually cause purchases, or just reach people who were buying anyway? Used a randomized holdout of 588K users to isolate the ad's causal effect via t-tests and logistic regression. **Impact:** Found a statistically significant 43% relative lift in conversion (p < 0.001), worth $173,719 in incremental revenue against $131,375 in spend — a 32% ROI — and identified an 81–120 impression frequency sweet spot where a cap would sharpen future returns.",
      technologies: [
        "Python",
        "SciPy",
        "statsmodels",
        "pandas",
      ],
      links: [
        {
          type: "GitHub",
          href: "https://github.com/DanielSantiagoGuzman/rocketfuel-ad-effectiveness-analysis",
          icon: <Icons.github className="size-3" />,
        },
      ],
      image: "",
      video: "",
    },
    {
      title: "West Coast Housing Price Analysis & Predictor",
      href: "https://github.com/DanielSantiagoGuzman/zillow-housing-analysis",
      dates: "2026",
      active: true,
      description:
        "**Business Problem:** Which West Coast markets are undervalued or overheated, and what structurally drives long-term appreciation? Modeled 10 years of Zillow ZHVI data across 1,406 cities (170K+ city-month observations), engineering lag and volatility features. **Impact:** A Random Forest model hit 0.12% MAPE on an 18-month holdout, and the analysis surfaced Washington secondary markets (Centralia, Olympia, Longview) as the decade's biggest gainers at 117–124% appreciation from Seattle-area spillover demand.",
      technologies: [
        "Python",
        "pandas",
        "Scikit-learn",
        "Seaborn",
        "Parquet",
      ],
      links: [
        {
          type: "GitHub",
          href: "https://github.com/DanielSantiagoGuzman/zillow-housing-analysis",
          icon: <Icons.github className="size-3" />,
        },
      ],
      image: "",
      video: "",
    },
    {
      title: "Direct Mail Response Modeling",
      href: "https://github.com/DanielSantiagoGuzman/direct-mail-response-analysis",
      dates: "2026",
      active: true,
      description:
        "**Business Problem:** A health-screening company mails ~100K prospects per campaign at a 0.29% response rate — can a model rank customers well enough to safely shrink the mail file? Built a logistic regression model on 27 raw features with class-weighting to handle a 1:344 imbalance. **Impact:** Achieved 3x lift in the top decile; mailing just the top 30% of scored customers captures ~60% of all responders at roughly a third of the cost.",
      technologies: [
        "Python",
        "pandas",
        "scikit-learn",
        "Matplotlib",
      ],
      links: [
        {
          type: "GitHub",
          href: "https://github.com/DanielSantiagoGuzman/direct-mail-response-analysis",
          icon: <Icons.github className="size-3" />,
        },
      ],
      image: "",
      video: "",
    },
    {
      title: "Airport Baggage Delivery Time Analysis",
      href: "https://github.com/DanielSantiagoGuzman/airport-baggage-analysis",
      dates: "2026",
      active: true,
      description:
        "**Business Problem:** Airlines treat baggage delivery time as an operational KPI, but network averages hide where the real bottlenecks are. Analyzed ~99K baggage records across 108 airports, building a cleaning pipeline that removed 18%+ invalid records before estimating delivery-time distributions. **Impact:** Found an 82.2% probability of on-time delivery (<21 min) network-wide, but a 4–5x spread between the best (~5–6 min median) and worst (~27 min median) performing airports, with bag volume explaining only a modest share (r = 0.48) of the gap.",
      technologies: [
        "Python",
        "pandas",
        "SciPy",
        "DuckDB",
        "Matplotlib",
      ],
      links: [
        {
          type: "GitHub",
          href: "https://github.com/DanielSantiagoGuzman/airport-baggage-analysis",
          icon: <Icons.github className="size-3" />,
        },
      ],
      image: "",
      video: "",
    },
    {
      title: "Uber vs. Lyft — Boston Ride-Hailing Analysis",
      href: "https://github.com/DanielSantiagoGuzman/uber-lyft-boston-analysis",
      dates: "2026",
      active: true,
      description:
        "**Business Problem:** Ride-hailing pricing looks like a black box of surge, tier, and weather — does it actually behave the way conventional wisdom assumes? Analyzed 693K+ Boston rides across both platforms using DuckDB for SQL-based structuring and a Tableau dashboard for Uber's Q4 KPIs. **Impact:** Found weather has almost no effect on price (a $0.22 spread across nine conditions), surge triggers on just 6.9% of Lyft rides with no late-night spike, and driver ratings are statistically identical across platforms (4.23 mean, both).",
      technologies: [
        "Python",
        "DuckDB",
        "Tableau",
        "pandas",
      ],
      links: [
        {
          type: "GitHub",
          href: "https://github.com/DanielSantiagoGuzman/uber-lyft-boston-analysis",
          icon: <Icons.github className="size-3" />,
        },
      ],
      image: "",
      video: "",
    },
    {
      title: "A/B Testing — Digital Marketing Campaign",
      href: "",
      dates: "2025",
      active: true,
      badge: "Academic Project",
      description:
        "**Business Problem:** Do display ads actually drive conversions across 576K users? Designed a randomized controlled trial with ITT/ATT analysis and segmentation by user type and geography. **Impact:** Identified a 2.2% conversion lift in inactive users (89% of the base) and a 3.67% lift in non-American users — recommending targeted spend reallocation to improve ROI.",
      technologies: [
        "Python",
        "SciPy",
        "statsmodels",
        "pandas",
      ],
      links: [],
      image: "",
      video: "",
    },
    {
      title: "Geo-Experiment — Local Search Advertising ROI",
      href: "",
      dates: "2025",
      active: true,
      badge: "Academic Project",
      description:
        "**Business Problem:** Was Google Maps advertising actually driving incremental store visits across 200 US markets? Applied Difference-in-Differences and Synthetic Control methods across 200 DMAs, controlling for market characteristics. **Impact:** Proved naive last-click attribution dramatically overstated ROI — enabling accurate multi-million dollar budget reallocation.",
      technologies: [
        "Python",
        "DiD",
        "Synthetic Control",
        "statsmodels",
      ],
      links: [],
      image: "",
      video: "",
    },
    {
      title: "Predictive Modeling — Mobile Ad Click-Through Rate",
      href: "",
      dates: "2025",
      active: true,
      badge: "No Public Repo",
      description:
        "**Business Problem:** Which ad impressions are actually worth buying? Built CART and XGBoost models on 80K+ impression-level observations to forecast click-through rate. **Impact:** Recommended targeting the top 5K impressions for a 5.5x ROI versus the untargeted baseline.",
      technologies: [
        "Python",
        "XGBoost",
        "CART",
        "pandas",
      ],
      links: [],
      image: "",
      video: "",
    },
    {
      title: "LLM Fine-Tuning — Customer Service Classifier",
      href: "",
      dates: "2025",
      active: true,
      badge: "No Public Repo",
      description:
        "**Business Problem:** How do you automate routing and escalation of customer service tickets at scale? Fine-tuned GPT-4.1-mini on 67 curated examples to generate structured JSON outputs with issue tags and safety flags. **Impact:** Significantly improved classification accuracy and escalation detection versus prompt engineering alone.",
      technologies: [
        "Python",
        "OpenAI API",
        "pandas",
      ],
      links: [],
      image: "",
      video: "",
    },
    {
      title: "RAG-Based Recommendation System",
      href: "",
      dates: "2025",
      active: true,
      badge: "No Public Repo",
      description:
        "**Business Problem:** How do consulting teams find relevant past solutions without reading thousands of documents? Built an end-to-end RAG system using GPT-4 to semantically search 3 years of project documentation. **Impact:** 65% resolution rate on standard queries, sub-3-minute response time, reduced hallucinations versus plain LLM baseline.",
      technologies: [
        "Python",
        "OpenAI API",
        "NLTK",
        "RAG",
        "Embeddings",
      ],
      links: [],
      image: "",
      video: "",
    },
    {
      title: "Causal Inference Methods Evaluation",
      href: "",
      dates: "2025",
      active: true,
      badge: "No Public Repo",
      description:
        "**Business Problem:** Can we trust observational data to make attribution decisions worth millions? Compared IPW, Double ML, and adjusted regression against experimental ground truth on a 2M-user advertising dataset. **Impact:** Double ML achieved 83% accuracy while naive attribution overestimated lift by 148% — a critical finding for ad spend decisions.",
      technologies: [
        "Python",
        "scikit-learn",
        "statsmodels",
        "IPW",
        "Double ML",
      ],
      links: [],
      image: "",
      video: "",
    },
  ],
  certifications: [
    {
      title: "DataCamp SQL Associate",
      issuer: "DataCamp",
      date: "2024",
      status: "Completed" as const,
    },
    {
      title: "AWS Cloud Practitioner",
      issuer: "Amazon Web Services",
      date: "2025",
      status: "In Progress" as const,
    },
    {
      title: "Power BI Fundamentals",
      issuer: "Microsoft",
      date: "2024",
      status: "Completed" as const,
    },
    {
      title: "MIT Sloan Sports Analytics Competition Finalist",
      issuer: "MIT Sloan — Top 3 Global, 2026",
      date: "2026",
      status: "Honored" as const,
    },
    {
      title: "Culture Corps Scholarship",
      issuer: "University of Minnesota",
      date: "2022",
      status: "Honored" as const,
    },
    {
      title: "Tony Diggs Excellence Awards — Outstanding Collaboration",
      issuer: "PC Connection, Inc.",
      date: "2024",
      status: "Honored" as const,
    },
  ],
} as const;
