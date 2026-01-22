import React from 'react';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';

export default function ImpressumPage() {
  return (
    <div data-testid="impressum-page">
      <Navbar />

      <div className="container" style={{ padding: '60px 20px', maxWidth: '900px' }}>
        <h1 style={{
          fontSize: '48px',
          marginBottom: '40px',
          fontFamily: 'Playfair Display, serif'
        }} data-testid="impressum-title">
          Impressum
        </h1>

        <div style={{
          background: 'white',
          padding: '40px',
          borderRadius: '16px',
          boxShadow: '0 4px 20px rgba(0,0,0,0.08)',
          lineHeight: '1.8',
          fontSize: '16px',
          color: '#666'
        }}>
          <h2 style={{ fontSize: '24px', marginBottom: '20px', color: '#1A1A1A' }}>Angaben gemäß § 5 TMG</h2>
          <p style={{ marginBottom: '30px' }}>
            <strong>ArmbandShop GmbH</strong><br />
            Musterstraße 123<br />
            10115 Berlin<br />
            Deutschland
          </p>

          <p style={{ marginBottom: '30px' }}>
            <strong>Handelsregister:</strong> HRB 12345 B<br />
            <strong>Registergericht:</strong> Amtsgericht Berlin-Charlottenburg<br />
            <strong>Geschäftsführer:</strong> Max Mustermann
          </p>

          <h2 style={{ fontSize: '24px', marginBottom: '20px', marginTop: '40px', color: '#1A1A1A' }}>Kontakt</h2>
          <p style={{ marginBottom: '30px' }}>
            <strong>Telefon:</strong> +49 30 123 456 789<br />
            <strong>E-Mail:</strong> info@armbandshop.de<br />
            <strong>Website:</strong> www.armbandshop.de
          </p>

          <h2 style={{ fontSize: '24px', marginBottom: '20px', marginTop: '40px', color: '#1A1A1A' }}>Umsatzsteuer-ID</h2>
          <p style={{ marginBottom: '30px' }}>
            Umsatzsteuer-Identifikationsnummer gemäß § 27 a Umsatzsteuergesetz:<br />
            <strong>DE123456789</strong>
          </p>

          <h2 style={{ fontSize: '24px', marginBottom: '20px', marginTop: '40px', color: '#1A1A1A' }}>EU-Streitschlichtung</h2>
          <p style={{ marginBottom: '30px' }}>
            Die Europäische Kommission stellt eine Plattform zur Online-Streitbeilegung (OS) bereit:<br />
            <a href="https://ec.europa.eu/consumers/odr" target="_blank" rel="noopener noreferrer" style={{ color: '#D4AF37' }}>
              https://ec.europa.eu/consumers/odr
            </a><br />
            Unsere E-Mail-Adresse finden Sie oben im Impressum.
          </p>

          <h2 style={{ fontSize: '24px', marginBottom: '20px', marginTop: '40px', color: '#1A1A1A' }}>Verbraucher­beschlichtungsstelle</h2>
          <p style={{ marginBottom: '30px' }}>
            Wir sind nicht bereit oder verpflichtet, an Streitbeilegungsverfahren vor einer 
            Verbraucherschlichtungsstelle teilzunehmen.
          </p>

          <h2 style={{ fontSize: '24px', marginBottom: '20px', marginTop: '40px', color: '#1A1A1A' }}>Haftung für Inhalte</h2>
          <p style={{ marginBottom: '30px' }}>
            Als Diensteanbieter sind wir gemäß § 7 Abs.1 TMG für eigene Inhalte auf diesen Seiten nach den 
            allgemeinen Gesetzen verantwortlich. Nach §§ 8 bis 10 TMG sind wir als Diensteanbieter jedoch nicht 
            verpflichtet, übermittelte oder gespeicherte fremde Informationen zu überwachen oder nach Umständen 
            zu forschen, die auf eine rechtswidrige Tätigkeit hinweisen.
          </p>

          <h2 style={{ fontSize: '24px', marginBottom: '20px', marginTop: '40px', color: '#1A1A1A' }}>Haftung für Links</h2>
          <p style={{ marginBottom: '30px' }}>
            Unser Angebot enthält Links zu externen Websites Dritter, auf deren Inhalte wir keinen Einfluss haben. 
            Deshalb können wir für diese fremden Inhalte auch keine Gewähr übernehmen. Für die Inhalte der 
            verlinkten Seiten ist stets der jeweilige Anbieter oder Betreiber der Seiten verantwortlich.
          </p>

          <h2 style={{ fontSize: '24px', marginBottom: '20px', marginTop: '40px', color: '#1A1A1A' }}>Urheberrecht</h2>
          <p>
            Die durch die Seitenbetreiber erstellten Inhalte und Werke auf diesen Seiten unterliegen dem deutschen 
            Urheberrecht. Die Vervielfältigung, Bearbeitung, Verbreitung und jede Art der Verwertung außerhalb der 
            Grenzen des Urheberrechtes bedürfen der schriftlichen Zustimmung des jeweiligen Autors bzw. Erstellers.
          </p>
        </div>
      </div>

      <Footer />
    </div>
  );
}