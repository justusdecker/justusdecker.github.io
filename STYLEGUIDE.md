# The justusdecker.github.io Styleguide

# 1. Allgemeine Prizipien
* Zeichenencoderung: UTF-8
* Line Endings: LF (`\n`)

# 2. Git & Commit Conventions

`<feat>(optional scope): <kurze Beschreibung>`

## 2.1 Erlaubte Typen (`type`):
* `feat`: Ein neues Feature
* `fix`: Bugfix
* `refactor`: Code-Änderung(Code-Bereinigung)
* `style`: Formatierungen, fehlende Semikolons etc. (Keine Logik)
* `docs`: Dokumentation
* `chore`: Anpassungen an Build-Tools, CI / CD, Dependencies

### 2.1.1 Beispiele

* `feat(auth): add login form validation`
* `fix(api): handle timeout error on data fetch`
* `chore: update references tsconfig.app.json`

# 3. Python Standards & Tooling

Da momentan keine notwendigkeit für Python besteht, diese möglichkeit für die Zukunft aber nicht ausgeschlossen wird existiert dieser Punkt als Placeholder.

# 4. TypeScript, React & Vite Standards

* Sprache: TypeScript für sämtliche Logik.
* Verbot von any: Der Typ any ist strikt untersagt (no-explicit-any). Nutze stattdessen präzise Interfaces, Types oder im Notfall unknown mit entsprechenden Type Guards.
* Komponenten: Funktionale React-Komponenten mit Hooks. Jede Komponente erhält klare TypeScript-Props-Definitionen.
* Formatierung:
    * Einfache Anführungszeichen (`'`) für Strings
    * Zwingende Semikolons am Zeilenende
* Dateistruktur & Typen:
    * Getrennte Typen: ALLE Typen, Interfaces und Enums einer Komponente oder eines Moduls müssen in einer separaten Datei namens `<komponentenname>.types.ts` (im selben Ordner) ausgelagert werden.
# 5. Schreibweise von variablen, dateinamen & Co.

Variablennamen müssen mindestens 4 Zeichen lang sein, dürfen keine Zahlen enthalten, doppeldeutig sein und müssen dem unten genannten Tree entsprechen.

* **Ordnernamen**: `<kleinbuchstaben>`, hierarchisch getrennt (z. B. `shaders/xy/z`).
* **Dateinamen**: `<PascalCase>.tsx`.
* **Variablen**: In `<type>_snake_case`.
    * **Types**
        * *konstante*: `c`
        * *global*: `g`
        * *local*: `l`
        * *klassenattribut*: `m`
        * *temporär_oder_einmalige_nutzung*: `t`
        * *parameter*: `p`
* **ReactKomponenten** & **Klassen**: `PascalCase`
* **Hooks:** camelCase mit `use`-Präfix (z. B. `useWorkoutTimer.ts`).