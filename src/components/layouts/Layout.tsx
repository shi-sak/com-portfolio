import { useRef, type ReactNode } from "react";
import { motion } from "motion/react";

import { BackgroundEffect } from "../ui/BackgroundEffect";
import logoImg from "../../assets/logo.png";


type Props = {
    children: ReactNode;
};

export const Layout = ({ children }: Props) => {
    const constraintsRef = useRef(null);
    return (
        <div className="relative min-h-screen font-sans text-gray-800 overflow-hidden">
            {/* --- 背景 --- */}
            <BackgroundEffect />
            {/* --- メインコンテンツ --- */}
            <motion.div
                ref={constraintsRef}
                className="relative z-10 flex flex-col items-center pt-10 px-4 pb-20 min-h-screen" // min-h-screenを追加して画面いっぱいに広げる
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
                    className="relative z-50 mb-8 w-40 h-auto cursor-grab will-change-transform" // will-changeで動作を滑らかに
                />

                {/* childrenもドラッグの邪魔にならないように、ポインターイベントを制御しておくと良いかも */}
                <div className="pointer-events-auto">
                    {children}
                </div>
            </motion.div>
        </div>
    );
};