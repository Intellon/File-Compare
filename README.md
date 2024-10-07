# Excel- und CSV-Dateien vergleichen

Eine interaktive Webanwendung zum Vergleichen von Excel- und CSV-Dateien basierend auf ausgewählten Kriterien. Die Anwendung ermöglicht es Ihnen, zwei Dateien hochzuladen, Spalten zuzuordnen (auch wenn die Spalten unterschiedliche Namen haben) und die übereinstimmenden Einträge anzuzeigen.

## Funktionen

- **Unterstützung von Excel- und CSV-Dateien**: Laden Sie Dateien im `.xlsx`- oder `.csv`-Format hoch.
- **Delimiter-Auswahl für CSV-Dateien**: Wählen Sie das Trennzeichen für jede CSV-Datei individuell aus.
- **Spaltenzuordnung**: Ordnen Sie die Spalten der Basisdatei den Spalten der Vergleichsdatei zu, auch wenn sie unterschiedliche Namen haben.
- **Vergleich mehrerer Kriterien**: Wählen Sie mehrere Spalten für einen präziseren Vergleich aus.
- **Fehlerbehandlung**: Die Anwendung verfügt über verbesserte Fehlerprüfungen und gibt klare Fehlermeldungen aus.
- **Responsive Design**: Die Benutzeroberfläche passt sich verschiedenen Bildschirmgrößen an und ist auch auf mobilen Geräten nutzbar.
- **Ansprechendes Design**: Farben und Styling sorgen für eine übersichtliche und benutzerfreundliche Anwendung.

## Voraussetzungen

- **Webbrowser**: Ein moderner Webbrowser wie Chrome, Firefox, Edge oder Safari.
- **Internetverbindung**: Für das Laden der externen SheetJS-Bibliothek.

## Installation

1. **Projekt herunterladen**: Klonen Sie das Repository oder laden Sie die Dateien herunter.
2. **Dateien überprüfen**: Stellen Sie sicher, dass die folgenden Dateien vorhanden sind:
   - `index.html` (enthält HTML, CSS und JavaScript)
   - `README.md`
   - `.gitignore`
   - `assets/data`

## Verwendung

1. **Anwendung starten**:
   - Öffnen Sie die `index.html`-Datei in Ihrem Webbrowser. Sie können dies tun, indem Sie einen Doppelklick auf die Datei ausführen oder sie in den Browser ziehen.
2. **Dateityp auswählen**:
   - Wählen Sie oben auf der Seite den gewünschten Dateityp aus (Excel oder CSV).
3. **Delimiter festlegen (nur für CSV)**:
   - Wenn Sie CSV-Dateien verwenden, geben Sie die entsprechenden Trennzeichen für die Basisdatei und die Vergleichsdatei ein.
4. **Dateien hochladen**:
   - Klicken Sie auf "Basis-Datei hochladen" und wählen Sie Ihre erste Datei aus.
   - Klicken Sie auf "Vergleichs-Datei hochladen" und wählen Sie Ihre zweite Datei aus.
5. **Spaltenzuordnung vornehmen**:
   - Nachdem beide Dateien geladen wurden, erscheint der Bereich "Spaltenzuordnung".
   - Ordnen Sie die Spalten der Basisdatei den entsprechenden Spalten der Vergleichsdatei zu, indem Sie aus den Dropdown-Menüs wählen.
6. **Vergleich durchführen**:
   - Klicken Sie auf den Button "Vergleichen", um den Vergleich zu starten.
7. **Ergebnisse ansehen**:
   - Die übereinstimmenden Einträge werden in einer Tabelle unterhalb des Buttons angezeigt.
   - Wenn keine Übereinstimmungen gefunden wurden, erhalten Sie eine entsprechende Meldung.

## Beispiel

Angenommen, Sie haben zwei Dateien mit Kundendaten, aber die Spalten haben unterschiedliche Namen:

- **Basisdatei (basis.xlsx oder basis.csv)**:
  - Kundennummer
  - Vorname
  - Alter
  - Ort

- **Vergleichsdatei (vergleich.xlsx oder vergleich.csv)**:
  - ID
  - Name
  - Jahre
  - Stadt

### Spaltenzuordnung:

- Vorname (Basisdatei) zu Name (Vergleichsdatei)
- Ort (Basisdatei) zu Stadt (Vergleichsdatei)

### Vergleichskriterien:

- Wählen Sie die Spalten Vorname und Ort als Kriterien aus.

### Ergebnis:

- Der Eintrag von Clara aus Hamburg wird als übereinstimmend erkannt und angezeigt.

### Fehlerbehandlung

- **Ungültige Dateien**: Die Anwendung prüft, ob gültige Dateien hochgeladen wurden, und gibt Fehlermeldungen aus, wenn dies nicht der Fall ist.
- **Fehlende Spalten**: Wenn die zugeordneten Spalten in einer der Dateien nicht vorhanden sind, erhalten Sie eine entsprechende Meldung.
- **Allgemeine Fehler**: Unerwartete Fehler beim Einlesen oder Verarbeiten der Daten werden abgefangen und als Meldung ausgegeben.
- **Datentypen**: Die Anwendung konvertiert Werte in Strings, um sicherzustellen, dass Methoden wie `.toLowerCase()` funktionieren. Wenn Sie dennoch Probleme haben, überprüfen Sie Ihre Daten auf ungewöhnliche Formate oder Werte.

### Bekannte Probleme

- **Große Dateien**: Bei sehr großen Dateien kann die Verarbeitung Zeit in Anspruch nehmen und die Anwendung könnte langsamer reagieren.
- **Browser-Kompatibilität**: Die Anwendung wurde mit modernen Browsern getestet. Bei älteren Browsern könnten Einschränkungen auftreten.
- **Dateien mit speziellen Zeichen**: Stellen Sie sicher, dass Ihre Dateien UTF-8-kodiert sind, um Probleme mit Sonderzeichen zu vermeiden.
- **Unterschiedliche Delimiter**: Die Anwendung unterstützt unterschiedliche Delimiter für Basis- und Vergleichsdatei, aber stellen Sie sicher, dass diese korrekt eingegeben werden.

### Lizenz

Dieses Projekt ist unter der MIT-Lizenz lizenziert. Weitere Informationen finden Sie in der `LICENSE` Datei.