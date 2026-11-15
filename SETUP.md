# College Quest: setup

A plain static website: no accounts, no scripts, no connection to Google.
She works in the Google Doc. When a section is done, she taps **Level completed!** and pastes her
answers. If there's enough of her own writing, Mochi walks to that stop with confetti and points.

## Try it

Double-click `index.html`.

## Put it online (free)

**Option A: GitHub Pages**
1. Create a new public repo on github.com.
2. **Add file → Upload files** → drag in `index.html`, `style.css`, `app.js`, `art.js`, `config.js` → Commit.
3. **Settings → Pages → Source: Deploy from a branch → `main` / root → Save**.
4. After a minute it's live at `https://<your-username>.github.io/<repo-name>/`.

**Option B: Netlify Drop**
1. Go to <https://app.netlify.com/drop>.
2. Drag the project folder onto the page. You get a link right away (sign up to keep it permanently).

## Tell her

- **Add it to the Home Screen** (iPhone: Share → Add to Home Screen). Safari can wipe saved website data
  after about 7 days without a visit, and Home Screen apps are protected from that.
- **Use the same device and browser.** Progress is saved in that browser only.
- The Google Doc is the real copy of her work. The site just keeps score.

## How the check works

- She pastes the section. Text that's already in the blank workbook (headings, questions, column
  names, "1." labels, "Country I picked:") is ignored. Only her own letters and numbers count.
- Each section needs a minimum amount of her own writing:

  | Section | Min letters | Points |
  |---|---|---|
  | About Me | 80 | 100 |
  | Country 1 (USA) / Country 2 (UK) | 200 each | 250 each |
  | Country 3 / Country 4 | 220 each | 300 each |
  | What I noticed | 60 | 150 |
  | Careers I'm curious about | 200 | 250 |
  | Dig deeper into my top 2 | 150 | 300 |
  | Reflection | 60 | 150 |
  | My Next Steps | 15 | 200 |
  | **Total** | | **2,250** |

  To change these, edit `minLetters` and `points` in the `LEVELS` list at the top of `app.js`.
- It's honor-system. Pasting random text would pass, and that's by design.

## Saved data

Points, stickers, Mochi's position, what she pasted for each finished stop ("See what you wrote"),
and unfinished paste drafts are all kept in the browser's local storage.

**↺** (top right) → **Yes, start over** clears all of it. The Google Doc is never touched.

## Small tweaks

- Cat's name or workbook link: `config.js`.
- Stop names, descriptions, emoji: `LEVELS` in `app.js`.
