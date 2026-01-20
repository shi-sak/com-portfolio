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

export const WORK_CATEGORY: string[] = ["All", "Illustration", "Comic", "Web", "Other"]

export const WORKS_DATA: Work[] = [

    {
        id: 1,
        title: "仕込むweb開設",
        category: WORK_CATEGORY[3],
        date: "2026-1-23",
        imageSrc: img1,
        description: (
            <>
                <p>仕込むwebを作成しました！</p>
                <p>シンプルでぽよぽよした感じです</p>
            </>
        ),
    },
    {
        id: 2,
        title: "仕込むスタンプ2",
        category: WORK_CATEGORY[4],
        date: "2026-1-23",
        imageSrc: img2,
        description: (
            <>
                <p>LINEスタンプ第2弾を作りました！</p>
                <p>第1弾と合わせてよろしくお願いします</p>
            </>
        ),
    },
    {
        id: 3,
        title: "Sample3",
        category: WORK_CATEGORY[3],
        date: "2026-1-23",
        imageSrc: img1,
        description: (
            <>
                <p>xx</p>
                <p>xxxx</p>
                <p>xx</p>
                <p>xxxx</p>
            </>
        ),
    },
    {
        id: 4,
        title: "Sample4",
        category: WORK_CATEGORY[4],
        date: "2026-1-23",
        imageSrc: img1,
        description: "xx",
    },
    {
        id: 5,
        title: "Sample5",
        category: WORK_CATEGORY[1],
        date: "2026-1-23",
        imageSrc: img1,
        description: "xx",
    },
    {
        id: 6,
        title: "Sample6",
        category: WORK_CATEGORY[1],
        date: "2026-1-23",
        imageSrc: img1,
        description: "xx",
    },
];