# Updating the DASH Lab website

This guide is for current lab members proposing website updates: adding
yourself, updating your profile, adding a news item, or correcting the
Research pages. The repository is public, so anyone can open a pull request,
but **changes become live only after a maintainer reviews and merges the
pull request.**

You do not need to know Astro. Every change below is a small edit to one
text file (plus one image for a profile). Give this file to a coding agent
or follow it by hand.

## Add yourself

1. **Add your photo** to `public/people/`.

   - Filename: `first-last.webp` — lowercase, hyphenated, plain ASCII
     (e.g. `noemie-claret.webp`, no accents or spaces).
   - Format: WebP, **288 × 288 px**, square. The site shows photos in a
     circle at 84–96 px, so 288 covers 3× retina screens. Use a roughly
     square, front-facing, centered crop.
   - With ImageMagick (any tool that produces a 288 × 288 WebP is fine):

     ```sh
     magick your-photo.jpg -auto-orient -resize 288x288^ -gravity center \
       -extent 288x288 -quality 80 public/people/first-last.webp
     ```

2. **Add a profile file** `src/content/people/first-last.md`. The filename
   without `.md` becomes your page URL (`/member/first-last/`); use the same
   `first-last` as your photo.

3. **Copy this template** into that file and fill it in:

   ```md
   ---
   name: First Last
   role: PhD Student, ICME
   category: phd
   pills: [ai-for-science]
   photo: /people/first-last.webp
   links:
     website: https://example.com
     scholarUrl: https://scholar.google.com/citations?user=XXXXXXXX
   ---

   Two to four factual sentences about what you work on, in the same tone
   as the existing profiles: your program or department, your research
   focus, and optionally where you were before Stanford.
   ```

   The bio is the Markdown text below the `---` block. Fields:

   | Field             | Required | Notes |
   | :---------------- | :------- | :---- |
   | `name`            | yes      | Shown on the People grid and on your page. |
   | `role`            | yes      | Free text, e.g. `PhD Student, Mechanical Engineering`, `Postdoctoral Scholar`. Shown on your page for every category except `phd` (PhD students are already grouped under "PhD Students"). |
   | `category`        | yes      | One of `research_scientist`, `postdoc`, `phd`, `masters`, `undergrad`. Sets the People-section group you appear in. `pi` is the PI's entry; `alumni` keeps an entry in the repo but hides it from the site. |
   | `pills`           | optional | 1–3 research tags from the list below. The first two appear on your People card; all of them on your page. |
   | `photo`           | optional | `/people/first-last.webp` — the path under `public/`. Without it your initials are shown. |
   | `links.website`   | optional | Full URL starting with `https://`. Shown as "Website". |
   | `links.scholarUrl`| optional | Full URL. Shown as "Google Scholar". |
   | `sourceUrl`       | optional | Where the bio text was taken from. Omit for a bio you wrote yourself. |
   | `placeholder`     | leave out| Internal flag for empty slots; defaults to `false`. |

   Research tags are the `slug` values in `src/data/researchStreams.ts`.
   Currently:

   | Tag (`pills` value)             | Shown as |
   | :------------------------------ | :------- |
   | `ml-science-engineering`        | SciML |
   | `numerical-methods-hpc`         | Numerical Methods & HPC |
   | `uncertainty-anomaly-detection` | UQ & AD |
   | `interpretability`              | AI Interpretability |
   | `ai-safety`                     | AI Safety |
   | `ai-for-science`                | AI for Science |
   | `agentic-ai`                    | Agentic AI |
   | `computational-imaging`         | Computational Imaging |

4. **Keep it consistent.**

   - Pick the existing tags that best fit, even if none is a perfect match.
   - Do not add a new tag or research category without coordinating first:
     that is a separate change to `src/data/researchStreams.ts` and it
     affects which people appear on the Research pages.
   - Keep the bio short and factual, like the existing profiles.
   - Edit only your own profile unless the change was coordinated.

5. **Validate.** Needs Node 22.12 or newer.

   ```sh
   npm install   # first time only
   npm run build
   ```

   The build fails with a clear message if a required field is missing, a
   tag is not in the list, or a URL is malformed. To look at the result,
   run `npm run dev` and open <http://localhost:4321/dash_lab_website/>;
   your page is at `/dash_lab_website/member/first-last/`.

6. **Open a pull request** against `main`. Suggested title:
   `Add profile: First Last`.

## Update your profile

1. Find your entry in `src/content/people/` (`first-last.md`).
2. Edit only the fields that need changing.
3. To replace your photo, overwrite `public/people/first-last.webp`
   (same 288 × 288 WebP rules as above).
4. Run `npm run build`.
5. Open a pull request. Suggested title: `Update profile: First Last`.

Worth a glance while you are there: `name` and `role`, the bio, the photo,
your `pills`, `links.website`, and `links.scholarUrl`.

## Add a news item

News lives in `src/data/news.yaml`, newest first. Add an entry at the top
of the list:

```yaml
- id: "short-unique-slug-2026"
  date: "2026-09-15"
  title: "One-line headline"
  summary: "One or two factual sentences."
  url: "https://example.edu/announcement"
  sourceUrl: "https://example.edu/announcement"
```

Required: `id` (unique within the file), `date` (`YYYY-MM-DD`, or `YYYY-MM`
when only the month is known), `title`, `summary`. Optional: `url` (the
public page the item links to; without it the item is plain text) and
`sourceUrl` (where the claim can be verified). Both must be full URLs.

Suggested title: `Add news: <short title>`.

## Update research

The Research overview and detail pages are generated from
`src/data/researchAreas.ts` (each area's title, paragraphs, linked phrases,
and tags) and `src/data/researchStreams.ts` (the tag list).

- Small factual or link corrections — a typo, an updated paper URL — can be
  submitted directly as a pull request. Keep the existing wording; each
  linked phrase must still appear exactly once in its paragraph or the build
  fails.
- Substantial changes — area titles, descriptions, the set of areas, tags,
  or which people are mapped to an area — should be coordinated with the
  maintainers before opening a pull request.

## Submit the pull request

With Git (this assumes you have write access to the repository; if you do
not, the web-editor route below is the simplest option):

```sh
git checkout -b update-first-last

# make your change

npm install   # first time only
npm run build

git add <files-you-changed>   # only the files you meant to change, not `git add .`
git commit -m "Update profile: First Last"
git push -u origin update-first-last
```

This workflow assumes you have write access to the repository. If you do
not, use the GitHub web editor/fork workflow below instead.

Open a pull request from that branch into `main`.

Without Git, or without write access, GitHub's web editor works for every
change in this guide: open the file under `src/content/people/`,
`src/data/news.yaml`, or `src/data/researchAreas.ts` and edit it, or use
**Add file → Upload files** inside `public/people/` for a photo. When
committing, choose **"Create a new branch for this commit and start a pull
request."** If you do not have write access, GitHub forks the repository for
you automatically and opens the pull request from your fork.

Changes become live only after a maintainer reviews and merges the pull
request. A build check runs on every pull request; if it fails, the log
names the field or file to fix.

Do not modify deployment, GitHub Actions, package/configuration files, or
unrelated content unless your change specifically requires it.

## Coding agents

If you use Claude Code, Codex, or another coding agent, ask it to follow
this CONTRIBUTING.md, make only the requested content change, run
`npm run build`, and show you the diff before opening a pull request.

<!-- PR workflow test -->
