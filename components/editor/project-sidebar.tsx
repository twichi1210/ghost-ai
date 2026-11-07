import { FolderOpen, Plus, X } from "lucide-react";
import { cn } from "cn";

import { Button } from "@/components/ui/button";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";

interface ProjectSidebarProps {
  isOpen: boolean;
  onClose: () => void;
}

interface EmptyProjectsProps {
  message: string;
}

/** Placeholder shown in a projects tab when it has no projects to list. */
function EmptyProjects({ message }: EmptyProjectsProps) {
  return (
    <div className="flex h-full flex-col items-center justify-center gap-2 rounded-2xl border border-dashed border-surface-border px-4 py-10 text-center">
      <FolderOpen className="h-5 w-5 text-copy-faint" />
      <p className="text-sm text-copy-muted">{message}</p>
    </div>
  );
}

/**
 * Floating projects panel that slides in from the left over the editor
 * content without pushing it. Shows "My projects" and "Shared" tabs and a
 * New Project button; it is inert while closed.
 */
export function ProjectSidebar({ isOpen, onClose }: ProjectSidebarProps) {
  return (
    <aside
      aria-label="Projects"
      aria-hidden={!isOpen}
      inert={!isOpen}
      className={cn(
        "absolute inset-y-0 left-0 z-40 flex w-72 flex-col border-r border-surface-border bg-surface shadow-2xl transition-transform duration-200 ease-out",
        isOpen ? "translate-x-0" : "-translate-x-full"
      )}
    >
      <div className="flex h-12 shrink-0 items-center justify-between px-4">
        <h2 className="text-sm font-medium text-copy-primary">Projects</h2>
        <Button
          variant="ghost"
          size="icon-sm"
          onClick={onClose}
          aria-label="Close sidebar"
          className="rounded-xl text-copy-muted hover:text-copy-primary"
        >
          <X className="h-4 w-4" />
        </Button>
      </div>

      <Tabs defaultValue="mine" className="min-h-0 flex-1 px-4">
        <TabsList className="w-full">
          <TabsTrigger value="mine">My projects</TabsTrigger>
          <TabsTrigger value="shared">Shared</TabsTrigger>
        </TabsList>
        <TabsContent value="mine" className="py-2">
          <EmptyProjects message="You have no projects yet." />
        </TabsContent>
        <TabsContent value="shared" className="py-2">
          <EmptyProjects message="No projects have been shared with you." />
        </TabsContent>
      </Tabs>

      <div className="shrink-0 border-t border-surface-border p-4">
        <Button className="w-full rounded-xl">
          <Plus className="h-5 w-5" />
          New Project
        </Button>
      </div>
    </aside>
  );
}
