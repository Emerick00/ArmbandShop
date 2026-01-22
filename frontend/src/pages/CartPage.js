import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import { Trash2, Plus, Minus } from 'lucide-react';

export default function CartPage() {
  const navigate = useNavigate();
  const [cart, setCart] = useState([]);

  useEffect(() => {
    loadCart();
  }, []);

  const loadCart = () => {
    const cartData = JSON.parse(localStorage.getItem('cart') || '[]');
    setCart(cartData);
  };

  const updateQuantity = (index, delta) => {
    const newCart = [...cart];
    newCart[index].quantity = Math.max(1, newCart[index].quantity + delta);
    localStorage.setItem('cart', JSON.stringify(newCart));
    setCart(newCart);
    window.dispatchEvent(new Event('cartUpdated'));
  };

  const removeItem = (index) => {
    const newCart = cart.filter((_, i) => i !== index);
    localStorage.setItem('cart', JSON.stringify(newCart));
    setCart(newCart);
    window.dispatchEvent(new Event('cartUpdated'));
  };

  const getTotal = () => {
    return cart.reduce((sum, item) => sum + (item.price * item.quantity), 0).toFixed(2);
  };

  return (
    <div data-testid="cart-page">
      <Navbar />

      <div className="container" style={{ padding: '60px 20px', minHeight: '60vh' }}>
        <h1 style={{
          fontSize: '48px',
          marginBottom: '40px',
          fontFamily: 'Playfair Display, serif',
          textAlign: 'center'
        }} data-testid="cart-title">
          Warenkorb 🛒
        </h1>

        {cart.length === 0 ? (
          <div style={{ textAlign: 'center', padding: '60px 20px' }} data-testid="empty-cart">
            <div style={{ fontSize: '80px', marginBottom: '20px' }}>🛍️</div>
            <h2 style={{ fontSize: '32px', marginBottom: '20px' }}>Ihr Warenkorb ist leer</h2>
            <p style={{ fontSize: '18px', color: '#666', marginBottom: '30px' }}>
              Entdecken Sie unsere personalisierten Armbänder!
            </p>
            <button 
              className="btn-primary" 
              onClick={() => navigate('/produkt')}
              data-testid="continue-shopping-button"
            >
              JETZT EINKAUFEN
            </button>
          </div>
        ) : (
          <div style={{
            display: 'grid',
            gridTemplateColumns: '2fr 1fr',
            gap: '40px'
          }}>
            {/* Cart Items */}
            <div data-testid="cart-items">
              {cart.map((item, index) => (
                <div
                  key={index}
                  style={{
                    background: 'white',
                    padding: '30px',
                    borderRadius: '16px',
                    marginBottom: '20px',
                    boxShadow: '0 4px 20px rgba(0,0,0,0.08)',
                    display: 'grid',
                    gridTemplateColumns: '150px 1fr auto',
                    gap: '30px',
                    alignItems: 'center'
                  }}
                  data-testid={`cart-item-${index}`}
                >
                  <img
                    src={item.image}
                    alt={item.name}
                    style={{
                      width: '100%',
                      height: '150px',
                      objectFit: 'cover',
                      borderRadius: '12px'
                    }}
                  />
                  <div>
                    <h3 style={{ fontSize: '20px', marginBottom: '10px' }}>{item.name}</h3>
                    {item.engraving && (
                      <div style={{
                        background: '#FFF9E6',
                        padding: '8px 12px',
                        borderRadius: '8px',
                        marginBottom: '15px',
                        border: '1px solid #D4AF37'
                      }} data-testid={`engraving-display-${index}`}>
                        <span style={{ fontWeight: '600' }}>Gravur:</span> "{item.engraving}"
                      </div>
                    )}
                    <div style={{ fontSize: '24px', fontWeight: '700', color: '#FF4500' }}>
                      €{item.price}
                    </div>
                  </div>
                  <div style={{ display: 'flex', flexDirection: 'column', gap: '15px', alignItems: 'center' }}>
                    <div style={{ display: 'flex', alignItems: 'center', gap: '10px' }}>
                      <button
                        onClick={() => updateQuantity(index, -1)}
                        style={{
                          width: '35px',
                          height: '35px',
                          borderRadius: '8px',
                          border: '2px solid #1A1A1A',
                          background: 'white',
                          cursor: 'pointer',
                          display: 'flex',
                          alignItems: 'center',
                          justifyContent: 'center'
                        }}
                        data-testid={`decrease-qty-${index}`}
                      >
                        <Minus size={16} />
                      </button>
                      <span style={{ fontSize: '18px', fontWeight: '600', minWidth: '30px', textAlign: 'center' }} data-testid={`item-quantity-${index}`}>
                        {item.quantity}
                      </span>
                      <button
                        onClick={() => updateQuantity(index, 1)}
                        style={{
                          width: '35px',
                          height: '35px',
                          borderRadius: '8px',
                          border: '2px solid #1A1A1A',
                          background: 'white',
                          cursor: 'pointer',
                          display: 'flex',
                          alignItems: 'center',
                          justifyContent: 'center'
                        }}
                        data-testid={`increase-qty-${index}`}
                      >
                        <Plus size={16} />
                      </button>
                    </div>
                    <button
                      onClick={() => removeItem(index)}
                      style={{
                        background: '#FF4500',
                        color: 'white',
                        border: 'none',
                        padding: '10px 20px',
                        borderRadius: '8px',
                        cursor: 'pointer',
                        display: 'flex',
                        alignItems: 'center',
                        gap: '8px',
                        fontSize: '14px',
                        fontWeight: '600'
                      }}
                      data-testid={`remove-item-${index}`}
                    >
                      <Trash2 size={16} />
                      Entfernen
                    </button>
                  </div>
                </div>
              ))}
            </div>

            {/* Summary */}
            <div>
              <div style={{
                background: 'white',
                padding: '30px',
                borderRadius: '16px',
                boxShadow: '0 4px 20px rgba(0,0,0,0.08)',
                position: 'sticky',
                top: '100px'
              }} data-testid="cart-summary">
                <h3 style={{ fontSize: '24px', marginBottom: '20px' }}>Zusammenfassung</h3>
                <div style={{ borderBottom: '2px solid #eee', paddingBottom: '20px', marginBottom: '20px' }}>
                  <div style={{ display: 'flex', justifyContent: 'space-between', marginBottom: '10px' }}>
                    <span>Zwischensumme</span>
                    <span style={{ fontWeight: '600' }}>€{getTotal()}</span>
                  </div>
                  <div style={{ display: 'flex', justifyContent: 'space-between', marginBottom: '10px' }}>
                    <span>Versand</span>
                    <span style={{ fontWeight: '600', color: '#4CAF50' }}>GRATIS</span>
                  </div>
                </div>
                <div style={{
                  display: 'flex',
                  justifyContent: 'space-between',
                  fontSize: '24px',
                  fontWeight: '700',
                  marginBottom: '30px'
                }}>
                  <span>Gesamt</span>
                  <span className="gold-text" data-testid="cart-total">€{getTotal()}</span>
                </div>
                <button
                  className="btn-primary"
                  onClick={() => navigate('/checkout')}
                  style={{ width: '100%', fontSize: '18px' }}
                  data-testid="checkout-button"
                >
                  ZUR KASSE
                </button>
                <button
                  className="btn-outline"
                  onClick={() => navigate('/produkt')}
                  style={{ width: '100%', fontSize: '16px', marginTop: '15px' }}
                  data-testid="continue-shopping-link"
                >
                  WEITER EINKAUFEN
                </button>
              </div>
            </div>
          </div>
        )}
      </div>

      <Footer />
    </div>
  );
}