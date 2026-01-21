import type { ReactNode } from "react";

import img1 from "../assets/works/work.jfif";
import img2 from "../assets/works/work2.jfif";

export type Work = {
    id: number;
    title: string;
    category: string;
    date: string; //"2026-1-23"
    imageSrc: string;
    description: ReactNode;
};

export const WORK_CATEGORY: string[] = ["All", "Illustration", "Comic", "Other"]

export const WORKS_DATA: Work[] = [

    {
        id: 1,
        title: "仕込むweb開設",
        category: WORK_CATEGORY[3],
        date: "2026-01-23",
        imageSrc: img1,
        description: (
            <>
                <p>仕込むwebを作成しました！</p>
                <p>シンプルでぽよぽよした感じにしました</p>
            </>
        ),
    },
    {
        id: 2,
        title: "仕込むスタンプ2 発売",
        category: WORK_CATEGORY[3],
        date: "2026-01-23",
        imageSrc: img2,
        description: (
            <>
                <p>LINEスタンプ第2弾を作りました！</p>
                <p>第1弾と合わせてよろしくお願いします</p>
                <p><a
                    target="_blank"
                    rel="noopener noreferrer"
                    href="https://store.line.me/stickershop/product/32485026"
                    className="underline"
                >
                    👉購入リンク
                </a></p>
                <p><a
                    target="_blank"
                    rel="noopener noreferrer"
                    href="https://store.line.me/stickershop/product/29162308"
                    className="underline"
                >
                    👉第一弾はこちら
                </a></p>
            </>
        ),
    },
];