import { motion } from "motion/react";
import { ArrowLeft } from "lucide-react";
import type { Work } from "../../data/WorksData";

import { useLayoutEffect, useRef } from "react";

type Props = {
    work: Work;
    onClose: () => void;
};

export const WorkDetail = ({ work, onClose }: Props) => {

    const topRef = useRef<HTMLDivElement>(null);
    useLayoutEffect(() => {
        topRef.current?.scrollIntoView({ behavior: "instant", block: "start" });
    }, []);

    return (
        <motion.div
            key="detail"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.3 }}
            className="flex flex-col h-full gap-6"
        >
            <div ref={topRef} className="absolute -top-24" />
            {/* 戻るボタン */}
            <button
                onClick={onClose}
                className="self-start flex items-center text-sm font-bold text-gray-400 hover:text-black transition-colors"
            >
                <ArrowLeft size={16} className="mr-1" /> BACK
            </button>

            {/* 詳細コンテンツ */}
            <div className="space-y-4">
                {/* 画像 */}
                <motion.img
                    src={work.imageSrc}
                    alt={work.title}
                    className="aspect-video w-full h-full object-cover object-center"
                />

                {/* テキスト情報 */}
                <div>

                    <div className="flex items-center justify-between mb-2">

                        <h3 className="text-2xl font-bold">
                            {work.title}
                        </h3>

                        <span className="text-sm text-gray-400 shrink-0 ml-4 font-mono">
                            {work.date}
                        </span>

                    </div>

                    <span className="text-xs font-bold text-white bg-black px-2 py-1 rounded-md self-start">
                        {work.category}
                    </span>
                    <div className="text-gray-600 leading-relaxed mt-4">
                        {work.description}
                    </div>
                </div>
            </div>
        </motion.div>
    );
};