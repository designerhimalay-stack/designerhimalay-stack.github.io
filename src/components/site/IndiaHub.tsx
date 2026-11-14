// AptaCloud India (India home only), in the slot the US site gives to Global
// presence. HomeHead, then three cards in the About rhythm: the Gurugram and
// Pune offices (city photo above the address and a directions link) and a
// data residency card (the DPDP Act and Azure's India regions), which the old
// /in/ site only covered as a "compliance-ready" line.
// Phones: offices two-up, the residency card spans the row under them.

import { asset } from "@/brand/brand";
import { Reveal } from "@/components/ui/Reveal";
import { ReadMore } from "@/components/ui/ReadMore";
import { HomeHead } from "./HomeHead";
import s from "./IndiaHub.module.css";

const HEADING = "Teams in Gurugram and Pune. Data that stays in India.";
const LEAD =
  "Your project runs in your time zone, with engineers in two Indian offices, on Microsoft Azure regions inside the country.";

const OFFICES = [
  {
    city: "Gurugram",
    state: "Haryana",
    address: "Platinum Tower, Unit 1024, Gurugram, Haryana 122018",
    photo: { src: "/images/photos/regions/in-gurugram.jpg", alt: "Glass office towers in Gurugram against a clear sky", position: "60% 50%" },
  },
  {
    city: "Pune",
    state: "Maharashtra",
    address: "Almonte IT Park, Sprint Coworks, 6th Floor, Unit 622, Kharadi, Pune, Maharashtra 411014",
    photo: { src: "/images/photos/regions/in-pune.jpg", alt: "High-rise buildings above palm trees in Pune", position: "50% 70%" },
  },
];

/** Azure regions in India (Microsoft's published datacentre regions). */
const AZURE_REGIONS = [
  { name: "Central India", city: "Pune" },
  { name: "South India", city: "Chennai" },
  { name: "West India", city: "Mumbai" },
];

const mapsHref = (q: string) => `https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(`AptaCloud, ${q}`)}`;

function PinIcon() {
  return (
    <svg viewBox="0 0 20 20" fill="none" aria-hidden="true">
      <path d="M10 17.25s5.25-4.6 5.25-9a5.25 5.25 0 0 0-10.5 0c0 4.4 5.25 9 5.25 9Z" stroke="currentColor" strokeWidth="1.25" strokeLinejoin="round" />
      <circle cx="10" cy="8.25" r="1.9" stroke="currentColor" strokeWidth="1.25" />
    </svg>
  );
}

function ShieldIcon() {
  return (
    <svg className={s.icon} viewBox="0 0 32 32" fill="none" aria-hidden="true">
      <path d="M16 4.5 6.5 8v7.5c0 6 4 10.4 9.5 12 5.5-1.6 9.5-6 9.5-12V8L16 4.5Z" stroke="currentColor" strokeWidth="1.75" strokeLinejoin="round" />
      <path d="m11.75 16 3 3 5.5-6" stroke="currentColor" strokeWidth="1.75" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  );
}

function Arrow() {
  return (
    <svg className={s.arrow} viewBox="0 0 16 16" fill="none" aria-hidden="true">
      <path d="M4 12 12 4M5.5 4H12v6.5" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  );
}

export function IndiaHub() {
  return (
    <section id="india" data-theme="light" className={s.section}>
      <div className={s.container}>
        <HomeHead tag="AptaCloud India" icon={<PinIcon />} heading={HEADING} lead={LEAD} />

        <div className={s.grid}>
          {OFFICES.map((o, i) => (
            <Reveal key={o.city} y={28} duration={0.9} delay={i * 0.07} className={s.cell}>
              <article className={s.card}>
                <span className={s.photoFrame}>
                  <img className={s.photo} src={asset(o.photo.src)} alt={o.photo.alt} style={{ objectPosition: o.photo.position }} loading="lazy" decoding="async" />
                </span>
                <div className={s.body}>
                  <p className={s.top}>
                    <img src={asset("/images/flags/in.svg")} alt="" width={24} height={18} className={s.flag} />
                    <span>{o.state}</span>
                  </p>
                  <h3 className={s.city}>{o.city}</h3>
                  <ReadMore className={s.text}>{o.address}</ReadMore>
                  <a className={s.link} href={mapsHref(o.address)} target="_blank" rel="noopener">
                    Get directions
                    <Arrow />
                  </a>
                </div>
              </article>
            </Reveal>
          ))}

          <Reveal y={28} duration={0.9} delay={0.14} className={`${s.cell} ${s.wide}`}>
            <article className={`${s.card} ${s.residency}`}>
              <div className={s.resTop}>
                <ShieldIcon />
                <span className={s.resLabel}>DPDP Act, 2023</span>
              </div>
              <div className={s.resBody}>
                <h3 className={s.resTitle}>Personal data that stays in India</h3>
                <ReadMore className={s.text}>
                  We build on Azure's India regions so personal data can stay in the country, and map your data flows against the Digital Personal Data Protection Act before anything goes live.
                </ReadMore>
              </div>
              <div className={s.regions}>
                <p className={s.regionsHead}>Azure regions in India</p>
                <ul className={s.regionList}>
                  {AZURE_REGIONS.map((r) => (
                    <li key={r.name} className={s.region}>
                      <span className={s.regionName}>{r.name}</span>
                      <span className={s.regionCity}>{r.city}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </article>
          </Reveal>
        </div>
      </div>
    </section>
  );
}

export default IndiaHub;
