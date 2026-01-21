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
                        className="fixed inset-0 bg-white/60 backdrop-blur-sm z-40"
                    />

                    <div className="fixed inset-0 z-50 flex items-start justify-center pointer-events-none px-4 pt-52 pb-10">
                        <motion.div
                            key={activeTab}
                            layoutId="modal-window"
                            initial={{ opacity: 0, y: 80 }}   // 初期状態：80px下にいて見えない
                            animate={{ opacity: 1, y: 0 }}    // 登場：定位置（y=0）に戻ってくる
                            exit={{ opacity: 0, y: 80 }}      // 退場：また80px下に消えていく
                            transition={{ type: "spring", bounce: 0.3, duration: 0.5 }}
                            className="w-full max-w-lg max-h-full bg-white border-2 border-black rounded-[2rem] shadow-2xl overflow-hidden flex flex-col pointer-events-auto"
                        >
                            <div className="px-6 py-3 border-b border-gray-100 flex justify-between items-center bg-white sticky top-0 z-10 shrink-0">
                                <h2 className="text-2xl font-bold uppercase tracking-tight">
                                    {currentContent.title}
                                </h2>
                                <button
                                    onClick={onClose}
                                    className="p-2 hover:bg-gray-100 rounded-full transition"
                                >
                                    <X size={24} />
                                </button>
                            </div>
                            <div
                                ref={topSectionRef}
                                className="flex-1 overflow-y-auto p-4 md:p-8"
                            >
                                <div className="flex-1 overflow-y-auto px-6 py-3 text-gray-600 leading-relaxed">
                                    {currentContent.content}
                                </div>
                            </div>
                        </motion.div>
                    </div>
                </>
            )}
        </AnimatePresence>
    );
};