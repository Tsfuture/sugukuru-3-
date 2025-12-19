export type Screen = {
  slug: string;        // URL: /<slug>
  title: string;       // 表示名
  description?: string;
};

export const screens: Screen[] = [
  {
    slug: "purchase",
    title: "購入ページ（仮）",
    description: "スクショ再現の1枚目をここに作る",
  },
  // ここにどんどん追加していく
  // { slug: "consent", title: "同意ページ", description: "..." },
];