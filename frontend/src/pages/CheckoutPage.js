import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import { Check } from 'lucide-react';

export default function CheckoutPage() {
  const navigate = useNavigate();
  const [cart, setCart] = useState([]);
  const [orderPlaced, setOrderPlaced] = useState(false);
  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    email: '',
    phone: '',
    address: '',
    city: '',
    zip: '',
    paymentMethod: 'paypal'
  });

  useEffect(() => {
    const cartData = JSON.parse(localStorage.getItem('cart') || '[]');
    if (cartData.length === 0) {
      navigate('/warenkorb');
    }
    setCart(cartData);
  }, [navigate]);

  const getTotal = () => {
    return cart.reduce((sum, item) => sum + (item.price * item.quantity), 0).toFixed(2);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Simulate order placement
    const order = {
      id: `ORDER-${Date.now()}`,
      date: new Date().toISOString(),
      items: cart,
      total: getTotal(),
      customer: formData
    };
    
    const orders = JSON.parse(localStorage.getItem('orders') || '[]');
    orders.push(order);
    localStorage.setItem('orders', JSON.stringify(orders));
    localStorage.removeItem('cart');
    window.dispatchEvent(new Event('cartUpdated'));
    
    setOrderPlaced(true);
  };

  if (orderPlaced) {
    return (
      <div data-testid="order-success-page">
        <Navbar />
        <div className="container" style={{ padding: '100px 20px', textAlign: 'center' }}>
          <div style={{
            maxWidth: '600px',
            margin: '0 auto',
            background: 'white',
            padding: '60px',
            borderRadius: '20px',
            boxShadow: '0 8px 40px rgba(0,0,0,0.1)'
          }} data-testid="order-confirmation">
            <div style={{
              width: '80px',
              height: '80px',
              background: '#4CAF50',
              borderRadius: '50%',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              margin: '0 auto 30px'
            }}>
              <Check size={48} color="white" />
            </div>
            <h1 style={{
              fontSize: '42px',
              marginBottom: '20px',
              fontFamily: 'Playfair Display, serif'
            }}>Vielen Dank! 🎉</h1>
            <p style={{ fontSize: '18px', color: '#666', marginBottom: '30px' }}>
              Ihre Bestellung wurde erfolgreich aufgegeben.
            </p>
            <div style={{
              background: '#F8F9FA',
              padding: '20px',
              borderRadius: '12px',
              marginBottom: '30px'
            }}>
              <p style={{ fontSize: '14px', color: '#666', marginBottom: '10px' }}>Gesamtbetrag</p>
              <p style={{ fontSize: '32px', fontWeight: '700', color: '#D4AF37' }}>€{getTotal()}</p>
            </div>
            <p style={{ fontSize: '16px', color: '#666', marginBottom: '30px' }}>
              Sie erhalten in Kürze eine Bestätigungs-E-Mail mit allen Details.
            </p>
            <button
              className="btn-primary"
              onClick={() => navigate('/')}
              data-testid="back-to-home-button"
            >
              ZURÜCK ZUR STARTSEITE
            </button>
          </div>
        </div>
        <Footer />
      </div>
    );
  }

  return (
    <div data-testid="checkout-page">
      <Navbar />

      <div className="container" style={{ padding: '60px 20px' }}>
        <h1 style={{
          fontSize: '48px',
          marginBottom: '40px',
          fontFamily: 'Playfair Display, serif',
          textAlign: 'center'
        }} data-testid="checkout-title">
          Kasse 💳
        </h1>

        <div style={{
          display: 'grid',
          gridTemplateColumns: '1.5fr 1fr',
          gap: '40px'
        }}>
          {/* Checkout Form */}
          <div>
            <form onSubmit={handleSubmit} data-testid="checkout-form">
              <div style={{
                background: 'white',
                padding: '40px',
                borderRadius: '16px',
                boxShadow: '0 4px 20px rgba(0,0,0,0.08)',
                marginBottom: '30px'
              }}>
                <h3 style={{ fontSize: '24px', marginBottom: '30px' }}>Lieferadresse</h3>
                <div style={{
                  display: 'grid',
                  gridTemplateColumns: '1fr 1fr',
                  gap: '20px',
                  marginBottom: '20px'
                }}>
                  <input
                    type="text"
                    placeholder="Vorname *"
                    required
                    value={formData.firstName}
                    onChange={(e) => setFormData({...formData, firstName: e.target.value})}
                    style={{
                      padding: '15px',
                      borderRadius: '8px',
                      border: '2px solid #ddd',
                      fontSize: '16px',
                      outline: 'none'
                    }}
                    data-testid="first-name-input"
                  />
                  <input
                    type="text"
                    placeholder="Nachname *"
                    required
                    value={formData.lastName}
                    onChange={(e) => setFormData({...formData, lastName: e.target.value})}
                    style={{
                      padding: '15px',
                      borderRadius: '8px',
                      border: '2px solid #ddd',
                      fontSize: '16px',
                      outline: 'none'
                    }}
                    data-testid="last-name-input"
                  />
                </div>
                <input
                  type="email"
                  placeholder="E-Mail *"
                  required
                  value={formData.email}
                  onChange={(e) => setFormData({...formData, email: e.target.value})}
                  style={{
                    width: '100%',
                    padding: '15px',
                    borderRadius: '8px',
                    border: '2px solid #ddd',
                    fontSize: '16px',
                    outline: 'none',
                    marginBottom: '20px'
                  }}
                  data-testid="email-input"
                />
                <input
                  type="tel"
                  placeholder="Telefon *"
                  required
                  value={formData.phone}
                  onChange={(e) => setFormData({...formData, phone: e.target.value})}
                  style={{
                    width: '100%',
                    padding: '15px',
                    borderRadius: '8px',
                    border: '2px solid #ddd',
                    fontSize: '16px',
                    outline: 'none',
                    marginBottom: '20px'
                  }}
                  data-testid="phone-input"
                />
                <input
                  type="text"
                  placeholder="Straße und Hausnummer *"
                  required
                  value={formData.address}
                  onChange={(e) => setFormData({...formData, address: e.target.value})}
                  style={{
                    width: '100%',
                    padding: '15px',
                    borderRadius: '8px',
                    border: '2px solid #ddd',
                    fontSize: '16px',
                    outline: 'none',
                    marginBottom: '20px'
                  }}
                  data-testid="address-input"
                />
                <div style={{
                  display: 'grid',
                  gridTemplateColumns: '2fr 1fr',
                  gap: '20px'
                }}>
                  <input
                    type="text"
                    placeholder="Stadt *"
                    required
                    value={formData.city}
                    onChange={(e) => setFormData({...formData, city: e.target.value})}
                    style={{
                      padding: '15px',
                      borderRadius: '8px',
                      border: '2px solid #ddd',
                      fontSize: '16px',
                      outline: 'none'
                    }}
                    data-testid="city-input"
                  />
                  <input
                    type="text"
                    placeholder="PLZ *"
                    required
                    value={formData.zip}
                    onChange={(e) => setFormData({...formData, zip: e.target.value})}
                    style={{
                      padding: '15px',
                      borderRadius: '8px',
                      border: '2px solid #ddd',
                      fontSize: '16px',
                      outline: 'none'
                    }}
                    data-testid="zip-input"
                  />
                </div>
              </div>

              <div style={{
                background: 'white',
                padding: '40px',
                borderRadius: '16px',
                boxShadow: '0 4px 20px rgba(0,0,0,0.08)'
              }}>
                <h3 style={{ fontSize: '24px', marginBottom: '30px' }}>Zahlungsmethode</h3>
                <div style={{ display: 'flex', flexDirection: 'column', gap: '15px' }}>
                  {['paypal', 'klarna', 'kreditkarte'].map(method => (
                    <label
                      key={method}
                      style={{
                        padding: '20px',
                        border: '2px solid ' + (formData.paymentMethod === method ? '#D4AF37' : '#ddd'),
                        borderRadius: '12px',
                        cursor: 'pointer',
                        display: 'flex',
                        alignItems: 'center',
                        gap: '15px',
                        background: formData.paymentMethod === method ? '#FFF9E6' : 'white',
                        transition: 'all 0.3s ease'
                      }}
                      data-testid={`payment-${method}`}
                    >
                      <input
                        type="radio"
                        name="payment"
                        value={method}
                        checked={formData.paymentMethod === method}
                        onChange={(e) => setFormData({...formData, paymentMethod: e.target.value})}
                        style={{ width: '20px', height: '20px' }}
                      />
                      <span style={{ fontSize: '18px', fontWeight: '600', textTransform: 'capitalize' }}>
                        {method === 'kreditkarte' ? 'Kreditkarte' : method.charAt(0).toUpperCase() + method.slice(1)}
                      </span>
                    </label>
                  ))}
                </div>
              </div>

              <button
                type="submit"
                className="btn-primary"
                style={{ width: '100%', fontSize: '20px', marginTop: '30px', padding: '20px' }}
                data-testid="place-order-button"
              >
                JETZT KAUFEN
              </button>
            </form>
          </div>

          {/* Order Summary */}
          <div>
            <div style={{
              background: 'white',
              padding: '30px',
              borderRadius: '16px',
              boxShadow: '0 4px 20px rgba(0,0,0,0.08)',
              position: 'sticky',
              top: '100px'
            }} data-testid="order-summary">
              <h3 style={{ fontSize: '24px', marginBottom: '30px' }}>Bestellübersicht</h3>
              {cart.map((item, index) => (
                <div
                  key={index}
                  style={{
                    display: 'flex',
                    gap: '15px',
                    marginBottom: '20px',
                    paddingBottom: '20px',
                    borderBottom: '1px solid #eee'
                  }}
                  data-testid={`summary-item-${index}`}
                >
                  <img
                    src={item.image}
                    alt={item.name}
                    style={{
                      width: '80px',
                      height: '80px',
                      objectFit: 'cover',
                      borderRadius: '8px'
                    }}
                  />
                  <div style={{ flex: 1 }}>
                    <div style={{ fontWeight: '600', marginBottom: '5px' }}>{item.name}</div>
                    {item.engraving && (
                      <div style={{ fontSize: '14px', color: '#D4AF37', marginBottom: '5px' }}>
                        Gravur: "{item.engraving}"
                      </div>
                    )}
                    <div style={{ fontSize: '14px', color: '#666' }}>Menge: {item.quantity}</div>
                  </div>
                  <div style={{ fontWeight: '700' }}>€{(item.price * item.quantity).toFixed(2)}</div>
                </div>
              ))}
              <div style={{ marginTop: '30px' }}>
                <div style={{ display: 'flex', justifyContent: 'space-between', marginBottom: '10px' }}>
                  <span>Zwischensumme</span>
                  <span style={{ fontWeight: '600' }}>€{getTotal()}</span>
                </div>
                <div style={{ display: 'flex', justifyContent: 'space-between', marginBottom: '20px' }}>
                  <span>Versand</span>
                  <span style={{ fontWeight: '600', color: '#4CAF50' }}>GRATIS</span>
                </div>
                <div style={{
                  display: 'flex',
                  justifyContent: 'space-between',
                  fontSize: '24px',
                  fontWeight: '700',
                  paddingTop: '20px',
                  borderTop: '2px solid #eee'
                }}>
                  <span>Gesamt</span>
                  <span className="gold-text" data-testid="checkout-total">€{getTotal()}</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <Footer />
    </div>
  );
}