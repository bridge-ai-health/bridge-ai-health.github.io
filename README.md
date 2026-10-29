# Bridge AI + Health — AAAI-27

A responsive, accessible static conference website for **Knowledge Graph-guided Agentic AI: Bridging Reasoning and Explainability in Healthcare**.

Intended GitHub Pages address: https://bridge-ai-health.github.io/

## Files

- `index.html`: all public content, dates, chairs, organizers, and links.
- `styles.css`: responsive styling, mobile layout, focus states, reduced motion, and print styles.
- `script.js`: mobile navigation. The content and FAQ work without JavaScript.
- `assets/reasoning-graph.svg`: original vector illustration.
- `assets/favicon.svg`: original site icon.
- `assets/submission-deadline.ics`: optional calendar download for the deadline.
- `Image/`: the eight chair and organizer portraits supplied by the user. Keep the exact filename capitalization for GitHub Pages.
- `.nojekyll`: serves this as a plain static GitHub Pages website.

No package installation, framework, build process, external fonts, analytics, or API keys are needed.

## Preview

Open `index.html` directly in a browser. Alternatively, from this directory run:

```powershell
python -m http.server 8000 --bind 127.0.0.1
```

Then open http://127.0.0.1:8000.

## Publish to the empty GitHub repository

Run the following once from this directory. If this folder is already a Git repository, skip `git init`. If `origin` already exists, inspect `git remote -v` and use `git remote set-url origin ...` only if the URL needs to change.

```powershell
git init -b main
git remote add origin https://github.com/bridge-ai-health/bridge-ai-health.github.io.git
git add index.html styles.css script.js assets Image .nojekyll .gitignore README.md
git commit -m "Add AAAI-27 Bridge AI and Health website"
git push -u origin main
```

In the GitHub repository, open **Settings → Pages → Build and deployment**, choose **Deploy from a branch**, select **main** and **/ (root)**, and save. GitHub may take a few minutes to publish. If the repository gains commits before your first push, fetch and integrate that history first; do not force-push over existing work.

Only the website files are selected by the commands above. The original proposal PDF and the temporary verification folder are ignored.

## Content decisions and remaining updates

- The user's dates take precedence over the older dates near the end of the proposal: **call opens November 1, 2026; deadline December 1, 2026**.
- The deadline is 11:59 PM Anywhere on Earth (UTC-12), following the AAAI-27 timetable. The calendar entry uses the equivalent **December 2, 2026 at 11:59 UTC**, so calendar software displays the correct local time.
- December 13 author notifications and January 20 participant materials follow the official AAAI-27 timetable.
- This is a **one-day** bridge within **February 16–17, 2027** in Montréal. The exact day, room, speakers, and session times remain to be announced. The displayed schedule is explicitly proposed.
- Two-page contributions follow the accepted proposal. The reference-page limit, style template, anonymization, review, and publication policies are not inferred from last year's unrelated bridge.
- “Submission link coming soon” is intentional. Replace the `.submission-notice` in `index.html` with a real link when ready; update the nearby submission instructions and FAQ together. Do not use AAAI's bridge-proposal submission portal as the attendee paper submission link.
- Bridge Chairs: Zhong Chen, Chen Zhao, Hao Gao, Steve Jiang. Local portraits and linked names are included; Zhong Chen and Chen Zhao use their personal homepages, while Hao Gao and Steve Jiang use their UT Southwestern faculty profiles.
- Bridge Organizers: Jiaxin Li, Dong Li, Zihan Li, Yang Yan. Local portraits, linked names, and affiliations are included. Profiles and affiliations follow the user-supplied LLM4HR reference: Jiaxin Li and Yang Yan link to Google Scholar, Dong Li to his personal homepage, and Zihan Li to GitHub.
- Portraits are displayed in consistent square frames with CSS positioning; original image files are unchanged. All portraits use lazy loading. Adjust `.portrait-*` rules in `styles.css` to change their framing.
- Contact uses Zhong Chen's corresponding-author address from the proposal: `zhong.chen@cs.siu.edu`.
- Update the website and the `.ics` file together if the submission deadline changes.

## Sources

- The accepted three-page proposal supplied in this folder: `Bridging_Agentic_AI_Reasoning_and_Explainability_through_Graphs_V1.pdf` (kept local).
- [AAAI-27 Bridge Program Call for Proposals](https://aaai.org/conference/aaai/aaai-27/bridge-program-call-for-proposals/): dates, location, and in-person requirement. The timetable lists November 1 for the call; a conflicting older date appears later in the page. This site follows the timetable and the user's explicit dates.
- [AAAI-26 bridge list, B1](https://aaai.org/conference/aaai/aaai-26/bridge-program-list/#bp01): reference for the types of information a bridge website should contain. Its paper lengths, committee, and submission portal are not reused.
- [LLM4HR program chairs and committee](https://llm4hr.github.io/): source of personal/profile links and organizer affiliations, checked October 29, 2026.
- [Zhong Chen](https://pursuerchen.github.io/)
- [Chen Zhao](https://charliezhaoyinpeng.github.io/homepage/)
- [Hao Gao, UT Southwestern](https://profiles.utsouthwestern.edu/profile/228592/hao-gao.html)
- [Steve Jiang, UT Southwestern](https://profiles.utsouthwestern.edu/profile/150563/steve-jiang.html)
- [GitHub Pages publishing source documentation](https://docs.github.com/en/pages/getting-started-with-github-pages/configuring-a-publishing-source-for-your-github-pages-site)

Original layout, illustration, and icon were created for this website. The eight portraits were supplied by the user. Institutional logos are not bundled.
