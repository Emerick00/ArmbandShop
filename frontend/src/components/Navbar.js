import React from 'react';
import { Link } from 'react-router-dom';
import { ShoppingCart } from 'lucide-react';

export default function Navbar() {
  const [cartCount, setCartCount] = React.useState(0);

  React.useEffect(() => {
    const updateCartCount = () => {
      const cart = JSON.parse(localStorage.getItem('cart') || '[]');
      const total = cart.reduce((sum, item) => sum + item.quantity, 0);
      setCartCount(total);
    };

    updateCartCount();
    window.addEventListener('cartUpdated', updateCartCount);
    return () => window.removeEventListener('cartUpdated', updateCartCount);
  }, []);

  return (
    <nav style={{
      position: 'sticky',
      top: 0,
      background: 'rgba(255, 255, 255, 0.98)',
      backdropFilter: 'blur(8px)',
      borderBottom: '1px solid #E2E8F0',
      zIndex: 100,
      padding: '24px 0'
    }}>
      <div className="container" style={{
        display: 'flex',
        justifyContent: 'space-between',
        alignItems: 'center'
      }}>
        <Link to="/" style={{
          fontSize: '20px',
          fontWeight: '600',
          color: '#0A0E27',
          textDecoration: 'none',
          fontFamily: 'Cormorant Garamond, serif',
          letterSpacing: '1px'
        }}>
          ATELIER<span className="gold-text">GRAVURE</span>
        </Link>
        
        <div style={{ display: 'flex', gap: '40px', alignItems: 'center' }}>
          <Link to="/" className="nav-link">Accueil</Link>
          <Link to="/produkt" className="nav-link">Produits</Link>
          <Link to="/ueber-uns" className="nav-link">À Propos</Link>
          <Link to="/kontakt" className="nav-link">Contact</Link>
          <Link to="/faq" className="nav-link">FAQ</Link>
          <Link to="/warenkorb" style={{
            position: 'relative',
            display: 'flex',
            alignItems: 'center',
            textDecoration: 'none',
            color: '#0A0E27'
          }}>
            <ShoppingCart size={22} strokeWidth={1.5} />
            {cartCount > 0 && (
              <span style={{
                position: 'absolute',
                top: '-8px',
                right: '-8px',
                background: '#C9A95A',
                color: 'white',
                borderRadius: '50%',
                width: '18px',
                height: '18px',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                fontSize: '11px',
                fontWeight: '600'
              }}>
                {cartCount}
              </span>
            )}
          </Link>
        </div>
      </div>
    </nav>
  );
}