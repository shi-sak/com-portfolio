// src/components/layouts/Layout.tsx
import type { ReactNode } from "react";
import { BackgroundEffect } from "../ui/BackgroundEffect";

type Props = {
    children: ReactNode;
};

export const Layout = ({ children }: Props) => {
    return (
        <div className="relative min-h-screen font-sans text-gray-800">
            {/* --- 背景 --- */}
            <BackgroundEffect />
            {/* --- メインコンテンツ --- */}
            <div className="relative z-10 flex flex-col items-center pt-16 px-4 pb-20">
                <h1 className="relative z-50 text-xl font-bold mb-8 tracking-widest pointer-events-none">
                    仕込むweb
                </h1>
                {children}
            </div>
        </div>
    );
};