import React from "react";

export function AppShell({
  title,
  description,
  children,
}: {
  title?: string;
  description?: string;
  children: React.ReactNode;
}) {
  return (
    <main className="min-h-screen bg-background p-6">
      <div className="mx-auto w-full max-w-md space-y-4">
        {(title || description) && (
          <header className="space-y-1">
            {title && <h1 className="text-xl font-semibold">{title}</h1>}
            {description && (
              <p className="text-sm text-muted-foreground">{description}</p>
            )}
          </header>
        )}
        {children}
      </div>
    </main>
  );
}