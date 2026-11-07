"use client";

import { useState, type ReactNode } from "react";

import { EditorNavbar } from "@/components/editor/editor-navbar";
import { ProjectSidebar } from "@/components/editor/project-sidebar";

interface EditorShellProps {
  children?: ReactNode;
}

/**
 * Client-side frame for editor pages: owns the sidebar open state and
 * renders the navbar, the floating project sidebar and the page content.
 */
export function EditorShell({ children }: EditorShellProps) {
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);

  return (
    <div className="flex h-screen flex-col bg-base">
      <EditorNavbar
        isSidebarOpen={isSidebarOpen}
        onToggleSidebar={() => setIsSidebarOpen((open) => !open)}
      />
      <div className="relative min-h-0 flex-1 overflow-hidden">
        <ProjectSidebar
          isOpen={isSidebarOpen}
          onClose={() => setIsSidebarOpen(false)}
        />
        <main className="h-full">{children}</main>
      </div>
    </div>
  );
}
