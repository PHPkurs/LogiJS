# LogiJS – GitHub Pages (experimenteller Port)

Diese Version enthält den Original-Quellcode und einen GitHub-Actions-Build, der `views/logijs.pug` in `dist/index.html` umwandelt. Die HTML-Seite ist für statisches Hosting vorbereitet, aber **nicht vollständig funktional getestet**. Insbesondere sind Serverfunktionen (Accounts, Cloud-Speicherung, Teilen) ohne Backend nicht verfügbar.

## Veröffentlichung

1. Neues GitHub-Repository anlegen, z. B. `logijs` (oder einen Fork nutzen).
2. **Den gesamten Inhalt dieses ZIP-Archivs**, inklusive `.github/workflows/pages.yml`, in das Repository hochladen. GitHub-Webupload berücksichtigt ggf. versteckte Ordner nicht zuverlässig: bei Bedarf `.github/workflows/pages.yml` über **Add file → Create new file** mit genau diesem Pfad anlegen.
3. Unter **Settings → Pages → Build and deployment → Source** die Option **GitHub Actions** wählen (nicht „Deploy from a branch“).
4. Unter **Actions** den Workflow **Build and deploy LogiJS** kontrollieren.
5. Nach erfolgreichem Deploy `https://BENUTZERNAME.github.io/logijs/` öffnen.

## Bekannte Einschränkungen

- Browser-Simulation und lokale JSON-Funktionen müssen nach Deployment getestet werden.
- Die vorhandenen Socket.IO- und HTTP-Aufrufe benötigen einen Server und funktionieren ohne zusätzliche Anpassung nicht.
- Anmeldung, Online-Speicherung und öffentliche Schaltungsbibliothek benötigen ein separates Backend.
- Keine Aussage zur vollständigen Funktionsfähigkeit ohne Browser-Test.
- GPL-3.0-Lizenz und Urheberangaben des Originalprojekts bleiben erhalten.
