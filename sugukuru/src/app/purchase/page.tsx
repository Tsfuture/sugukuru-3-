"use client";

import { useMemo, useState } from "react";
import { useRouter, useSearchParams } from "next/navigation";
import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Separator } from "@/components/ui/separator";
import { AlertTriangle, MapPin, Minus, Plus, Users } from "lucide-react";
import { getStoreById } from "@/lib/stores";

function yen(n: number) {
  return n.toLocaleString("ja-JP");
}

export default function PurchasePage() {
  const router = useRouter();
  const sp = useSearchParams();
  const storeId = sp.get("store");

  const store = useMemo(() => getStoreById(storeId), [storeId]);
  const unitPrice = store?.priceFrom ?? 1000;

  const [qty, setQty] = useState(1);
  const total = unitPrice * qty;

  const dec = () => setQty((q) => Math.max(1, q - 1));
  const inc = () => setQty((q) => Math.min(6, q + 1));

  const goNext = () => {
    // 次の画面（同意ページ）へ。まだ無い場合はこの後で仮ページ作る。
    const sid = store?.id ?? "default";
    router.push(`/consent?store=${encodeURIComponent(sid)}&qty=${qty}`);
  };

  return (
    <main className="min-h-screen bg-[#f6f2ee] text-slate-900">
      {/* 上部の小さなブランド */}
      <header className="mx-auto max-w-md px-4 pt-6 text-center">
        <div className="text-xs font-semibold tracking-widest text-[#F25A3C]">
          sugukuru
        </div>
        <h1 className="mt-3 text-lg font-semibold">FastPass購入</h1>
      </header>

      <section className="mx-auto max-w-md px-4 pb-16 pt-6 space-y-4">
        {/* 店舗カード */}
        <Card className="border-black/10 bg-white/70 p-4">
          <div className="flex items-start gap-3">
            <div className="mt-0.5 flex h-9 w-9 items-center justify-center rounded-full bg-[#F25A3C]/15">
              <MapPin className="h-5 w-5 text-[#F25A3C]" />
            </div>
            <div className="min-w-0">
              <div className="text-base font-semibold">
                {store?.name ?? "デフォルト店舗"}
              </div>
              <div className="mt-1 text-sm text-slate-600">
                {store?.desc ?? "待ち時間を短縮して、スムーズにご案内"}
              </div>
            </div>
          </div>
        </Card>

        {/* メインカード */}
        <Card className="border-black/10 bg-white/70 p-4">
          {/* ステップ */}
          <div className="px-1">
            <div className="flex items-center justify-between">
              <StepCircle n={1} active label="人数" />
              <StepLine />
              <StepCircle n={2} active={false} label="同意" />
              <StepLine />
              <StepCircle n={3} active={false} label="確認" />
            </div>
          </div>

          <div className="mt-6 flex items-center gap-2 text-sm font-semibold">
            <Users className="h-4 w-4 text-slate-600" />
            購入枚数を選択
          </div>

          {/* 数量コントロール */}
          <div className="mt-4 flex items-center justify-center gap-6">
            <button
              onClick={dec}
              className="inline-flex h-12 w-12 items-center justify-center rounded-full border border-black/10 bg-white hover:bg-black/5"
              aria-label="decrease"
            >
              <Minus className="h-5 w-5 text-slate-700" />
            </button>

            <div className="text-center">
              <div className="text-3xl font-semibold">
                {qty}
                <span className="ml-1 text-base font-semibold">枚</span>
              </div>
              <div className="mt-1 text-xs text-slate-600">
                1〜6枚まで選択可能
              </div>
            </div>

            <button
              onClick={inc}
              className="inline-flex h-12 w-12 items-center justify-center rounded-full border border-black/10 bg-white hover:bg-black/5"
              aria-label="increase"
            >
              <Plus className="h-5 w-5 text-slate-700" />
            </button>
          </div>

          {/* 注意バー */}
          <div className="mt-4 flex items-center gap-2 rounded-md bg-black/5 px-3 py-2 text-xs text-slate-700">
            <AlertTriangle className="h-4 w-4 text-slate-600" />
            SUGUKURUご利用人数は1組6名様までです。
          </div>

          <div className="mt-4">
            <Separator className="bg-black/10" />
          </div>

          {/* 金額 */}
          <div className="mt-4 space-y-3 text-sm">
            <Row label="単価" value={`¥${yen(unitPrice)}`} />
            <Row label="人数" value={`${qty}名`} />
            <div className="pt-2">
              <Row
                label="合計金額"
                value={`¥${yen(total)}`}
                strong
                valueClassName="text-[#C83F2A]"
              />
            </div>
          </div>

          {/* 次へ */}
          <div className="mt-5">
            <Button
              className="w-full rounded-lg bg-[#F25A3C] hover:bg-[#E34D33]"
              onClick={goNext}
            >
              次へ <span className="ml-2">→</span>
            </Button>
          </div>
        </Card>

        {/* 注意点ボックス */}
        <Card className="border-black/10 bg-white/70 p-4">
          <div className="text-sm font-semibold text-[#C83F2A]">！注意点！</div>
          <ul className="mt-3 space-y-2 text-xs leading-relaxed text-slate-700">
            <li>※こちら優先的に案内されるチケットです。お食事代とは別になります。</li>
            <li>※1組6名様以上はご利用できません。（1組6名様までSUGUKURUの利用ができます）</li>
            <li>※SUGUKURU利用時にお席の指定はできません（空き次第のご案内になります）</li>
            <li>※SUGUKURUチケットの事前購入はできません（必ず来店してから購入ください。スタッフが日時の確認を行います）</li>
            <li>※購入後、直ぐに店舗スタッフへチケットをご提示ください</li>
          </ul>
        </Card>

        <div className="pt-2 text-center text-xs text-slate-600">
          © SUGUKURU - スグクル
        </div>
      </section>
    </main>
  );
}

function StepCircle({
  n,
  active,
  label,
}: {
  n: number;
  active: boolean;
  label: string;
}) {
  return (
    <div className="flex flex-col items-center gap-1">
      <div
        className={[
          "flex h-8 w-8 items-center justify-center rounded-full text-sm font-semibold",
          active ? "bg-[#F25A3C] text-white" : "bg-black/15 text-slate-700",
        ].join(" ")}
      >
        {n}
      </div>
      <div className="text-xs text-slate-600">{label}</div>
    </div>
  );
}

function StepLine() {
  return <div className="mx-2 h-[2px] flex-1 rounded bg-black/10" />;
}

function Row({
  label,
  value,
  strong,
  valueClassName,
}: {
  label: string;
  value: string;
  strong?: boolean;
  valueClassName?: string;
}) {
  return (
    <div className="flex items-center justify-between">
      <div className={strong ? "font-semibold" : "text-slate-700"}>{label}</div>
      <div
        className={[
          strong ? "text-base font-semibold" : "font-semibold",
          valueClassName ?? "",
        ].join(" ")}
      >
        {value}
      </div>
    </div>
  );
}