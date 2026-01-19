// src/App.tsx
import { useState, useEffect } from "react";
import { Layout } from "./components/layouts/Layout";
import { Navigation } from "./components/ui/Navigation";
import { Modal } from "./components/ui/Modal";
import type { TabItem, TabId } from "./types";

// 作ったコンポーネントをインポート
import { Profile } from "./components/contents/Profile";
import { Works } from "./components/contents/Works";
import { Contact } from "./components/contents/Contact";
import { Links } from "./components/contents/Links";

// コンテンツのデータ定義
const TABS: TabItem[] = [
  {
    id: "profile",
    label: "PROFILE",
    title: "PROFILE",
    content: <Profile />
  },
  {
    id: "works",
    label: "WORKS",
    title: "WORKS",
    content: <Works />
  },
  {
    id: "link",
    label: "LINK",
    title: "LINK",
    content: <Links />
  },
  {
    id: "contact",
    label: "CONTACT",
    title: "CONTACT",
    content: <Contact />
  },
];

function App() {
  const [activeTab, setActiveTab] = useState<TabId | null>(null);

  // モーダルが開いている時は背景スクロールを止める
  useEffect(() => {
    document.body.style.overflow = activeTab ? "hidden" : "auto";
  }, [activeTab]);

  return (
    <Layout>
      {/* ナビゲーション */}
      <Navigation
        tabs={TABS}
        activeTab={activeTab}
        onTabChange={setActiveTab}
      />

      {/* モーダル */}
      <Modal
        tabs={TABS}
        activeTab={activeTab}
        onClose={() => setActiveTab(null)}
      />
    </Layout>
  );
}

export default App;