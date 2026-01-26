import { useRef, type ReactNode } from "react";
import { motion } from "motion/react";

import { BackgroundEffect } from "../ui/BackgroundEffect";
import logoImg from "../../assets/logo.webp";

type Props = {
    children: ReactNode;
};

export const Layout = ({ children }: Props) => {
    const constraintsRef = useRef(null);
    return (
        <div className="relative min-h-screen overflow-hidden font-sans text-gray-800">
            {/* --- 背景 --- */}
            <BackgroundEffect />
            {/* --- メインコンテンツ --- */}
            <motion.div
                ref={constraintsRef}
                className="relative z-10 flex min-h-screen flex-col items-center px-4 pb-20 pt-10"
            >
                <motion.img
                    src={logoImg}
                    alt="仕込むweb"
                    drag
                    dragConstraints={constraintsRef}
                    dragElastic={0.8}
                    dragTransition={{ bounceStiffness: 600, bounceDamping: 20 }}
                    // 元の位置に戻る時のバネ設定（クリックだけで少し動かした時など）
                    transition={{
                        type: "spring",
                        stiffness: 300,
                        damping: 20,
                    }}
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95, cursor: "grabbing" }}
                    className="relative z-[8000] mb-2 h-auto w-52 cursor-grab will-change-transform"
                />

                {/* メイン */}
                <div className="pointer-events-auto">{children}</div>
            </motion.div>
        </div>
    );
};
