import React, { useState, useEffect, useRef } from 'react';
import { useNavigate } from 'react-router-dom';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import WhatsAppButton from '../components/WhatsAppButton';
import { Star, ShoppingCart, Check, Truck, Shield, Heart } from 'lucide-react';

export default function ProductPage() {
  const navigate = useNavigate();
  const canvasRef = useRef(null);
  const [selectedImage, setSelectedImage] = useState(0);
  const [engravingText, setEngravingText] = useState('');
  const [quantity, setQuantity] = useState(1);
  const [showSuccess, setShowSuccess] = useState(false);

  const productImages = [
    'https://images.unsplash.com/photo-1625417255685-9889e8dd94d2?w=800',
    'https://images.unsplash.com/photo-1640551855927-78d8ce33c586?w=800',
    'https://images.unsplash.com/photo-1704536917568-af87f9a87312?w=800',
    'https://images.unsplash.com/photo-1678929479698-1b90d107322e?w=800'
  ];

  useEffect(() => {
    updateCanvas();
  }, [engravingText, selectedImage]);

  const updateCanvas = () => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext('2d');
    const img = new Image();
    img.crossOrigin = 'anonymous';
    img.src = productImages[selectedImage];

    img.onload = () => {
      canvas.width = 600;
      canvas.height = 600;
      ctx.drawImage(img, 0, 0, 600, 600);

      if (engravingText) {
        ctx.font = 'bold 32px Inter';
        ctx.fillStyle = '#D4AF37';
        ctx.textAlign = 'center';
        ctx.strokeStyle = '#1A1A1A';
        ctx.lineWidth = 2;
        ctx.strokeText(engravingText, 300, 300);
        ctx.fillText(engravingText, 300, 300);
      }
    };
  };

  const addToCart = () => {
    const cart = JSON.parse(localStorage.getItem('cart') || '[]');
    const product = {
      id: 'armband-main',
      name: 'Personalisierter Armband für Männer',
      price: 0.99,
      quantity: quantity,
      engraving: engravingText,
      image: productImages[0]
    };

    const existingIndex = cart.findIndex(item => item.id === product.id && item.engraving === engravingText);
    if (existingIndex >= 0) {
      cart[existingIndex].quantity += quantity;
    } else {
      cart.push(product);
    }

    localStorage.setItem('cart', JSON.stringify(cart));
    window.dispatchEvent(new Event('cartUpdated'));
    setShowSuccess(true);
    setTimeout(() => setShowSuccess(false), 3000);
  };

  const buyNow = () => {
    addToCart();
    setTimeout(() => navigate('/warenkorb'), 500);
  };

  return (
    <div data-testid="product-page">
      <Navbar />

      {showSuccess && (
        <div style={{
          position: 'fixed',
          top: '100px',
          right: '20px',
          background: '#4CAF50',
          color: 'white',
          padding: '20px 30px',
          borderRadius: '12px',
          boxShadow: '0 4px 20px rgba(0,0,0,0.2)',
          zIndex: 1000,
          animation: 'slideIn 0.3s ease'
        }} data-testid="success-notification">
          <Check size={20} style={{ display: 'inline', marginRight: '10px' }} />
          Zum Warenkorb hinzugefügt!
        </div>
      )}

      <div className="container" style={{ padding: '60px 20px' }}>
        <div style={{
          display: 'grid',
          gridTemplateColumns: '1fr 1fr',
          gap: '60px',
          alignItems: 'start'
        }}>
          {/* Left: Images */}
          <div data-testid="product-images">
            <div style={{ marginBottom: '20px' }}>
              <canvas 
                ref={canvasRef} 
                className="canvas-preview"
                style={{ width: '100%', height: 'auto', borderRadius: '12px' }}
                data-testid="engraving-canvas"
              />
            </div>
            <div style={{
              display: 'grid',
              gridTemplateColumns: 'repeat(4, 1fr)',
              gap: '15px'
            }}>
              {productImages.map((img, index) => (
                <img
                  key={index}
                  src={img}
                  alt={`Ansicht ${index + 1}`}
                  style={{
                    width: '100%',
                    height: '120px',
                    objectFit: 'cover',
                    borderRadius: '8px',
                    cursor: 'pointer',
                    border: selectedImage === index ? '3px solid #D4AF37' : '2px solid #ddd',
                    transition: 'all 0.3s ease'
                  }}
                  onClick={() => setSelectedImage(index)}
                  data-testid={`thumbnail-${index}`}
                />
              ))}
            </div>
          </div>

          {/* Right: Product Info */}
          <div data-testid="product-info">
            <h1 style={{
              fontSize: '36px',
              marginBottom: '15px',
              fontFamily: 'Playfair Display, serif'
            }} data-testid="product-title">
              Personalisierter Armband Männer Gravur
            </h1>

            <div style={{
              display: 'flex',
              alignItems: 'center',
              gap: '15px',
              marginBottom: '20px'
            }} data-testid="product-rating">
              <div className="star-rating" style={{ fontSize: '20px' }}>
                ⭐⭐⭐⭐⭐
              </div>
              <span style={{ fontWeight: '600' }}>4.8 (385 Bewertungen)</span>
            </div>

            <div className="urgency-badge" style={{ marginBottom: '30px' }} data-testid="stock-urgency">
              🔥 Nur 17 Stück verfügbar!
            </div>

            <div style={{
              background: 'linear-gradient(135deg, #FF6B9D 0%, #FF4500 100%)',
              padding: '30px',
              borderRadius: '16px',
              marginBottom: '30px'
            }} data-testid="price-section">
              <div style={{ color: 'white', fontSize: '18px', marginBottom: '10px' }}>
                Neukunden-Angebot
              </div>
              <div>
                <span style={{
                  fontSize: '28px',
                  textDecoration: 'line-through',
                  opacity: 0.7,
                  color: 'white',
                  marginRight: '20px'
                }}>€36,99</span>
                <span style={{
                  fontSize: '56px',
                  fontWeight: '900',
                  color: 'white'
                }} data-testid="product-price">€0,99</span>
              </div>
              <div style={{ color: 'white', marginTop: '10px', fontSize: '18px', fontWeight: '600' }}>
                💰 89% Ersparnis - Nur heute!
              </div>
            </div>

            {/* Engraving Section */}
            <div style={{
              background: 'white',
              padding: '30px',
              borderRadius: '16px',
              boxShadow: '0 4px 20px rgba(0,0,0,0.08)',
              marginBottom: '30px'
            }} data-testid="engraving-section">
              <h3 style={{
                fontSize: '20px',
                marginBottom: '15px',
                display: 'flex',
                alignItems: 'center',
                gap: '10px'
              }}>
                <Heart className="gold-text" size={24} />
                Ihre Gravur:
              </h3>
              <input
                type="text"
                value={engravingText}
                onChange={(e) => setEngravingText(e.target.value.slice(0, 20))}
                placeholder="Max. 20 Zeichen"
                style={{
                  width: '100%',
                  padding: '15px',
                  fontSize: '16px',
                  border: '2px solid #D4AF37',
                  borderRadius: '8px',
                  outline: 'none',
                  marginBottom: '10px'
                }}
                data-testid="engraving-input"
              />
              <div style={{ fontSize: '14px', color: '#666' }}>
                {engravingText.length}/20 Zeichen | Live-Vorschau oben
              </div>
            </div>

            {/* Quantity */}
            <div style={{
              display: 'flex',
              alignItems: 'center',
              gap: '20px',
              marginBottom: '30px'
            }} data-testid="quantity-selector">
              <label style={{ fontWeight: '600', fontSize: '18px' }}>Menge:</label>
              <div style={{ display: 'flex', alignItems: 'center', gap: '15px' }}>
                <button
                  onClick={() => setQuantity(Math.max(1, quantity - 1))}
                  style={{
                    width: '40px',
                    height: '40px',
                    borderRadius: '8px',
                    border: '2px solid #1A1A1A',
                    background: 'white',
                    fontSize: '20px',
                    cursor: 'pointer',
                    fontWeight: '600'
                  }}
                  data-testid="quantity-decrease"
                >
                  -
                </button>
                <span style={{ fontSize: '20px', fontWeight: '600', minWidth: '30px', textAlign: 'center' }} data-testid="quantity-value">
                  {quantity}
                </span>
                <button
                  onClick={() => setQuantity(Math.min(10, quantity + 1))}
                  style={{
                    width: '40px',
                    height: '40px',
                    borderRadius: '8px',
                    border: '2px solid #1A1A1A',
                    background: 'white',
                    fontSize: '20px',
                    cursor: 'pointer',
                    fontWeight: '600'
                  }}
                  data-testid="quantity-increase"
                >
                  +
                </button>
              </div>
            </div>

            {/* Action Buttons */}
            <div style={{
              display: 'flex',
              flexDirection: 'column',
              gap: '15px',
              marginBottom: '30px'
            }}>
              <button
                className="btn-primary"
                onClick={addToCart}
                style={{ width: '100%', fontSize: '18px', padding: '20px' }}
                data-testid="add-to-cart-button"
              >
                <ShoppingCart size={20} style={{ display: 'inline', marginRight: '10px' }} />
                IN WARENKORB
              </button>
              <button
                className="btn-secondary"
                onClick={buyNow}
                style={{ width: '100%', fontSize: '18px', padding: '20px' }}
                data-testid="buy-now-button"
              >
                💳 SOFORT KAUFEN
              </button>
            </div>

            {/* Trust Badges */}
            <div style={{
              display: 'grid',
              gridTemplateColumns: 'repeat(2, 1fr)',
              gap: '15px',
              marginBottom: '30px'
            }} data-testid="trust-badges">
              <div className="trust-badge">
                <Truck size={20} />
                <span>Gratis Versand</span>
              </div>
              <div className="trust-badge">
                <Shield size={20} />
                <span>30 Tage Garantie</span>
              </div>
              <div className="trust-badge">
                <Check size={20} />
                <span>Sichere Zahlung</span>
              </div>
              <div className="trust-badge">
                <Heart size={20} className="pink-text" />
                <span>Handgefertigt</span>
              </div>
            </div>

            {/* Product Details */}
            <div style={{
              background: 'white',
              padding: '30px',
              borderRadius: '16px',
              boxShadow: '0 4px 20px rgba(0,0,0,0.08)'
            }} data-testid="product-details">
              <h3 style={{ fontSize: '20px', marginBottom: '20px' }}>Produktdetails</h3>
              <table style={{ width: '100%', borderCollapse: 'collapse' }}>
                <tbody>
                  <tr style={{ borderBottom: '1px solid #eee' }}>
                    <td style={{ padding: '12px 0', fontWeight: '600' }}>Material</td>
                    <td style={{ padding: '12px 0' }}>Echtes Leder + 316L Edelstahl</td>
                  </tr>
                  <tr style={{ borderBottom: '1px solid #eee' }}>
                    <td style={{ padding: '12px 0', fontWeight: '600' }}>Größe</td>
                    <td style={{ padding: '12px 0' }}>Verstellbar 15-22cm</td>
                  </tr>
                  <tr style={{ borderBottom: '1px solid #eee' }}>
                    <td style={{ padding: '12px 0', fontWeight: '600' }}>Gravur</td>
                    <td style={{ padding: '12px 0' }}>Laserpräzise</td>
                  </tr>
                  <tr>
                    <td style={{ padding: '12px 0', fontWeight: '600' }}>Versand</td>
                    <td style={{ padding: '12px 0' }}>2-4 Tage DHL</td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </div>

      <WhatsAppButton />
      <Footer />
    </div>
  );
}