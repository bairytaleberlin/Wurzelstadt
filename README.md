# Die Stadt unter den Wurzeln - Interaktive Website

Eine vollständig interaktive Fantasy-Worldbuilding-Erfahrung, bereit für GitHub Pages.

## 🚀 Schnellstart für GitHub Pages

### Option 1: Direkt hochladen

1. Erstellen Sie ein neues Repository auf GitHub
2. Laden Sie alle Dateien aus diesem Ordner in Ihr Repository hoch
3. Gehen Sie zu **Settings** → **Pages**
4. Wählen Sie **Source**: `Deploy from a branch`
5. Wählen Sie **Branch**: `main` und **Folder**: `/ (root)`
6. Klicken Sie auf **Save**
7. Ihre Website ist nach wenigen Minuten unter `https://ihr-username.github.io/repository-name/` verfügbar

### Option 2: Mit Git

```bash
# Repository klonen oder initialisieren
git init
git add .
git commit -m "Initial commit: Wurzelreich Website"

# Mit GitHub verbinden
git remote add origin https://github.com/ihr-username/repository-name.git
git branch -M main
git push -u origin main

# GitHub Pages in den Repository-Einstellungen aktivieren
```

## 📁 Dateistruktur

```
wurzelreich-github-pages/
├── index.html          # Hauptseite
├── assets/
│   ├── style.css      # Alle Styles
│   └── script.js      # Interaktive Funktionen
├── images/            # Alle Bilder
│   ├── ebenen-karte.png
│   ├── licht-portrait.png
│   ├── hohe-wurzel-portrait.png
│   ├── herzraum.png
│   └── hero-bg.png
├── audio/             # Audio-Assets
│   └── wurzelfluester.wav
└── README.md          # Diese Datei
```

## ✨ Features

### Interaktive Elemente

- **Klickbare Ebenen-Karte**: Klicken Sie auf die drei Ebenen (Krone, Herz, Tiefe) für Details
- **Expandable Fraktionen**: Aufklappbare Sections für Wurzelwächter, Himmelsucher und Wurzelflüsterer
- **Atmosphärisches Audio**: Wurzelflüstern-Hintergrundmusik mit Play/Pause-Steuerung
- **Smooth Scrolling**: Sanfte Navigation zwischen Sections
- **Responsive Design**: Optimiert für Desktop, Tablet und Mobile

### Technische Details

- **Keine Build-Tools erforderlich**: Pure HTML, CSS und JavaScript
- **Keine Abhängigkeiten**: Funktioniert sofort ohne npm oder Node.js
- **Optimiert für GitHub Pages**: Alle Pfade sind relativ
- **SEO-freundlich**: Semantisches HTML mit Meta-Tags
- **Accessibility**: Keyboard-Navigation und ARIA-Labels

## 🎨 Anpassungen

### Farben ändern

Bearbeiten Sie die CSS-Variablen in `assets/style.css`:

```css
:root {
    --color-bg: oklch(0.15 0.02 240);
    --color-fg: oklch(0.88 0.02 65);
    --color-primary: oklch(0.45 0.12 165);
    /* ... weitere Farben */
}
```

### Inhalte ändern

Bearbeiten Sie `index.html` direkt. Alle Texte und Strukturen sind klar kommentiert.

### Bilder ersetzen

Ersetzen Sie die Dateien im `images/` Ordner. Behalten Sie die gleichen Dateinamen bei oder aktualisieren Sie die Referenzen in `index.html`.

## 🌐 Browser-Kompatibilität

- Chrome/Edge: ✅ Vollständig unterstützt
- Firefox: ✅ Vollständig unterstützt
- Safari: ✅ Vollständig unterstützt
- Mobile Browser: ✅ Vollständig unterstützt

## 📱 Responsive Breakpoints

- Mobile: < 640px
- Tablet: 640px - 1024px
- Desktop: > 1024px

## 🔧 Fehlerbehebung

### Audio spielt nicht automatisch

Moderne Browser blockieren Autoplay. Benutzer müssen auf den Audio-Button klicken, um die Wiedergabe zu starten.

### Bilder werden nicht angezeigt

Überprüfen Sie, ob alle Dateien korrekt hochgeladen wurden und die Pfade in `index.html` stimmen.

### Styles werden nicht geladen

Stellen Sie sicher, dass `assets/style.css` im richtigen Ordner liegt und der Pfad in `index.html` korrekt ist.

## 📄 Lizenz

Dieses Projekt ist ein Portfolio-Beispiel für Worldbuilding-Dienstleistungen.

## 🤝 Support

Bei Fragen oder Problemen erstellen Sie ein Issue im GitHub Repository.

---

**Erstellt mit:** Pure HTML, CSS und JavaScript  
**Optimiert für:** GitHub Pages  
**Keine Build-Tools erforderlich**
