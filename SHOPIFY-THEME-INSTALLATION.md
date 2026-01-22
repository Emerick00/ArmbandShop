# 🛍️ ArmbandShop Shopify Theme - Installation

## ✅ Theme komplett und bereit zum Upload!

Dieses ZIP enthält ein vollständig funktionsfähiges Shopify-Theme für Ihren ArmbandShop.

---

## 📦 Was ist enthalten?

✓ **Vollständige Shopify-Theme-Struktur**
✓ **Homepage** mit Hero-Section und Produktgrid
✓ **Produktseite** mit Gravur-Eingabefeld (Line Item Property)
✓ **Warenkorb** mit Gravur-Anzeige
✓ **Responsives Design** (Mobil & Desktop)
✓ **Premium Blau/Gold Design**
✓ **Deutsche Übersetzungen**
✓ **Shopify Liquid Templates**

---

## 🚀 Installation (3 Minuten)

### Schritt 1: ZIP herunterladen
```
Datei: armbandshop-shopify-theme.zip
Größe: ~12 KB
```

### Schritt 2: In Shopify hochladen

1. Gehen Sie zu Ihrem **Shopify Admin**
2. Navigieren Sie zu: **Online Store → Themes**
3. Klicken Sie auf **Add theme** (Theme hinzufügen)
4. Wählen Sie **Upload ZIP file** (ZIP-Datei hochladen)
5. Laden Sie `armbandshop-shopify-theme.zip` hoch
6. Warten Sie, bis der Upload abgeschlossen ist
7. Klicken Sie auf **Publish** (Veröffentlichen)

**Fertig!** Ihr Shop ist jetzt live! 🎉

---

## 📋 Theme-Struktur

```
shopify-theme/
├── layout/
│   └── theme.liquid              # Haupt-Layout
├── templates/
│   ├── index.json                # Homepage Template
│   ├── product.json              # Produktseite Template
│   └── cart.json                 # Warenkorb Template
├── sections/
│   ├── header.liquid             # Navigation Header
│   ├── footer.liquid             # Footer
│   ├── hero.liquid               # Hero Section (Homepage)
│   ├── featured-products.liquid  # Produkt-Grid
│   ├── product-main.liquid       # Produktdetails + Gravur
│   └── cart-main.liquid          # Warenkorb-Anzeige
├── assets/
│   ├── theme.css                 # Alle Styles
│   └── theme.js                  # JavaScript (Cart Funktionalität)
├── config/
│   └── settings_schema.json     # Theme-Einstellungen
└── locales/
    └── de.json                   # Deutsche Übersetzungen
```

---

## ⚙️ Wichtige Features

### 1. Gravur-Funktion
Die Gravur wird als **Line Item Property** gespeichert:
```liquid
<input type="text" name="properties[Gravur]" maxlength="20">
```
- Im Warenkorb sichtbar
- Im Checkout sichtbar
- In Bestellbestätigungen enthalten

### 2. Add-to-Cart
Verwendet Shopify's natives Form-System:
```liquid
{% form 'product', product %}
  <!-- Gravur-Feld -->
  <!-- Menge -->
  <button type="submit">IN DEN WARENKORB</button>
{% endform %}
```

### 3. Checkout
Nutzt **Shopify's nativen Checkout** (keine Anpassungen nötig)

---

## 🎨 Design

### Farbschema
- **Primär:** #2D5F7F (Blau)
- **Gold:** #D4A574
- **Hintergrund:** #FAFBFC
- **Text:** #1a2332

### Typografie
- **Headlines:** Cormorant Garamond (elegant)
- **Body:** Work Sans (modern)

---

## 📝 Nächste Schritte nach Installation

### 1. Produkte hinzufügen
Navigieren Sie zu **Products → Add product**
- Fügen Sie Ihre Armband-Bilder hinzu
- Setzen Sie Preis auf €0,99
- Setzen Sie "Compare at price" auf €36,99

### 2. Collection erstellen
Erstellen Sie eine Collection "All" für die Produktgrid-Anzeige

### 3. Navigation anpassen
**Online Store → Navigation → Main Menu**
- Home → /
- Produkte → /collections/all
- Über uns → /pages/about
- Kontakt → /pages/contact
- FAQ → /pages/faq

### 4. Seiten erstellen (Optional)
Erstellen Sie folgende Seiten:
- `/pages/about` - Über uns
- `/pages/contact` - Kontakt
- `/pages/faq` - FAQ
- `/pages/impressum` - Impressum
- `/pages/agb` - AGB
- `/pages/datenschutz` - Datenschutz

---

## 🔧 Anpassungen

### Theme-Einstellungen
Gehen Sie zu: **Online Store → Themes → Customize**

### CSS anpassen
Bearbeiten Sie: `assets/theme.css`

### Texte ändern
Bearbeiten Sie: `sections/*.liquid`

---

## ✅ Funktions-Checkliste

Nach Installation testen:

- [ ] Homepage lädt korrekt
- [ ] Produkte werden angezeigt
- [ ] Produktseite zeigt Details
- [ ] Gravur-Feld funktioniert
- [ ] "In den Warenkorb" funktioniert
- [ ] Warenkorb zeigt Gravur an
- [ ] Checkout funktioniert
- [ ] Mobile Ansicht ist responsiv

---

## 🆘 Problemlösung

### Theme lädt nicht
- Prüfen Sie, ob die ZIP-Datei korrekt ist
- Versuchen Sie erneut hochzuladen
- Stellen Sie sicher, dass Sie Shop-Owner sind

### Produkte werden nicht angezeigt
- Fügen Sie mindestens 1 Produkt hinzu
- Stellen Sie sicher, dass Produkte "Active" sind
- Prüfen Sie die Collection-Einstellungen

### Gravur wird nicht gespeichert
- Das Formular verwendet `name="properties[Gravur]"`
- Dies ist Shopify-Standard für Line Item Properties

---

## 📞 Support

Bei Problemen:
1. Prüfen Sie die Shopify Theme Dokumentation
2. Kontaktieren Sie Shopify Support
3. Überprüfen Sie Theme-Logs im Admin

---

## 🎯 Shopify Requirements

Dieses Theme erfüllt alle Shopify-Anforderungen:
✓ Valide Liquid-Syntax
✓ Erforderliche Templates vorhanden
✓ Settings Schema vorhanden
✓ Keine verbotenen Liquid-Tags
✓ Responsive Design
✓ Accessibility-Standards

---

**Viel Erfolg mit Ihrem ArmbandShop! 🚀**

*Theme Version: 1.0.0*
*Kompatibel mit: Shopify 2.0*
