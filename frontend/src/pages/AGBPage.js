import React from 'react';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';

export default function AGBPage() {
  return (
    <div data-testid="agb-page">
      <Navbar />

      <div className="container" style={{ padding: '60px 20px', maxWidth: '900px' }}>
        <h1 style={{
          fontSize: '48px',
          marginBottom: '40px',
          fontFamily: 'Playfair Display, serif'
        }} data-testid="agb-title">
          Allgemeine Geschäftsbedingungen (AGB)
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
          <h2 style={{ fontSize: '24px', marginBottom: '20px', color: '#1A1A1A' }}>§ 1 Geltungsbereich</h2>
          <p style={{ marginBottom: '30px' }}>
            Diese Allgemeinen Geschäftsbedingungen (nachfolgend "AGB") der ArmbandShop GmbH (nachfolgend "Verkäufer") 
            gelten für alle Verträge über die Lieferung von Waren, die ein Verbraucher oder Unternehmer (nachfolgend "„Kunde") 
            mit dem Verkäufer hinsichtlich der im Online-Shop des Verkäufers dargestellten Waren abschließt.
          </p>

          <h2 style={{ fontSize: '24px', marginBottom: '20px', marginTop: '40px', color: '#1A1A1A' }}>§ 2 Vertragsschluss</h2>
          <p style={{ marginBottom: '30px' }}>
            (1) Die im Online-Shop des Verkäufers enthaltenen Produktbeschreibungen stellen keine verbindlichen Angebote 
            seitens des Verkäufers dar, sondern dienen zur Abgabe eines verbindlichen Angebots durch den Kunden.<br /><br />
            (2) Der Kunde kann das Angebot über das in den Online-Shop des Verkäufers integrierte Online-Bestellformular abgeben. 
            Dabei gibt der Kunde, nachdem er die ausgewählten Waren in den virtuellen Warenkorb gelegt und den elektronischen 
            Bestellprozess durchlaufen hat, durch Klicken des den Bestellvorgang abschließenden Buttons ein rechtlich verbindliches 
            Vertragsangebot in Bezug auf die im Warenkorb enthaltenen Waren ab.<br /><br />
            (3) Der Verkäufer kann das Angebot des Kunden innerhalb von fünf Tagen annehmen, indem er dem Kunden eine schriftliche 
            Auftragsbestätigung oder eine Auftragsbestätigung in Textform (Fax oder E-Mail) übermittelt, wobei insoweit der Zugang 
            der Auftragsbestätigung beim Kunden maßgeblich ist.
          </p>

          <h2 style={{ fontSize: '24px', marginBottom: '20px', marginTop: '40px', color: '#1A1A1A' }}>§ 3 Preise und Zahlungsbedingungen</h2>
          <p style={{ marginBottom: '30px' }}>
            (1) Alle Preise, die auf der Internetseite des Verkäufers angegeben sind, verstehen sich einschließlich der jeweils 
            gültigen gesetzlichen Umsatzsteuer.<br /><br />
            (2) Die Versandkosten werden dem Kunden auf einer besonderen Informationsseite und im Rahmen des Bestellvorgangs deutlich 
            mitgeteilt. Innerhalb Deutschlands erfolgt der Versand kostenfrei.<br /><br />
            (3) Der Kunde hat die Möglichkeit der Zahlung per PayPal, Klarna oder Kreditkarte. Die konkret verfügbaren 
            Zahlungsarten werden dem Kunden im Online-Shop des Verkäufers mitgeteilt.
          </p>

          <h2 style={{ fontSize: '24px', marginBottom: '20px', marginTop: '40px', color: '#1A1A1A' }}>§ 4 Lieferung</h2>
          <p style={{ marginBottom: '30px' }}>
            (1) Die Lieferung erfolgt innerhalb Deutschlands per DHL.<br /><br />
            (2) Die Lieferzeit beträgt in der Regel 2-4 Werktage nach Zahlungseingang. Bei personalisierten Produkten 
            erfolgt die Gravur innerhalb von 24 Stunden nach Bestelleingang.<br /><br />
            (3) Ist die Zustellung der Ware durch Verschulden des Käufers trotz dreimaligem Auslieferversuchs gescheitert, 
            kann der Verkäufer vom Vertrag zurücktreten.
          </p>

          <h2 style={{ fontSize: '24px', marginBottom: '20px', marginTop: '40px', color: '#1A1A1A' }}>§ 5 Widerrufsrecht</h2>
          <p style={{ marginBottom: '30px' }}>
            Verbrauchern steht grundsätzlich ein Widerrufsrecht zu. Nähere Informationen zum Widerrufsrecht ergeben sich aus der 
            Widerrufsbelehrung des Verkäufers.<br /><br />
            <strong>Wichtig:</strong> Bei personalisierten Produkten (Gravur) besteht kein Widerrufsrecht gemäß § 312g Abs. 2 Nr. 1 BGB, 
            da es sich um nach Kundenspezifikation angefertigte Waren handelt. Ein Rückgaberecht besteht nur bei Herstellungsfehlern 
            oder Transportschäden.
          </p>

          <h2 style={{ fontSize: '24px', marginBottom: '20px', marginTop: '40px', color: '#1A1A1A' }}>§ 6 Gewährleistung</h2>
          <p style={{ marginBottom: '30px' }}>
            Es gelten die gesetzlichen Gewährleistungsregelungen. Für Verbraucher gilt: 
            Die Verjuhrungsfrist für Mängel beträgt zwei Jahre ab Ablieferung der Ware.
          </p>

          <h2 style={{ fontSize: '24px', marginBottom: '20px', marginTop: '40px', color: '#1A1A1A' }}>§ 7 Datenschutz</h2>
          <p style={{ marginBottom: '30px' }}>
            Der Verkäufer verarbeitet personenbezogene Daten des Kunden nur im Rahmen der gesetzlichen Bestimmungen. 
            Nähere Informationen ergeben sich aus der Datenschutzerklärung des Verkäufers.
          </p>

          <h2 style={{ fontSize: '24px', marginBottom: '20px', marginTop: '40px', color: '#1A1A1A' }}>§ 8 Schlussbestimmungen</h2>
          <p>
            (1) Auf Verträge zwischen dem Verkäufer und den Kunden findet das Recht der Bundesrepublik Deutschland Anwendung. 
            Bei Verbrauchern gilt diese Rechtswahl nur insoweit, als nicht der gewährte Schutz durch zwingende Bestimmungen des 
            Rechts des Staates, in dem der Verbraucher seinen gewöhnlichen Aufenthalt hat, entzogen wird.<br /><br />
            (2) Sofern es sich beim Kunden um einen Kaufmann, eine juristische Person des öffentlichen Rechts oder um ein 
            öffentlich-rechtliches Sondervermögen handelt, ist Gerichtsstand für alle Streitigkeiten aus Vertragsverhältnissen 
            zwischen dem Kunden und dem Verkäufer der Sitz des Verkäufers.
          </p>
        </div>
      </div>

      <Footer />
    </div>
  );
}