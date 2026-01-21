import { useEffect, useState, useCallback } from "react";

export const useWorkRouter = () => {
    const [currentId, setCurrentId] = useState<number | null>(null);

    const syncStateFromUrl = useCallback(() => {
        const params = new URLSearchParams(window.location.search);
        const id = params.get("workId");
        // IDの型変換（数値であることを確定させる）
        setCurrentId(id ? Number(id) : null);
    }, []);

    useEffect(() => {
        syncStateFromUrl();
        window.addEventListener("popstate", syncStateFromUrl);
        return () => {
            window.removeEventListener("popstate", syncStateFromUrl);
        };
    }, [syncStateFromUrl]);

    const openWork = useCallback((id: number) => {
        const url = new URL(window.location.href);
        url.searchParams.set("workId", String(id));
        // ★ { isInternal: true } をセットして「サイト内移動」とマークする
        window.history.pushState({ isInternal: true }, "", url.toString());
        setCurrentId(id);
    }, []);

    const closeWork = useCallback(() => {
        // 履歴の状態を確認
        const state = window.history.state as { isInternal?: boolean } | null;

        if (state?.isInternal) {
            // サイト内で開いた履歴があるなら、普通に戻る
            window.history.back();
        } else {
            // 直リンクやリロード後の場合（履歴がない場合）
            const url = new URL(window.location.href);
            url.searchParams.delete("workId");

            window.history.replaceState(null, "", url.toString());
            setCurrentId(null);
        }
    }, []);

    return { currentId, openWork, closeWork };
};
