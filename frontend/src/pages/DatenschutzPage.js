import React from 'react';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';

export default function DatenschutzPage() {
  return (
    <div data-testid="datenschutz-page">
      <Navbar />

      <div className="container" style={{ padding: '60px 20px', maxWidth: '900px' }}>
        <h1 style={{
          fontSize: '48px',
          marginBottom: '40px',
          fontFamily: 'Playfair Display, serif'
        }} data-testid="datenschutz-title">
          Datenschutzerklärung
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
          <h2 style={{ fontSize: '24px', marginBottom: '20px', color: '#1A1A1A' }}>1. Datenschutz auf einen Blick</h2>
          <p style={{ marginBottom: '30px' }}>
            Die folgenden Hinweise geben einen einfachen Überblick darüber, was mit Ihren personenbezogenen Daten passiert, 
            wenn Sie diese Website besuchen. Personenbezogene Daten sind alle Daten, mit denen Sie persönlich identifiziert 
            werden können.
          </p>

          <h2 style={{ fontSize: '24px', marginBottom: '20px', marginTop: '40px', color: '#1A1A1A' }}>2. Allgemeine Hinweise und Pflichtinformationen</h2>
          <h3 style={{ fontSize: '20px', marginBottom: '15px', color: '#1A1A1A' }}>Datenschutz</h3>
          <p style={{ marginBottom: '30px' }}>
            Die Betreiber dieser Seiten nehmen den Schutz Ihrer persönlichen Daten sehr ernst. Wir behandeln Ihre 
            personenbezogenen Daten vertraulich und entsprechend der gesetzlichen Datenschutzvorschriften sowie dieser 
            Datenschutzerklärung.<br /><br />
            Wenn Sie diese Website benutzen, werden verschiedene personenbezogene Daten erhoben. Die vorliegende 
            Datenschutzerklärung erläutert, welche Daten wir erheben und wofür wir sie nutzen.
          </p>

          <h3 style={{ fontSize: '20px', marginBottom: '15px', color: '#1A1A1A' }}>Verantwortliche Stelle</h3>
          <p style={{ marginBottom: '30px' }}>
            Die verantwortliche Stelle für die Datenverarbeitung auf dieser Website ist:<br /><br />
            <strong>ArmbandShop GmbH</strong><br />
            Musterstraße 123<br />
            10115 Berlin<br />
            Deutschland<br /><br />
            Telefon: +49 30 123 456 789<br />
            E-Mail: info@armbandshop.de
          </p>

          <h2 style={{ fontSize: '24px', marginBottom: '20px', marginTop: '40px', color: '#1A1A1A' }}>3. Datenerfassung auf dieser Website</h2>
          <h3 style={{ fontSize: '20px', marginBottom: '15px', color: '#1A1A1A' }}>Cookies</h3>
          <p style={{ marginBottom: '30px' }}>
            Unsere Internetseiten verwenden so genannte "Cookies". Cookies sind kleine Textdateien und richten auf Ihrem 
            Endgerät keinen Schaden an. Sie werden entweder vorübergehend für die Dauer einer Sitzung (Session-Cookies) oder 
            dauerhaft (permanente Cookies) auf Ihrem Endgerät gespeichert. Session-Cookies werden nach Ende Ihres Besuchs 
            automatisch gelöscht. Permanente Cookies bleiben auf Ihrem Endgerät gespeichert, bis Sie diese selbst löschen oder 
            eine automatische Löschung durch Ihren Webbrowser erfolgt.
          </p>

          <h3 style={{ fontSize: '20px', marginBottom: '15px', color: '#1A1A1A' }}>Server-Log-Dateien</h3>
          <p style={{ marginBottom: '30px' }}>
            Der Provider der Seiten erhebt und speichert automatisch Informationen in so genannten Server-Log-Dateien, 
            die Ihr Browser automatisch an uns übermittelt. Dies sind:<br /><br />
            • Browsertyp und Browserversion<br />
            • verwendetes Betriebssystem<br />
            • Referrer URL<br />
            • Hostname des zugreifenden Rechners<br />
            • Uhrzeit der Serveranfrage<br />
            • IP-Adresse<br /><br />
            Eine Zusammenführung dieser Daten mit anderen Datenquellen wird nicht vorgenommen. Die Erfassung dieser Daten 
            erfolgt auf Grundlage von Art. 6 Abs. 1 lit. f DSGVO.
          </p>

          <h3 style={{ fontSize: '20px', marginBottom: '15px', color: '#1A1A1A' }}>Kontaktformular</h3>
          <p style={{ marginBottom: '30px' }}>
            Wenn Sie uns per Kontaktformular Anfragen zukommen lassen, werden Ihre Angaben aus dem Anfrageformular inklusive 
            der von Ihnen dort angegebenen Kontaktdaten zwecks Bearbeitung der Anfrage und für den Fall von Anschlussfragen 
            bei uns gespeichert. Diese Daten geben wir nicht ohne Ihre Einwilligung weiter.
          </p>

          <h2 style={{ fontSize: '24px', marginBottom: '20px', marginTop: '40px', color: '#1A1A1A' }}>4. Zahlungsdienstleister</h2>
          <h3 style={{ fontSize: '20px', marginBottom: '15px', color: '#1A1A1A' }}>PayPal</h3>
          <p style={{ marginBottom: '30px' }}>
            Auf dieser Website bieten wir u.a. die Bezahlung via PayPal an. Anbieter dieses Zahlungsdienstes ist die 
            PayPal (Europe) S.à.r.l. et Cie, S.C.A., 22-24 Boulevard Royal, L-2449 Luxembourg (im Folgenden "PayPal").<br /><br />
            Wenn Sie die Bezahlung via PayPal auswählen, werden die von Ihnen eingegebenen Zahlungsdaten an PayPal übermittelt. 
            Die Übermittlung erfolgt auf Grundlage von Art. 6 Abs. 1 lit. a DSGVO (Einwilligung) und Art. 6 Abs. 1 lit. b DSGVO 
            (Verarbeitung zur Erfüllung eines Vertrags).
          </p>

          <h3 style={{ fontSize: '20px', marginBottom: '15px', color: '#1A1A1A' }}>Klarna</h3>
          <p style={{ marginBottom: '30px' }}>
            Auf dieser Website bieten wir u.a. die Bezahlung via Klarna an. Anbieter ist die Klarna AB, Sveavägen 46, 
            111 34 Stockholm, Schweden.<br /><br />
            Klarna bietet verschiedene Zahlungsoptionen an (z.B. Ratenkauf). Wenn Sie sich für die Bezahlung mit Klarna 
            entscheiden, wird Klarna verschiedene personenbezogene Daten von Ihnen erheben. Details hierzu können Sie in der 
            Datenschutzerklärung von Klarna nachlesen.
          </p>

          <h2 style={{ fontSize: '24px', marginBottom: '20px', marginTop: '40px', color: '#1A1A1A' }}>5. Ihre Rechte</h2>
          <p style={{ marginBottom: '30px' }}>
            Sie haben jederzeit das Recht:<br /><br />
            • gemäß Art. 15 DSGVO Auskunft über Ihre von uns verarbeiteten personenbezogenen Daten zu verlangen<br />
            • gemäß Art. 16 DSGVO unverzüglich die Berichtigung unrichtiger oder Vervollständigung Ihrer bei uns gespeicherten 
            personenbezogenen Daten zu verlangen<br />
            • gemäß Art. 17 DSGVO die Löschung Ihrer bei uns gespeicherten personenbezogenen Daten zu verlangen<br />
            • gemäß Art. 18 DSGVO die Einschränkung der Verarbeitung Ihrer personenbezogenen Daten zu verlangen<br />
            • gemäß Art. 20 DSGVO Ihre personenbezogenen Daten in einem strukturierten, gängigen und maschinenlesbaren Format 
            zu erhalten oder die Übermittlung an einen anderen Verantwortlichen zu verlangen<br />
            • gemäß Art. 77 DSGVO sich bei einer Aufsichtsbehörde zu beschweren
          </p>

          <h2 style={{ fontSize: '24px', marginBottom: '20px', marginTop: '40px', color: '#1A1A1A' }}>6. Widerspruchsrecht</h2>
          <p>
            Sie haben das Recht, aus Gründen, die sich aus Ihrer besonderen Situation ergeben, jederzeit gegen die Verarbeitung 
            Sie betreffender personenbezogener Daten, die aufgrund von Art. 6 Abs. 1 lit. e oder f DSGVO erfolgt, Widerspruch 
            einzulegen; dies gilt auch für ein auf diese Bestimmungen gestütztes Profiling.<br /><br />
            Legen Sie Widerspruch ein, werden wir Ihre betroffenen personenbezogenen Daten nicht mehr verarbeiten, es sei denn, 
            wir können zwingende schutzwürdige Gründe für die Verarbeitung nachweisen, die Ihre Interessen, Rechte und Freiheiten 
            überwiegen oder die Verarbeitung dient der Geltendmachung, Ausübung oder Verteidigung von Rechtsansprüchen.
          </p>
        </div>
      </div>

      <Footer />
    </div>
  );
}