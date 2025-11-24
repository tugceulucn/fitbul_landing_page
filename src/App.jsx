// src/App.jsx
import React from "react";

const navItems = [
  { label: "Ana Sayfa", href: "#hero" },
  { label: "Nasıl Çalışır", href: "#how" },
  { label: "Özellikler", href: "#features" },
  { label: "Güvenlik", href: "#trust" },
  { label: "İndir", href: "#download" },
];

// Uygulama adı (istersen değiştir)
const APP_NAME = "MoveBuddy";

const features = [
  {
    title: "Sana Uygun Partner",
    description:
      "Spor seviyen, hedefin ve bulunduğun bölgeye göre sana en uygun partnerleri önerir.",
  },
  {
    title: "Esnek Zamanlama",
    description:
      "Sabah koşusu, akşam pilatesi veya hafta sonu trekking… Takvimine göre eşleş.",
  },
  {
    title: "Güvenli Eşleşme",
    description:
      "Doğrulanmış profiller, rozet sistemi ve karşılıklı onay ile güvenli bir ortam.",
  },
];

const howSteps = [
  {
    title: "Profilini oluştur",
    text: "Seviyeni, ilgilendiğin sporları, konumunu ve hedeflerini ekle.",
  },
  {
    title: "Partner tercihlerini seç",
    text: "Kadın/erkek tercihi, yaş aralığı, gün ve saat aralıklarını belirle.",
  },
  {
    title: "Eşleş ve sohbet et",
    text: "Uygun profillerle eşleş, sohbetten detayları netleştir, birlikte antrenman planla.",
  },
  {
    title: "Beraber hareket et",
    text: "Antrenmanlarını kaydet, istatistiklerini takip et ve motivasyonunu canlı tut.",
  },
];

const testimonials = [
  {
    name: "İrem K.",
    role: "Hafta sonu koşucusu",
    text: "Yalnız koşmaktan sıkılmıştım. Şimdi her pazar aynı parkta buluştuğumuz harika bir koşu grubumuz var.",
  },
  {
    name: "Mert A.",
    role: "Fitness & ağırlık çalışmaları",
    text: "Aynı salonda yıllardır yalnız çalışıyormuşum meğer. Uygulama sayesinde bench spotlayacak partner buldum.",
  },
  {
    name: "Ceren & Ali",
    role: "Yeni başlayanlar",
    text: "İkimiz de spora yeni başlıyorduk. Birlikte motive olup haftada 3 gün düzen yakaladık.",
  },
];

function getInitials(name) {
  const parts = name.trim().split(" ");
  const first = parts[0]?.[0] || "";
  const last = parts.length > 1 ? parts[parts.length - 1][0] : "";
  return (first + last).toUpperCase();
}

function App() {
  return (
    <div className="app">
      {/* NAVBAR */}
      <header className="top-nav">
        <div className="container nav-inner">
          <div className="logo">
            <span className="logo-mark">MB</span>
            <span className="logo-text">{APP_NAME}</span>
          </div>
          <nav className="nav-links">
            {navItems.map((item) => (
              <a key={item.href} href={item.href}>
                {item.label}
              </a>
            ))}
          </nav>
          <div className="nav-cta">
            <button className="btn ghost">Giriş Yap</button>
            <button className="btn primary">Ücretsiz Dene</button>
          </div>
        </div>
      </header>

      <main>
        {/* HERO */}
        <section id="hero" className="hero">
          <div className="container hero-grid">
            <div className="hero-left">
              <div className="hero-badge">
                <span className="hero-dot" />
                Spor partneri bulmanın en kolay yolu
              </div>
              <h1>
                Tek başına değil,{" "}
                <span className="accent-text">doğru partnerle</span> hareket et.
              </h1>
              <p className="hero-subtitle">
                {APP_NAME}, spor seviyene ve hedeflerine göre sana uygun
                spor partnerlerini ve grupları bulmana yardımcı olur. Koşu,
                yoga, fitness, pilates, trekking ve daha fazlası tek uygulamada.
              </p>
              <div className="hero-actions">
                <button className="btn primary btn-lg">
                  Uygulamayı İndir
                </button>
                <button
                  className="btn outline btn-lg"
                  onClick={() => {
                    const el = document.getElementById("how");
                    if (el) el.scrollIntoView({ behavior: "smooth" });
                  }}
                >
                  Nasıl Çalışır?
                </button>
              </div>
              <div className="hero-meta">
                <span>⚡ 2 dakikada profilini oluştur</span>
                <span>🤝 Gerçek spor partnerleriyle eşleş</span>
                <span>📍 Şehrine göre filtrele</span>
              </div>
            </div>

            <div className="hero-right">
              <div className="phone-mockup">
                <div className="phone-screen">
                  <div className="phone-header">
                    <span className="small-pill">Bugün yakındakiler</span>
                    <span className="status-dot" />
                  </div>
                  <div className="match-list">
                    <div className="match-card">
                      <div className="avatar-circle">EZ</div>
                      <div>
                        <div className="match-name">Ege Z.</div>
                        <div className="match-meta">
                          5K koşu · Kadıköy Sahil · 19:30
                        </div>
                      </div>
                      <span className="match-tag">%87 eşleşme</span>
                    </div>
                    <div className="match-card">
                      <div className="avatar-circle">DY</div>
                      <div>
                        <div className="match-name">Duygu Y.</div>
                        <div className="match-meta">
                          Pilates · Online · 20:00
                        </div>
                      </div>
                      <span className="match-tag">Yeni</span>
                    </div>
                    <div className="match-card">
                      <div className="avatar-circle">BK</div>
                      <div>
                        <div className="match-name">Berk K.</div>
                        <div className="match-meta">
                          Fitness · Nişantaşı · 18:00
                        </div>
                      </div>
                      <span className="match-tag">Sık eşleşme</span>
                    </div>
                  </div>
                  <div className="phone-footer">
                    <button className="btn primary small">Eşleşmeleri Gör</button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* HOW IT WORKS */}
        <section id="how" className="section section-muted">
          <div className="container">
            <div className="section-header center">
              <h2>Nasıl çalışır?</h2>
              <p>
                Uygulama, basit bir akışla seni doğru spor partneriyle
                buluşturur.
              </p>
            </div>

            <div className="how-grid">
              {howSteps.map((step, index) => (
                <div key={step.title} className="how-card">
                  <div className="how-number">{index + 1}</div>
                  <h3>{step.title}</h3>
                  <p>{step.text}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* FEATURES */}
        <section id="features" className="section">
          <div className="container">
            <div className="section-header">
              <h2>Öne çıkan özellikler</h2>
              <p>
                Yalnız spor yapmayı sevmeyenler için tasarlandı. Hem sosyal hem
                güvenli, hem de motive edici.
              </p>
            </div>

            <div className="features-grid">
              {features.map((f) => (
                <div key={f.title} className="feature-card">
                  <h3>{f.title}</h3>
                  <p>{f.description}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* TRUST & SAFETY */}
        <section id="trust" className="section section-muted">
          <div className="container trust-grid">
            <div>
              <h2>Güvenli ve saygılı bir topluluk</h2>
              <p>
                {APP_NAME}, topluluk kurallarına ve güvenliğe önem verir.
                Şikayet sistemi, bloklama ve profil doğrulama sayesinde
                kendini güvende hissedebilirsin.
              </p>
              <ul className="bullet-list">
                <li>Gerçek kullanıcılar için doğrulanmış profil rozeti</li>
                <li>Topluluk kuralları ihlal eden hesaplara hızlı müdahale</li>
                <li>Yalnızca karşılıklı eşleşmelerle mesajlaşma</li>
              </ul>
            </div>
            <div className="trust-card">
              <h4>Topluluk sözümüz</h4>
              <p>
                Saygılı, kapsayıcı ve motive edici bir spor ortamı yaratmak
                için buradayız. Sen sporuna odaklan, güvenliği biz düşünelim.
              </p>
              <p className="trust-note">🔐 Verilerin gizli, konumun paylaşıma açık değil.</p>
            </div>
          </div>
        </section>

        {/* TESTIMONIALS */}
        <section className="section" id="testimonials">
          <div className="container">
            <div className="section-header center">
              <h2>Kullanıcılarımız ne diyor?</h2>
            </div>

            <div className="testimonials-grid">
              {testimonials.map((t) => (
                <div key={t.name} className="testimonial-card">
                  <div className="testimonial-header">
                    <div className="avatar">{getInitials(t.name)}</div>
                    <div>
                      <div className="testimonial-name">{t.name}</div>
                      <div className="testimonial-role">{t.role}</div>
                    </div>
                  </div>
                  <p>“{t.text}”</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* DOWNLOAD / CTA */}
        <section id="download" className="section section-accent">
          <div className="container download-inner">
            <div>
              <h2>Spor partnerini bulmaya hazır mısın?</h2>
              <p>
                Uygulamayı indir, profilini oluştur ve şehrindeki spor
                partnerleriyle tanış. Motivasyonun artsın, erteleme alışkanlığın
                azalsın.
              </p>
              <div className="store-buttons">
                <button className="store-btn">
                  <span className="store-big">App Store</span>
                  <span className="store-small">Yakında</span>
                </button>
                <button className="store-btn">
                  <span className="store-big">Google Play</span>
                  <span className="store-small">Yakında</span>
                </button>
              </div>
            </div>
          </div>
        </section>
      </main>

      {/* FOOTER */}
      <footer className="footer">
        <div className="container footer-inner">
          <span>© {new Date().getFullYear()} {APP_NAME}</span>
          <div className="footer-links">
            <a href="#hero">Ana sayfa</a>
            <a href="#trust">Güvenlik</a>
            <a href="#download">İndir</a>
          </div>
        </div>
      </footer>
    </div>
  );
}

export default App;
