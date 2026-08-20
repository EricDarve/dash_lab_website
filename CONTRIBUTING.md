# Contributing to the DASH Lab website

Everyone maintains their own entry. There's no central content owner beyond
review — if your research focus or bio changes, you open the PR to update it.

**How changes land:** students and lab members open pull requests, which the
maintainer reviews and merges. Maintainers with push access (Eric, Kirill)
can commit to `main` directly. Every push to `main` auto-deploys the site
via GitHub Pages — there is no separate publish step.

## Add yourself to the People page

1. Create `src/content/people/first-last.md`.
2. Fill in the frontmatter:

   ```yaml
   ---
   name: Jane Doe
   role: PhD Student, Mechanical Engineering # grouping label; not shown on PhD pages
   category: phd # pi | research_scientist | postdoc | phd | masters | undergrad | alumni
   pills: [ai-for-science, interpretability] # 1-3, from src/data/researchStreams.ts
   photo: /people/jane-doe.webp # optional — see "Photos" below
   links:
     website: https://example.com # optional
   ---
   ```

3. Write 2-4 sentences about what you work on as the file body.
4. Open a pull request. A GitHub Action builds the site automatically — if it
   fails, a required field is missing or a pill isn't in the allowed list.
5. The maintainer reviews and merges.

## Photos

Photos live in `public/people/` as **288×288 WebP** (the avatars render at
84–96 px, so 288 covers 3× retina). Convert whatever you have with
ImageMagick — this also fixes phone photos that rely on an EXIF rotation
flag:

```sh
magick your-photo.jpg -auto-orient -resize 288x288^ -gravity center \
  -extent 288x288 -quality 80 public/people/first-last.webp
```

Use a roughly square, front-facing crop — the site displays photos in a
circle, center-cropped.

## Choosing pills

Pick 1-3 from the current list in `src/data/researchStreams.ts` — pick
whichever already-existing tag(s) best fit your work, even if it's not a
perfect match. The list is kept short and broad on purpose, so the site
doesn't need edits every time a specific project changes.

Only add a new pill (a small separate PR to `researchStreams.ts`) if none of
the existing ones fit your research area at all, and loop in the maintainer
before merging it.

`pills` is optional and omitted for the PI entry — the Research section
already covers lab-wide areas, so it isn't repeated per-person there.

## Publications and news

Same pattern: publications live in `src/data/publications.yaml`, news in
`src/data/news.yaml`. Add an entry with a `sourceUrl` pointing to where the
information can be verified — no unsourced claims.

## Maintainer

Kirill Acharya reviews and merges PRs to this site.
