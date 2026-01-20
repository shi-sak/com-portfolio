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
        link: "",
    },
    {
        id: 3,
        title: "Bluesky",
        description: "@shicom.bsky.social",
        link: "",
    },
]

export const X_LINK: ReactNode = (
    <>
        <a
            target="_blank"
            rel="noopener noreferrer"
            href={LINK_DATA[0].link}
        >
        X(Twitter)    
        </a>
    </>
)

