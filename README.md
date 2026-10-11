# Cioal Tutors IGCSE Topical Question Bank & Test Builder (GitHub Pages Static Edition)

A 100% static, serverless web application for browsing and building custom IGCSE topical test papers and mark schemes across all 4 subjects:
- **Cambridge IGCSE Physics (0625)** — 4,258 questions (2021–2026)
- **Cambridge IGCSE Chemistry (0620)** — 3,933 questions (2021–2026)
- **Cambridge IGCSE Biology (0610)** — 3,838 questions (2021–2026)
- **Cambridge IGCSE Mathematics (0580)** — 2,973 questions (2021–2026)

All **15,002 questions** and **20,644 question/mark-scheme images** are pre-indexed and ultra-compressed (**~180 MB total**, down from **1.75 GB** raw — a **90% reduction**) to fit comfortably within GitHub Pages' free 1 GB limit.

---

## 🚀 How to Host on GitHub Pages (Step-by-Step)

1. **Create a new GitHub Repository** (e.g., `cioal-igcse-test-maker`) on [github.com/new](https://github.com/new). Leave it empty (do not add a README yet).
2. **Open a terminal inside this `GitPage` folder** and run:
   ```bash
   git init
   git branch -M main
   git add .
   git commit -m "Deploy Cioal Tutors IGCSE Topical Test Maker"
   git remote add origin https://github.com/<YOUR-USERNAME>/<YOUR-REPO>.git
   git push -u origin main
   ```
3. **Enable GitHub Pages**:
   - Go to your repository on GitHub → **Settings** → **Pages** (on the left sidebar).
   - Under **Build and deployment** → **Source**, select **Deploy from a branch**.
   - Select branch **`main`** and folder **`/ (root)`**, then click **Save**.
4. Wait ~1–2 minutes and visit:
   `https://<YOUR-USERNAME>.github.io/<YOUR-REPO>/`

---

## 💻 Local Preview

Because browsers block `fetch('./data/...')` over `file://`, test locally using Python's built-in static web server from inside the `GitPage` folder:

```bash
python -m http.server 8080
```
Then open `http://localhost:8080` in your browser.
