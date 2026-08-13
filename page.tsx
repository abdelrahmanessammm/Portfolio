 "use client";

import { useState } from "react";

const profileImage = "/images/profile.jpeg";

const metrics = [
  { value: "$1M", label: "Annual digital investment scaled from $20K in 3 years" },
  { value: "32%", label: "Brufen Egypt sales growth for a non-promoted SKU" },
  { value: "40M+", label: "Reach from an ED generic 360° launch" },
  { value: "100M+", label: "Total brand reach across digital platforms at Bio Group" }
];

const cases = [
  {
    tag: "GROWTH • EGYPT",
    title: "Brufen 200mg",
    result: "32% sales growth",
    description: "Grew Share of Voice from 0% to 15% in 2023, translating into 32% annual sales growth for a non-promoted SKU.",
    accent: "01"
  },
  {
    tag: "OMNICHANNEL • ABBOTT",
    title: "Customer engagement at scale",
    result: "Global marketing recognition",
    description: "Built an omnichannel 360° approach for Brufen Egypt that earned a METAP & CIS DVP Excellence Silver Award and a Global Marketing Award.",
    accent: "02"
  },
  {
    tag: "HEALTH • EGYPT",
    title: "IBD awareness campaign",
    result: "8M+ users reached",
    description: "Social awareness campaign with Janssen Egypt, ESIB and healthcare professionals. Delivered 1.5% average engagement, 300+ calls and 400+ direct messages in six months.",
    accent: "03"
  },
  {
    tag: "LAUNCH • PHARCO",
    title: "360° ED generic launch",
    result: "40M+ reach",
    description: "Executed an online and offline launch that reached more than 40 million people and achieved 9% online engagement in its first year.",
    accent: "04"
  }
];

const experience = [
  {
    period: "Aug 2023 — Present",
    company: "Abbott Established Pharmaceuticals",
    role: "Regional Digital Brand Manager",
    markets: "Egypt • KSA • French Africa • English Africa",
    bullets: [
      "Own 20+ digital assets across websites, mobile apps, social and paid media accounts.",
      "Manage digital strategy and planning with product and brand owners against business objectives.",
      "Coordinate stakeholders, content/media agencies, digital KPIs and reporting protocols across the cluster.",
      "Lead seasonal activations, always-on content, branded/non-branded content and e-commerce visibility campaigns.",
      "Manage a business of 13–15M EGP per year across markets and therapy areas."
    ]
  },
  {
    period: "Aug 2021 — Aug 2023",
    company: "Bio Group Holding Company",
    role: "Digital Marketing Manager",
    markets: "Consumer health & beauty",
    bullets: [
      "Reported to the Business Unit Director across Avène, Ducray, ISISPHARMA and Ecrinal.",
      "Set DTC and brand digital/communication strategies and led a team of six social media specialists.",
      "Created digital SOPs for planning, executing and monitoring campaigns.",
      "Managed a 10M EGP annual budget, 500+ influencers and 200+ influencer content pieces.",
      "Generated 100M+ total digital reach with 4% average engagement and 12% average CTR."
    ]
  },
  {
    period: "Feb 2018 — Aug 2021",
    company: "Intermark Network",
    role: "Senior Communication Strategist",
    markets: "Health & wellness",
    bullets: [
      "Planned and executed 360° campaigns across online and offline channels.",
      "Managed 13–15M EGP annual business across different markets and therapy areas.",
      "Acted as client front and strategic partner for health and wellness clients.",
      "Contributed to the 100 Million Se77a national campaign with AstraZeneca Egypt and the Egyptian Ministry of Health.",
      "Delivered launches and relaunches across prescription/consumer healthcare brands."
    ]
  },
  {
    period: "Feb 2017 — Jan 2018",
    company: "El Ezaby Pharmacy",
    role: "Community Pharmacist",
    markets: "Egypt",
    bullets: []
  }
];

const capabilities = [
  "Digital Transformation", "Brand & Digital Strategy", "Content Strategy",
  "Media Planning", "Omnichannel Marketing", "Consumer Health",
  "E-commerce Visibility", "Digital KPIs & Reporting", "Stakeholder Management",
  "Agency Management", "360° Campaigns", "Team Leadership"
];

export default function Home() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [copied, setCopied] = useState(false);

  const copyEmail = async () => {
    await navigator.clipboard.writeText("a.essam0050@gmail.com");
    setCopied(true);
    setTimeout(() => setCopied(false), 1800);
  };

  return (
    <main>
      <nav className="nav">
        <a className="brand" href="#top">AE<span>.</span></a>
        <button className="menu" onClick={() => setMenuOpen(!menuOpen)} aria-label="Toggle navigation">
          <span></span><span></span>
        </button>
        <div className={`navLinks ${menuOpen ? "open" : ""}`}>
          <a href="#work" onClick={() => setMenuOpen(false)}>Work</a>
          <a href="#experience" onClick={() => setMenuOpen(false)}>Experience</a>
          <a href="#about" onClick={() => setMenuOpen(false)}>About</a>
          <a href="#contact" onClick={() => setMenuOpen(false)}>Contact</a>
          <a className="navCta" href="/AbdulRahman-Essam-CV.pdf" download>Download CV</a>
        </div>
      </nav>

      <section className="hero" id="top">
        <div className="heroGlow"></div>
        <div className="heroCopy">
          <p className="eyebrow">DIGITAL BRAND MANAGER • CONSUMER HEALTH</p>
          <h1>I turn digital strategy into <em>measurable growth.</em></h1>
          <p className="heroText">
            Regional digital brand leader with experience across consumer health, pharma, beauty and wellness — connecting strategy, creativity, media and data across markets.
          </p>
          <div className="heroActions">
            <a className="button primary" href="#work">Explore my work <span>↗</span></a>
            <button className="button secondary" onClick={copyEmail}>
              {copied ? "Email copied" : "Copy my email"}
            </button>
          </div>
          <div className="heroMeta">
            <span>Based in Cairo</span>
            <span>UAE Golden Residency until 2036</span>
            <span>Open to regional opportunities</span>
          </div>
        </div>
        <div className="portraitWrap">
          <div className="portraitFrame">
            <img src={profileImage} alt="AbdulRahman Essam Moussa" />
          </div>
          <div className="portraitNote">
            <span>9+ years</span>
            <small>health & digital marketing</small>
          </div>
        </div>
      </section>

      <section className="metrics">
        {metrics.map((m) => (
          <div className="metric" key={m.value}>
            <strong>{m.value}</strong><span>{m.label}</span>
          </div>
        ))}
      </section>

      <section className="section" id="work">
        <div className="sectionHead">
          <div><p className="eyebrow">SELECTED IMPACT</p><h2>Work that moved<br/><em>the numbers.</em></h2></div>
          <p className="sectionIntro">A selection of business problems, strategic choices and measurable outcomes from consumer health and healthcare marketing.</p>
        </div>
        <div className="caseGrid">
          {cases.map((item) => (
            <article className="caseCard" key={item.title}>
              <div className="caseTop"><span>{item.tag}</span><b>{item.accent}</b></div>
              <h3>{item.title}</h3><div className="caseResult">{item.result}</div>
              <p>{item.description}</p><div className="caseLine"></div>
            </article>
          ))}
        </div>
      </section>

      <section className="statement">
        <div className="statementInner">
          <p className="eyebrow">THE WAY I WORK</p>
          <h2>Strategy first.<br/><em>Creativity with a purpose.</em></h2>
          <p>I connect brand ambition to audience insight, channel strategy, execution and performance measurement — building systems that can scale across markets, not just campaigns that look good.</p>
        </div>
      </section>

      <section className="section experienceSection" id="experience">
        <div className="sectionHead">
          <div><p className="eyebrow">CAREER</p><h2>A track record<br/><em>across markets.</em></h2></div>
          <p className="sectionIntro">From community pharmacy to regional digital brand leadership across Egypt, Saudi Arabia and Africa.</p>
        </div>
        <div className="timeline">
          {experience.map((job) => (
            <article className="job" key={job.company + job.period}>
              <div className="jobDate">{job.period}</div><div className="jobDot"></div>
              <div className="jobBody">
                <p className="company">{job.company}</p><h3>{job.role}</h3><p className="markets">{job.markets}</p>
                {job.bullets.length > 0 && <ul>{job.bullets.map((b) => <li key={b}>{b}</li>)}</ul>}
              </div>
            </article>
          ))}
        </div>
      </section>

      <section className="darkSection" id="about">
        <div className="aboutGrid">
          <div><p className="eyebrow light">CAPABILITIES</p><h2>What I bring<br/><em>to the table.</em></h2></div>
          <div className="capabilityGrid">
            {capabilities.map((c, i) => <div className="capability" key={c}><span>{String(i + 1).padStart(2, "0")}</span>{c}</div>)}
          </div>
        </div>
      </section>

      <section className="section aboutDetails">
        <div className="detailCard">
          <p className="eyebrow">EDUCATION</p>
          <h3>Bachelor of Pharmacy</h3><p>Ain Shams University · 2011–2016</p>
          <h3>Digital Transformation: Analysis to Strategy</h3><p>American University in Cairo · 2023</p>
          <h3>Health Economics Diploma</h3><p>Arab Academy of Science and Technology · 2019</p>
          <h3>Digital Marketing Nano Degree</h3><p>Udacity · 2021</p>
        </div>
        <div className="detailCard">
          <p className="eyebrow">INSPIRATIONS</p>
          <ul className="inspirationList">
            <li><strong>Blue Ocean Strategy</strong><span>W. Chan Kim & Renée Mauborgne</span></li>
            <li><strong>Start with Why</strong><span>Simon Sinek</span></li>
            <li><strong>The Brothers Karamazov</strong><span>Fyodor Dostoevsky</span></li>
            <li><strong>The Divine Comedy</strong><span>Dante Alighieri</span></li>
            <li><strong>Louis Vuitton — Victory is a State of Mind</strong><span>Campaign inspiration</span></li>
          </ul>
        </div>
      </section>

      <section className="contactSection" id="contact">
        <div className="contactInner">
          <p className="eyebrow light">LET'S TALK</p>
          <h2>Have a growth<br/><em>challenge?</em></h2>
          <p>For brand, digital, consumer health and regional marketing opportunities.</p>
          <a className="emailLink" href="mailto:a.essam0050@gmail.com">a.essam0050@gmail.com <span>↗</span></a>
          <div className="contactLinks">
            <a href="tel:+201282425607">EG +20 128 2425 607</a>
            <a href="tel:+971558944317">UAE +971 55 894 4317</a>
          </div>
        </div>
      </section>

      <footer>
        <span>© 2026 AbdulRahman Essam Moussa</span>
        <span>Digital Brand Manager · Consumer Health</span>
        <a href="#top">Back to top ↑</a>
      </footer>
    </main>
  );
}
