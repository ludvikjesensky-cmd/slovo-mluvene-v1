"use client";

import Image from "next/image";
import Link from "next/link";
import { categories, featuredIds, imageSource, works, type Work } from "../lib/works";
import { useMemo, useState } from "react";

export default function HomePage() {
  const [activeCategory, setActiveCategory] = useState("Vše");
  const [query, setQuery] = useState("");
  const [featuredIndex, setFeaturedIndex] = useState(0);
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
          <a className="profile-button" href="#archiv">Rodinný archiv</a>
        </div>
      </header>

      <section className="hero" id="domu" aria-label="Doporučený titul">
        <Image className="hero-image" src={imageSource(featured.cover)} alt="" fill priority sizes="100vw" unoptimized />
        <Link className="hero-image-link" href={"/tituly/" + featured.id} aria-label={"Otevřít detail: " + featured.title} />
        <div className="hero-overlay" />
        <div className="hero-content page-width">
          <p className="eyebrow"><span className="eyebrow-dot" /> {featured.kind} <span className="eyebrow-separator">/</span> Ukázkový titul</p>
          <h1><Link className="hero-title-link" href={"/tituly/" + featured.id}>{featured.title}</Link></h1>
          <div className="hero-meta">
            <span>{featured.year}</span><i /> <span>{featured.length}</span><i /> <span>Česky</span>
          </div>
          <p className="hero-description">{featured.description}</p>
          <p className="hero-credit">Autor: <strong>{featured.author}</strong> <span>·</span> Účinkují: <strong>{featured.cast}</strong></p>
          <div className="hero-actions">
            <button className="button button-primary" type="button" onClick={() => setTrack(featured)}>
              <svg viewBox="0 0 24 24" aria-hidden="true"><path d="M8 5v14l11-7z"/></svg> Poslechnout ukázku
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
                <Link className="cover-button" href={"/tituly/" + work.id} aria-label={"Otevřít detail: " + work.title}>
                  <span className="cover-frame">
                    <Image src={imageSource(work.cover)} alt="" fill sizes="(max-width: 680px) 75vw, 34vw" unoptimized />
                    <span className="cover-gradient" />
                    <span className="cover-type">{work.kind}</span>
                    <span className="cover-title">{work.title}</span>
                    <span className="cover-open">Detail <span>↗</span></span>
                  </span>
                </Link>
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
        <a href="#archiv"><span>♙</span>Rodina</a>
      </nav>

      {track && (
        <aside className="audio-dock" aria-live="polite">
          <div className="audio-symbol">♫</div>
          <div className="audio-track"><strong>{track.title}</strong><span>Ukázkový režim · skutečné audio zatím není připojené</span></div>
          <div className="audio-wave" aria-hidden="true"><i /><i /><i /><i /><i /><i /><i /><i /><i /><i /><i /><i /><i /><i /><i /></div>
          <button type="button" className="audio-close" onClick={() => setTrack(null)} aria-label="Zavřít přehrávač">×</button>
        </aside>
      )}

    </main>
  );
}