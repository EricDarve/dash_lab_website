# DASH Lab website

Static website for the [DASH Lab](https://ericdarve.github.io/dash_lab_website/),
Eric Darve's research group at Stanford University. Built with
[Astro](https://astro.build) — the build output is plain HTML/CSS with no
server-side runtime, so it can be hosted anywhere static files are served.

## Editing content

- **Your own entry** (students): see [CONTRIBUTING.md](CONTRIBUTING.md) —
  edit `src/content/people/your-name.md`, open a pull request, Kirill
  reviews and merges.
- **Publications and news**: `src/data/publications.yaml` and
  `src/data/news.yaml`.
- **Research areas and pills**: `src/data/researchAreas.ts` and
  `src/data/researchStreams.ts`.

Anything pushed to `main` deploys automatically (see below).

## Commands

| Command           | Action                                    |
| :---------------- | :---------------------------------------- |
| `npm install`     | Install dependencies                      |
| `npm run dev`     | Dev server at `localhost:4321/dash_lab_website/` |
| `npm run build`   | Build the production site into `./dist/`  |
| `npm run preview` | Preview the built site locally            |

## Deployment

### GitHub Pages (automatic)

Every push to `main` runs `.github/workflows/deploy.yml`, which builds the
site and publishes it to GitHub Pages at
`https://ericdarve.github.io/dash_lab_website/`. No manual step.

### web.stanford.edu (manual)

The same build works on Stanford's AFS web hosting — only the URL prefix
changes. Once the lab has group web space (requested through Stanford UIT;
served at `web.stanford.edu/group/<name>/`):

```sh
SITE=https://web.stanford.edu BASE=/group/<name> npm run build
# then copy the build into the group's WWW directory:
rsync -av dist/ /afs/ir/group/<name>/WWW/
```

`SITE`/`BASE` default to the GitHub Pages values when unset
(`astro.config.mjs`), so the two targets don't interfere.
