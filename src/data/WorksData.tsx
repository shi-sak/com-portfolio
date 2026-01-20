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

export const WORKS_DATA: Work[] = [

    {
        id: 1,
        title: "Sample1",
        category: "Illustration",
        imageSrc: img1,
        description: (
            <>
                
            </>
        ),
    },
    {
        id: 2,
        title: "Sample2",
        category: "Comic",
        imageSrc: img2,
        description: "xx",
    },
    {
        id: 3,
        title: "Sample3",
        category: "Web Site",
        imageSrc: img1,
        description: "xx",
    },
    {
        id: 4,
        title: "Sample4",
        category: "Art",
        imageSrc: img1,
        description: "xx",
    },
];