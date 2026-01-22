import React from 'react';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import { Heart, Award, Users, Clock } from 'lucide-react';

export default function AboutPage() {
  return (
    <div data-testid="about-page">
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
          }} data-testid="about-title">
            Über ArmbandShop ❤️
          </h1>
          <p style={{ fontSize: '20px', color: '#666', maxWidth: '700px', margin: '0 auto' }}>
            Wir schaffen einzigartige, personalisierte Armbänder, die Emotionen und Erinnerungen bewahren.
          </p>
        </div>
      </div>

      <div className="container" style={{ padding: '80px 20px' }}>
        <div style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fit, minmax(250px, 1fr))',
          gap: '40px',
          marginBottom: '80px'
        }}>
          <div style={{ textAlign: 'center' }} data-testid="value-quality">
            <div style={{
              width: '80px',
              height: '80px',
              background: 'linear-gradient(135deg, #D4AF37 0%, #FFD700 100%)',
              borderRadius: '50%',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              margin: '0 auto 20px'
            }}>
              <Award size={40} color="white" />
            </div>
            <h3 style={{ fontSize: '24px', marginBottom: '15px' }}>Premium Qualität</h3>
            <p style={{ color: '#666', lineHeight: '1.6' }}>
              Nur beste Materialien: Echtes Leder und 316L Edelstahl für langlebige Schmuckstücke.
            </p>
          </div>

          <div style={{ textAlign: 'center' }} data-testid="value-personalization">
            <div style={{
              width: '80px',
              height: '80px',
              background: 'linear-gradient(135deg, #FF6B9D 0%, #FF4500 100%)',
              borderRadius: '50%',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              margin: '0 auto 20px'
            }}>
              <Heart size={40} color="white" />
            </div>
            <h3 style={{ fontSize: '24px', marginBottom: '15px' }}>Personalisiert</h3>
            <p style={{ color: '#666', lineHeight: '1.6' }}>
              Jedes Armband wird mit Laserpräzision individuell graviert - einzigartig wie Ihre Geschichte.
            </p>
          </div>

          <div style={{ textAlign: 'center' }} data-testid="value-customers">
            <div style={{
              width: '80px',
              height: '80px',
              background: 'linear-gradient(135deg, #1A1A1A 0%, #3A3A3A 100%)',
              borderRadius: '50%',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              margin: '0 auto 20px'
            }}>
              <Users size={40} color="white" />
            </div>
            <h3 style={{ fontSize: '24px', marginBottom: '15px' }}>10.000+ Kunden</h3>
            <p style={{ color: '#666', lineHeight: '1.6' }}>
              Über 10.000 zufriedene Kunden vertrauen auf unsere Handwerkskunst und Service.
            </p>
          </div>

          <div style={{ textAlign: 'center' }} data-testid="value-delivery">
            <div style={{
              width: '80px',
              height: '80px',
              background: 'linear-gradient(135deg, #4CAF50 0%, #45B649 100%)',
              borderRadius: '50%',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              margin: '0 auto 20px'
            }}>
              <Clock size={40} color="white" />
            </div>
            <h3 style={{ fontSize: '24px', marginBottom: '15px' }}>Schnelle Lieferung</h3>
            <p style={{ color: '#666', lineHeight: '1.6' }}>
              Express-Gravur in 24h und Versand innerhalb von 2-4 Werktagen deutschlandweit.
            </p>
          </div>
        </div>

        <div style={{
          background: 'white',
          padding: '60px',
          borderRadius: '20px',
          boxShadow: '0 8px 40px rgba(0,0,0,0.08)'
        }}>
          <h2 style={{
            fontSize: '42px',
            marginBottom: '30px',
            fontFamily: 'Playfair Display, serif',
            textAlign: 'center'
          }}>Unsere Geschichte</h2>
          <div style={{
            maxWidth: '800px',
            margin: '0 auto',
            fontSize: '18px',
            lineHeight: '1.8',
            color: '#666'
          }}>
            <p style={{ marginBottom: '20px' }}>
              ArmbandShop wurde 2020 mit einer klaren Vision gegründet: Jedem Menschen die Möglichkeit zu geben, 
              seine wichtigsten Erinnerungen und Emotionen in einem hochwertigen, personalisierten Schmuckstück zu verewigen.
            </p>
            <p style={{ marginBottom: '20px' }}>
              Was als kleine Manufaktur begann, hat sich zu einer der führenden Marken für personalisierte 
              Armbänder in Deutschland entwickelt. Unsere Mission ist es, durch handgefertigte Qualität und 
              individuelle Gravuren besondere Momente festzuhalten.
            </p>
            <p>
              Jedes unserer Armbänder wird mit größter Sorgfalt und Liebe zum Detail hergestellt. 
              Wir verwenden ausschließlich hochwertige Materialien und moderne Lasergravurtechnologie, 
              um sicherzustellen, dass Ihr Armband ein Leben lang hält.
            </p>
          </div>
        </div>
      </div>

      <Footer />
    </div>
  );
}