export type TabId = "profile" | "works" | "link" | "contact";

export interface TabItem {
    id: TabId;
    label: string;
    title: string; // モーダル内の見出し
    content: React.ReactNode; // モーダルの中身（文字でもタグでもOK）
}
