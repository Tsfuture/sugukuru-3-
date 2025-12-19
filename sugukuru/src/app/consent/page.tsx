import { AppShell } from "@/components/AppShell";
import { Card } from "@/components/ui/card";

export default function ConsentPage() {
  return (
    <AppShell title="同意（仮ページ）" description="次はこの画面をスクショ通りに作ります。">
      <Card className="p-4">
        <p className="text-sm text-muted-foreground">
          ここに「同意」UI（チェックボックス等）が入ります。
        </p>
      </Card>
    </AppShell>
  );
}