# Progress Tracker

Update this file after every meaningful implementation
change.

## Current Phase

- Editor Chrome (context/feautre-spects/02-editor.md)

## Current Goal

- Editor chrome complete; ready for the next feature spec.

## Completed

- 01 Design system (context/feautre-spects/01-desing-system.md):
  shadcn/ui (base-nova preset, @base-ui/react), lucide-react, `lib/utils.ts`
  (`cn()` re-exported from the `cn` package), and Button, Card, Dialog,
  Input, Tabs, Textarea, ScrollArea in `components/ui/` (unmodified).
  Dark tokens from ui-context.md wired into `app/globals.css`; `dark` class
  on `<html>`. Verified: tsc + `npm run build` pass, all components render
  dark in the browser with no console errors, `cn()` resolves conflicts.
- 02 Editor chrome (context/feautre-spects/02-editor.md):
  `components/editor/editor-navbar.tsx` (h-14, left/center/right sections,
  PanelLeftOpen/PanelLeftClose toggle, right empty),
  `components/editor/project-sidebar.tsx` (absolute overlay that slides in
  from the left, `isOpen` + `onClose`, Projects header + close, My projects /
  Shared tabs with empty states, full-width New Project button),
  `components/editor/editor-dialog.tsx` (dialog pattern: title, description,
  footer actions on globals.css tokens; not used yet), and
  `components/editor/editor-shell.tsx` (client state holder). The shell is
  mounted by `app/editor/layout.tsx`, so every page under `/editor` gets the
  navbar and sidebar. `/` keeps the original "Ghost AI" home page.
  Verified: tsc, eslint and `npm run build` pass; in the browser the sidebar
  opens over the content without shifting `main`, closes, and logs no errors.

## In Progress

- None.

## Next Up

- Next feature spec.

## Open Questions

- [Any unresolved product or technical decisions]

## Architecture Decisions

- Dark-only theme: one palette on both `:root` and `.dark`, with `dark`
  always on `<html>`, so shadcn `dark:` variants apply without editing
  `components/ui/*`.
- `bg-base` is an `@utility`, not a `--color-base` token, to avoid
  overriding Tailwind's `text-base` font size (it made CardTitle invisible).
- Editor chrome components are presentational; sidebar open state lives in
  the client `EditorShell`, so the navbar and sidebar need no `use client`.
- The project sidebar sits under the navbar (absolute in the content area)
  so the navbar toggle stays reachable; it is `inert` when closed.
- Editor chrome lives in the `/editor` route layout (`app/editor/layout.tsx`),
  not the root layout, so `/` and other non-editor pages render without it.
- shadcn CLI v4 installs `@base-ui/react` primitives (not Radix) and the
  `cn` package instead of clsx + tailwind-merge.

## Session Notes

- [Context needed to resume work in the next session]
