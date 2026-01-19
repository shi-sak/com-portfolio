// src/components/layouts/Layout.tsx
import type { ReactNode } from "react";

import bgImage from "../../assets/bg.jfif";

type Props = {
    children: ReactNode;
};

export const Layout = ({ children }: Props) => {
    return (
        <div className="relative min-h-screen bg-white font-sans text-gray-900 overflow-hidden">
            {/* --- 背景 --- */}
            <div
                className="absolute inset-0 pointer-events-none z-0 opacity-30 select-none bg-center bg-cover bg-no-repeat"
                style={{ backgroundImage: `url(${bgImage})` }}
            >
            </div>
            {/* --- メインコンテンツ --- */}
            <div className="relative z-10 flex flex-col items-center pt-16 px-4 pb-20">
                <h1 className="relative z-50 text-xl font-bold mb-8 tracking-widest pointer-events-none">仕込むweb</h1>
                {children}
            </div>
        </div>
    );
};