import type { ReactNode } from "react";

import work1 from "../assets/works/work1.webp";
import work2 from "../assets/works/work2.webp";
import work3 from "../assets/works/work3.webp";
import work4 from "../assets/works/work4.webp";
import work5 from "../assets/works/work5.webp";
import work6 from "../assets/works/work6.webp";

export type Work = {
    id: number;
    title: string;
    category: (typeof WORK_CATEGORY)[number];
    type: (typeof WORK_TYPE)[number];
    date: string; //"2026-01-23"
    imageSrc: string;
    description: ReactNode;
    isSecret?: boolean;
};

export const WORK_CATEGORY: string[] = [
    "All",
    "Illustration",
    "Comic",
    "Other",
];

export const WORK_TYPE: string[] = ["Original Works", "Client Works"];

export const WORKS_DATA: Work[] = [
    {
        id: 1,
        title: "くすぶる/ねむる MVイラスト",
        category: WORK_CATEGORY[1],
        type: WORK_TYPE[1],
        date: "2024-11-22",
        imageSrc: work1,
        description: (
            <>
                <p>aliceBlue様の楽曲『くすぶる/ねむる』のMVイラストを担当しました。</p>
                <iframe
                    className="w-full aspect-video rounded-lg shadow-md"
                    loading="lazy"
                    src="https://www.youtube.com/embed/1HirWSddwXg?si=-69bE8YSmQ9IaxWq"
                    title="YouTube video player"
                    allow="accelerometer; 
                        autoplay; 
                        clipboard-write; 
                        encrypted-media; 
                        gyroscope; 
                        picture-in-picture; 
                        web-share"
                    referrerPolicy="strict-origin-when-cross-origin"
                    allowFullScreen
                ></iframe>
            </>
        ),
    },
    {
        id: 2,
        title: "めあたそ 2コマ漫画連載",
        category: WORK_CATEGORY[2],
        type: WORK_TYPE[1],
        date: "2025-01-19",
        imageSrc: work2,
        description: (
            <>
                <p>
                    <a
                        target="_blank"
                        rel="noopener noreferrer"
                        href="https://x.com/_666mg"
                        className="underline"

                    >
                        めあたそ様
                    </a>
                    の2コマ漫画を一部、9ヶ月にわたって担当しました。
                </p>
                <blockquote className="twitter-tweet">
                    <p lang="zxx" dir="ltr">
                        <a href="https://t.co/XneB13fgO0">pic.twitter.com/XneB13fgO0</a>
                    </p>&mdash; めあたそ (@_666mg) <a href="https://twitter.com/_666mg/status/1880933472099074453?ref_src=twsrc%5Etfw">January 19, 2025</a>
                    </blockquote> 
                    <script async src="https://platform.twitter.com/widgets.js"></script>
            </>
        ),
    },
    // {
    //     id: 3,
    //     title: "monokuro.world イラスト提供",
    //     category: WORK_CATEGORY[1],
    //     type: WORK_TYPE[1],
    //     date: "2025-05-08",
    //     imageSrc: work3,
    //     description: (
    //         <>
    //             <p>
    //                 <a
    //                     target="_blank"
    //                     rel="noopener noreferrer"
    //                     href="https://www.monokuro.world/"
    //                     className="underline"

    //                 >
    //                     monokuro.world様
    //                 </a>
    //                 サイト内のイラストを一枚提供しました。
    //             </p>
    //         </>
    //     ),
    // },
    {
        id: 4,
        title: "🔞comicエンドロール vol.2",
        category: WORK_CATEGORY[2],
        type: WORK_TYPE[1],
        date: "2025-11-28",
        imageSrc: work4,
        description: (
            <>
                <p>
                    ジーウォーク社様のWEB雑誌『comicエンドロール』にて、『凪の餞』というお話が"仕組み"名義で掲載されました。
                </p>
                <p>
                    <a
                        target="_blank"
                        rel="noopener noreferrer"
                        href="https://www.dlsite.com/books/work/=/product_id/BJ02290339.html"
                        className="underline"
                    >
                        👉雑誌購入リンク(DLSite)
                    </a>
                </p>
                <p>
                    <a
                        target="_blank"
                        rel="noopener noreferrer"
                        href="https://www.dlsite.com/books/work/=/product_id/BJ02290348.html"
                        className="underline"
                    >
                        👉単話購入リンク(FANZA)
                    </a>
                </p>
                                <p>
                    <a
                        target="_blank"
                        rel="noopener noreferrer"
                        href="https://book.dmm.co.jp/product/6210643/b092agwrk03364/"
                        className="underline"
                    >
                        👉購入リンク(FANZA)
                    </a>
                </p>
                <p>
                    <a
                        target="_blank"
                        rel="noopener noreferrer"
                        href="https://book.dmm.co.jp/product/6234258/b092agwrk03359/?i3_ref=list&i3_ord=2&dmmref=a_List_commonList"
                        className="underline"
                    >
                        👉単購入リンク(FANZA)
                    </a>
                </p>
            </>
        ),
        isSecret: true,

    },
    {
        id: 5,
        title: "仕込むスタンプ2 発売",
        category: WORK_CATEGORY[3],
        type: WORK_TYPE[0],
        date: "2026-01-02",
        imageSrc: work5,
        description: (
            <>
                <p>LINEスタンプ第2弾を作りました。</p>
                <p>第1弾と合わせてよろしくお願いします。</p>
                <p>
                    <a
                        target="_blank"
                        rel="noopener noreferrer"
                        href="https://store.line.me/stickershop/product/32485026"
                        className="underline"
                    >
                        👉購入リンク
                    </a>
                </p>
                <p>
                    <a
                        target="_blank"
                        rel="noopener noreferrer"
                        href="https://store.line.me/stickershop/product/29162308"
                        className="underline"
                    >
                        👉第一弾はこちら
                    </a>
                </p>
            </>
        ),
    },
    {
        id: 6,
        title: "仕込むweb開設",
        category: WORK_CATEGORY[3],
        type: WORK_TYPE[0],
        date: "2026-01-23",
        imageSrc: work6,
        description: (
            <>
                <p>仕込むwebを作成しました！</p>
                <p>シンプルでぽよぽよした感じにしました。</p>
            </>
        ),
    },
];
