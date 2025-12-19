export type Store = {
  id: string;
  name: string;
  desc: string;
  waitMin: number;
  priceFrom: number; // 1枚あたり（円）
  closed?: boolean;
  tag?: string;
};

export const STORES: Store[] = [
  { id: "cafe-shibuya", name: "カフェ渋谷", desc: "渋谷駅前の人気カフェ", waitMin: 25, priceFrom: 300 },
  { id: "clinic-b", name: "クリニックB", desc: "内科・皮膚科クリニック", waitMin: 60, priceFrom: 1500 },
  { id: "themepark-c", name: "テーマパークC", desc: "ファミリー向けテーマパーク", waitMin: 90, priceFrom: 2000 },
  { id: "ramen-a", name: "ラーメン店A", desc: "本格豚骨ラーメンの人気店", waitMin: 45, priceFrom: 500 },
  { id: "restaurant-d", name: "レストランD", desc: "イタリアンレストラン", waitMin: 35, priceFrom: 800, closed: true, tag: "営業時間外" },
];

export function getStoreById(id: string | null | undefined): Store | null {
  if (!id) return null;
  return STORES.find((s) => s.id === id) ?? null;
}