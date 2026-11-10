"use client";

import Image from "next/image";
import { useMemo, useState } from "react";

type Work = {
  id: string;
  title: string;
  kind: string;
  category: string;
  year: string;
  length: string;
  author: string;
  cast: string;
  description: string;
  cover: string;
  episodes: string[];
};

const works: Work[] = [
  {
    id: "nocni-spoj",
    title: "Poslední noční spoj",
    kind: "Rozhlasová hra",
    category: "Hra",
    year: "2021",
    length: "52 min",
    author: "Ukázkový autor",
    cast: "Ukázkové obsazení",
    description: "Když Anna nastoupí do posledního vlaku, cestující tvrdí, že ji už dlouho čekají. Komorní příběh o návratech, které si člověk neplánoval.",
    cover: "/covers/night-train.svg",
    episodes: ["Jedno nástupiště navíc · 52 min"],
  },
  {
    id: "zahrada",
    title: "Zahrada za mlhou",
    kind: "Četba na pokračování",
    category: "Četba",
    year: "2019",
    length: "8 dílů",
    author: "Ukázková autorka",
    cast: "Čte ukázkový interpret",
    description: "Dům na konci zahrady zůstává zamčený. Když se po letech vrátí jeho nová majitelka, mlha začne odkrývat víc než jen cestu.",
    cover: "/covers/garden.svg",
    episodes: ["1. díl · 31 min", "2. díl · 28 min", "3. díl · 34 min"],
  },
  {
    id: "hlas-ve-studiu",
    title: "Hlas ve studiu",
    kind: "Rozhlasová hra",
    category: "Hra",
    year: "2023",
    length: "46 min",
    author: "Ukázkový autor",
    cast: "Ukázkové obsazení",
    description: "Noční technik zachytí na staré nahrávce hlas, který do studia nikdy nepřišel.",
    cover: "/covers/radio-room.svg",
    episodes: ["Hlas ve studiu · 46 min"],
  },
  {
    id: "modry-dum",
    title: "Dům, který čekal",
    kind: "Povídka",
    category: "Povídka",
    year: "2020",
    length: "24 min",
    author: "Ukázková autorka",
    cast: "Čte ukázkový interpret",
    description: "Krátká povídka o místě, které si pamatuje všechny své obyvatele.",
    cover: "/covers/blue-house.svg",
    episodes: ["Dům, který čekal · 24 min"],
  },
  {
    id: "dopisy",
    title: "Dopisy z druhého břehu",
    kind: "Četba na pokračování",
    category: "Četba",
    year: "2018",
    length: "6 dílů",
    author: "Ukázkový autor",
    cast: "Čte ukázková interpretka",
    description: "Z krabice po babičce se vynoří dopisy, které měly zůstat neodeslané.",
    cover: "/covers/garden.svg",
    episodes: ["1. díl · 27 min", "2. díl · 30 min"],
  },
];

const categories = ["Vše", "Hry", "Četby", "Povídky"];
const featuredIds = ["nocni-spoj", "hlas-ve-studiu", "zahrada"];
const imageSource = (path: string) => (process.env.NEXT_PUBLIC_BASE_PATH || "") + path;

export default function HomePage() {
  const [activeCategory, setActiveCategory] = useState("Vše");
  const [query, setQuery] = useState("");
  const [featuredIndex, setFeaturedIndex] = useState(0);
  const [detail, setDetail] = useState<Work | null>(null);
  const [track, setTrack] = useState<Work | null>(null);

  const featured = works.find((work) => work.id === featuredIds[featuredIndex]) ?? works[0];
  const visibleWorks = useMemo(() => {
    const normalizedQuery = query.trim().toLocaleLowerCase("cs");
    return works.filter((work) => {
      const matchesCategory =
        activeCategory === "Vše" ||
        (activeCategory === "Hry" && work.category === "Hra") ||
        (activeCategory === "Četby" && work.category === "Četba") ||
        (activeCategory === "Povídky" && work.category === "Povídka");
      const searchableText = [work.title, work.kind, work.author, work.description].join(" ").toLocaleLowerCase("cs");
      return matchesCategory && (!normalizedQuery || searchableText.includes(normalizedQuery));
    });
  }, [activeCategory, query]);

  function moveFeature(direction: number) {
    setFeaturedIndex((current) => (current + direction + featuredIds.length) % featuredIds.length);
  }

  return (
    <main>
      <header className="site-header">
        <a className="brand" href="#domu" aria-label="Slovo mluvené, domů">
          <span className="brand-mark">S</span>
          <span>slovo <strong>mluvené</strong></span>
        </a>
        <nav className="desktop-nav" aria-label="Hlavní navigace">
          <a className="nav-active" href="#domu">Domů</a>
          <a href="#archiv">Archiv</a>
          <a href="#archiv">Rozhlasové hry</a>
          <a href="#archiv">Četby</a>
        </nav>
        <div className="header-actions">
          <label className="search-field" id="hledat">
            <svg viewBox="0 0 24 24" aria-hidden="true"><circle cx="10.8" cy="10.8" r="6.8"/><path d="m16 16 5 5"/></svg>
            <input value={query} onChange={(event) => setQuery(event.target.value)} placeholder="Hledat titul…" aria-label="Hledat titul" />
          </label>
          <button className="profile-button" type="button" onClick={() => setDetail(works[0])}>Rodinný archiv</button>
        </div>
      </header>

      <section className="hero" id="domu" aria-label="Doporučený titul">
        <Image className="hero-image" src={imageSource(featured.cover)} alt="" fill priority sizes="100vw" unoptimized />
        <div className="hero-overlay" />
        <div className="hero-content page-width">
          <p className="eyebrow"><span className="eyebrow-dot" /> {featured.kind} <span className="eyebrow-separator">/</span> Ukázkový titul</p>
          <h1>{featured.title}</h1>
          <div className="hero-meta">
            <span>{featured.year}</span><i /> <span>{featured.length}</span><i /> <span>Česky</span>
          </div>
          <p className="hero-description">{featured.description}</p>
          <p className="hero-credit">Autor: <strong>{featured.author}</strong> <span>·</span> Účinkují: <strong>{featured.cast}</strong></p>
          <div className="hero-actions">
            <button className="button button-primary" type="button" onClick={() => setTrack(featured)}>
              <svg viewBox="0 0 24 24" aria-hidden="true"><path d="M8 5v14l11-7z"/></svg> Poslechnout ukázku
            </button>
            <button className="button button-secondary" type="button" onClick={() => setDetail(featured)}>
              <svg viewBox="0 0 24 24" aria-hidden="true"><circle cx="12" cy="12" r="9"/><path d="M12 11v5m0-8h.01"/></svg> Detail titulu
            </button>
          </div>
          <div className="hero-pagination" aria-label="Doporučené tituly">
            {featuredIds.map((id, index) => (
              <button key={id} type="button" className={index === featuredIndex ? "pagination-dot is-active" : "pagination-dot"} onClick={() => setFeaturedIndex(index)} aria-label={"Zobrazit doporučený titul " + (index + 1)} />
            ))}
            <button className="carousel-arrow" type="button" onClick={() => moveFeature(-1)} aria-label="Předchozí titul">‹</button>
            <button className="carousel-arrow" type="button" onClick={() => moveFeature(1)} aria-label="Další titul">›</button>
          </div>
          <span className="hero-bottom-label">PŘÍBĚHY, KTERÉ ZNÍ</span>
        </div>
      </section>

      <section className="catalog page-width" id="archiv">
        <div className="section-heading">
          <div><p className="section-kicker">RODINNÝ VÝBĚR</p><h2>Příběhy k poslechu</h2></div>
          <span className="catalog-count">{visibleWorks.length} ukázkových titulů</span>
        </div>
        <div className="catalog-toolbar">
          <div className="category-tabs" role="group" aria-label="Filtrovat podle typu">
            {categories.map((category) => (
              <button key={category} type="button" className={activeCategory === category ? "category-tab is-active" : "category-tab"} onClick={() => setActiveCategory(category)}>{category}</button>
            ))}
          </div>
          <a className="view-all" href="#archiv">Procházet archiv <span>→</span></a>
        </div>

        {visibleWorks.length > 0 ? (
          <div className="title-row">
            {visibleWorks.map((work) => (
              <article className="title-card" key={work.id}>
                <button className="cover-button" type="button" onClick={() => setDetail(work)} aria-label={"Otevřít detail: " + work.title}>
                  <span className="cover-frame">
                    <Image src={imageSource(work.cover)} alt="" fill sizes="(max-width: 680px) 75vw, 34vw" unoptimized />
                    <span className="cover-gradient" />
                    <span className="cover-type">{work.kind}</span>
                    <span className="cover-title">{work.title}</span>
                    <span className="cover-open">Detail <span>↗</span></span>
                  </span>
                </button>
                <div className="card-meta"><span>{work.year}</span><i /> <span>{work.length}</span><button type="button" onClick={() => setTrack(work)} aria-label={"Připravit přehrávání: " + work.title}>▶</button></div>
              </article>
            ))}
          </div>
        ) : (
          <p className="empty-state">Tomuto hledání zatím nic neodpovídá.</p>
        )}
        <p className="prototype-note">Vizuální prototyp · názvy, popisy i obaly jsou ukázkové. Skutečný katalog a nahrávky připojíme později.</p>
      </section>

      <footer className="site-footer page-width">
        <span><span className="brand-mark small">S</span> Slovo mluvené</span>
        <span>Soukromý rodinný audioarchiv</span>
      </footer>

      <nav className="mobile-dock" aria-label="Rychlá navigace">
        <a href="#domu"><span>⌂</span>Domů</a>
        <a href="#archiv"><span>▤</span>Archiv</a>
        <a href="#hledat"><span>⌕</span>Hledat</a>
        <button type="button" onClick={() => setDetail(works[0])}><span>♙</span>Rodina</button>
      </nav>

      {track && (
        <aside className="audio-dock" aria-live="polite">
          <div className="audio-symbol">♫</div>
          <div className="audio-track"><strong>{track.title}</strong><span>Ukázkový režim · skutečné audio zatím není připojené</span></div>
          <div className="audio-wave" aria-hidden="true"><i /><i /><i /><i /><i /><i /><i /><i /><i /><i /><i /><i /><i /><i /><i /></div>
          <button type="button" className="audio-close" onClick={() => setTrack(null)} aria-label="Zavřít přehrávač">×</button>
        </aside>
      )}

      {detail && (
        <div className="modal-backdrop" role="presentation" onClick={() => setDetail(null)}>
          <section className="detail-modal" role="dialog" aria-modal="true" aria-labelledby="detail-title" onClick={(event) => event.stopPropagation()}>
            <button className="modal-close" type="button" onClick={() => setDetail(null)} aria-label="Zavřít detail">×</button>
            <div className="detail-art">
              <Image src={imageSource(detail.cover)} alt="" fill sizes="(max-width: 680px) 100vw, 720px" unoptimized />
              <div className="detail-art-shade" />
              <span className="detail-label">UKÁZKOVÝ TITUL</span>
              <h2 id="detail-title">{detail.title}</h2>
            </div>
            <div className="detail-body">
              <p className="detail-meta">{detail.kind} <i /> {detail.year} <i /> {detail.length}</p>
              <p className="detail-description">{detail.description}</p>
              <dl className="detail-credits"><div><dt>Autor</dt><dd>{detail.author}</dd></div><div><dt>Účinkují</dt><dd>{detail.cast}</dd></div></dl>
              <h3>Díly</h3>
              <ul className="episode-list">{detail.episodes.map((episode) => <li key={episode}><span className="episode-play">▶</span><span>{episode}</span><span className="episode-more">•••</span></li>)}</ul>
              <button className="button button-primary detail-listen" type="button" onClick={() => { setTrack(detail); setDetail(null); }}>
                <svg viewBox="0 0 24 24" aria-hidden="true"><path d="M8 5v14l11-7z"/></svg> Poslechnout ukázku
              </button>
            </div>
          </section>
        </div>
      )}
    </main>
  );
}