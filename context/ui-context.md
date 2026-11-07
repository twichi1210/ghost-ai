# UI Context

## Theme

Dark only. No light mode. The visual language is a dark technical workspace — near-black backgrounds, layered surfaces, and vivid accent colors for interactive elements.

All colors are defined as CSS custom properties in globals.css and mapped to Tailwind tokens via @theme inline. Components must use these tokens — no hardcoded hex values or raw Tailwind color classes like zinc-*.

## Colors

All colors are defined as CSS custom properties in globals.css and mapped to Tailwind tokens via @theme inline. Components must use these tokens — no hardcoded hex values or raw Tailwind color classes like zinc-*.

Tailwind utility names map to these variables. Use bg-base, bg-surface, text-copy-primary, text-copy-muted, border-surface-border, text-brand, bg-accent-dim, etc.

| Role | CSS Variable | Value |
| --- | --- | --- |
| Page background | `--bg-base` | `#080809` |
| Surface | `--bg-surface` | `#111114` |
| Elevated surface | `--bg-elevated` | `#18181c` |
| Subtle surface | `--bg-subtle` | `#1e1e23` |
| Default border | `--border-default` | `#2a2a30` |
| Subtle border | `--border-subtle` | `#3a3a42` |
| Primary text | `--text-primary` | `#f0f0f4` |
| Secondary text | `--text-secondary` | `#c0c0cc` |
| Muted text | `--text-muted` | `#808090` |
| Faint text | `--text-faint` | `#505060` |
| Brand accent | `--accent-primary` | `#00c8d4` (cyan) |
| Brand dim | `--accent-primary-dim` | `rgba(0, 200, 212, 0.12)` |
| AI accent | `--accent-ai` | `#6457f9` (indigo-purple) |
| AI text | `--accent-ai-text` | `#8b82ff` |
| Error | `--state-error` | `#ff4d4f` |
| Success | `--state-success` | `#34d399` |
| Warning | `--state-warning` | `#fbbf24` |

### Tailwind utility names

| CSS Variable | Utility suffix | Example |
| --- | --- | --- |
| `--bg-base` | `base` (bg only, via `@utility`) | `bg-base` |
| `--bg-surface` | `surface` | `bg-surface` |
| `--bg-elevated` | `elevated` | `bg-elevated` |
| `--bg-subtle` | `subtle` | `bg-subtle` |
| `--border-default` | `surface-border` | `border-surface-border` |
| `--border-subtle` | `surface-border-subtle` | `border-surface-border-subtle` |
| `--text-primary` | `copy-primary` | `text-copy-primary` |
| `--text-secondary` | `copy-secondary` | `text-copy-secondary` |
| `--text-muted` | `copy-muted` | `text-copy-muted` |
| `--text-faint` | `copy-faint` | `text-copy-faint` |
| `--accent-primary` | `brand` | `text-brand`, `bg-brand` |
| `--accent-primary-dim` | `accent-dim` | `bg-accent-dim` |
| `--accent-ai` | `ai` | `bg-ai` |
| `--accent-ai-text` | `ai-text` | `text-ai-text` |
| `--state-error` / `-success` / `-warning` | `error` / `success` / `warning` | `text-error` |

`bg-base` is a standalone `@utility`, not a `--color-base` token: a color token named `base` would hijack Tailwind's `text-base` font-size utility used by shadcn components.

The shadcn/ui semantic variables (`--background`, `--primary`, `--card`, `--border`, `--ring`, etc.) are remapped onto this palette in `globals.css`, so `components/ui/*` render dark without modification. The `dark` class is always set on `<html>`.

## Node Color Palette

8 defined color pairs. Each pair specifies a dark node fill and a vivid contrasting text color tuned for readability on the dark canvas. Defined in types/canvas.ts as NODE_COLORS.

| Node fill | Text color | Character |
| --- | --- | --- |
| `#1F1F1F` | `#EDEDED` | Neutral dark (default) |
| `#10233D` | `#52A8FF` | Blue |
| `#2E1938` | `#BF7AF0` | Purple |
| `#331B00` | `#FF990A` | Orange |
| `#3C1618` | `#FF6166` | Red |
| `#3A1726` | `#F75F8F` | Pink |
| `#0F2E18` | `#62C073` | Green |
| `#062822` | `#0AC7B4` | Teal |

Default node color: `#1F1F1F` with `#EDEDED` text.

## Typography

| Role | Font | CSS Variable |
| --- | --- | --- |
| UI text | Geist Sans | `--font-geist-sans` |
| Code/mono | Geist Mono | `--font-geist-mono` |

Both fonts are loaded via next/font/google and applied as CSS variables on the <html> element. The base body uses Geist Sans with antialiased.

## Border Radius

Radius increases with surface depth — smaller for inner elements, larger for outer containers.

| Context | Class |
| --- | --- |
| Inline / small UI | `rounded-xl` |
| Cards / panels | `rounded-2xl` |
| Modal / overlay | `rounded-3xl` |

## Component Library

Do not modify generated third-party foundation components unless explicitly instructed. This includes components/ui/* (shadcn/ui components) and third-party library internals; these should remain default and reusable. Project-specific styling, layout changes, and feature logic must be implemented in app-level components instead of modifying foundation components. Default to React Server Components; add "use client" only when the component needs browser interactivity, hooks, or real-time state.

## Layout Patterns

- Collaborative canvas workspace using Liveblocks and React Flow with live cursors, presence indicators, and node/edge editing.
- Template library import allowing users to insert prebuilt starter system designs directly into the canvas.
- Spec view and export interface to view and download persisted Markdown technical specifications.
- Project navigation interface for project list, workspace navigation, and collaborator access.

## Icons

Lucide React. Stroke-based icons only. Sizes: h-4 w-4 for inline, h-5 w-5 for buttons.