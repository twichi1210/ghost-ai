import { PanelLeftClose, PanelLeftOpen } from "lucide-react";

import { Button } from "@/components/ui/button";

interface EditorNavbarProps {
  isSidebarOpen: boolean;
  onToggleSidebar: () => void;
}

/**
 * Fixed-height top bar of the editor with left, center and right sections.
 * The left section holds the project sidebar toggle; its icon reflects
 * whether the sidebar is open.
 */
export function EditorNavbar({
  isSidebarOpen,
  onToggleSidebar,
}: EditorNavbarProps) {
  const ToggleIcon = isSidebarOpen ? PanelLeftClose : PanelLeftOpen;
  const toggleLabel = isSidebarOpen ? "Close sidebar" : "Open sidebar";

  return (
    <header className="flex h-14 shrink-0 items-center justify-between border-b border-surface-border bg-surface px-3">
      <div className="flex flex-1 items-center justify-start gap-2">
        <Button
          variant="ghost"
          size="icon"
          onClick={onToggleSidebar}
          aria-label={toggleLabel}
          aria-pressed={isSidebarOpen}
          className="rounded-xl text-copy-muted hover:text-copy-primary"
        >
          <ToggleIcon className="h-5 w-5" />
        </Button>
      </div>
      <div className="flex flex-1 items-center justify-center" />
      <div className="flex flex-1 items-center justify-end" />
    </header>
  );
}
