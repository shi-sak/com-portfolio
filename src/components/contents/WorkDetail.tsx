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
            className="flex h-full flex-col gap-6"
        >
            <div ref={topRef} className="absolute -top-24" />
            {/* 戻るボタン */}
            <button
                onClick={onClose}
                className="flex items-center self-start text-sm font-bold text-gray-400 transition-colors hover:text-black"
            >
                <ArrowLeft size={16} className="mr-1" /> BACK
            </button>

            {/* 詳細コンテンツ */}
            <div className="space-y-4">
                {/* 画像 */}
                <motion.img
                    src={work.imageSrc}
                    alt={work.title}
                    className="aspect-video h-full w-full object-cover object-center"
                />

                {/* テキスト情報 */}
                <div>
                    <div className="mb-2 flex items-center justify-between">
                        <h3 className="text-2xl font-bold">{work.title}</h3>

                        <span className="ml-4 shrink-0 font-mono text-sm text-gray-400">
                            {work.date}
                        </span>
                    </div>

                    <span className="self-start rounded-md bg-black px-2 py-1 text-xs font-bold text-white">
                        {work.category}
                    </span>
                    <div className="mt-4 leading-relaxed text-gray-600">
                        {work.description}
                    </div>
                </div>
            </div>
        </motion.div>
    );
};
