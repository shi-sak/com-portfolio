import { useEffect, useState } from "react";

// コナミコマンドのキー配列
const KONAMI_CODE = [
    "ArrowUp",
    "ArrowUp",
    "ArrowDown",
    "ArrowDown",
    "ArrowLeft",
    "ArrowRight",
    "ArrowLeft",
    "ArrowRight",
    "b",
    "a",
];

export const useKonamiCode = (isEnabled: boolean, onUnlock: () => void) => {
    // 入力されたキーの履歴
    const [input, setInput] = useState<string[]>([]);

    useEffect(() => {
        // 隠しコマンドが無効（TOP画面じゃない）ならリスナーを登録しない
        if (!isEnabled) {
            setInput([]); // 履歴もリセット
            return;
        }

        const handler = (e: KeyboardEvent) => {
            // 入力されたキーを追加し、コマンドの長さ分だけ履歴を残す
            setInput((prev) => {
                const newHistory = [...prev, e.key];
                if (newHistory.length > KONAMI_CODE.length) {
                    return newHistory.slice(-KONAMI_CODE.length);
                }
                return newHistory;
            });
        };

        window.addEventListener("keydown", handler);
        return () => window.removeEventListener("keydown", handler);
    }, [isEnabled]);

    // 入力が更新されるたびに、正解かどうかチェック
    useEffect(() => {
        if (JSON.stringify(input) === JSON.stringify(KONAMI_CODE)) {
            onUnlock(); // 正解！
            setInput([]); // リセット
        }
    }, [input, onUnlock]);
};
