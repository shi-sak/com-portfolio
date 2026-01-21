import { useState, useEffect } from "react";
import { AnimatePresence } from "motion/react";

import { Layout } from "./components/layouts/Layout";
import { Loading } from "./components/ui/Loading";
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

  //loading
  const [isLoading, setIsLoading] = useState(true);
  useEffect(() => {
    const timer = setTimeout(() => {
      setIsLoading(false);
    }, 1500);

    return () => clearTimeout(timer);
  }, []);


  const [activeTab, setActiveTab] = useState<TabId | null>(null);

  // // モーダルが開いている時は背景スクロールを止める
  // useEffect(() => {
  //   document.body.style.overflow = activeTab ? "hidden" : "auto";
  // }, [activeTab]);

  // workId があるなら、強制的に works タブにする
  useEffect(() => {
    const params = new URLSearchParams(window.location.search);
    if (params.has("workId")) {
      setActiveTab("works");
    }
  }, []);

  // ★ これを作って Navigation に渡す！
  const handleTabChange = (id: TabId | null) => {
    // 1. タブの状態を更新
    setActiveTab(id);

    // 2. URLのお掃除（workId があれば消す）
    const url = new URL(window.location.href);
    if (url.searchParams.has("workId")) {
      url.searchParams.delete("workId");
      // 履歴を残さず(replaceState)、URLを綺麗にする
      window.history.replaceState(null, "", url.toString());
    }
  };

  return (
    <>
      {/* loading */}
      <AnimatePresence mode="wait">
        {isLoading && <Loading key="loading" />}
      </AnimatePresence>

      <Layout>
        {/* ナビゲーション */}
        <Navigation
          tabs={TABS}
          activeTab={activeTab}
          onTabChange={handleTabChange}
        />

        {/* モーダル */}
        <Modal
          tabs={TABS}
          activeTab={activeTab}
          onClose={() => setActiveTab(null)}
        />
      </Layout>
    </>
  );
}

export default App;