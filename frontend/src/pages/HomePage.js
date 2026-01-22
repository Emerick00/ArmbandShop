import React, { useState, useEffect } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import WhatsAppButton from '../components/WhatsAppButton';
import { Star, Check, Clock, TrendingUp } from 'lucide-react';

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
      name: 'Personalisierter Armband Männer',
      image: 'https://images.unsplash.com/photo-1625417255685-9889e8dd94d2?w=400',
      price: 0.99,
      originalPrice: 36.99,
      badge: 'BESTSELLER',
      stock: 17
    },
    {
      id: 2,
      name: 'Paar-Armband Set',
      image: 'https://images.unsplash.com/photo-1640551855927-78d8ce33c586?w=400',
      price: 19.99,
      originalPrice: 59.99,
      badge: 'BELIEBT',
      stock: 23
    },
    {
      id: 3,
      name: 'Edelstahl Kette mit Gravur',
      image: 'https://images.unsplash.com/photo-1704536917568-af87f9a87312?w=400',
      price: 24.99,
      originalPrice: 49.99,
      badge: 'NEU',
      stock: 31
    }
  ];

  const reviews = [
    {
      name: 'Lisa M.',
      rating: 5,
      text: 'Perfektes Geschenk für meinen Mann! Die Gravur ist wunderschön und die Qualität übertrifft alle Erwartungen. Absolute Kaufempfehlung!',
      date: '15.01.2025'
    },
    {
      name: 'Max B.',
      rating: 5,
      text: 'Sehr hochwertig verarbeitet. Das Armband kam schnell an und sieht genau aus wie auf den Bildern. Meine Freundin war begeistert!',
      date: '12.01.2025'
    },
    {
      name: 'Sarah K.',
      rating: 5,
      text: 'Tolle Qualität zum unschlagbaren Preis! Die personalisierte Gravur macht es zu einem einzigartigen Geschenk. Gerne wieder!',
      date: '08.01.2025'
    }
  ];

  return (
    <div data-testid="homepage">
      <Navbar />
      
      {/* Hero Section */}
      <section className="hero-section" data-testid="hero-section">
        <div className="container" style={{ textAlign: 'center', position: 'relative', zIndex: 1 }}>
          <h1 style={{
            fontSize: 'clamp(36px, 6vw, 72px)',
            fontWeight: '900',
            marginBottom: '20px',
            lineHeight: '1.1',
            fontFamily: 'Playfair Display, serif'
          }} data-testid="hero-title">
            Personalisierter Armband<br />für Männer ❤️
          </h1>
          <p style={{
            fontSize: 'clamp(18px, 3vw, 28px)',
            marginBottom: '30px',
            color: '#666'
          }} data-testid="hero-subtitle">
            Gravur in 24h | Neukunden nur €0,99!
          </p>
          
          <div style={{ marginBottom: '40px' }}>
            <div style={{
              display: 'inline-block',
              background: 'linear-gradient(135deg, #FF6B9D 0%, #FF4500 100%)',
              padding: '20px 40px',
              borderRadius: '16px',
              marginBottom: '20px'
            }}>
              <span style={{
                fontSize: '20px',
                textDecoration: 'line-through',
                opacity: 0.7,
                color: 'white',
                marginRight: '20px'
              }}>€36,99</span>
              <span style={{
                fontSize: '48px',
                fontWeight: '900',
                color: 'white'
              }} data-testid="hero-price">€0,99</span>
              <div style={{ color: 'white', marginTop: '8px', fontWeight: '600' }}>
                🔥 89% Rabatt - Nur heute!
              </div>
            </div>
          </div>
          
          <div style={{ display: 'flex', gap: '20px', justifyContent: 'center', flexWrap: 'wrap' }}>
            <button 
              className="btn-primary" 
              onClick={() => navigate('/produkt')}
              data-testid="cta-gravieren-button"
            >
              JETZT GRAVIEREN
            </button>
            <button 
              className="btn-outline" 
              onClick={() => document.getElementById('products').scrollIntoView({ behavior: 'smooth' })}
              data-testid="bestseller-button"
            >
              BESTSELLER SEHEN
            </button>
          </div>
        </div>
      </section>

      {/* Countdown Timer */}
      <div className="container" data-testid="countdown-timer">
        <div className="countdown-timer">
          <Clock size={24} style={{ display: 'inline-block', marginRight: '10px' }} />
          Angebot endet in: {String(timeLeft.hours).padStart(2, '0')}:{String(timeLeft.minutes).padStart(2, '0')}:{String(timeLeft.seconds).padStart(2, '0')}
        </div>
      </div>

      {/* Trust Section */}
      <section style={{ padding: '60px 20px', background: 'white' }} data-testid="trust-section">
        <div className="container">
          <div style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))',
            gap: '30px',
            textAlign: 'center'
          }}>
            <div>
              <div style={{ fontSize: '36px', marginBottom: '10px' }}>⭐ 4.8/5</div>
              <div style={{ fontWeight: '600' }}>385 Kundenbewertungen</div>
            </div>
            <div>
              <div style={{ fontSize: '36px', marginBottom: '10px' }}>🚚</div>
              <div style={{ fontWeight: '600' }}>Gratis Versand Deutschland</div>
            </div>
            <div>
              <div style={{ fontSize: '36px', marginBottom: '10px' }}>✅</div>
              <div style={{ fontWeight: '600' }}>30 Tage Geld-zurück</div>
            </div>
            <div>
              <div style={{ fontSize: '36px', marginBottom: '10px' }}>🔒</div>
              <div style={{ fontWeight: '600' }}>SSL Sichere Zahlung</div>
            </div>
          </div>
        </div>
      </section>

      {/* Products Grid */}
      <section id="products" className="section-padding" data-testid="products-section">
        <div className="container">
          <h2 style={{
            fontSize: 'clamp(32px, 5vw, 48px)',
            textAlign: 'center',
            marginBottom: '50px',
            fontFamily: 'Playfair Display, serif'
          }}>Unsere Bestseller</h2>
          
          <div className="grid-3">
            {products.map(product => (
              <div 
                key={product.id} 
                className="product-card"
                onClick={() => navigate('/produkt')}
                data-testid={`product-card-${product.id}`}
              >
                <div style={{ position: 'relative' }}>
                  <img src={product.image} alt={product.name} />
                  <div style={{
                    position: 'absolute',
                    top: '15px',
                    right: '15px',
                    background: '#FF4500',
                    color: 'white',
                    padding: '6px 12px',
                    borderRadius: '6px',
                    fontSize: '12px',
                    fontWeight: '700'
                  }}>
                    {product.badge}
                  </div>
                </div>
                <div style={{ padding: '20px' }}>
                  <h3 style={{ fontSize: '20px', marginBottom: '10px' }}>{product.name}</h3>
                  <div style={{ display: 'flex', alignItems: 'center', gap: '10px', marginBottom: '15px' }}>
                    <span className="star-rating">⭐⭐⭐⭐⭐</span>
                    <span style={{ color: '#666' }}>(4.8)</span>
                  </div>
                  <div style={{ marginBottom: '15px' }}>
                    <span style={{
                      fontSize: '24px',
                      fontWeight: '800',
                      color: '#FF4500'
                    }}>€{product.price}</span>
                    <span style={{
                      marginLeft: '10px',
                      textDecoration: 'line-through',
                      opacity: 0.5
                    }}>€{product.originalPrice}</span>
                  </div>
                  <div style={{
                    background: '#FF6B9D',
                    color: 'white',
                    padding: '8px',
                    borderRadius: '6px',
                    textAlign: 'center',
                    fontWeight: '600',
                    fontSize: '14px'
                  }}>
                    🔥 Nur {product.stock} Stück verfügbar!
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Reviews Section */}
      <section style={{ padding: '80px 20px', background: 'white' }} data-testid="reviews-section">
        <div className="container">
          <h2 style={{
            fontSize: 'clamp(32px, 5vw, 48px)',
            textAlign: 'center',
            marginBottom: '50px',
            fontFamily: 'Playfair Display, serif'
          }}>Was unsere Kunden sagen</h2>
          
          <div className="grid-3">
            {reviews.map((review, index) => (
              <div key={index} className="review-card" data-testid={`review-card-${index}`}>
                <div style={{ marginBottom: '15px' }}>
                  <div className="star-rating" style={{ fontSize: '20px', marginBottom: '10px' }}>
                    {'⭐'.repeat(review.rating)}
                  </div>
                  <div style={{ fontWeight: '600', fontSize: '18px' }}>{review.name}</div>
                  <div style={{ color: '#999', fontSize: '14px' }}>{review.date}</div>
                </div>
                <p style={{ lineHeight: '1.6', color: '#666' }}>{review.text}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Exit Intent Popup */}
      <div className={`exit-popup ${showExitPopup ? 'active' : ''}`} onClick={() => setShowExitPopup(false)} data-testid="exit-popup">
        <div className="popup-content" onClick={(e) => e.stopPropagation()}>
          <h2 style={{
            fontSize: '32px',
            marginBottom: '20px',
            fontFamily: 'Playfair Display, serif'
          }}>Warte! 🎁</h2>
          <p style={{ fontSize: '18px', marginBottom: '30px', color: '#666' }}>
            Erhalte zusätzlich <span style={{ color: '#FF4500', fontWeight: '700' }}>10% EXTRA RABATT</span> auf deine erste Bestellung!
          </p>
          <button 
            className="btn-primary" 
            onClick={() => {
              setShowExitPopup(false);
              navigate('/produkt');
            }}
            data-testid="popup-claim-button"
          >
            RABATT SICHERN
          </button>
          <button 
            style={{
              marginTop: '15px',
              background: 'transparent',
              border: 'none',
              cursor: 'pointer',
              textDecoration: 'underline'
            }}
            onClick={() => setShowExitPopup(false)}
            data-testid="popup-close-button"
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