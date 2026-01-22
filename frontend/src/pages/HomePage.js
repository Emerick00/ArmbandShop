import React, { useState, useEffect } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import WhatsAppButton from '../components/WhatsAppButton';
import { Star, Check, Clock, Shield, Truck, Award } from 'lucide-react';

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
      name: 'Sophie M.',
      rating: 5,
      text: 'Qualité exceptionnelle. La gravure est parfaite et le bracelet est magnifique. Service client impeccable.',
      date: '15.01.2025'
    },
    {
      name: 'Thomas B.',
      rating: 5,
      text: 'Très satisfait de mon achat. Le rendu est élégant et la finition soignée. Je recommande vivement.',
      date: '12.01.2025'
    },
    {
      name: 'Marie K.',
      rating: 5,
      text: 'Un cadeau parfait et personnalisé. Livraison rapide et emballage soigné. Excellent rapport qualité-prix.',
      date: '08.01.2025'
    }
  ];

  return (
    <div data-testid="homepage" style={{ background: '#FFFFFF' }}>
      <Navbar />
      
      {/* Hero Section */}
      <section className="hero-section" data-testid="hero-section">
        <div className="container" style={{ textAlign: 'center' }}>
          <div style={{ maxWidth: '800px', margin: '0 auto' }}>
            <div className="badge" style={{ marginBottom: '30px' }}>ÉDITION LIMITÉE</div>
            <h1 style={{
              fontSize: 'clamp(42px, 6vw, 72px)',
              fontWeight: '600',
              marginBottom: '24px',
              lineHeight: '1.1',
              letterSpacing: '-0.02em'
            }} data-testid="hero-title">
              Bracelet Personnalisé<br />pour Homme
            </h1>
            <div className="divider"></div>
            <p style={{
              fontSize: 'clamp(16px, 2vw, 20px)',
              marginBottom: '50px',
              color: '#718096',
              fontWeight: '300',
              letterSpacing: '0.5px'
            }} data-testid="hero-subtitle">
              Gravure artisanale en 24h • Cuir véritable & acier inoxydable
            </p>
            
            <div style={{ marginBottom: '50px' }}>
              <div style={{
                display: 'inline-block',
                padding: '30px 50px',
                background: '#F7FAFC',
                border: '1px solid #E2E8F0',
                marginBottom: '20px'
              }}>
                <div style={{ marginBottom: '12px' }}>
                  <span style={{
                    fontSize: '16px',
                    textDecoration: 'line-through',
                    opacity: 0.4,
                    marginRight: '16px',
                    fontWeight: '300'
                  }}>€36,99</span>
                  <span style={{
                    fontSize: '48px',
                    fontWeight: '600',
                    color: '#C9A95A'
                  }} data-testid="hero-price">€0,99</span>
                </div>
                <div style={{ color: '#2D3748', fontSize: '13px', letterSpacing: '1px', textTransform: 'uppercase' }}>
                  Offre nouveaux clients • -89%
                </div>
              </div>
            </div>
            
            <div style={{ display: 'flex', gap: '20px', justifyContent: 'center', flexWrap: 'wrap' }}>
              <button 
                className="btn-primary" 
                onClick={() => navigate('/produkt')}
                data-testid="cta-gravieren-button"
              >
                Personnaliser Maintenant
              </button>
              <button 
                className="btn-secondary" 
                onClick={() => document.getElementById('products').scrollIntoView({ behavior: 'smooth' })}
                data-testid="bestseller-button"
              >
                Découvrir
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* Countdown Timer */}
      <div className="container" data-testid="countdown-timer">
        <div className="countdown-timer">
          <Clock size={20} style={{ display: 'inline-block', marginRight: '12px', verticalAlign: 'middle' }} />
          OFFRE EXPIRE DANS : {String(timeLeft.hours).padStart(2, '0')}:{String(timeLeft.minutes).padStart(2, '0')}:{String(timeLeft.seconds).padStart(2, '0')}
        </div>
      </div>

      {/* Trust Section */}
      <section style={{ padding: '80px 20px', background: '#F7FAFC' }} data-testid="trust-section">
        <div className="container">
          <div style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(250px, 1fr))',
            gap: '40px',
            textAlign: 'center'
          }}>
            <div>
              <Star className="gold-text" size={32} style={{ marginBottom: '16px' }} />
              <div style={{ fontSize: '14px', fontWeight: '500', marginTop: '12px', letterSpacing: '0.5px' }}>4.8/5 • 385 AVIS</div>
              <div style={{ fontSize: '13px', color: '#718096', marginTop: '8px' }}>Clients Satisfaits</div>
            </div>
            <div>
              <Truck size={32} style={{ marginBottom: '16px', color: '#0A0E27' }} />
              <div style={{ fontSize: '14px', fontWeight: '500', marginTop: '12px', letterSpacing: '0.5px' }}>LIVRAISON OFFERTE</div>
              <div style={{ fontSize: '13px', color: '#718096', marginTop: '8px' }}>France Métropolitaine</div>
            </div>
            <div>
              <Shield size={32} style={{ marginBottom: '16px', color: '#0A0E27' }} />
              <div style={{ fontSize: '14px', fontWeight: '500', marginTop: '12px', letterSpacing: '0.5px' }}>GARANTIE 30 JOURS</div>
              <div style={{ fontSize: '13px', color: '#718096', marginTop: '8px' }}>Satisfait ou Remboursé</div>
            </div>
            <div>
              <Award size={32} style={{ marginBottom: '16px', color: '#0A0E27' }} />
              <div style={{ fontSize: '14px', fontWeight: '500', marginTop: '12px', letterSpacing: '0.5px' }}>QUALITÉ PREMIUM</div>
              <div style={{ fontSize: '13px', color: '#718096', marginTop: '8px' }}>Artisanat Français</div>
            </div>
          </div>
        </div>
      </section>

      {/* Products Grid */}
      <section id="products" className="section-padding" data-testid="products-section" style={{ background: '#FFFFFF' }}>
        <div className="container">
          <div style={{ textAlign: 'center', marginBottom: '70px' }}>
            <h2 style={{
              fontSize: 'clamp(36px, 5vw, 52px)',
              fontWeight: '600',
              marginBottom: '20px'
            }}>Notre Collection</h2>
            <div className="divider"></div>
            <p style={{ color: '#718096', fontSize: '16px', maxWidth: '600px', margin: '20px auto 0' }}>
              Chaque pièce est gravée à la main avec précision et passion
            </p>
          </div>
          
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
                    top: '20px',
                    right: '20px'
                  }}>
                    <div className="badge">{product.badge}</div>
                  </div>
                </div>
                <div style={{ padding: '32px' }}>
                  <h3 style={{ fontSize: '22px', marginBottom: '16px', fontWeight: '600' }}>{product.name}</h3>
                  <div style={{ display: 'flex', alignItems: 'center', gap: '8px', marginBottom: '20px' }}>
                    <span className="star-rating">★★★★★</span>
                    <span style={{ color: '#718096', fontSize: '14px' }}>(4.8)</span>
                  </div>
                  <div style={{ marginBottom: '24px' }}>
                    <span style={{
                      fontSize: '28px',
                      fontWeight: '600',
                      color: '#C9A95A'
                    }}>€{product.price}</span>
                    <span style={{
                      marginLeft: '12px',
                      textDecoration: 'line-through',
                      opacity: 0.3,
                      fontSize: '16px'
                    }}>€{product.originalPrice}</span>
                  </div>
                  <button className="btn-secondary" style={{ width: '100%' }}>
                    Voir le Produit
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Reviews Section */}
      <section style={{ padding: '100px 20px', background: '#F7FAFC' }} data-testid="reviews-section">
        <div className="container">
          <div style={{ textAlign: 'center', marginBottom: '70px' }}>
            <h2 style={{
              fontSize: 'clamp(36px, 5vw, 52px)',
              fontWeight: '600',
              marginBottom: '20px'
            }}>Témoignages Clients</h2>
            <div className="divider"></div>
          </div>
          
          <div className="grid-3">
            {reviews.map((review, index) => (
              <div key={index} className="review-card" data-testid={`review-card-${index}`}>
                <div style={{ marginBottom: '20px' }}>
                  <div className="star-rating" style={{ fontSize: '20px', marginBottom: '16px', letterSpacing: '2px' }}>
                    {'★'.repeat(review.rating)}
                  </div>
                  <div style={{ fontWeight: '500', fontSize: '16px', marginBottom: '4px' }}>{review.name}</div>
                  <div style={{ color: '#A0AEC0', fontSize: '13px', letterSpacing: '0.5px' }}>{review.date}</div>
                </div>
                <p style={{ lineHeight: '1.8', color: '#4A5568', fontSize: '15px' }}>{review.text}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Exit Intent Popup */}
      <div className={`exit-popup ${showExitPopup ? 'active' : ''}`} onClick={() => setShowExitPopup(false)} data-testid="exit-popup">
        <div className="popup-content" onClick={(e) => e.stopPropagation()}>
          <h2 style={{
            fontSize: '42px',
            marginBottom: '20px',
            fontWeight: '600'
          }}>Attendez !</h2>
          <div className="divider"></div>
          <p style={{ fontSize: '18px', marginBottom: '40px', color: '#718096' }}>
            Profitez de <span style={{ color: '#C9A95A', fontWeight: '600' }}>10% de réduction supplémentaire</span> sur votre première commande
          </p>
          <button 
            className="btn-gold" 
            onClick={() => {
              setShowExitPopup(false);
              navigate('/produkt');
            }}
            data-testid="popup-claim-button"
          >
            Profiter de l'Offre
          </button>
          <button 
            style={{
              marginTop: '20px',
              background: 'transparent',
              border: 'none',
              cursor: 'pointer',
              color: '#718096',
              fontSize: '14px',
              textDecoration: 'underline'
            }}
            onClick={() => setShowExitPopup(false)}
            data-testid="popup-close-button"
          >
            Non merci
          </button>
        </div>
      </div>

      <WhatsAppButton />
      <Footer />
    </div>
  );
}