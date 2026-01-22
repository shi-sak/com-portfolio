import { motion } from "motion/react";
import type { TabItem, TabId } from "../../types";
import { clsx } from "clsx";

type Props = {
    tabs: TabItem[];
    activeTab: TabId | null;
    onTabChange: (id: TabId | null) => void;
};

export const Navigation = ({ tabs, activeTab, onTabChange }: Props) => {
    return (
        <nav className="relative z-50 mb-8 flex max-w-[95vw] items-center gap-1 overflow-x-auto whitespace-nowrap rounded-full border-2 border-black bg-white px-3 py-2 text-black shadow-xl md:max-w-fit md:gap-4 md:px-8 md:py-4">
            <motion.button
                onClick={() => onTabChange(null)}
                whileTap={{ scale: 0.8 }}
                className="relative shrink-0 px-3 py-1 text-[11px] font-bold tracking-wider transition-colors hover:text-black md:text-sm"
            >
                TOP
            </motion.button>
            {tabs.map((tab) => (
                <motion.button
                    key={tab.id}
                    onClick={() =>
                        onTabChange(activeTab === tab.id ? null : tab.id)
                    }
                    whileTap={{ scale: 0.8 }}
                    className="relative shrink-0 px-3 py-1 text-[11px] font-bold tracking-wider transition-colors hover:text-gray-300 md:text-sm"
                >
                    {/* テキスト部分 */}
                    <span
                        className={clsx(
                            activeTab === tab.id
                                ? "text-yellow-500"
                                : "text-black",
                        )}
                    >
                        {tab.label}
                    </span>

                    {/* 選択中だけ出る「下線」のアニメーション */}
                    {activeTab === tab.id && (
                        <motion.div
                            initial={{ opacity: 0, scaleX: 0 }}
                            animate={{ opacity: 1, scaleX: 1 }}
                            transition={{ duration: 0.2 }}
                            className="absolute -bottom-1 left-0 right-0 h-[2px] bg-yellow-500"
                        />
                    )}
                </motion.button>
            ))}
        </nav>
    );
};
