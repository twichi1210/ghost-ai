# Progress Tracker

Update this file after every meaningful implementation
change.

## Current Phase

- Design System & UI Components (context/feautre-spects/01-desing-system.md)

## Current Goal

- Design system complete; ready for the next feature spec.

## Completed

- 01 Design system (context/feautre-spects/01-desing-system.md):
  shadcn/ui (base-nova preset, @base-ui/react), lucide-react, `lib/utils.ts`
  (`cn()` re-exported from the `cn` package), and Button, Card, Dialog,
  Input, Tabs, Textarea, ScrollArea in `components/ui/` (unmodified).
  Dark tokens from ui-context.md wired into `app/globals.css`; `dark` class
  on `<html>`. Verified: tsc + `npm run build` pass, all components render
  dark in the browser with no console errors, `cn()` resolves conflicts.

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
- shadcn CLI v4 installs `@base-ui/react` primitives (not Radix) and the
  `cn` package instead of clsx + tailwind-merge.

## Session Notes

- [Context needed to resume work in the next session]
