import { useEffect, useRef } from "react";

import { motion, AnimatePresence } from "motion/react";
import type { TabItem, TabId } from "../../types";
import { X } from "lucide-react";

type Props = {
    activeTab: TabId | null;
    tabs: TabItem[];
    onClose: () => void;
};

export const Modal = ({ activeTab, tabs, onClose }: Props) => {
    //scrollリセット
    const topSectionRef = useRef<HTMLDivElement>(null);
    useEffect(() => {
        // Refがついている要素（.current）に対してスクロール命令を出す
        if (topSectionRef.current) {
            topSectionRef.current.scrollTo({
                top: 0,
                behavior: "instant", // "smooth" だとヌルっと動く
            });
        }
    }, [activeTab]);

    const currentContent = tabs.find((t) => t.id === activeTab);

    return (
        <AnimatePresence>
            {activeTab && currentContent && (
                <>
                    {/* 背景の膜 */}
                    <motion.div
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        exit={{ opacity: 0 }}
                        onClick={onClose}
                        className="fixed inset-0 z-40 bg-white/60 backdrop-blur-sm"
                    />

                    <div className="pointer-events-none fixed inset-0 z-50 flex items-start justify-center px-4 pb-10 pt-44">
                        <motion.div
                            key={activeTab}
                            initial={{ opacity: 0, y: 80 }} // 初期状態：80px下にいて見えない
                            animate={{ opacity: 1, y: 0 }} // 登場：定位置（y=0）に戻ってくる
                            exit={{ opacity: 0, y: 80 }} // 退場：また80px下に消えていく
                            transition={{
                                type: "spring",
                                bounce: 0.3,
                                duration: 0.5,
                            }}
                            className="pointer-events-auto flex max-h-full w-full max-w-lg flex-col overflow-hidden rounded-[2rem] border-2 border-black bg-white shadow-2xl"
                        >
                            <div className="sticky top-0 z-10 flex shrink-0 items-center justify-between border-b border-gray-100 bg-white px-6 py-3">
                                <h2 className="text-2xl font-bold uppercase tracking-tight">
                                    {currentContent.title}
                                </h2>
                                <button
                                    onClick={onClose}
                                    className="rounded-full p-2 transition hover:bg-gray-100"
                                >
                                    <X size={24} />
                                </button>
                            </div>
                            <div ref={topSectionRef}></div>
                            <div className="flex-1 overflow-y-auto px-6 py-3 leading-relaxed text-gray-600">
                                {currentContent.content}
                            </div>
                        </motion.div>
                    </div>
                </>
            )}
        </AnimatePresence>
    );
};
