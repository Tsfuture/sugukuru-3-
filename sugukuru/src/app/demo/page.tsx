import { Card } from "@/components/ui/card";

export default function DemoPage() {
  return (
    <main className="min-h-screen bg-background p-6">
      <div className="mx-auto max-w-md space-y-4">
        <h1 className="text-xl font-semibold">Demo</h1>

        <Card className="p-4">
          <p className="text-sm text-muted-foreground">
            ここからスクショ再現ページを増やしていきます。
          </p>
        </Card>
      </div>
    </main>
  );
}