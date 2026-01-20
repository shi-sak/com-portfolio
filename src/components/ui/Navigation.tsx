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
        <nav
            className="
        bg-white text-black
        border-2 border-black
        rounded-full shadow-xl 
        flex items-center

        px-3 md:px-8 
        py-2 md:py-4
        gap-1 md:gap-4
        
        max-w-[95vw] md:max-w-fit
        overflow-x-auto
        whitespace-nowrap
        relative z-[9999] mb-8
        "
        >
            <motion.button
                onClick={() => onTabChange(null)}

                whileTap={{ scale: 0.8 }}

                className="
                relative
                px-3 py-1
                text-[11px] md:text-sm 
                font-bold 
                tracking-wider 
                hover:text-black transition-colors shrink-0
                ">
                TOP
            </motion.button>
            {tabs.map((tab) => (
                <motion.button
                    key={tab.id}
                    onClick={() => onTabChange(activeTab === tab.id ? null : tab.id)}

                    whileTap={{ scale: 0.8 }}

                    className="
                    relative
                    px-3 py-1
                    text-[11px] md:text-sm 
                    font-bold 
                    tracking-wider 
                    hover:text-gray-300 transition-colors shrink-0
                    ">
                    {/* テキスト部分 */}
                    <span className={clsx(activeTab === tab.id ? "text-yellow-500" : "text-black")}>
                        {tab.label}
                    </span>

                    {/* 選択中だけ出る「下線」のアニメーション */}
                    {activeTab === tab.id && (
                        <motion.div
                            initial={{ opacity: 0, scaleX: 0 }}
                            animate={{ opacity: 1, scaleX: 1 }}
                            transition={{ duration: 0.2 }}

                            className="absolute left-0 right-0 -bottom-1 h-[2px] bg-yellow-500"
                        />
                    )}
                </motion.button>
            ))}
        </nav>
    );
};