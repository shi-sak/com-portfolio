import { motion, AnimatePresence } from "motion/react";
import type { TabItem, TabId } from "../../types";
import { X } from "lucide-react";

type Props = {
    activeTab: TabId | null;
    tabs: TabItem[];
    onClose: () => void;
};

export const Modal = ({ activeTab, tabs, onClose }: Props) => {
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
                            layoutId="modal-window"
                            initial={{ opacity: 0, scale: 0.9 }}
                            animate={{ opacity: 1, scale: 1 }}
                            exit={{ opacity: 0, scale: 0.9 }}
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

                            <div className="flex-1 overflow-y-auto px-6 py-3 text-gray-600 leading-relaxed">
                                {currentContent.content}
                            </div>
                        </motion.div>
                    </div>
                </>
            )}
        </AnimatePresence>
    );
};