# intercept

A custom, animated portfolio for a UI designer and Roblox Lua/Luau scripter. Built with Next.js App Router, React, TypeScript, and CSS. Exports to static files for GitHub Pages.

## Run locally

Requires Node.js 22 or newer.

```sh
npm ci
npm run dev
```

For the production version:

```sh
npm run build
npm start
```

Open http://127.0.0.1:3000. The `out/` directory is the complete static site. `npm start` serves the exported build; it does not use a Next.js server.

## Project screenshots

The portfolio uses 23 unique original screenshots supplied by intercept, organized into 20 catalog entries. Gamepass shop and Gameplay HUD lead the portfolio. Trading groups three related screens, and Reward interfaces groups playtime and daily rewards. The repeated season-pass attachment was excluded. Titles describe the supplied screenshots; edit `src/lib/portfolio.ts` to use your preferred names or add details.

For each project, edit `name`, `category`, `description`, `scope`, and `color`. Short project taglines are not rendered. To replace or add a screenshot:

1. Put a WebP, PNG, or JPG in `public/work/`, for example `public/work/my-inventory.webp`.
2. Set `image: "/work/my-inventory.webp"`, a descriptive `alt`, and the image's actual `width` and `height` in the project entry. This updates it everywhere, including the project dialog.
3. For additional projects, add an object to `projects` with a unique `id`. There is no fixed set of project IDs or separate preview component to implement.
4. For related screens, add `additionalImages` entries with `image`, `alt`, `width`, `height`, and a short `label`. The main screenshot can also have a `label`. These become selectable thumbnails in the project dialog, with left/right keyboard navigation while focused in the gallery.

The first two project entries populate the hero, and the first three populate the featured gallery, including names, category labels, screenshots, and accessible button labels. Gamepass shop and Gameplay HUD lead both sections and the catalog. Wide screens show all three featured projects together; tablets use two columns and phones use one. The catalog uses large image-led cards in two columns on desktop and tablet, then one column on phones. Rows continue down the page with its visible gold scrollbar. Each image has a compact name, category, optional view count, and **Show more** action below it. Images are contained rather than cropped, and both gallery and dialog previews are sized against the viewport height. Its two categories are **User Interface** (12 entries) and **Scripting** (8 entries), with an All filter. Clicking a preview or Show more opens that project.

The contact handle is `intrcept`, displayed as **@intrcept**. It copies the handle and opens Discord; it does not guess a Discord numeric profile ID. Change `profile.discord` and the corresponding accessible labels in `src/components/portfolio.tsx` if the handle changes.

## Themes and motion

- The portfolio uses a permanent black theme: solid black canvas, charcoal surfaces, soft light text, and muted champagne-gold accents. There is no gradient or light-mode switch.
- Dark styling is present in the server-rendered HTML, independent of system appearance and any older saved theme preference.
- Project screenshots retain their original artwork and colors. They are displayed uncropped and without filters.
- Motion includes staged type entrances, section reveals, gently floating project previews, scroll parallax, and hover treatments.
- Reduced motion is honored automatically through the visitor's system preference.
- Project dialogs support Escape, left/right arrows, focus trapping, and returning focus to their opener. The vertical catalog supports normal wheel, touch, and keyboard page scrolling, with keyboard-accessible filters and Show more buttons.

## GitHub Pages

1. Push this project to a GitHub repository with a `main` branch.
2. In **Settings → Pages → Build and deployment**, choose **GitHub Actions**.
3. The included `.github/workflows/deploy.yml` builds and uploads `out/`, then deploys it.

The workflow reads `actions/configure-pages`'s `base_path` and passes it as `NEXT_PUBLIC_BASE_PATH`. This covers repository URLs such as `username.github.io/portfolio/`, root `username.github.io` sites, and configured custom domains. The build uses `output: "export"`, unoptimized images, and trailing slashes; `.nojekyll` is included. There is no server or form backend to configure.

For a manual subpath build in PowerShell:

```powershell
$env:NEXT_PUBLIC_BASE_PATH = '/portfolio'
npm run build
```

To return to a root-path local build:

```powershell
Remove-Item Env:NEXT_PUBLIC_BASE_PATH -ErrorAction SilentlyContinue
npm run build
```

Nothing has been pushed or deployed as part of this build.

## Design and assets

See `DESIGN.md` for the reference analysis, direction sheet decisions, and validation notes. Manrope is bundled locally through `@fontsource-variable/manrope`, under the SIL Open Font License included with the package. All 23 project screenshots are copied intact into `public/work/` from intercept's attachments. The small cursor identity mark is authored in code. The generic Play graphic, ability demo, and accompanying About section were removed at intercept's request. No stock imagery or proprietary reference-site assets are used.

