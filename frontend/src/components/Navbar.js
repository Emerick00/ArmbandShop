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
      background: 'white',
      boxShadow: '0 2px 10px rgba(0,0,0,0.1)',
      zIndex: 100,
      padding: '20px 0'
    }}>
      <div className="container" style={{
        display: 'flex',
        justifyContent: 'space-between',
        alignItems: 'center',
        maxWidth: '1200px',
        margin: '0 auto',
        padding: '0 20px'
      }}>
        <Link to="/" style={{
          fontSize: '28px',
          fontWeight: '800',
          color: '#1A1A1A',
          textDecoration: 'none',
          fontFamily: 'Playfair Display, serif'
        }}>
          ❤️ Armband<span className="gold-text">Shop</span>
        </Link>
        
        <div style={{ display: 'flex', gap: '30px', alignItems: 'center' }}>
          <Link to="/" className="nav-link">Home</Link>
          <Link to="/produkt" className="nav-link">Produkt</Link>
          <Link to="/ueber-uns" className="nav-link">Über uns</Link>
          <Link to="/kontakt" className="nav-link">Kontakt</Link>
          <Link to="/faq" className="nav-link">FAQ</Link>
          <Link to="/warenkorb" style={{
            position: 'relative',
            display: 'flex',
            alignItems: 'center',
            textDecoration: 'none',
            color: '#1A1A1A'
          }}>
            <ShoppingCart size={24} />
            {cartCount > 0 && (
              <span style={{
                position: 'absolute',
                top: '-8px',
                right: '-8px',
                background: '#FF4500',
                color: 'white',
                borderRadius: '50%',
                width: '20px',
                height: '20px',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                fontSize: '12px',
                fontWeight: '700'
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