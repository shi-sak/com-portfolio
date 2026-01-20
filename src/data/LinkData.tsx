import type { ReactNode } from "react";

export type Link = {
    id: number;
    title: string;
    description: string;
    link: string;
};

export const LINK_DATA: Link[] = [
    {
        id: 1,
        title: "X (Twitter)",
        description: "@com_shicom",
        link: "https://x.com/com_shicom",
    },
    {
        id: 2,
        title: "Instagram",
        description: "@com_shicom",
        link: "https://www.instagram.com/com_shicom",
    },
    {
        id: 3,
        title: "Bluesky",
        description: "@shicom.bsky.social",
        link: "https://bsky.app/profile/shicom.bsky.social",
    },
    {
        id: 4,
        title: "Skeb",
        description: "Commission",
        link: "https://skeb.jp/@com_shicom",
    },
    {
        id: 5,
        title: "BOOTH",
        description: "Shop",
        link: "https://shicom.booth.pm/",
    },
    {
        id: 6,
        title: "SUZURI",
        description: "Goods",
        link: "https://suzuri.jp/com_shicom",
    },
    {
        id: 7,
        title: "note",
        description: "Blog",
        link: "https://note.com/com_shicom",
    },
    {
        id: 8,
        title: "YouTube",
        description: "Vtuber(見込む/micom)",
        link: "https://www.youtube.com/@com_micom",
    },
    {
        id: 9,
        title: "X (Twitter) Sub Account",
        description: "@com_nicom",
        link: "https://x.com/com_nicom",
    },
]

export const X_LINK: ReactNode = (
    <>
        <a
            target="_blank"
            rel="noopener noreferrer"
            href={LINK_DATA[0].link}
            //className="underline"
        >
        {LINK_DATA[0].title}
        </a>
    </>
)

export const INS_LINK: ReactNode = (
    <>
        <a
            target="_blank"
            rel="noopener noreferrer"
            href={LINK_DATA[1].link}
            //className="underline"
        >
        {LINK_DATA[1].title}    
        </a>
    </>
)

export const BS_LINK: ReactNode = (
    <>
        <a
            target="_blank"
            rel="noopener noreferrer"
            href={LINK_DATA[2].link}
            //className="underline"
        >
        {LINK_DATA[2].title}  
        </a>
    </>
)

export const MICOM_LINK: ReactNode = (
    <>
        <a
            target="_blank"
            rel="noopener noreferrer"
            href={LINK_DATA.find(link=> link.title=="YouTube")?.link}
            className="underline"
        >
        見込むちゃん    
        </a>
    </>
)
