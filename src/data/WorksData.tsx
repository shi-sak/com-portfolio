import type { ReactNode } from "react";

import img1 from "../assets/works/work.jfif";
import img2 from "../assets/works/work2.jfif";

export type Work = {
    id: number;
    title: string;
    category: string;
    imageSrc: string;
    description: ReactNode;
};

export const WORK_CATEGORY: string[] = ["All","Illustration","Comic","Web","Other"]

export const WORKS_DATA: Work[] = [

    {
        id: 1,
        title: "仕込むweb開設",
        category: WORK_CATEGORY[3],
        imageSrc: img1,
        description: (
            <>
                <h2>仕込むwebを作成しました！</h2>
                <p>シンプルでぽよぽよした感じです</p>
            </>
        ),
    },
    {
        id: 2,
        title: "Sample2",
        category: WORK_CATEGORY[2],
        imageSrc: img2,
        description: "xx",
    },
    {
        id: 3,
        title: "Sample3",
        category: WORK_CATEGORY[3],
        imageSrc: img1,
        description: "xx",
    },
    {
        id: 4,
        title: "Sample4",
        category: WORK_CATEGORY[4],
        imageSrc: img1,
        description: "xx",
    },
    {
        id: 5,
        title: "Sample5",
        category: WORK_CATEGORY[1],
        imageSrc: img1,
        description: "xx",
    },
    {
        id: 6,
        title: "Sample6",
        category: WORK_CATEGORY[1],
        imageSrc: img1,
        description: "xx",
    },
];