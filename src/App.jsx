// src/App.jsx
import React, { useState } from "react";

const APP_NAME = "FitBul";

const navItems = [
  { label: "Hakkımızda", href: "#about" },
  { label: "Nasıl Çalışır", href: "#how" },
  { label: "Hizmetlerimiz", href: "#features" },
  { label: "Neden FitBul", href: "#why" },
  { label: "SSS", href: "#faq" },
];

const howSteps = [
  {
    title: "Uygulamayı indir",
    text: "FitBul'u App Store veya Google Play'den ücretsiz indir.",
  },
  {
    title: "Profilini oluştur",
    text: "Seviyeni, ilgilendiğin spor branşlarını ve hedeflerini ekle.",
  },
  {
    title: "Konumuna göre arkadaş bul",
    text: "Anlık spor arkadaşlarını gör, eşleş ve mesajlaş.",
  },
  {
    title: "Buluş & Spor yap",
    text: "Etkinliklere katıl, challenge başlat ve ilerlemeni takip et.",
  },
];

const mainFeatures = [
  {
    number: "1",
    title: "Anında Spor Arkadaşı Bul",
    description:
      "Konumuna göre aynı anda spor yapmak isteyen kişileri keşfet. Tek dokunuşla eşleş, mesajlaş ve sporunu sosyal hale getir.",
  },
  {
    number: "2",
    title: "Etkinlik Oluştur & Katıl",
    description:
      "Koşu grubu, sabah yürüyüşü, yoga, açık hava fitness... Topluluk etkinliklerine katıl veya kendi spor etkinliğini oluştur.",
  },
  {
    number: "3",
    title: "Challenge Oluştur & Katıl",
    description:
      "Hedef koy, challenge başlat veya başkalarının meydan okumalarına katıl. İlerleme ekranı ile hedeflerini takip et.",
  },
  {
    number: "4",
    title: "Güçlü Topluluk",
    description:
      "Seni anlayan, motive eden ve hareket ettiren bir toplulukla tanış. Spor artık yalnız değil, sosyal.",
  },
  {
    number: "5",
    title: "İlerleme Takibi",
    description:
      "Tamamladığın etkinlikleri ve challenge'ları tek ekranda gör. Spor yolculuğunu net bir şekilde takip et.",
  },
];

const whyCards = [
  {
    icon: "📈",
    title: "Motivasyonun Artar",
    text: "Birlikte spor yapmak, tek başına yaptığından çok daha sürdürülebilir hale gelir.",
  },
  {
    icon: "📅",
    title: "Düzenli Alışkanlık Kazandırır",
    text: "Etkinlikler ve challenge'lar seni ertelemeden harekete geçirir.",
  },
  {
    icon: "👥",
    title: "Yeni İnsanlarla Tanışırsın",
    text: "Aynı hedeflere sahip insanlarla spor temelli bağ kurarsın.",
  },
  {
    icon: "🎉",
    title: "Eğlenceli & Sosyal Deneyim",
    text: "Spor artık sıkıcı bir görev değil, keyifli sosyal bir aktivite olur.",
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
    text: "Aynı salonda yıllardır yalnız çalışıyormuşum meğer. FitBul sayesinde bench spotlayacak partner buldum.",
  },
  {
    name: "Ceren & Ali",
    role: "Yeni başlayanlar",
    text: "İkimiz de spora yeni başlıyorduk. Birlikte motive olup haftada 3 gün düzen yakaladık.",
  },
  {
    name: "Ayşe D.",
    role: "Yoga tutkunu",
    text: "Evde yalnız yoga yapmak sıkıcıydı. Artık online yoga arkadaşlarımla birlikte pratik yapıyoruz.",
  },
  {
    name: "Burak S.",
    role: "Basketbol seven",
    text: "Potaya top atmak istediğimde artık arkadaşlarımı aramama gerek kalmıyor. Uygulamadan hemen birini buluyorum.",
  },
  {
    name: "Elif T.",
    role: "Outdoor tutkunu",
    text: "Trekking için hep yalnız gidiyordum. Artık güvenli gruplar halinde doğada yürüyüş yapıyoruz.",
  },
];

const faqItems = [
  {
    question: "FitBul ücretli mi?",
    answer:
      "FitBul'u ücretsiz indirebilirsin. Ek özellikler için isteğe bağlı premium paketler bulunur.",
  },
  {
    question: "FitBul'da tanımadığım biriyle spor yapmak güvenli mi?",
    answer:
      "Tüm kullanıcılar davranış kurallarını kabul eder. Şikayet edilen profiller hızlıca incelenir.",
  },
  {
    question: "Konumumu sürekli açık bırakmam gerekiyor mu?",
    answer:
      "Hayır. Uygulama sadece spor arkadaşı listesi veya etkinlik ekranına girdiğinde konumunu kullanır.",
  },
  {
    question: "Hangi spor dallarını destekliyor?",
    answer:
      "Koşu, yürüyüş, spor salonu, yoga, pilates, bisiklet, yüzme, hiking ve daha fazlası.",
  },
  {
    question: "Challenge'lara katılmak zorunlu mu?",
    answer:
      "Hayır. Challenge'lar sadece ekstra motivasyon sağlar. İstersen sadece etkinliklere katılabilirsin.",
  },
  {
    question: "FitBul yeni başlayanlar için uygun mu?",
    answer:
      "Kesinlikle. Birçok kullanıcı spora yeni başlamak isteyen kişilerden oluşuyor. Seviye filtresi ile sana uygun partner bulursun.",
  },
  {
    question: "Mesajlaştığım kişiler telefon numaramı görebiliyor mu?",
    answer:
      "Hayır. Telefon gibi kişisel bilgiler gizlidir. Tüm iletişim uygulama içinde gerçekleşir.",
  },
  {
    question: "Arkadaşımı davet edebilir miyim?",
    answer:
      "Evet. Uygulama içi davet sistemi ile arkadaşlarını kolayca FitBul'a çağırabilirsin.",
  },
  {
    question: "Verilerim ve ilerlemem nasıl takip ediliyor?",
    answer:
      "Katıldığın etkinlikler ve challenge'lar üzerinden profilinde istatistikler ve grafikler oluşturulur.",
  },
  {
    question: "Hangi şehirlerde kullanılabiliyor?",
    answer:
      "FitBul, Türkiye genelinde kullanılabilir. Etkinlik yoğunluğu büyük şehirlerde daha fazladır.",
  },
];

function getInitials(name) {
  const parts = name.trim().split(" ");
  const first = parts[0]?.[0] || "";
  const last = parts.length > 1 ? parts[parts.length - 1][0] : "";
  return (first + last).toUpperCase();
}

function App() {
  const [activeFaq, setActiveFaq] = useState(null);

  const scrollToId = (id) => {
    const el = document.getElementById(id);
    if (el) el.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <div className="app">
      {/* NAVBAR */}
      <header className="top-nav">
        <div className="container nav-inner">
          <a href="#hero" className="logo">
            <img src="/images/logo.png" alt="FitBul Logo" className="logo-image" />
            <span className="logo-text">{APP_NAME}</span>
          </a>

          <nav className="nav-links">
            {navItems.map((item) => (
              <a key={item.href} href={item.href}>
                {item.label}
              </a>
            ))}
          </nav>

          <div className="nav-cta">
            <button
              className="btn primary"
              onClick={() => scrollToId("download")}
            >
              Uygulamayı İndir
            </button>
          </div>
        </div>
      </header>

      <main>
        {/* HERO */}
        <section id="hero" className="hero">
          <div className="hero-video-wrapper">
            <video autoPlay loop muted playsInline className="hero-video">
              <source src="/video/background_video.mp4" type="video/mp4" />
            </video>
            <div className="hero-video-overlay" />
          </div>

          <div className="container hero-grid">
            <div className="hero-content">
              <div className="hero-badge">
                <span className="hero-dot" />
                Spor partneri bulmanın en sosyal yolu
              </div>
              <h1>
                Tek başına değil,{" "}
                <span className="accent-text">doğru partnerle</span> hareket et.
              </h1>
              <p className="hero-subtitle">
                {APP_NAME}, spor seviyene ve hedeflerine göre sana uygun spor
                partnerlerini ve grupları bulmana yardımcı olur. Koşu, yoga,
                fitness, pilates, trekking ve daha fazlası tek uygulamada.
              </p>
              <div className="hero-actions">
                <button
                  className="btn primary btn-lg"
                  onClick={() => scrollToId("download")}
                >
                  Uygulamayı İndir
                </button>
                <button
                  className="btn outline btn-lg"
                  onClick={() => scrollToId("features")}
                >
                  Özellikleri Keşfet
                </button>
              </div>
              <div className="hero-meta">
                <span>⚡ 2 dakikada profilini oluştur</span>
                <span>🤝 Gerçek spor partnerleriyle eşleş</span>
                <span>📍 Şehrine ve semtine göre filtrele</span>
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

            <div className="how-card-grid">
              {howSteps.map((step, index) => (
                <div
                  key={step.title}
                  className="how-card"
                  style={{ animationDelay: `${index * 0.15}s` }}
                >
                  <div className="how-card-number">{index + 1}</div>
                  <h3>{step.title}</h3>
                  <p>{step.text}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* ABOUT / HAKKIMIZDA */}
        <section id="about" className="section">
          <div className="container">
            <div className="about-grid">
              <div className="about-image-wrapper">
                <img
                  src="/images/images3.jpg"
                  alt="FitBul Hakkında"
                  className="about-image"
                />
              </div>
              <div className="about-content">
                <h2>Hakkımızda</h2>
                <p>
                  FitBul, sporla sosyalleşmenin gücüne inanan bir ekip tarafından
                  hayata geçirildi. Amacımız, spor yapmak isteyen ancak tek başına
                  motive olamayan insanları bir araya getirmek.
                </p>
                <p>
                  Her gün binlerce kullanıcı FitBul üzerinden spor partneri buluyor,
                  etkinliklere katılıyor ve challenge'lara dahil olarak
                  hedeflerine ulaşıyor. Biz sadece bir uygulama değil, sporla
                  büyüyen bir topluluk inşa ediyoruz.
                </p>
                <div className="about-stats">
                  <div className="stat-item">
                    <div className="stat-number">10K+</div>
                    <div className="stat-label">Aktif Kullanıcı</div>
                  </div>
                  <div className="stat-item">
                    <div className="stat-number">50K+</div>
                    <div className="stat-label">Tamamlanan Etkinlik</div>
                  </div>
                  <div className="stat-item">
                    <div className="stat-number">30+</div>
                    <div className="stat-label">Spor Branşı</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* FEATURES */}
        <section id="features" className="section features-with-bg">
          <div className="features-bg-wrapper">
            <img src="/images/images2.png" alt="" className="features-bg-image" />
            <div className="features-bg-overlay" />
          </div>

          <div className="container">
            <div className="section-header center">
              <h2>Hizmetlerimiz</h2>
              <p>
                FitBul ile sporunu sosyal hale getir, hedeflerini takip et ve
                motivasyonunu sürekli canlı tut.
              </p>
            </div>

            <div className="features-list-clean">
              {mainFeatures.map((feature, index) => (
                <div
                  key={feature.number}
                  className="feature-item-clean"
                  style={{ animationDelay: `${index * 0.1}s` }}
                >
                  <div className="feature-clean-number">{feature.number}</div>
                  <div className="feature-clean-content">
                    <h3>{feature.title}</h3>
                    <p>{feature.description}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* NEDEN FİTBUL */}
        <section id="why" className="section section-muted">
          <div className="container">
            <div className="section-header center">
              <h2>Neden FitBul?</h2>
              <p>
                Çünkü “sonra bakarım” deyip ertelenen spor planlarını gerçek
                buluşmalara dönüştürmek için tasarlandı.
              </p>
            </div>

            <div className="why-new-grid">
              <div className="why-illustration">
                <img
                  src="/images/images.png"
                  alt="Neden FitBul?"
                  className="why-illustration-img"
                />
              </div>

              <div className="why-card-grid">
                {whyCards.map((item, index) => (
                  <div
                    key={item.title}
                    className="why-card"
                    style={{ animationDelay: `${index * 0.1}s` }}
                  >
                    <div className="why-card-icon">{item.icon}</div>
                    <h3>{item.title}</h3>
                    <p>{item.text}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* TESTIMONIALS */}
        <section id="testimonials" className="section testimonials-section">
          <div className="container testimonials-container">
            <div className="section-header center">
              <h2>Kullanıcılarımız ne diyor?</h2>
            </div>
          </div>

          <div className="testimonials-carousel">
            <div className="testimonials-row scroll-right">
              {[...testimonials, ...testimonials].map((t, index) => (
                <div key={`top-${index}`} className="testimonial-card-scroll">
                  <div className="testimonial-header">
                    <div className="avatar">{getInitials(t.name)}</div>
                    <div>
                      <div className="testimonial-name">{t.name}</div>
                      <div className="testimonial-role">{t.role}</div>
                    </div>
                  </div>
                  <p>"{t.text}"</p>
                </div>
              ))}
            </div>

            <div className="testimonials-row scroll-left">
              {[...testimonials, ...testimonials].map((t, index) => (
                <div key={`bottom-${index}`} className="testimonial-card-scroll">
                  <div className="testimonial-header">
                    <div className="avatar">{getInitials(t.name)}</div>
                    <div>
                      <div className="testimonial-name">{t.name}</div>
                      <div className="testimonial-role">{t.role}</div>
                    </div>
                  </div>
                  <p>"{t.text}"</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* FAQ */}
        <section id="faq" className="section section-muted">
          <div className="container">
            <div className="section-header center">
              <h2>Sıkça Sorulan Sorular</h2>
              <p>Merak ettiklerinin cevaplarını burada bulabilirsin.</p>
            </div>

            {/* 2 sütun, 5 satır = 10 soru */}
            <div className="faq-grid">
              {faqItems.map((item, idx) => {
                const isOpen = activeFaq === idx;
                return (
                  <div
                    key={item.question}
                    className={`faq-item-enhanced ${isOpen ? "open" : ""}`}
                  >
                    <button
                      className="faq-header-enhanced"
                      onClick={() => setActiveFaq(isOpen ? null : idx)}
                    >
                      <span className="faq-question">{item.question}</span>
                      <span className="faq-icon">
                        <svg
                          width="24"
                          height="24"
                          viewBox="0 0 24 24"
                          fill="none"
                          stroke="currentColor"
                          strokeWidth="2"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                        >
                          {isOpen ? (
                            <line x1="5" y1="12" x2="19" y2="12" />
                          ) : (
                            <>
                              <line x1="12" y1="5" x2="12" y2="19" />
                              <line x1="5" y1="12" x2="19" y2="12" />
                            </>
                          )}
                        </svg>
                      </span>
                    </button>
                    <div
                      className={`faq-body-enhanced ${
                        isOpen ? "open" : ""
                      }`}
                    >
                      <p>{item.answer}</p>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        </section>

        {/* DOWNLOAD / CTA */}
        <section id="download" className="section section-accent-enhanced">
          <div className="cta-decoration cta-decoration-1" />
          <div className="cta-decoration cta-decoration-2" />
          <div className="cta-decoration cta-decoration-3" />

          <div className="container download-inner-enhanced">
            <div className="cta-content">
              <div className="cta-icon">🚀</div>
              <h2>Spor partnerini bulmaya hazır mısın?</h2>
              <p>
                Uygulamayı indir, profilini oluştur ve şehrindeki spor
                partnerleriyle tanış. Motivasyonun artsın, erteleme
                alışkanlığın azalsın.
              </p>
              <div className="store-buttons">
                <button className="store-btn-enhanced">
                  <svg
                    className="store-icon"
                    width="24"
                    height="24"
                    viewBox="0 0 24 24"
                    fill="currentColor"
                  >
                    <path d="M18.71 19.5C17.88 20.74 17 21.95 15.66 21.97C14.32 22 13.89 21.18 12.37 21.18C10.84 21.18 10.37 21.95 9.1 22C7.79 22.05 6.8 20.68 5.96 19.47C4.25 17 2.94 12.45 4.7 9.39C5.57 7.87 7.13 6.91 8.82 6.88C10.1 6.86 11.32 7.75 12.11 7.75C12.89 7.75 14.37 6.68 15.92 6.84C16.57 6.87 18.39 7.1 19.56 8.82C19.47 8.88 17.39 10.1 17.41 12.63C17.44 15.65 20.06 16.66 20.09 16.67C20.06 16.74 19.67 18.11 18.71 19.5ZM13 3.5C13.73 2.67 14.94 2.04 15.94 2C16.07 3.17 15.6 4.35 14.9 5.19C14.21 6.04 13.07 6.7 11.95 6.61C11.8 5.46 12.36 4.26 13 3.5Z" />
                  </svg>
                  <div>
                    <span className="store-small">Download on the</span>
                    <span className="store-big">App Store</span>
                  </div>
                </button>
                <button className="store-btn-enhanced">
                  <svg
                    className="store-icon"
                    width="24"
                    height="24"
                    viewBox="0 0 24 24"
                    fill="currentColor"
                  >
                    <path d="M3,20.5V3.5C3,2.91 3.34,2.39 3.84,2.15L13.69,12L3.84,21.85C3.34,21.6 3,21.09 3,20.5M16.81,15.12L6.05,21.34L14.54,12.85L16.81,15.12M20.16,10.81C20.5,11.08 20.75,11.5 20.75,12C20.75,12.5 20.53,12.9 20.18,13.18L17.89,14.5L15.39,12L17.89,9.5L20.16,10.81M6.05,2.66L16.81,8.88L14.54,11.15L6.05,2.66Z" />
                  </svg>
                  <div>
                    <span className="store-small">GET IT ON</span>
                    <span className="store-big">Google Play</span>
                  </div>
                </button>
              </div>
              <div className="cta-features">
                <span>✓ Ücretsiz İndir</span>
                <span>✓ Hemen Başla</span>
                <span>✓ Kredi Kartı Gerektirmez</span>
              </div>
            </div>
          </div>
        </section>
      </main>

      {/* FOOTER */}
      <footer className="footer">
        <div className="container footer-inner">
          <div className="footer-left">
            <a href="#hero" className="logo">
              <img
                src="/images/logo.png"
                alt="FitBul Logo"
                className="logo-image"
              />
              <span className="logo-text">{APP_NAME}</span>
            </a>
            <p className="footer-text">
              {APP_NAME}, sporla sosyalleşmek isteyenleri bir araya getiren
              yeşil ve enerjik bir topluluk.
            </p>
          </div>
          <div className="footer-columns">
            <div>
              <h4>Ürün</h4>
              <a href="#about">Hakkımızda</a>
              <a href="#features">Hizmetlerimiz</a>
              <a href="#why">Neden FitBul?</a>
            </div>
            <div>
              <h4>Topluluk</h4>
              <a href="#testimonials">Kullanıcılar</a>
              <a href="#faq">SSS</a>
            </div>
            <div>
              <h4>İletişim</h4>
              <p>hello@fitbul.app</p>
              <p>Instagram / TikTok: @FitBul</p>
            </div>
          </div>
        </div>
        <div className="footer-bottom">
          <div className="container footer-bottom-inner">
            <span>© {new Date().getFullYear()} {APP_NAME}</span>
            <div className="footer-links">
              <a href="#hero">Kullanım Şartları</a>
              <a href="#hero">Gizlilik</a>
              <a href="#download">Uygulamayı İndir</a>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}

export default App;
