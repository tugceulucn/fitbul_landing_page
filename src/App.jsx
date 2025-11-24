// src/App.jsx
import React, { useState, useEffect } from "react";

const APP_NAME = "FitBul";

const navItems = [
  { label: "Hakkımızda", href: "#about" },
  { label: "Hizmetlerimiz", href: "#features" },
  { label: "Neden FitBul", href: "#why" },
];

const mainFeatures = [
  {
    number: "1",
    title: "Anında Spor Arkadaşı Bul",
    description:
      "FitBul app ile bulunduğun konuma göre aynı anda spor yapmak isteyen kişileri bul. Tek dokunuşla eşleşebilir, mesajlaşıp buluşabilir ve sporunu sosyal hale getirebilirsin. Artık \"spor yapacak kimse yok\" bahanesi yok.",
    image: "/images/feature1.jpg",
  },
  {
    number: "2",
    title: "Etkinlik Oluştur & Katıl",
    description:
      "Koşu grubu, sabah yürüyüşü, yoga etkinliği, açık hava fitness… Topluluk etkinliklerine katıl veya kendi spor etkinliğini oluştur. Şehrin spor etkinlik merkezi artık FitBul'da.",
    image: "/images/feature2.jpg",
  },
  {
    number: "3",
    title: "Challenge Oluştur & Katıl",
    description:
      "Hedef koy, challenge başlat veya başkalarının meydan okumalarına katıl. İster \"7 gün üst üste koşu\", ister \"Ayda 100.000 adım\". FitBul, hedeflerini takip eden bir ilerleme sistemi sunar ve motivasyonunu sürekli canlı tutar.",
    image: "/images/feature3.jpg",
  },
  {
    number: "4",
    title: "Güçlü Topluluk",
    description:
      "Spor Yaparken Özendiren, Harekete Geçiren Bir Topluluk. Aynı hedeflere sahip yüzlerce kişiyle tanış. Motivasyonunu paylaş, arkadaş edin, sporun sosyal yanını keşfet.",
    image: "/images/feature4.jpg",
  },
  {
    number: "5",
    title: "İlerleme Takibi",
    description:
      "Spor Yolculuğunu Takip Et. Tamamladığın etkinliklere, katıldığın challenge'lara ve düzenli spor alışkanlığına dair tüm veriler tek ekranda. Spor performansını şeffaf ve eğlenceli bir şekilde takip et.",
    image: "/images/feature5.jpg",
  },
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

const whyCards = [
  {
    icon: "📈",
    title: "Motivasyonun Artar",
    text: "Birlikte spor yapmak, bırakmayı zorlaştırır.",
  },
  {
    icon: "📅",
    title: "Düzenli Spor Alışkanlığı Oluşturur",
    text: "Challenge'lar ve etkinlikler seni harekete geçirir.",
  },
  {
    icon: "👥",
    title: "Yeni İnsanlarla Tanışırsın",
    text: "Aynı ilgi alanına sahip kişilerle spor temelli bağ kurarsın.",
  },
  {
    icon: "🎉",
    title: "Eğlenceli & Sosyal Bir Deneyim",
    text: "Spor artık yalnız değil; topluluğun yan yana.",
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
  {
    name: "Ayşe D.",
    role: "Yoga tutkunu",
    text: "Evde yalnız yoga yapmak sıkıcıydı. Şimdi haftada 3 kez online yoga arkadaşlarımla birlikte pratik yapıyoruz.",
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
    answer: "Hayır, FitBul tamamen ücretsiz indirilebilir. Premium paket mevcuttur.",
  },
  {
    question: "FitBul'da tanımadığım biriyle spor yapmak güvenli mi?",
    answer:
      "FitBul'da tüm profiller doğrulama sürecinden geçiriliyor. Kullanıcılar davranış kurallarını kabul etmek zorundadır. Güvenlik şikayetlerinde hızlı aksiyon alınır.",
  },
  {
    question: "Spor arkadaşı bulmak için konumumu sürekli açık bırakmam gerekiyor mu?",
    answer:
      "Hayır. Uygulama yalnızca spor arkadaşı listesi veya etkinlik ekranına girdiğinde konumunu kullanır.",
  },
  {
    question: "Hangi spor dallarını destekliyor?",
    answer:
      "Koşu, yürüyüş, spor salonu, yoga, pilates, bisiklet, yüzme, hiking ve daha fazlası.",
  },
  {
    question: "Challenge'lara katılmazsam uygulamadan verim alamam mı?",
    answer:
      "Hayır. Challenge'lar sadece ekstra motivasyon sağlar, zorunlu değildir.",
  },
  {
    question: "FitBul topluluğu nasıl çalışıyor?",
    answer:
      "Kullanıcılar etkinliklere katılır, spor arkadaşı bulur veya challenge oluşturur. Tamamen pozitif, destekleyici ve motive edici bir kültür vardır.",
  },
  {
    question: "FitBul yeni başlayanlar için uygun mu?",
    answer:
      "Kesinlikle. Birçok kullanıcı spora başlamak için motivasyon arıyor. FitBul özellikle yeni başlayanlara destek olan bir topluluk sunar.",
  },
  {
    question: "Mesajlaştığım kişiler iletişim bilgilerimi görebiliyor mu?",
    answer:
      "Hayır. Telefon numarası gibi bilgiler gizlidir. Tüm iletişim FitBul içinde gerçekleşir.",
  },
  {
    question: "Arkadaşımı davet edebilir miyim?",
    answer: "Evet, uygulama içi davet sistemi ile arkadaşlarını çağırabilirsin.",
  },
  {
    question: "Spor verilerim ve ilerlemem nasıl takip ediliyor?",
    answer:
      "Etkinliklere ve challenge'lara katıldıkça profilinde ilerleme grafikleri ve istatistikler oluşur. Böylece ne kadar yol aldığını net bir şekilde görebilirsin.",
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
  const [currentFeature, setCurrentFeature] = useState(0);

  // Auto-scroll for features
  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentFeature((prev) => (prev + 1) % mainFeatures.length);
    }, 5000);
    return () => clearInterval(timer);
  }, []);

  const handleFeatureScroll = (direction) => {
    if (direction === "next") {
      setCurrentFeature((prev) => (prev + 1) % mainFeatures.length);
    } else {
      setCurrentFeature((prev) => (prev - 1 + mainFeatures.length) % mainFeatures.length);
    }
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
            <button className="btn primary">İletişim</button>
          </div>
        </div>
      </header>

      <main>
        {/* HERO */}
        <section id="hero" className="hero">
          <div className="hero-video-wrapper">
            <video 
              autoPlay 
              loop 
              muted 
              playsInline 
              className="hero-video"
            >
              <source src="/video/background_video.mp4" type="video/mp4" />
            </video>
            <div className="hero-video-overlay"></div>
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
                    const el = document.getElementById("features");
                    if (el) el.scrollIntoView({ behavior: "smooth" });
                  }}
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
                  style={{ animationDelay: `${index * 0.1}s` }}
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
                  etkinliklere katılıyor ve challenge'lara katılarak hedeflerine ulaşıyor. 
                  Biz sadece bir uygulama değil, sporla büyüyen bir topluluk inşa ediyoruz.
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

        {/* FEATURES - SCROLLABLE WITH IMAGES */}
        <section id="features" className="section features-with-bg">
          <div className="features-bg-wrapper">
            <img src="/images/images2.png" alt="" className="features-bg-image" />
            <div className="features-bg-overlay"></div>
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
                  style={{
                    animationDelay: `${index * 0.1}s`
                  }}
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
                Çünkü "sonra bakarım" deyip ertelenen spor planlarını gerçek
                buluşmalara çevirmek için tasarlandı.
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

        {/* TESTIMONIALS - DOUBLE ROW SCROLLING */}
        <section className="section testimonials-section" id="testimonials">
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

        {/* FAQ - ENHANCED ANIMATED */}
        <section id="faq" className="section section-muted">
          <div className="container">
            <div className="section-header center">
              <h2>Sıkça sorulan sorular</h2>
              <p>Merak ettiklerinin cevaplarını burada bulabilirsin</p>
            </div>

            <div className="faq-two-column">
              <div className="faq-column">
                {faqItems.slice(0, 5).map((item, idx) => {
                  const isOpen = activeFaq === idx;
                  return (
                    <div
                      key={item.question}
                      className={`faq-item-enhanced ${isOpen ? "open" : ""}`}
                    >
                      <button
                        className="faq-header-enhanced"
                        onClick={() =>
                          setActiveFaq(isOpen ? null : idx)
                        }
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
                      <div className={`faq-body-enhanced ${isOpen ? "open" : ""}`}>
                        <p>{item.answer}</p>
                      </div>
                    </div>
                  );
                })}
              </div>

              <div className="faq-column">
                {faqItems.slice(5).map((item, idx) => {
                  const actualIdx = idx + 5;
                  const isOpen = activeFaq === actualIdx;
                  return (
                    <div
                      key={item.question}
                      className={`faq-item-enhanced ${isOpen ? "open" : ""}`}
                    >
                      <button
                        className="faq-header-enhanced"
                        onClick={() =>
                          setActiveFaq(isOpen ? null : actualIdx)
                        }
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
                      <div className={`faq-body-enhanced ${isOpen ? "open" : ""}`}>
                        <p>{item.answer}</p>
                      </div>
                    </div>
                  );
                })}
              </div>
            </div>
          </div>
        </section>

        {/* DOWNLOAD / CTA */}
        <section id="download" className="section section-accent-enhanced">
          <div className="cta-decoration cta-decoration-1"></div>
          <div className="cta-decoration cta-decoration-2"></div>
          <div className="cta-decoration cta-decoration-3"></div>
          
          <div className="container download-inner-enhanced">
            <div className="cta-content">
              <div className="cta-icon">🚀</div>
              <h2>Spor partnerini bulmaya hazır mısın?</h2>
              <p>
                Uygulamayı indir, profilini oluştur ve şehrindeki spor
                partnerleriyle tanış. Motivasyonun artsın, erteleme alışkanlığın
                azalsın.
              </p>
              <div className="store-buttons">
                <button className="store-btn-enhanced">
                  <svg className="store-icon" width="24" height="24" viewBox="0 0 24 24" fill="currentColor">
                    <path d="M18.71 19.5C17.88 20.74 17 21.95 15.66 21.97C14.32 22 13.89 21.18 12.37 21.18C10.84 21.18 10.37 21.95 9.09997 22C7.78997 22.05 6.79997 20.68 5.95997 19.47C4.24997 17 2.93997 12.45 4.69997 9.39C5.56997 7.87 7.12997 6.91 8.81997 6.88C10.1 6.86 11.32 7.75 12.11 7.75C12.89 7.75 14.37 6.68 15.92 6.84C16.57 6.87 18.39 7.1 19.56 8.82C19.47 8.88 17.39 10.1 17.41 12.63C17.44 15.65 20.06 16.66 20.09 16.67C20.06 16.74 19.67 18.11 18.71 19.5ZM13 3.5C13.73 2.67 14.94 2.04 15.94 2C16.07 3.17 15.6 4.35 14.9 5.19C14.21 6.04 13.07 6.7 11.95 6.61C11.8 5.46 12.36 4.26 13 3.5Z"/>
                  </svg>
                  <div>
                    <span className="store-small">Download on the</span>
                    <span className="store-big">App Store</span>
                  </div>
                </button>
                <button className="store-btn-enhanced">
                  <svg className="store-icon" width="24" height="24" viewBox="0 0 24 24" fill="currentColor">
                    <path d="M3,20.5V3.5C3,2.91 3.34,2.39 3.84,2.15L13.69,12L3.84,21.85C3.34,21.6 3,21.09 3,20.5M16.81,15.12L6.05,21.34L14.54,12.85L16.81,15.12M20.16,10.81C20.5,11.08 20.75,11.5 20.75,12C20.75,12.5 20.53,12.9 20.18,13.18L17.89,14.5L15.39,12L17.89,9.5L20.16,10.81M6.05,2.66L16.81,8.88L14.54,11.15L6.05,2.66Z"/>
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
              <img src="public/images/logo.png" alt="FitBul Logo" className="logo-image" />
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