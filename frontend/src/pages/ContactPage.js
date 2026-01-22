import React, { useState } from 'react';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import { Mail, Phone, MapPin, Send } from 'lucide-react';

export default function ContactPage() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  });
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    // Simulate form submission
    const contacts = JSON.parse(localStorage.getItem('contacts') || '[]');
    contacts.push({ ...formData, date: new Date().toISOString() });
    localStorage.setItem('contacts', JSON.stringify(contacts));
    setSubmitted(true);
    setTimeout(() => {
      setSubmitted(false);
      setFormData({ name: '', email: '', subject: '', message: '' });
    }, 3000);
  };

  return (
    <div data-testid="contact-page">
      <Navbar />

      <div style={{
        background: 'linear-gradient(135deg, #F8F9FA 0%, #FFFFFF 100%)',
        padding: '100px 20px',
        textAlign: 'center'
      }}>
        <div className="container">
          <h1 style={{
            fontSize: 'clamp(36px, 6vw, 64px)',
            marginBottom: '20px',
            fontFamily: 'Playfair Display, serif'
          }} data-testid="contact-title">
            Kontakt 💬
          </h1>
          <p style={{ fontSize: '20px', color: '#666', maxWidth: '700px', margin: '0 auto' }}>
            Haben Sie Fragen? Wir sind für Sie da!
          </p>
        </div>
      </div>

      <div className="container" style={{ padding: '80px 20px' }}>
        <div style={{
          display: 'grid',
          gridTemplateColumns: '1fr 1fr',
          gap: '60px'
        }}>
          {/* Contact Form */}
          <div>
            <h2 style={{
              fontSize: '32px',
              marginBottom: '30px',
              fontFamily: 'Playfair Display, serif'
            }}>Nachricht senden</h2>
            
            {submitted ? (
              <div style={{
                background: '#4CAF50',
                color: 'white',
                padding: '30px',
                borderRadius: '12px',
                textAlign: 'center',
                fontSize: '18px'
              }} data-testid="contact-success-message">
                ✅ Vielen Dank! Ihre Nachricht wurde gesendet. Wir melden uns in Kürze bei Ihnen.
              </div>
            ) : (
              <form onSubmit={handleSubmit} data-testid="contact-form">
                <div style={{ marginBottom: '20px' }}>
                  <input
                    type="text"
                    placeholder="Ihr Name *"
                    required
                    value={formData.name}
                    onChange={(e) => setFormData({...formData, name: e.target.value})}
                    style={{
                      width: '100%',
                      padding: '15px',
                      borderRadius: '8px',
                      border: '2px solid #ddd',
                      fontSize: '16px',
                      outline: 'none'
                    }}
                    data-testid="contact-name-input"
                  />
                </div>
                <div style={{ marginBottom: '20px' }}>
                  <input
                    type="email"
                    placeholder="Ihre E-Mail *"
                    required
                    value={formData.email}
                    onChange={(e) => setFormData({...formData, email: e.target.value})}
                    style={{
                      width: '100%',
                      padding: '15px',
                      borderRadius: '8px',
                      border: '2px solid #ddd',
                      fontSize: '16px',
                      outline: 'none'
                    }}
                    data-testid="contact-email-input"
                  />
                </div>
                <div style={{ marginBottom: '20px' }}>
                  <input
                    type="text"
                    placeholder="Betreff *"
                    required
                    value={formData.subject}
                    onChange={(e) => setFormData({...formData, subject: e.target.value})}
                    style={{
                      width: '100%',
                      padding: '15px',
                      borderRadius: '8px',
                      border: '2px solid #ddd',
                      fontSize: '16px',
                      outline: 'none'
                    }}
                    data-testid="contact-subject-input"
                  />
                </div>
                <div style={{ marginBottom: '20px' }}>
                  <textarea
                    placeholder="Ihre Nachricht *"
                    required
                    rows="6"
                    value={formData.message}
                    onChange={(e) => setFormData({...formData, message: e.target.value})}
                    style={{
                      width: '100%',
                      padding: '15px',
                      borderRadius: '8px',
                      border: '2px solid #ddd',
                      fontSize: '16px',
                      outline: 'none',
                      resize: 'vertical'
                    }}
                    data-testid="contact-message-input"
                  />
                </div>
                <button
                  type="submit"
                  className="btn-primary"
                  style={{ width: '100%', fontSize: '18px' }}
                  data-testid="contact-submit-button"
                >
                  <Send size={20} style={{ display: 'inline', marginRight: '10px' }} />
                  NACHRICHT SENDEN
                </button>
              </form>
            )}
          </div>

          {/* Contact Info */}
          <div>
            <h2 style={{
              fontSize: '32px',
              marginBottom: '30px',
              fontFamily: 'Playfair Display, serif'
            }}>Kontaktinformationen</h2>
            
            <div style={{ display: 'flex', flexDirection: 'column', gap: '30px' }}>
              <div style={{
                background: 'white',
                padding: '30px',
                borderRadius: '16px',
                boxShadow: '0 4px 20px rgba(0,0,0,0.08)',
                display: 'flex',
                alignItems: 'center',
                gap: '20px'
              }} data-testid="contact-email-info">
                <div style={{
                  width: '60px',
                  height: '60px',
                  background: 'linear-gradient(135deg, #D4AF37 0%, #FFD700 100%)',
                  borderRadius: '12px',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center'
                }}>
                  <Mail size={28} color="white" />
                </div>
                <div>
                  <h4 style={{ fontSize: '18px', marginBottom: '8px' }}>E-Mail</h4>
                  <a href="mailto:info@armbandshop.de" style={{ color: '#666', textDecoration: 'none' }}>
                    info@armbandshop.de
                  </a>
                </div>
              </div>

              <div style={{
                background: 'white',
                padding: '30px',
                borderRadius: '16px',
                boxShadow: '0 4px 20px rgba(0,0,0,0.08)',
                display: 'flex',
                alignItems: 'center',
                gap: '20px'
              }} data-testid="contact-phone-info">
                <div style={{
                  width: '60px',
                  height: '60px',
                  background: 'linear-gradient(135deg, #FF6B9D 0%, #FF4500 100%)',
                  borderRadius: '12px',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center'
                }}>
                  <Phone size={28} color="white" />
                </div>
                <div>
                  <h4 style={{ fontSize: '18px', marginBottom: '8px' }}>Telefon</h4>
                  <a href="tel:+4930123456789" style={{ color: '#666', textDecoration: 'none' }}>
                    +49 30 123 456 789
                  </a>
                </div>
              </div>

              <div style={{
                background: 'white',
                padding: '30px',
                borderRadius: '16px',
                boxShadow: '0 4px 20px rgba(0,0,0,0.08)',
                display: 'flex',
                alignItems: 'center',
                gap: '20px'
              }} data-testid="contact-address-info">
                <div style={{
                  width: '60px',
                  height: '60px',
                  background: 'linear-gradient(135deg, #1A1A1A 0%, #3A3A3A 100%)',
                  borderRadius: '12px',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center'
                }}>
                  <MapPin size={28} color="white" />
                </div>
                <div>
                  <h4 style={{ fontSize: '18px', marginBottom: '8px' }}>Adresse</h4>
                  <p style={{ color: '#666', margin: 0 }}>
                    Musterstraße 123<br />
                    10115 Berlin<br />
                    Deutschland
                  </p>
                </div>
              </div>

              <div style={{
                background: 'white',
                padding: '30px',
                borderRadius: '16px',
                boxShadow: '0 4px 20px rgba(0,0,0,0.08)'
              }} data-testid="opening-hours">
                <h4 style={{ fontSize: '20px', marginBottom: '20px' }}>Öffnungszeiten</h4>
                <div style={{ color: '#666', lineHeight: '1.8' }}>
                  <div style={{ display: 'flex', justifyContent: 'space-between', marginBottom: '10px' }}>
                    <span>Montag - Freitag</span>
                    <span style={{ fontWeight: '600' }}>9:00 - 18:00</span>
                  </div>
                  <div style={{ display: 'flex', justifyContent: 'space-between', marginBottom: '10px' }}>
                    <span>Samstag</span>
                    <span style={{ fontWeight: '600' }}>10:00 - 16:00</span>
                  </div>
                  <div style={{ display: 'flex', justifyContent: 'space-between' }}>
                    <span>Sonntag</span>
                    <span style={{ fontWeight: '600' }}>Geschlossen</span>
                  </div>
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