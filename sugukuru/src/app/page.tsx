import Link from "next/link";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Separator } from "@/components/ui/separator";
import {
  Clock,
  Menu,
  QrCode,
  Ticket,
  User,
  Users,
} from "lucide-react";

type HowTo = {
  title: string;
  description: string;
  Icon: React.ElementType;
};

type Store = {
  id: string;
  name: string;
  desc: string;
  waitMin: number;
  priceFrom: number;
  closed?: boolean;
  tag?: string; // 例: "営業時間外"
};

const howTo: HowTo[] = [
  {
    title: "1. QRコードを読み取る",
    description: "店舗のQRコードをスマホで読み取ると、購入ページが開きます",
    Icon: QrCode,
  },
  {
    title: "2. FastPassを購入",
    description: "クレジットカードで決済。アプリ不要、ブラウザで完結します",
    Icon: Users,
  },
  {
    title: "3. 優先案内を受ける",
    description: "チケット画面をスタッフに見せて、待ち時間なしで案内されます",
    Icon: Clock,
  },
];

const stores: Store[] = [
  { id: "cafe-shibuya", name: "カフェ渋谷", desc: "渋谷駅前の人気カフェ", waitMin: 25, priceFrom: 300 },
  { id: "clinic-b", name: "クリニックB", desc: "内科・皮膚科クリニック", waitMin: 60, priceFrom: 1500 },
  { id: "themepark-c", name: "テーマパークC", desc: "ファミリー向けテーマパーク", waitMin: 90, priceFrom: 2000 },
  { id: "ramen-a", name: "ラーメン店A", desc: "本格豚骨ラーメンの人気店", waitMin: 45, priceFrom: 500 },
  { id: "restaurant-d", name: "レストランD", desc: "イタリアンレストラン", waitMin: 35, priceFrom: 800, closed: true, tag: "営業時間外" },
];

function yen(n: number) {
  return n.toLocaleString("ja-JP");
}

export default function Home() {
  return (
    <main className="min-h-screen bg-[#f6f2ee] text-slate-900">
      {/* Header */}
      <header className="mx-auto max-w-6xl px-4 py-4">
        <div className="grid grid-cols-3 items-center">
          <div className="justify-self-start">
            <button
              className="inline-flex h-10 w-10 items-center justify-center rounded-full hover:bg-black/5"
              aria-label="menu"
            >
              <Menu className="h-5 w-5" />
            </button>
          </div>

          <div className="justify-self-center text-xs font-semibold tracking-widest text-[#F25A3C]">
            sugukuru
          </div>

          <div className="justify-self-end">
            <button
              className="inline-flex h-10 w-10 items-center justify-center rounded-full hover:bg-black/5"
              aria-label="account"
            >
              <User className="h-5 w-5" />
            </button>
          </div>
        </div>
      </header>

      {/* Hero */}
      <section className="mx-auto max-w-6xl px-4 pb-10 pt-4">
        <div className="mx-auto max-w-2xl text-center">
          <div className="mx-auto mb-4 flex h-16 w-16 items-center justify-center rounded-full bg-[#F25A3C]/15">
            <QrCode className="h-8 w-8 text-[#F25A3C]" />
          </div>

          <h1 className="text-xl font-semibold md:text-2xl">
            QRコードを読み取ってください
          </h1>

          <p className="mt-2 text-sm text-slate-600">
            店舗に設置されたQRコードをスキャンすると、FastPass購入
            <br />
            ページが開きます
          </p>
        </div>
      </section>

      <div className="mx-auto max-w-6xl px-4">
        <Separator className="bg-black/10" />
      </div>

      {/* How to */}
      <section className="mx-auto max-w-6xl px-4 py-10">
        <h2 className="text-center text-lg font-semibold md:text-xl">
          使い方は簡単
        </h2>

        <div className="mt-6 grid gap-4 md:grid-cols-3">
          {howTo.map((item) => (
            <Card key={item.title} className="border-black/10 bg-white/70 p-5">
              <div className="mb-3 flex h-10 w-10 items-center justify-center rounded-full bg-[#F25A3C]/15">
                <item.Icon className="h-5 w-5 text-[#F25A3C]" />
              </div>

              <div className="text-sm font-semibold">{item.title}</div>
              <div className="mt-2 text-sm leading-relaxed text-slate-600">
                {item.description}
              </div>
            </Card>
          ))}
        </div>
      </section>

      {/* Stores */}
      <section className="mx-auto max-w-6xl px-4 pb-14">
        <div className="text-center">
          <h2 className="text-lg font-semibold md:text-xl">導入店舗</h2>
          <p className="mt-2 text-sm text-slate-600">
            下記のリンクから購入フローをお試しいただけます
          </p>
        </div>

        <div className="mt-6 grid gap-4 md:grid-cols-3">
          {stores.map((s) => {
            const disabled = !!s.closed;

            return (
              <Card
                key={s.id}
                className="border-black/10 bg-white/70 p-5"
              >
                <div className="flex items-start justify-between gap-3">
                  <div>
                    <div className="flex items-center gap-2">
                      <div className="text-base font-semibold">{s.name}</div>
                      {s.tag ? (
                        <Badge variant="secondary" className="bg-black/10 text-slate-700">
                          {s.tag}
                        </Badge>
                      ) : null}
                    </div>
                    <div className="mt-1 text-sm text-slate-600">{s.desc}</div>
                  </div>

                  <div className="flex h-9 w-9 items-center justify-center rounded-full bg-[#F25A3C]/15">
                    <Ticket className="h-5 w-5 text-[#F25A3C]" />
                  </div>
                </div>

                <div className="mt-4 flex items-center justify-between text-sm">
                  <div className="flex items-center gap-2 text-slate-700">
                    <Clock className="h-4 w-4 text-slate-500" />
                    <span>待ち時間: {s.waitMin}分</span>
                  </div>
                  <div className="font-semibold text-[#C83F2A]">¥{yen(s.priceFrom)}〜</div>
                </div>

                <div className="mt-4">
                  <Button
                    asChild
                    className={[
                      "w-full rounded-lg",
                      disabled
                        ? "bg-[#F25A3C]/40 hover:bg-[#F25A3C]/40 cursor-not-allowed"
                        : "bg-[#F25A3C] hover:bg-[#E34D33]",
                    ].join(" ")}
                    disabled={disabled}
                  >
                    <Link href={`/purchase?store=${s.id}`} aria-disabled={disabled}>
                      FastPassを購入 <span className="ml-2">→</span>
                    </Link>
                  </Button>
                </div>
              </Card>
            );
          })}
        </div>
      </section>

      {/* Footer */}
      <footer className="pb-10 text-center text-xs text-slate-600">
        <div>© 2024 SUGUKURU - 行列スキップサービス</div>
        <div className="mt-2">アプリ不要・ブラウザで完結・QRコードで簡単購入</div>

        <div className="mt-4">
          <Link href="/tokusho" className="underline underline-offset-4">
            特定商取引法に基づく表記
          </Link>
        </div>

        <div className="mt-3">
          <Link href="/demo" className="text-slate-500 underline underline-offset-4">
            開発用 /demo
          </Link>
        </div>
      </footer>
    </main>
  );
}