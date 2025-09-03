# 💘 My Special Someone

A tiny multi‑page, front‑end only “date invite” website you can share with your favorite person. It asks the big question (“Will you be my Valentine?”), then walks them through picking a date, choosing food, and confirming plans — all wrapped in a playful UI.

> Built with plain HTML, CSS, and JavaScript — no frameworks.

---

## ✨ Features

* **Invite flow:** Cute landing page → playful “Yes” page → **date picker** → **food selection** → **confirmation**.
* **No build step:** Open `index.html` and it “just works.”
* **Simple, hackable code:** Small files, clear separation of HTML/CSS/JS.
* **Shareable:** Easy to host on **GitHub Pages**.

---

## 🗺️ Page Flow

1. `index.html` – The opening card with the main question and buttons.
2. `yes.html` – A celebratory interlude after they say “Yes.”
3. `date-picker.html` – Pick a day/time for the date.
4. `food-selection.html` – Choose the food/cuisine.
5. `confirmation.html` – Final screen with the chosen plan.

---

## 🧱 Project Structure

```
my-special-someone/
├─ assets/                  # Images, icons, etc. (customize freely)
├─ index.html               # Landing page (the big question)
├─ yes.html                 # "Yes" celebration / transition
├─ date-picker.html         # Date selection UI
├─ food-selection.html      # Food/cuisine choices
├─ confirmation.html        # Final confirmation page
├─ style.css                # Global styles
├─ script.js                # Logic for index/landing
├─ yes.js                   # Logic for yes page
├─ date-picker.js           # Logic for date selection
└─ food-selection.js        # Logic for food choices
```

---

## 🛠️ Local Setup

1. **Clone** the repo:

   ```bash
   git clone https://github.com/nuIsaac/my-special-someone.git
   cd my-special-someone
   ```
2. **Open** `index.html` in your browser (double‑click it) — or run a tiny local server:

   ```bash
   # Python 3
   python -m http.server 8000
   # then visit http://localhost:8000
   ```

> Tip: If any pages use `localStorage` or URL params between steps, prefer the local server so navigation behaves consistently.

---

## 🎨 Customization

* **Text/content:** Edit each `.html` page’s copy to make it personal.
* **Colors/typography:** Tweak variables/selectors in `style.css`.
* **Images:** Drop your own images into `assets/` and update `<img>` paths.
* **Options:** Update arrays or DOM elements in `date-picker.js` and `food-selection.js` to change available dates, times, or foods.
* **Transitions:** Add simple CSS animations or sprinkle small effects in the per‑page `*.js` files.

---

## 🚀 Deploy (GitHub Pages)

1. Push your changes to `main`.
2. In the repo, go to **Settings → Pages**.
3. Under **Build and deployment**, set **Source** to `Deploy from a branch` and **Branch** to `main` (root).
4. Save — your site will be live at:
   `https://<your‑github‑username>.github.io/my-special-someone/`

> If you’re using a custom domain, add your CNAME in **Settings → Pages**.

---

## ♿ Accessibility Notes

* Ensure every interactive element has clear labels (`aria‑label` or visible text).
* Maintain sufficient color contrast in `style.css`.
* Don’t rely on color alone to convey meaning.
* Provide `alt` text for images in `assets/`.

---

## 🧪 Testing the Flow Quickly

* Try the full path: `index.html → yes.html → date-picker.html → food-selection.html → confirmation.html`.
* Test on mobile: narrow your browser or use DevTools device emulation.
* Clear `localStorage` (if used) between runs to reset the flow.

---

## 🗺️ Roadmap / Ideas

* Add a fun “No” button that playfully evades clicks 😉
* Confetti animation on **Yes** (canvas or CSS‑only).
* Persist selections with `localStorage` and show a summary card.
* Add calendar file export (`.ics`) on **confirmation**.
* Light/Dark mode toggle.

---

## 🤝 Contributing

PRs are welcome for small improvements, bug fixes, or accessibility enhancements. Keep it lightweight and framework‑free.

---

## 🤖 AI Assistance
Parts of this project (like documentation and some starter code ideas) were created with the help of AI tools (e.g., ChatGPT).  
All code and content were reviewed, customized, and curated by me.

---

## 📜 License

No license has been chosen yet. If you want others to reuse this, consider adding an OSS license (e.g., MIT) as `LICENSE` at the repo root.

---

## 📸 Screenshots (optional)

Add a few PNGs/JPEGs to `assets/` and drop them here with short captions:

```
![Landing](assets/landing.png)
![Date Picker](assets/date-picker.png)
![Food Selection](assets/food-selection.png)
![Confirmation](assets/confirmation.png)
```

---



* Inspiration: Valentine’s microsites & wholesome web shenanigans.
* You, for saying yes. 💓
