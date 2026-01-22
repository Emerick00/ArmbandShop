import React, { useState, useEffect } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import WhatsAppButton from '../components/WhatsAppButton';
import { Star, Check, Clock, Shield, Truck, Award, Package, CreditCard } from 'lucide-react';

export default function HomePage() {
  const navigate = useNavigate();
  const [timeLeft, setTimeLeft] = useState({ hours: 3, minutes: 47, seconds: 22 });
  const [showExitPopup, setShowExitPopup] = useState(false);

  useEffect(() => {
    const timer = setInterval(() => {
      setTimeLeft(prev => {
        let { hours, minutes, seconds } = prev;
        seconds--;
        if (seconds < 0) {
          seconds = 59;
          minutes--;
        }
        if (minutes < 0) {
          minutes = 59;
          hours--;
        }
        if (hours < 0) {
          hours = 23;
          minutes = 59;
          seconds = 59;
        }
        return { hours, minutes, seconds };
      });
    }, 1000);

    const handleMouseLeave = (e) => {
      if (e.clientY <= 0) {
        setShowExitPopup(true);
      }
    };

    document.addEventListener('mouseleave', handleMouseLeave);

    return () => {
      clearInterval(timer);
      document.removeEventListener('mouseleave', handleMouseLeave);
    };
  }, []);

  const products = [
    {
      id: 1,
      name: 'Personalisiertes Herren Armband',
      image: 'https://images.unsplash.com/photo-1625417255685-9889e8dd94d2?w=600',
      price: 0.99,
      originalPrice: 36.99,
      badge: 'BESTSELLER'
    },
    {
      id: 2,
      name: 'Paar-Armband Set',
      image: 'https://images.unsplash.com/photo-1640551855927-78d8ce33c586?w=600',
      price: 19.99,
      originalPrice: 59.99,
      badge: 'BELIEBT'
    },
    {
      id: 3,
      name: 'Edelstahl Kette mit Gravur',
      image: 'https://images.unsplash.com/photo-1704536917568-af87f9a87312?w=600',
      price: 24.99,
      originalPrice: 49.99,
      badge: 'NEU'
    }
  ];

  const reviews = [
    {
      name: 'Lisa M.',
      rating: 5,
      text: 'Absolut perfektes Geschenk! Die Gravur ist wunderschön gestochen und das Leder fühlt sich hochwertig an. Mein Mann trägt es jeden Tag!',
      date: '15.01.2025'
    },
    {
      name: 'Thomas B.',
      rating: 5,
      text: 'Sehr zufrieden mit der Qualität. Die Lieferung kam wie versprochen in 3 Tagen an. Gravur ist präzise und elegant. Klare Kaufempfehlung!',
      date: '12.01.2025'
    },
    {
      name: 'Sarah K.',
      rating: 5,
      text: 'Toller Service und wunderschönes Armband. Die Personalisierung macht es zu einem einzigartigen Geschenk. Würde hier wieder bestellen!',
      date: '08.01.2025'
    }
  ];

  return (
    <div data-testid="homepage" style={{ background: '#FAFBFC' }}>
      <Navbar />
      
      {/* Hero Section */}
      <section className="hero-section" data-testid="hero-section">
        <div className="container" style={{ textAlign: 'center' }}>
          <div style={{ maxWidth: '900px', margin: '0 auto' }}>
            <div className="badge" style={{ marginBottom: '30px' }}>LIMITIERTE EDITION</div>
            <h1 style={{
              fontSize: 'clamp(42px, 6vw, 68px)',
              fontWeight: '600',
              marginBottom: '24px',
              lineHeight: '1.1',
              letterSpacing: '-0.02em'
            }} data-testid="hero-title">
              Personalisiertes Armband<br />für Männer mit Gravur
            </h1>
            <div className='divider'></div>
            <p style={{
              fontSize: 'clamp(16px, 2vw, 20px)',
              marginBottom: '50px',
              color: '#6B7280',
              fontWeight: '400',
              letterSpacing: '0.3px',
              lineHeight: '1.8'
            }} data-testid='hero-subtitle'>
              Handgefertigte Armbänder aus echtem Leder • Lasergravur in 24 Stunden<br/>
              Versandkostenfrei in Deutschland • 30 Tage Rückgaberecht
            </p>
            
            <div style={{ marginBottom: '50px' }}>
              <div style={{
                display: 'inline-block',
                padding: '36px 60px',
                background: 'white',
                border: '3px solid #E5E7EB',
                borderRadius: '12px',
                marginBottom: '20px',
                boxShadow: '0 4px 20px rgba(0,0,0,0.08)'
              }}>
                <div style={{ marginBottom: '16px' }}>
                  <span style={{
                    fontSize: '18px',
                    textDecoration: 'line-through',
                    opacity: 0.4,
                    marginRight: '16px',
                    fontWeight: '300'
                  }}>€36,99</span>
                  <span style={{
                    fontSize: '52px',
                    fontWeight: '700',
                    background: 'linear-gradient(135deg, #D4A574 0%, #2D5F7F 100%)',
                    WebkitBackgroundClip: 'text',
                    WebkitTextFillColor: 'transparent'
                  }} data-testid='hero-price'>€0,99</span>
                </div>
                <div style={{ color: '#EF4444', fontSize: '15px', letterSpacing: '0.5px', fontWeight: '600' }}>
                  🎁 NEUKUNDEN-ANGEBOT • SPAREN SIE 89%
                </div>
              </div>
            </div>
            
            <div style={{ display: 'flex', gap: '20px', justifyContent: 'center', flexWrap: 'wrap', marginBottom: '40px' }}>
              <button 
                className='btn-primary' 
                onClick={() => navigate('/produkt')}
                data-testid='cta-gravieren-button'
              >
                JETZT PERSONALISIEREN
              </button>
              <button 
                className='btn-secondary' 
                onClick={() => document.getElementById('products').scrollIntoView({ behavior: 'smooth' })}
                data-testid='bestseller-button'
              >
                KOLLEKTION ANSEHEN
              </button>
            </div>

            <div style={{ display: 'flex', gap: '30px', justifyContent: 'center', flexWrap: 'wrap', marginTop: '50px' }}>
              <div style={{ display: 'flex', alignItems: 'center', gap: '8px', color: '#10B981', fontWeight: '500', fontSize: '14px' }}>
                <Check size={18} strokeWidth={3} />
                Über 10.000 zufriedene Kunden
              </div>
              <div style={{ display: 'flex', alignItems: 'center', gap: '8px', color: '#10B981', fontWeight: '500', fontSize: '14px' }}>
                <Check size={18} strokeWidth={3} />
                Versand in 2-4 Werktagen
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Countdown Timer */}
      <div className='container' data-testid='countdown-timer'>
        <div className='countdown-timer'>
          <Clock size={22} style={{ display: 'inline-block', marginRight: '12px', verticalAlign: 'middle' }} />
          ANGEBOT ENDET IN: {String(timeLeft.hours).padStart(2, '0')}:{String(timeLeft.minutes).padStart(2, '0')}:{String(timeLeft.seconds).padStart(2, '0')}
        </div>
      </div>

      {/* Wie funktioniert es Section */}
      <section style={{ padding: '100px 20px', background: 'white' }}>
        <div className='container'>
          <div style={{ textAlign: 'center', marginBottom: '70px' }}>
            <h2 style={{
              fontSize: 'clamp(36px, 5vw, 48px)',
              fontWeight: '600',
              marginBottom: '20px'
            }}>So einfach funktioniert's</h2>
            <div className='divider'></div>
            <p style={{ color: '#6B7280', fontSize: '16px', maxWidth: '700px', margin: '20px auto 0' }}>
              Ihr personalisiertes Armband in nur 4 einfachen Schritten
            </p>
          </div>
          
          <div style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(250px, 1fr))',
            gap: '40px'
          }}>
            <div style={{ textAlign: 'center' }}>
              <div style={{
                width: '80px',
                height: '80px',
                background: 'linear-gradient(135deg, #2D5F7F 0%, #1a2332 100%)',
                borderRadius: '50%',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                margin: '0 auto 24px',
                fontSize: '32px',
                fontWeight: '700',
                color: 'white',
                boxShadow: '0 8px 24px rgba(45, 95, 127, 0.3)'
              }}>1</div>
              <h3 style={{ fontSize: '20px', marginBottom: '12px', fontWeight: '600' }}>Armband auswählen</h3>
              <p style={{ color: '#6B7280', fontSize: '15px', lineHeight: '1.7' }}>
                Wählen Sie Ihr Lieblingsarmband aus unserer handverlesenen Kollektion
              </p>
            </div>

            <div style={{ textAlign: 'center' }}>
              <div style={{
                width: '80px',
                height: '80px',
                background: 'linear-gradient(135deg, #D4A574 0%, #C9975F 100%)',
                borderRadius: '50%',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                margin: '0 auto 24px',
                fontSize: '32px',
                fontWeight: '700',
                color: 'white',
                boxShadow: '0 8px 24px rgba(212, 165, 116, 0.3)'
              }}>2</div>
              <h3 style={{ fontSize: '20px', marginBottom: '12px', fontWeight: '600' }}>Text eingeben</h3>
              <p style={{ color: '#6B7280', fontSize: '15px', lineHeight: '1.7' }}>
                Geben Sie Ihren Wunschtext ein (bis zu 20 Zeichen). Live-Vorschau inklusive!
              </p>
            </div>

            <div style={{ textAlign: 'center' }}>
              <div style={{
                width: '80px',
                height: '80px',
                background: 'linear-gradient(135deg, #10B981 0%, #059669 100%)',
                borderRadius: '50%',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                margin: '0 auto 24px',
                fontSize: '32px',
                fontWeight: '700',
                color: 'white',
                boxShadow: '0 8px 24px rgba(16, 185, 129, 0.3)'
              }}>3</div>
              <h3 style={{ fontSize: '20px', marginBottom: '12px', fontWeight: '600' }}>Bestellen</h3>
              <p style={{ color: '#6B7280', fontSize: '15px', lineHeight: '1.7' }}>
                Sicher bezahlen mit PayPal, Klarna oder Kreditkarte
              </p>
            </div>

            <div style={{ textAlign: 'center' }}>
              <div style={{
                width: '80px',
                height: '80px',
                background: 'linear-gradient(135deg, #EF4444 0%, #DC2626 100%)',
                borderRadius: '50%',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                margin: '0 auto 24px',
                fontSize: '32px',
                fontWeight: '700',
                color: 'white',
                boxShadow: '0 8px 24px rgba(239, 68, 68, 0.3)'
              }}>4</div>
              <h3 style={{ fontSize: '20px', marginBottom: '12px', fontWeight: '600' }}>Empfangen</h3>
              <p style={{ color: '#6B7280', fontSize: '15px', lineHeight: '1.7' }}>
                Gravur in 24h • Versand mit DHL • Lieferung in 2-4 Werktagen
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Trust Section */}
      <section style={{ padding: '80px 20px', background: '#F3F4F6' }} data-testid='trust-section'>
        <div className='container'>
          <div style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))',
            gap: '30px'
          }}>
            <div className='trust-badge' style={{ flexDirection: 'column', padding: '32px', textAlign: 'center', height: '100%' }}>
              <Star className='gold-text' size={36} style={{ marginBottom: '16px' }} />
              <div style={{ fontSize: '15px', fontWeight: '600', marginBottom: '8px', letterSpacing: '0.5px' }}>4,8/5 STERNE</div>
              <div style={{ fontSize: '13px', color: '#6B7280', lineHeight: '1.6' }}>Über 385 begeisterte Kunden bewerten uns mit Bestnoten</div>
            </div>
            
            <div className='trust-badge' style={{ flexDirection: 'column', padding: '32px', textAlign: 'center', height: '100%' }}>
              <Truck size={36} style={{ marginBottom: '16px', color: '#2D5F7F' }} />
              <div style={{ fontSize: '15px', fontWeight: '600', marginBottom: '8px', letterSpacing: '0.5px' }}>KOSTENLOSER VERSAND</div>
              <div style={{ fontSize: '13px', color: '#6B7280', lineHeight: '1.6' }}>Versandkostenfrei innerhalb Deutschlands mit DHL</div>
            </div>
            
            <div className='trust-badge' style={{ flexDirection: 'column', padding: '32px', textAlign: 'center', height: '100%' }}>
              <Shield size={36} style={{ marginBottom: '16px', color: '#2D5F7F' }} />
              <div style={{ fontSize: '15px', fontWeight: '600', marginBottom: '8px', letterSpacing: '0.5px' }}>30 TAGE RÜCKGABERECHT</div>
              <div style={{ fontSize: '13px', color: '#6B7280', lineHeight: '1.6' }}>Nicht zufrieden? Geld zurück – ohne Wenn und Aber</div>
            </div>
            
            <div className='trust-badge' style={{ flexDirection: 'column', padding: '32px', textAlign: 'center', height: '100%' }}>
              <Award size={36} style={{ marginBottom: '16px', color: '#2D5F7F' }} />
              <div style={{ fontSize: '15px', fontWeight: '600', marginBottom: '8px', letterSpacing: '0.5px' }}>DEUTSCHE QUALITÄT</div>
              <div style={{ fontSize: '13px', color: '#6B7280', lineHeight: '1.6' }}>Handgefertigt in Deutschland mit Premium-Materialien</div>
            </div>
          </div>
        </div>
      </section>

      {/* Lieferung Section */}
      <section style={{ padding: '100px 20px', background: 'white' }}>
        <div className='container'>
          <div style={{ maxWidth: '900px', margin: '0 auto' }}>
            <div style={{ textAlign: 'center', marginBottom: '60px' }}>
              <h2 style={{ fontSize: 'clamp(36px, 5vw, 48px)', fontWeight: '600', marginBottom: '20px' }}>
                Versand & Lieferung
              </h2>
              <div className='divider'></div>
            </div>

            <div className='info-box' style={{ marginBottom: '30px' }}>
              <div style={{ display: 'flex', alignItems: 'start', gap: '16px' }}>
                <Package size={32} className='blue-text' style={{ flexShrink: 0, marginTop: '4px' }} />
                <div>
                  <h4 style={{ fontSize: '18px', fontWeight: '600', marginBottom: '12px' }}>
                    Wie lange dauert die Gravur?
                  </h4>
                  <p style={{ fontSize: '15px', color: '#4B5563', lineHeight: '1.7' }}>
                    Nach Bestelleingang beginnen wir sofort mit der Lasergravur Ihres Armbands. 
                    Dieser Prozess dauert <strong>24 Stunden</strong>. Danach wird Ihr personalisiertes 
                    Armband sorgfältig verpackt und verschickt.
                  </p>
                </div>
              </div>
            </div>

            <div className='info-box' style={{ marginBottom: '30px' }}>
              <div style={{ display: 'flex', alignItems: 'start', gap: '16px' }}>
                <Truck size={32} className='blue-text' style={{ flexShrink: 0, marginTop: '4px' }} />
                <div>
                  <h4 style={{ fontSize: '18px', fontWeight: '600', marginBottom: '12px' }}>
                    Wie wird versendet?
                  </h4>
                  <p style={{ fontSize: '15px', color: '#4B5563', lineHeight: '1.7', marginBottom: '12px' }}>
                    Der Versand erfolgt ausschließlich mit <strong>DHL</strong> – Deutschlands 
                    zuverlässigstem Paketdienst. Sie erhalten automatisch:
                  </p>
                  <ul style={{ fontSize: '15px', color: '#4B5563', lineHeight: '1.9', paddingLeft: '20px' }}>
                    <li>✓ Versandbestätigung per E-Mail</li>
                    <li>✓ Tracking-Nummer zur Sendungsverfolgung</li>
                    <li>✓ Benachrichtigung bei Zustellung</li>
                  </ul>
                </div>
              </div>
            </div>

            <div className='info-box'>
              <div style={{ display: 'flex', alignItems: 'start', gap: '16px' }}>
                <Clock size={32} className='blue-text' style={{ flexShrink: 0, marginTop: '4px' }} />
                <div>
                  <h4 style={{ fontSize: '18px', fontWeight: '600', marginBottom: '12px' }}>
                    Wann kommt mein Paket an?
                  </h4>
                  <p style={{ fontSize: '15px', color: '#4B5563', lineHeight: '1.7', marginBottom: '8px' }}>
                    <strong>Lieferzeit innerhalb Deutschlands:</strong> 2-4 Werktage nach Versand
                  </p>
                  <p style={{ fontSize: '14px', color: '#6B7280', lineHeight: '1.7' }}>
                    Gesamtdauer (Gravur + Versand): 3-5 Werktage ab Bestellung
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Products Grid */}
      <section id='products' className='section-padding' data-testid='products-section' style={{ background: '#F3F4F6' }}>
        <div className='container'>
          <div style={{ textAlign: 'center', marginBottom: '70px' }}>
            <h2 style={{
              fontSize: 'clamp(36px, 5vw, 52px)',
              fontWeight: '600',
              marginBottom: '20px'
            }}>Unsere Bestseller</h2>
            <div className='divider'></div>
            <p style={{ color: '#6B7280', fontSize: '16px', maxWidth: '600px', margin: '20px auto 0' }}>
              Jedes Armband wird mit Liebe handgefertigt und mit Laserpräzision graviert
            </p>
          </div>
          
          <div className='grid-3'>
            {products.map(product => (
              <div 
                key={product.id} 
                className='product-card'
                onClick={() => navigate('/produkt')}
                data-testid={`product-card-${product.id}`}
              >
                <div style={{ position: 'relative' }}>
                  <img src={product.image} alt={product.name} />
                  <div style={{
                    position: 'absolute',
                    top: '20px',
                    right: '20px'
                  }}>
                    <div className='badge'>{product.badge}</div>
                  </div>
                </div>
                <div style={{ padding: '32px' }}>
                  <h3 style={{ fontSize: '22px', marginBottom: '16px', fontWeight: '600' }}>{product.name}</h3>
                  <div style={{ display: 'flex', alignItems: 'center', gap: '8px', marginBottom: '20px' }}>
                    <span className='star-rating' style={{ fontSize: '18px' }}>★★★★★</span>
                    <span style={{ color: '#6B7280', fontSize: '14px', fontWeight: '500' }}>(4,8)</span>
                  </div>
                  <div style={{ marginBottom: '24px' }}>
                    <span style={{
                      fontSize: '32px',
                      fontWeight: '700',
                      background: 'linear-gradient(135deg, #D4A574 0%, #2D5F7F 100%)',
                      WebkitBackgroundClip: 'text',
                      WebkitTextFillColor: 'transparent'
                    }}>€{product.price}</span>
                    <span style={{
                      marginLeft: '12px',
                      textDecoration: 'line-through',
                      opacity: 0.3,
                      fontSize: '18px'
                    }}>€{product.originalPrice}</span>
                  </div>
                  <button className='btn-secondary' style={{ width: '100%' }}>
                    Produkt Ansehen
                  </button>
                </div>
              </div>
            ))}</div>
        </div>
      </section>

      {/* Reviews Section */}
      <section style={{ padding: '100px 20px', background: 'white' }} data-testid='reviews-section'>
        <div className='container'>
          <div style={{ textAlign: 'center', marginBottom: '70px' }}>
            <h2 style={{
              fontSize: 'clamp(36px, 5vw, 52px)',
              fontWeight: '600',
              marginBottom: '20px'
            }}>Das sagen unsere Kunden</h2>
            <div className='divider'></div>
            <p style={{ color: '#6B7280', fontSize: '16px' }}>
              Über 10.000 zufriedene Kunden vertrauen auf unsere Qualität
            </p>
          </div>
          
          <div className='grid-3'>
            {reviews.map((review, index) => (
              <div key={index} className='review-card' data-testid={`review-card-${index}`}>
                <div style={{ marginBottom: '20px' }}>
                  <div className='star-rating' style={{ fontSize: '22px', marginBottom: '16px', letterSpacing: '3px' }}>
                    {'★'.repeat(review.rating)}
                  </div>
                  <div style={{ fontWeight: '600', fontSize: '16px', marginBottom: '4px' }}>{review.name}</div>
                  <div style={{ color: '#9CA3AF', fontSize: '13px', letterSpacing: '0.3px' }}>{review.date}</div>
                </div>
                <p style={{ lineHeight: '1.8', color: '#4B5563', fontSize: '15px' }}>{review.text}</p>
              </div>
            ))}
          </div>

          <div style={{ textAlign: 'center', marginTop: '60px' }}>
            <div className='success-badge'>
              ✓ VERIFIZIERTE KÄUFE • 385 ECHTE BEWERTUNGEN
            </div>
          </div>
        </div>
      </section>

      {/* Exit Intent Popup */}
      <div className={`exit-popup ${showExitPopup ? 'active' : ''}`} onClick={() => setShowExitPopup(false)} data-testid='exit-popup'>
        <div className='popup-content' onClick={(e) => e.stopPropagation()}>
          <h2 style={{
            fontSize: '42px',
            marginBottom: '20px',
            fontWeight: '600'
          }}>Warten Sie!</h2>
          <div className='divider'></div>
          <p style={{ fontSize: '18px', marginBottom: '40px', color: '#6B7280', lineHeight: '1.7' }}>
            Sichern Sie sich <span style={{ color: '#EF4444', fontWeight: '700' }}>10% EXTRA-RABATT</span><br/>
            auf Ihre erste Bestellung
          </p>
          <button 
            className='btn-gold' 
            onClick={() => {
              setShowExitPopup(false);
              navigate('/produkt');
            }}
            data-testid='popup-claim-button'
          >
            Rabatt Sichern
          </button>
          <button 
            style={{
              marginTop: '20px',
              background: 'transparent',
              border: 'none',
              cursor: 'pointer',
              color: '#9CA3AF',
              fontSize: '14px',
              textDecoration: 'underline'
            }}
            onClick={() => setShowExitPopup(false)}
            data-testid='popup-close-button'
          >
            Nein danke
          </button>
        </div>
      </div>

      <WhatsAppButton />
      <Footer />
    </div>
  );
}
