// src/App.jsx
import React, { useState } from "react";

const APP_NAME = "FitBul";

const navItems = [
  { label: "Ana Sayfa", href: "#hero" },
  { label: "Nasıl Çalışır", href: "#how" },
  { label: "Branşlar", href: "#branches" },
  { label: "Neden Biz", href: "#why" },
  { label: "Özellikler", href: "#extras" },
  { label: "SSS", href: "#faq" },
];

const features = [
  {
    title: "Sana Uygun Partner",
    description:
      "Spor seviyen, hedeflerin ve bulunduğun semte göre filtrelenmiş, sana en yakın spor partnerlerini bul.",
  },
  {
    title: "Esnek Zamanlama",
    description:
      "Sabah koşusu, akşam pilatesi ya da hafta sonu trekking… Takvimine göre eşleş ve planı birlikte şekillendir.",
  },
  {
    title: "Güvenli Eşleşme",
    description:
      "Doğrulanmış profiller, rozet sistemi ve karşılıklı onaylı mesajlaşma ile güvenli bir topluluk.",
  },
];

const howSteps = [
  {
    title: "Profilini oluştur",
    text: "Seviyeni, ilgilendiğin spor branşlarını, konumunu ve hedefini birkaç dokunuşla ekle.",
  },
  {
    title: "Partner tercihlerini seç",
    text: "Gün ve saat, branş, partner tipi ve mesafe aralığını belirle; sistem sana en uygun adayları listelesin.",
  },
  {
    title: "Eşleş, sohbet et, plan yap",
    text: "Karşılıklı eşleştiğin kişilerle sohbetten detayları netleştir, buluşma noktasını ve zamanını ayarla.",
  },
  {
    title: "Beraber hareket et",
    text: "Antrenmanı kaydet, istatistiklerini takip et ve yeni hedefler için birbirinizi motive edin.",
  },
];

const branchCards = [
  {
    title: "Koşu & Yürüyüş",
    text: "Sahil, orman yolu veya koşu bandı… Hangi tempoda olursan ol ritmini paylaş.",
    image: "/images/branch-run.jpg",
  },
  {
    title: "Basketbol",
    text: "3x3, 5x5 ya da serbest atış… Potanın etrafında yeni takım arkadaşları bul.",
    image: "/images/branch-basket.jpg",
  },
  {
    title: "Yoga & Pilates",
    text: "Stüdyoda ya da online; esneklik ve nefes çalışmaları için doğru partneri bul.",
    image: "/images/branch-yoga.jpg",
  },
  {
    title: "Outdoor & Trekking",
    text: "Şehrin kalabalığından uzaklaşıp doğada yürüyüş ve kamp planları yap.",
    image: "/images/branch-outdoor.jpg",
  },
];

const whyCards = [
  {
    title: "Anlık eşleşme",
    text: "Son dakika sahil koşusu mu yapmak istiyorsun? O anda aktif olan kullanıcılarla anında eşleş.",
  },
  {
    title: "Kendi etkinliklerini oluştur",
    text: "“Cumartesi sabah Belgrad ormanı yürüyüşü” gibi etkinlikler oluştur, topluluğu davet et.",
  },
  {
    title: "Grup etkinliklerine katıl",
    text: "Koşu grupları, sabah yoga buluşmaları ve basketbol maçlarına tek dokunuşla katıl.",
  },
  {
    title: "30’dan fazla spor branşı",
    text: "Koşudan küreğe, tenisten dansa; sevdiğin branşlarda seni bekleyen birileri mutlaka var.",
  },
];

const extraFeatures = [
  {
    title: "Adımsayar & Aktivite takibi",
    text: "Günlük adım sayını, yaktığın kaloriyi ve antrenman sürelerini uygulama içinde takip et.",
  },
  {
    title: "Kişisel & topluluk istatistikleri",
    text: "Haftalık hedeflerini, katıldığın etkinlikleri ve topluluğa katkını grafiklerle gör.",
  },
  {
    title: "Challenge & meydan okumalar",
    text: "“7 gün üst üste 8.000 adım”, “Ayda 4 outdoor etkinlik” gibi meydan okumalarla kendine ve topluluğa meydan oku.",
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

const faqItems = [
  {
    question: "Bu uygulama tam olarak ne yapıyor?",
    answer:
      `${APP_NAME}, bulunduğun şehirde seninle benzer spor hedeflerine sahip insanlarla tanışmanı sağlayan bir spor ve sosyalleşme platformudur. Birebir ya da grup eşleşmeleriyle yeni arkadaşlar edinip birlikte spor yapabilirsin.`,
  },
  {
    question: "Eşleşmeler nasıl belirleniyor?",
    answer:
      "Seviyen, seçtiğin branşlar, mesafe ve zaman tercihlerin; ayrıca önceki eşleşmelerden gelen geri bildirimler hesaba katılarak öneriler hazırlanır.",
  },
  {
    question: "Güvenlik ve gizlilik nasıl sağlanıyor?",
    answer:
      "Profil doğrulama, topluluk kuralları ve bildirim sistemi ile güvenli bir ortam hedefliyoruz. Konumun yalnızca yaklaşık bölge olarak kullanılır, tam adres paylaşımı senin kontrolündedir.",
  },
  {
    question: "Uygulama ücretli mi?",
    answer:
      "Temel özellikler ücretsizdir. İleride isteğe bağlı premium özellikler (ileri istatistikler, özel etkinlikler vb.) eklemeyi planlıyoruz.",
  },
];

function getInitials(name) {
  const parts = name.trim().split(" ");
  const first = parts[0]?.[0] || "";
  const last = parts.length > 1 ? parts[parts.length - 1][0] : "";
  return (first + last).toUpperCase();
}

function App() {
  const [activeFaq, setActiveFaq] = useState(0);

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
                Spor partneri bulmanın en sosyal yolu
              </div>
              <h1>
                Tek başına değil,{" "}
                <span className="accent-text">doğru partnerle</span> hareket et.
              </h1>
              <p className="hero-subtitle">
                {APP_NAME}, spor seviyene ve hedeflerine göre sana uygun
                spor partnerlerini ve grupları bulmana yardımcı olur.
                Koşu, yoga, fitness, pilates, trekking ve daha fazlası tek uygulamada.
              </p>
              <div className="hero-actions">
                <button className="btn primary btn-lg">
                  Uygulamayı İndir
                </button>
                <button
                  className="btn outline btn-lg"
                  onClick={() => {
                    const el = document.getElementById("branches");
                    if (el) el.scrollIntoView({ behavior: "smooth" });
                  }}
                >
                  Branşlara Göz At
                </button>
              </div>
              <div className="hero-meta">
                <span>⚡ 2 dakikada profilini oluştur</span>
                <span>🤝 Gerçek spor partnerleriyle eşleş</span>
                <span>📍 Şehrine ve semtine göre filtrele</span>
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
                          5K koşu · Moda Sahil · 19:30
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
                          Fitness · Beşiktaş · 18:00
                        </div>
                      </div>
                      <span className="match-tag">Sık eşleşme</span>
                    </div>
                  </div>
                  <div className="phone-footer">
                    <button className="btn primary small">
                      Eşleşmeleri Gör
                    </button>
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

        {/* BRANCHES CAROUSEL STİLİ BÖLÜM */}
        <section id="branches" className="section">
          <div className="container">
            <div className="branches-header">
              <div>
                <h2>Branşlar</h2>
                <p>
                  Aşağıdaki spor branşlarında tesis bul, yer ayırt, partnerinle
                  maç yap, anılarını paylaş ve gelişimini istatistiklerden takip et.
                </p>
              </div>
              <button className="link-button">Tümünü Gör →</button>
            </div>

            <div className="branches-scroll-wrapper">
              <button className="round-arrow">&larr;</button>
              <div className="branches-scroll">
                {branchCards.map((b) => (
                  <article
                    key={b.title}
                    className="branch-card"
                    style={{ backgroundImage: `url(${b.image})` }}
                  >
                    <div className="branch-overlay">
                      <h3>{b.title}</h3>
                      <p>{b.text}</p>
                    </div>
                  </article>
                ))}
              </div>
              <button className="round-arrow">&rarr;</button>
            </div>
          </div>
        </section>

        {/* NERELELERDEYİZ – HARİTALI BÖLÜM */}
        <section id="locations" className="section section-muted">
          <div className="container locations-grid">
            <div className="locations-map">
              {/* 
                Buraya looping bir GIF ya da kısa mp4 koyabilirsin.
                Örnek: public/images/map-anim.gif
              */}
              <img
                src="/images/map-anim.gif"
                alt="FitBul şehirler haritası"
                className="locations-map-img"
              />
            </div>
            <div className="locations-copy">
              <h2>Nerelerdeyiz?</h2>
              <p>
                {APP_NAME} şu anda büyük şehirlerde aktif; yeni şehirlere doğru
                açılmaya devam ediyor. Harita üzerinde bir şehrin yeşil
                yanıp sönmesini gördüğünde, orada buluşmaya hazır bir topluluk
                var demektir.
              </p>
              <div className="location-tags">
                <span>İstanbul</span>
                <span>Ankara</span>
                <span>İzmir</span>
                <span>Bursa</span>
                <span>Antalya</span>
              </div>
              <p className="locations-note">
                🌍 Harita görselini GIF veya Lottie animasyonu olarak kullanman
                güzel olur; biz burada şimdilik GIF yolu bekliyoruz.
              </p>
            </div>
          </div>
        </section>

        {/* NEDEN BİZ */}
        <section id="why" className="section">
          <div className="container why-grid">
            <div className="why-visual">
              <div className="why-circle-bg" />
              <div className="why-card-main">
                <h3>Neden {APP_NAME}?</h3>
                <p>
                  Çünkü “sonra bakarım” deyip ertelenen spor planlarını gerçek
                  buluşmalara çevirmek için tasarlandı.
                </p>
              </div>
            </div>
            <div className="why-cards">
              {whyCards.map((item, i) => (
                <div key={item.title} className="why-card-item">
                  <div className="why-icon">{i + 1}</div>
                  <div>
                    <h4>{item.title}</h4>
                    <p>{item.text}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* ANA ÖZELLİKLER (öncekiler) */}
        <section id="features" className="section section-muted">
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

        {/* EKSTRA ÖZELLİKLER */}
        <section id="extras" className="section">
          <div className="container">
            <div className="section-header center">
              <h2>Ekstra özellikler</h2>
              <p>
                Sadece partner bulmak değil; hareket etme alışkanlığını kalıcı
                hale getirmek için tasarlandı.
              </p>
            </div>

            <div className="extras-grid">
              {extraFeatures.map((ex) => (
                <div key={ex.title} className="extra-card">
                  <h3>{ex.title}</h3>
                  <p>{ex.text}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* TESTIMONIALS */}
        <section className="section section-muted" id="testimonials">
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

        {/* FAQ */}
        <section id="faq" className="section">
          <div className="container">
            <div className="section-header center">
              <h2>Sıkça sorulan sorular</h2>
            </div>

            <div className="faq-list">
              {faqItems.map((item, idx) => {
                const isOpen = activeFaq === idx;
                return (
                  <div
                    key={item.question}
                    className={`faq-item ${isOpen ? "open" : ""}`}
                  >
                    <button
                      className="faq-header"
                      onClick={() =>
                        setActiveFaq(isOpen ? -1 : idx)
                      }
                    >
                      <span className="faq-symbol">
                        {isOpen ? "−" : "+"}
                      </span>
                      <span>{item.question}</span>
                    </button>
                    {isOpen && (
                      <div className="faq-body">
                        <p>{item.answer}</p>
                      </div>
                    )}
                  </div>
                );
              })}
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
          <div className="footer-left">
            <div className="logo">
              <span className="logo-mark">MB</span>
              <span className="logo-text">{APP_NAME}</span>
            </div>
            <p className="footer-text">
              {APP_NAME}, sporla sosyalleşmek isteyenleri bir araya getiren
              yeşil ve enerjik bir topluluk.
            </p>
          </div>
          <div className="footer-columns">
            <div>
              <h4>Ürün</h4>
              <a href="#how">Nasıl çalışır?</a>
              <a href="#branches">Branşlar</a>
              <a href="#extras">Özellikler</a>
            </div>
            <div>
              <h4>Topluluk</h4>
              <a href="#why">Neden biz?</a>
              <a href="#faq">SSS</a>
            </div>
            <div>
              <h4>İletişim</h4>
              <p>hello@FitBul.app</p>
              <p>Instagram / TikTok: @FitBul</p>
            </div>
          </div>
        </div>
        <div className="footer-bottom">
          <div className="container footer-bottom-inner">
            <span>© {new Date().getFullYear()} {APP_NAME}</span>
            <div className="footer-links">
              <a href="#">Kullanım Şartları</a>
              <a href="#">Gizlilik</a>
              <a href="#download">Uygulamayı İndir</a>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}

export default App;
