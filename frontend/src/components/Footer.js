import React from 'react';
import { Link } from 'react-router-dom';

export default function Footer() {
  return (
    <footer style={{
      background: '#0A0E27',
      color: 'white',
      padding: '80px 20px 40px',
      marginTop: '100px'
    }}>
      <div className="container">
        <div style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fit, minmax(250px, 1fr))',
          gap: '60px',
          marginBottom: '60px'
        }}>
          <div>
            <h3 style={{
              fontSize: '20px',
              marginBottom: '24px',
              fontFamily: 'Cormorant Garamond, serif',
              fontWeight: '600',
              letterSpacing: '1px'
            }}>ATELIER<span className="gold-text">GRAVURE</span></h3>
            <p style={{ opacity: 0.7, lineHeight: '1.8', fontSize: '14px' }}>
              Création artisanale de bracelets personnalisés.
              Chaque pièce est unique et gravée avec précision.
            </p>
          </div>
          
          <div>
            <h4 style={{ marginBottom: '24px', fontSize: '14px', letterSpacing: '1.5px', textTransform: 'uppercase', fontWeight: '500' }}>Navigation</h4>
            <div style={{ display: 'flex', flexDirection: 'column', gap: '14px' }}>
              <Link to="/" style={{ color: 'white', opacity: 0.7, textDecoration: 'none', fontSize: '14px', transition: 'opacity 0.3s' }}>Accueil</Link>
              <Link to="/produkt" style={{ color: 'white', opacity: 0.7, textDecoration: 'none', fontSize: '14px', transition: 'opacity 0.3s' }}>Produits</Link>
              <Link to="/ueber-uns" style={{ color: 'white', opacity: 0.7, textDecoration: 'none', fontSize: '14px', transition: 'opacity 0.3s' }}>À Propos</Link>
              <Link to="/kontakt" style={{ color: 'white', opacity: 0.7, textDecoration: 'none', fontSize: '14px', transition: 'opacity 0.3s' }}>Contact</Link>
            </div>
          </div>
          
          <div>
            <h4 style={{ marginBottom: '24px', fontSize: '14px', letterSpacing: '1.5px', textTransform: 'uppercase', fontWeight: '500' }}>Légal</h4>
            <div style={{ display: 'flex', flexDirection: 'column', gap: '14px' }}>
              <Link to="/impressum" style={{ color: 'white', opacity: 0.7, textDecoration: 'none', fontSize: '14px', transition: 'opacity 0.3s' }}>Mentions Légales</Link>
              <Link to="/agb" style={{ color: 'white', opacity: 0.7, textDecoration: 'none', fontSize: '14px', transition: 'opacity 0.3s' }}>CGV</Link>
              <Link to="/datenschutz" style={{ color: 'white', opacity: 0.7, textDecoration: 'none', fontSize: '14px', transition: 'opacity 0.3s' }}>Confidentialité</Link>
              <Link to="/faq" style={{ color: 'white', opacity: 0.7, textDecoration: 'none', fontSize: '14px', transition: 'opacity 0.3s' }}>FAQ</Link>
            </div>
          </div>
          
          <div>
            <h4 style={{ marginBottom: '24px', fontSize: '14px', letterSpacing: '1.5px', textTransform: 'uppercase', fontWeight: '500' }}>Paiement</h4>
            <div style={{ display: 'flex', gap: '12px', flexWrap: 'wrap' }}>
              <div style={{
                background: 'white',
                padding: '8px 16px',
                borderRadius: '0',
                fontSize: '11px',
                color: '#0A0E27',
                fontWeight: '600',
                letterSpacing: '0.5px'
              }}>PAYPAL</div>
              <div style={{
                background: 'white',
                padding: '8px 16px',
                borderRadius: '0',
                fontSize: '11px',
                color: '#0A0E27',
                fontWeight: '600',
                letterSpacing: '0.5px'
              }}>KLARNA</div>
              <div style={{
                background: 'white',
                padding: '8px 16px',
                borderRadius: '0',
                fontSize: '11px',
                color: '#0A0E27',
                fontWeight: '600',
                letterSpacing: '0.5px'
              }}>VISA</div>
            </div>
          </div>
        </div>
        
        <div style={{
          borderTop: '1px solid rgba(255,255,255,0.1)',
          paddingTop: '32px',
          textAlign: 'center',
          opacity: 0.6,
          fontSize: '13px',
          letterSpacing: '0.5px'
        }}>
          <p>© 2025 AtelierGravure. Tous droits réservés. | Livraison France 2-4 jours ouvrables</p>
        </div>
      </div>
    </footer>
  );
}