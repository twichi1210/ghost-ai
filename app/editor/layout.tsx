import { EditorShell } from "@/components/editor/editor-shell";

/** Layout for every `/editor` route: wraps pages in the editor chrome. */
export default function EditorLayout({ children }: LayoutProps<"/editor">) {
  return <EditorShell>{children}</EditorShell>;
}
