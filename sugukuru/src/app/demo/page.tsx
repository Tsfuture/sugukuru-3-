import Link from "next/link";
import { screens } from "@/lib/screens";
import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";

export default function DemoPage() {
  return (
    <main className="min-h-screen bg-background p-6">
      <div className="mx-auto max-w-md space-y-4">
        <div className="space-y-1">
          <h1 className="text-xl font-semibold">Demo</h1>
          <p className="text-sm text-muted-foreground">
            ここからスクショ再現ページを増やしていきます。
          </p>
        </div>

        <div className="space-y-3">
          {screens.map((s) => (
            <Card key={s.slug} className="p-4">
              <div className="space-y-2">
                <div className="font-medium">{s.title}</div>
                {s.description ? (
                  <div className="text-sm text-muted-foreground">{s.description}</div>
                ) : null}
                <Button asChild className="w-full">
                  <Link href={`/${s.slug}`}>開く</Link>
                </Button>
              </div>
            </Card>
          ))}
        </div>
      </div>
    </main>
  );
}