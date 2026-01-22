import React, { useState } from 'react';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import { ChevronDown } from 'lucide-react';

export default function FAQPage() {
  const [openIndex, setOpenIndex] = useState(null);

  const faqs = [
    {
      question: 'Wie funktioniert die Personalisierung?',
      answer: 'Sie können bei der Bestellung einen individuellen Text (max. 20 Zeichen) eingeben, der mit Laserpräzision auf die Metallplakette des Armbands graviert wird. Die Live-Vorschau zeigt Ihnen direkt, wie Ihre Gravur aussehen wird.'
    },
    {
      question: 'Wie lange dauert die Lieferung?',
      answer: 'Nach Bestelleingang gravieren wir Ihr Armband innerhalb von 24 Stunden. Der Versand erfolgt per DHL und dauert in Deutschland 2-4 Werktage. Sie erhalten eine Tracking-Nummer per E-Mail.'
    },
    {
      question: 'Welche Zahlungsmethoden akzeptieren Sie?',
      answer: 'Wir akzeptieren PayPal, Klarna (Rechnung und Ratenzahlung) sowie alle gängigen Kreditkarten (Visa, Mastercard, American Express). Alle Zahlungen werden über sichere, verschlüsselte Verbindungen abgewickelt.'
    },
    {
      question: 'Kann ich das Armband zurückgeben?',
      answer: 'Ja! Wir bieten eine 30-Tage Geld-zurück-Garantie. Da es sich um personalisierte Produkte handelt, akzeptieren wir Rücksendungen nur bei Herstellungsfehlern oder Beschädigungen während des Transports.'
    },
    {
      question: 'Aus welchen Materialien besteht das Armband?',
      answer: 'Unsere Armbänder bestehen aus echtem Rindsleder und einer Metallplakette aus hochwertigem 316L Edelstahl (chirurgischer Stahl). Beide Materialien sind langlebig, hautfreundlich und nickelrei.'
    },
    {
      question: 'Ist das Armband verstellbar?',
      answer: 'Ja, das Armband ist durch mehrere Löcher und einen robusten Verschluss von 15 bis 22 cm verstellbar und passt somit den meisten Handgelenken.'
    },
    {
      question: 'Fallen Versandkosten an?',
      answer: 'Nein! Innerhalb Deutschlands ist der Versand komplett kostenlos. Für Lieferungen ins europäische Ausland berechnen wir je nach Land zwischen €4,99 und €9,99.'
    },
    {
      question: 'Kann ich mehrere Namen gravieren lassen?',
      answer: 'Bei unserem Hauptarmband ist Platz für einen Text mit max. 20 Zeichen. Für mehrere Namen bieten wir spezielle Paar-Armbänder oder Sets an, die Sie separat bestellen können.'
    },
    {
      question: 'Ist das Armband wasserfest?',
      answer: 'Das Armband ist spritzwassergeschützt und hält gelegentlichen Kontakt mit Wasser aus. Wir empfehlen jedoch, es beim Duschen, Schwimmen oder Sport abzunehmen, um die Langlebigkeit des Leders zu gewährleisten.'
    },
    {
      question: 'Wie pflege ich mein Armband?',
      answer: 'Reinigen Sie das Leder gelegentlich mit einem leicht feuchten Tuch. Die Metallplakette kann mit einem weichen Poliertuch gereinigt werden. Vermeiden Sie direkte Sonneneinstrahlung und extreme Feuchtigkeit zur Aufbewahrung.'
    }
  ];

  return (
    <div data-testid="faq-page">
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
          }} data-testid="faq-title">
            Häufig gestellte Fragen 🤔
          </h1>
          <p style={{ fontSize: '20px', color: '#666', maxWidth: '700px', margin: '0 auto' }}>
            Hier finden Sie Antworten auf die wichtigsten Fragen.
          </p>
        </div>
      </div>

      <div className="container" style={{ padding: '80px 20px' }}>
        <div style={{ maxWidth: '900px', margin: '0 auto' }}>
          {faqs.map((faq, index) => (
            <div
              key={index}
              style={{
                background: 'white',
                marginBottom: '20px',
                borderRadius: '16px',
                boxShadow: '0 4px 20px rgba(0,0,0,0.08)',
                overflow: 'hidden'
              }}
              data-testid={`faq-item-${index}`}
            >
              <button
                onClick={() => setOpenIndex(openIndex === index ? null : index)}
                style={{
                  width: '100%',
                  padding: '30px',
                  background: 'white',
                  border: 'none',
                  display: 'flex',
                  justifyContent: 'space-between',
                  alignItems: 'center',
                  cursor: 'pointer',
                  fontSize: '18px',
                  fontWeight: '600',
                  textAlign: 'left'
                }}
                data-testid={`faq-question-${index}`}
              >
                <span>{faq.question}</span>
                <ChevronDown
                  size={24}
                  style={{
                    transition: 'transform 0.3s ease',
                    transform: openIndex === index ? 'rotate(180deg)' : 'rotate(0deg)'
                  }}
                />
              </button>
              <div
                style={{
                  maxHeight: openIndex === index ? '500px' : '0',
                  overflow: 'hidden',
                  transition: 'max-height 0.3s ease'
                }}
                data-testid={`faq-answer-${index}`}
              >
                <div style={{
                  padding: '0 30px 30px',
                  color: '#666',
                  lineHeight: '1.8',
                  fontSize: '16px'
                }}>
                  {faq.answer}
                </div>
              </div>
            </div>
          ))}
        </div>

        <div style={{
          marginTop: '60px',
          textAlign: 'center',
          background: 'white',
          padding: '40px',
          borderRadius: '16px',
          boxShadow: '0 4px 20px rgba(0,0,0,0.08)'
        }}>
          <h3 style={{ fontSize: '28px', marginBottom: '15px' }}>Weitere Fragen?</h3>
          <p style={{ color: '#666', marginBottom: '30px', fontSize: '18px' }}>
            Unser Kundenservice steht Ihnen gerne zur Verfügung!
          </p>
          <a href="/kontakt" style={{ textDecoration: 'none' }}>
            <button className="btn-primary" data-testid="contact-us-button">
              KONTAKTIEREN SIE UNS
            </button>
          </a>
        </div>
      </div>

      <Footer />
    </div>
  );
}