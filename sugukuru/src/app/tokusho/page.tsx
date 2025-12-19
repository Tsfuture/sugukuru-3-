import { AppShell } from "@/components/AppShell";
import { Card } from "@/components/ui/card";

export default function TokushoPage() {
  return (
    <AppShell title="特定商取引法に基づく表記">
      <Card className="p-4">
        <p className="text-sm text-muted-foreground">
          ここに特商法の内容を貼ります（あとで差し替え）。
        </p>
      </Card>
    </AppShell>
  );
}