import React from 'react';
import { Link } from 'react-router-dom';

export default function Footer() {
  return (
    <footer style={{
      background: '#1A1A1A',
      color: 'white',
      padding: '60px 20px 30px',
      marginTop: '80px'
    }}>
      <div className="container" style={{
        maxWidth: '1200px',
        margin: '0 auto'
      }}>
        <div style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fit, minmax(250px, 1fr))',
          gap: '40px',
          marginBottom: '40px'
        }}>
          <div>
            <h3 style={{
              fontSize: '24px',
              marginBottom: '20px',
              fontFamily: 'Playfair Display, serif'
            }}>❤️ ArmbandShop</h3>
            <p style={{ opacity: 0.8, lineHeight: '1.6' }}>
              Premium personalisierte Armbänder für Männer mit Gravur. 
              Perfekte Geschenke für jeden Anlass.
            </p>
          </div>
          
          <div>
            <h4 style={{ marginBottom: '20px', fontSize: '18px' }}>Schnelllinks</h4>
            <div style={{ display: 'flex', flexDirection: 'column', gap: '12px' }}>
              <Link to="/" style={{ color: 'white', opacity: 0.8, textDecoration: 'none' }}>Home</Link>
              <Link to="/produkt" style={{ color: 'white', opacity: 0.8, textDecoration: 'none' }}>Produkt</Link>
              <Link to="/ueber-uns" style={{ color: 'white', opacity: 0.8, textDecoration: 'none' }}>Über uns</Link>
              <Link to="/kontakt" style={{ color: 'white', opacity: 0.8, textDecoration: 'none' }}>Kontakt</Link>
            </div>
          </div>
          
          <div>
            <h4 style={{ marginBottom: '20px', fontSize: '18px' }}>Rechtliches</h4>
            <div style={{ display: 'flex', flexDirection: 'column', gap: '12px' }}>
              <Link to="/impressum" style={{ color: 'white', opacity: 0.8, textDecoration: 'none' }}>Impressum</Link>
              <Link to="/agb" style={{ color: 'white', opacity: 0.8, textDecoration: 'none' }}>AGB</Link>
              <Link to="/datenschutz" style={{ color: 'white', opacity: 0.8, textDecoration: 'none' }}>Datenschutz</Link>
              <Link to="/faq" style={{ color: 'white', opacity: 0.8, textDecoration: 'none' }}>FAQ</Link>
            </div>
          </div>
          
          <div>
            <h4 style={{ marginBottom: '20px', fontSize: '18px' }}>Zahlungsmethoden</h4>
            <div style={{ display: 'flex', gap: '12px', flexWrap: 'wrap' }}>
              <div style={{
                background: 'white',
                padding: '8px 16px',
                borderRadius: '6px',
                fontSize: '12px',
                color: '#1A1A1A',
                fontWeight: '600'
              }}>PayPal</div>
              <div style={{
                background: 'white',
                padding: '8px 16px',
                borderRadius: '6px',
                fontSize: '12px',
                color: '#1A1A1A',
                fontWeight: '600'
              }}>Klarna</div>
              <div style={{
                background: 'white',
                padding: '8px 16px',
                borderRadius: '6px',
                fontSize: '12px',
                color: '#1A1A1A',
                fontWeight: '600'
              }}>Visa</div>
            </div>
          </div>
        </div>
        
        <div style={{
          borderTop: '1px solid rgba(255,255,255,0.1)',
          paddingTop: '30px',
          textAlign: 'center',
          opacity: 0.7
        }}>
          <p>© 2025 ArmbandShop. Alle Rechte vorbehalten. | Versand innerhalb Deutschlands 2-4 Werktage</p>
        </div>
      </div>
    </footer>
  );
}