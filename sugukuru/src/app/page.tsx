import Link from "next/link";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";

export default function Home() {
  return (
    <main className="min-h-screen bg-background p-6">
      <div className="mx-auto max-w-md space-y-6">
        <div className="space-y-2">
          <h1 className="text-2xl font-semibold">SUGUKURU</h1>
          <p className="text-sm text-muted-foreground">
            デモ画面をスクショ通りに再現していく開発環境
          </p>
        </div>

        <Card className="p-4">
          <div className="space-y-3">
            <p className="text-sm">
              まずは「/demo」を作って、スクショ再現を量産していきます。
            </p>
            <Button asChild className="w-full">
              <Link href="/demo">/demo を開く</Link>
            </Button>
          </div>
        </Card>
      </div>
    </main>
  );
}