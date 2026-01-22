import React, { useState, useEffect, useRef } from 'react';
import { useNavigate } from 'react-router-dom';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import WhatsAppButton from '../components/WhatsAppButton';
import { Star, ShoppingCart, Check, Truck, Shield, Heart, Award } from 'lucide-react';

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
        ctx.font = 'bold 32px Work Sans';
        ctx.fillStyle = '#C9A95A';
        ctx.textAlign = 'center';
        ctx.strokeStyle = '#0A0E27';
        ctx.lineWidth = 1;
        ctx.strokeText(engravingText, 300, 300);
        ctx.fillText(engravingText, 300, 300);
      }
    };
  };

  const addToCart = () => {
    const cart = JSON.parse(localStorage.getItem('cart') || '[]');
    const product = {
      id: 'armband-main',
      name: 'Bracelet Personnalisé pour Homme',
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
    <div data-testid="product-page" style={{ background: '#FFFFFF' }}>
      <Navbar />

      {showSuccess && (
        <div style={{
          position: 'fixed',
          top: '100px',
          right: '30px',
          background: '#0A0E27',
          color: 'white',
          padding: '20px 32px',
          borderRadius: '0',
          boxShadow: '0 8px 24px rgba(0,0,0,0.15)',
          zIndex: 1000,
          animation: 'slideIn 0.3s ease',
          border: '1px solid #C9A95A'
        }} data-testid="success-notification">
          <Check size={18} style={{ display: 'inline', marginRight: '12px' }} />
          Ajouté au panier avec succès
        </div>
      )}

      <div className="container" style={{ padding: '80px 20px' }}>
        <div style={{
          display: 'grid',
          gridTemplateColumns: '1.2fr 1fr',
          gap: '80px',
          alignItems: 'start'
        }}>
          {/* Left: Images */}
          <div data-testid="product-images">
            <div style={{ marginBottom: '24px' }}>
              <canvas 
                ref={canvasRef} 
                className="canvas-preview"
                style={{ width: '100%', height: 'auto', background: '#F7FAFC' }}
                data-testid="engraving-canvas"
              />
            </div>
            <div style={{
              display: 'grid',
              gridTemplateColumns: 'repeat(4, 1fr)',
              gap: '16px'
            }}>
              {productImages.map((img, index) => (
                <img
                  key={index}
                  src={img}
                  alt={`Vue ${index + 1}`}
                  style={{
                    width: '100%',
                    height: '120px',
                    objectFit: 'cover',
                    borderRadius: '0',
                    cursor: 'pointer',
                    border: selectedImage === index ? '2px solid #C9A95A' : '1px solid #E2E8F0',
                    transition: 'all 0.3s ease',
                    opacity: selectedImage === index ? 1 : 0.6
                  }}
                  onClick={() => setSelectedImage(index)}
                  data-testid={`thumbnail-${index}`}
                />
              ))}
            </div>
          </div>

          {/* Right: Product Info */}
          <div data-testid="product-info">
            <div className="badge" style={{ marginBottom: '20px' }}>COLLECTION PREMIUM</div>
            
            <h1 style={{
              fontSize: '42px',
              marginBottom: '20px',
              fontWeight: '600',
              letterSpacing: '-0.01em'
            }} data-testid="product-title">
              Bracelet Personnalisé pour Homme
            </h1>

            <div style={{
              display: 'flex',
              alignItems: 'center',
              gap: '12px',
              marginBottom: '24px',
              paddingBottom: '24px',
              borderBottom: '1px solid #E2E8F0'
            }} data-testid="product-rating">
              <div className="star-rating" style={{ fontSize: '18px', letterSpacing: '2px' }}>
                ★★★★★
              </div>
              <span style={{ fontWeight: '500', fontSize: '14px' }}>4.8/5</span>
              <span style={{ color: '#A0AEC0', fontSize: '14px' }}>(385 avis)</span>
            </div>

            <div style={{ marginBottom: '32px' }}>
              <div style={{ marginBottom: '16px' }}>
                <span style={{
                  fontSize: '48px',
                  fontWeight: '600',
                  color: '#C9A95A'
                }} data-testid="product-price">€0,99</span>
                <span style={{
                  marginLeft: '16px',
                  textDecoration: 'line-through',
                  opacity: 0.3,
                  fontSize: '24px'
                }}>€36,99</span>
              </div>
              <div style={{ 
                color: '#718096', 
                fontSize: '13px', 
                letterSpacing: '1px',
                textTransform: 'uppercase'
              }}>
                Offre nouveaux clients • Économisez 89%
              </div>
            </div>

            {/* Engraving Section */}
            <div style={{
              background: '#F7FAFC',
              padding: '32px',
              marginBottom: '32px',
              border: '1px solid #E2E8F0'
            }} data-testid="engraving-section">
              <h3 style={{
                fontSize: '16px',
                marginBottom: '20px',
                display: 'flex',
                alignItems: 'center',
                gap: '12px',
                textTransform: 'uppercase',
                letterSpacing: '1px',
                fontWeight: '500'
              }}>
                <Heart className="gold-text" size={20} />
                Votre Gravure Personnalisée
              </h3>
              <input
                type="text"
                value={engravingText}
                onChange={(e) => setEngravingText(e.target.value.slice(0, 20))}
                placeholder="Entrez votre texte (max. 20 caractères)"
                style={{
                  width: '100%',
                  padding: '16px',
                  fontSize: '15px',
                  border: '1px solid #CBD5E0',
                  borderRadius: '0',
                  outline: 'none',
                  marginBottom: '12px',
                  background: 'white',
                  fontFamily: 'Work Sans, sans-serif'
                }}
                data-testid="engraving-input"
              />
              <div style={{ fontSize: '13px', color: '#A0AEC0', letterSpacing: '0.5px' }}>
                {engravingText.length}/20 caractères • Aperçu en temps réel
              </div>
            </div>

            {/* Quantity */}
            <div style={{
              display: 'flex',
              alignItems: 'center',
              gap: '24px',
              marginBottom: '32px',
              paddingBottom: '32px',
              borderBottom: '1px solid #E2E8F0'
            }} data-testid="quantity-selector">
              <label style={{ fontWeight: '500', fontSize: '14px', letterSpacing: '0.5px', textTransform: 'uppercase' }}>Quantité</label>
              <div style={{ display: 'flex', alignItems: 'center', gap: '16px' }}>
                <button
                  onClick={() => setQuantity(Math.max(1, quantity - 1))}
                  style={{
                    width: '40px',
                    height: '40px',
                    borderRadius: '0',
                    border: '1px solid #CBD5E0',
                    background: 'white',
                    fontSize: '18px',
                    cursor: 'pointer',
                    fontWeight: '400',
                    transition: 'all 0.3s ease'
                  }}
                  data-testid="quantity-decrease"
                >
                  −
                </button>
                <span style={{ fontSize: '18px', fontWeight: '500', minWidth: '30px', textAlign: 'center' }} data-testid="quantity-value">
                  {quantity}
                </span>
                <button
                  onClick={() => setQuantity(Math.min(10, quantity + 1))}
                  style={{
                    width: '40px',
                    height: '40px',
                    borderRadius: '0',
                    border: '1px solid #CBD5E0',
                    background: 'white',
                    fontSize: '18px',
                    cursor: 'pointer',
                    fontWeight: '400',
                    transition: 'all 0.3s ease'
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
              gap: '16px',
              marginBottom: '40px'
            }}>
              <button
                className="btn-primary"
                onClick={addToCart}
                style={{ width: '100%', padding: '20px' }}
                data-testid="add-to-cart-button"
              >
                <ShoppingCart size={18} style={{ display: 'inline', marginRight: '12px', verticalAlign: 'middle' }} />
                Ajouter au Panier
              </button>
              <button
                className="btn-gold"
                onClick={buyNow}
                style={{ width: '100%', padding: '20px' }}
                data-testid="buy-now-button"
              >
                Acheter Maintenant
              </button>
            </div>

            {/* Trust Badges */}
            <div style={{
              display: 'grid',
              gridTemplateColumns: 'repeat(2, 1fr)',
              gap: '16px',
              marginBottom: '40px'
            }} data-testid="trust-badges">
              <div className="trust-badge">
                <Truck size={18} />
                <span style={{ fontSize: '12px' }}>Livraison Offerte</span>
              </div>
              <div className="trust-badge">
                <Shield size={18} />
                <span style={{ fontSize: '12px' }}>Garantie 30j</span>
              </div>
              <div className="trust-badge">
                <Check size={18} />
                <span style={{ fontSize: '12px' }}>Paiement Sécurisé</span>
              </div>
              <div className="trust-badge">
                <Award size={18} className="gold-text" />
                <span style={{ fontSize: '12px' }}>Fait Main</span>
              </div>
            </div>

            {/* Product Details */}
            <div style={{
              background: '#F7FAFC',
              padding: '32px',
              border: '1px solid #E2E8F0'
            }} data-testid="product-details">
              <h3 style={{ fontSize: '16px', marginBottom: '24px', fontWeight: '500', letterSpacing: '1px', textTransform: 'uppercase' }}>Caractéristiques</h3>
              <table style={{ width: '100%', borderCollapse: 'collapse' }}>
                <tbody>
                  <tr style={{ borderBottom: '1px solid #E2E8F0' }}>
                    <td style={{ padding: '14px 0', fontWeight: '500', fontSize: '14px' }}>Matériaux</td>
                    <td style={{ padding: '14px 0', color: '#718096', fontSize: '14px' }}>Cuir véritable + Acier 316L</td>
                  </tr>
                  <tr style={{ borderBottom: '1px solid #E2E8F0' }}>
                    <td style={{ padding: '14px 0', fontWeight: '500', fontSize: '14px' }}>Taille</td>
                    <td style={{ padding: '14px 0', color: '#718096', fontSize: '14px' }}>Ajustable 15-22cm</td>
                  </tr>
                  <tr style={{ borderBottom: '1px solid #E2E8F0' }}>
                    <td style={{ padding: '14px 0', fontWeight: '500', fontSize: '14px' }}>Gravure</td>
                    <td style={{ padding: '14px 0', color: '#718096', fontSize: '14px' }}>Laser de précision</td>
                  </tr>
                  <tr>
                    <td style={{ padding: '14px 0', fontWeight: '500', fontSize: '14px' }}>Livraison</td>
                    <td style={{ padding: '14px 0', color: '#718096', fontSize: '14px' }}>2-4 jours DHL</td>
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