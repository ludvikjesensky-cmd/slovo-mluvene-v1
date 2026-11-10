import Image from "next/image";
import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { imageSource, works } from "../../../lib/works";

export function generateStaticParams() {
  return works.map((work) => ({ id: work.id }));
}

export async function generateMetadata({ params }: { params: Promise<{ id: string }> }): Promise<Metadata> {
  const { id } = await params;
  const work = works.find((item) => item.id === id);
  if (!work) return { title: "Titul nenalezen | Slovo mluvené" };
  return {
    title: work.title + " | Slovo mluvené",
    description: work.description,
  };
}

export default async function TitleDetailPage({ params }: { params: Promise<{ id: string }> }) {
  const { id } = await params;
  const work = works.find((item) => item.id === id);
  if (!work) notFound();

  const related = works.filter((item) => item.id !== work.id && item.category === work.category).slice(0, 2);

  return (
    <main className="detail-page">
      <header className="site-header">
        <Link className="brand" href="/" aria-label="Slovo mluvené, domů">
          <span className="brand-mark">S</span>
          <span>slovo <strong>mluvené</strong></span>
        </Link>
        <nav className="desktop-nav" aria-label="Hlavní navigace">
          <Link href="/">Domů</Link>
          <Link className="nav-active" href="/#archiv">Archiv</Link>
          <Link href="/#archiv">Rozhlasové hry</Link>
          <Link href="/#archiv">Četby</Link>
        </nav>
        <div className="header-actions">
          <Link className="profile-button" href="/#archiv">Rodinný archiv</Link>
        </div>
      </header>

      <div className="detail-wrap page-width">
        <nav className="detail-breadcrumbs" aria-label="Drobečková navigace">
          <Link href="/">Domů</Link><span aria-hidden="true">/</span>
          <Link href="/#archiv">Archiv</Link><span aria-hidden="true">/</span>
          <span aria-current="page">{work.title}</span>
        </nav>

        <section className="work-hero" aria-labelledby="work-title">
          <Image className="work-hero-image" src={imageSource(work.cover)} alt="" fill priority sizes="(max-width: 760px) 100vw, 1200px" unoptimized />
          <div className="work-hero-shade" />
          <div className="work-hero-copy">
            <p className="work-kicker"><span>{work.kind}</span><i /> Ukázkový titul</p>
            <h1 id="work-title">{work.title}</h1>
            <p className="work-hero-description">{work.description}</p>
            <div className="work-hero-meta"><span>{work.year}</span><i /><span>{work.length}</span><i /><span>Česky</span></div>
            <Link className="button button-primary" href="#dily"><svg viewBox="0 0 24 24" aria-hidden="true"><path d="M8 5v14l11-7z"/></svg> Přejít na díly</Link>
          </div>
          <span className="work-art-caption">PŘÍBĚHY, KTERÉ ZNÍ</span>
        </section>

        <div className="work-detail-grid">
          <div className="work-main-column">
            <section className="detail-section synopsis-section">
              <p className="section-kicker">O DÍLE</p>
              <h2>Příběh, který stojí za poslech</h2>
              <p className="work-long-description">{work.detail}</p>
              <p className="work-long-description muted">Tento záznam je zatím součástí ukázkového katalogu. Skutečné nahrávky i ověřené údaje doplníme při přípravě rodinného archivu.</p>
            </section>

            <section className="detail-section episode-section" id="dily">
              <div className="detail-section-heading">
                <div><p className="section-kicker">POSLECH</p><h2>{work.episodes.length === 1 ? "Záznam" : "Díly"}</h2></div>
                <span>{work.length}</span>
              </div>
              <div className="work-episode-list">
                {work.episodes.map((episode, index) => {
                  const [name, duration] = episode.split(" · ");
                  return (
                    <article className="work-episode" key={episode}>
                      <span className="episode-number">{String(index + 1).padStart(2, "0")}</span>
                      <div className="episode-copy"><h3>{name}</h3><p>Audio bude připojeno po napojení soukromého archivu.</p></div>
                      <span className="episode-duration">{duration ?? ""}</span>
                      <span className="episode-unavailable" aria-label="Audio zatím není připojeno">•</span>
                    </article>
                  );
                })}
              </div>
            </section>

            {related.length > 0 && (
              <section className="detail-section related-section">
                <div className="detail-section-heading"><div><p className="section-kicker">DALŠÍ Z ARCHIVU</p><h2>Podobné tituly</h2></div><Link className="view-all" href="/#archiv">Celý archiv <span>→</span></Link></div>
                <div className="related-titles">
                  {related.map((item) => (
                    <Link className="related-title" href={"/tituly/" + item.id} key={item.id}>
                      <span className="related-cover"><Image src={imageSource(item.cover)} alt="" fill sizes="160px" unoptimized /></span>
                      <span className="related-type">{item.kind}</span><strong>{item.title}</strong><span className="related-meta">{item.year} · {item.length}</span>
                    </Link>
                  ))}
                </div>
              </section>
            )}
          </div>

          <aside className="work-sidebar">
            <section className="work-facts">
              <p className="section-kicker">INFORMACE O TITULU</p>
              <dl>
                <div><dt>Typ</dt><dd>{work.kind}</dd></div>
                <div><dt>Rok</dt><dd>{work.year}</dd></div>
                <div><dt>Délka</dt><dd>{work.length}</dd></div>
                <div><dt>Jazyk</dt><dd>Čeština</dd></div>
                <div><dt>Edice</dt><dd>{work.collection}</dd></div>
              </dl>
            </section>
            <section className="work-facts credits-facts">
              <p className="section-kicker">TVŮRCI A INTERPRETI</p>
              <dl>
                <div><dt>Autor</dt><dd>{work.author}</dd></div>
                <div><dt>Účinkují</dt><dd>{work.cast}</dd></div>
              </dl>
            </section>
            <section className="work-themes">
              <p className="section-kicker">TÉMATA</p>
              <div>{work.themes.map((theme) => <span key={theme}>{theme}</span>)}</div>
            </section>
            <p className="detail-demo-note">Ukázkový obsah · zatím bez skutečného audia</p>
          </aside>
        </div>

        <footer className="site-footer detail-footer">
          <span><Link className="brand-mark small" href="/" aria-label="Zpět na úvod">S</Link> Slovo mluvené</span>
          <Link href="/#archiv">Zpět do archivu</Link>
        </footer>
      </div>
    </main>
  );
}
