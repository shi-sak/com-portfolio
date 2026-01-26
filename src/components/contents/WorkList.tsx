import { useState, useMemo, useLayoutEffect, useRef } from "react";
import { motion, AnimatePresence } from "motion/react";

import { WORKS_DATA, WORK_CATEGORY, type Work } from "../../data/WorksData";
import { WorkFilterBar } from "../ui/WorkFilterBar";

import { useSecret } from "../../contexts/SecretContext";

type Props = {
    onSelect: (work: Work) => void;
    initialId: number | null;
};

export const WorkList = ({ onSelect, initialId }: Props) => {
    const [category, setCategory] = useState(WORK_CATEGORY[0]);
    const [sortOrder, setSortOrder] = useState<"new" | "old">("new");

    const { isSecretMode } = useSecret();

    const filteredWorks = useMemo(() => {
        let works = [...WORKS_DATA];

        //シークレットモードでの表示
        if (!isSecretMode) {
            works = works.filter((work) => !work.isSecret);
        }

        // カテゴリでの絞り込み（既存）
        if (category !== WORK_CATEGORY[0]) {
            works = works.filter((work) => work.category === category);
        }

        // 並び替え（既存）
        works.sort((a, b) => {
            return sortOrder === "new" ? b.id - a.id : a.id - b.id;
        });
        return works;
    }, [category, sortOrder, isSecretMode]);

    const targetRef = useRef<HTMLDivElement>(null);
    useLayoutEffect(() => {
        if (targetRef.current) {
            targetRef.current.scrollIntoView({
                behavior: "instant",
                block: "center",
            });
        }
    }, []);

    return (
        <motion.div
            key="list"
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: -20 }}
            transition={{ duration: 0.3 }}
            className="flex flex-col gap-6"
        >
            {/* フィルタ、ソート */}
            <WorkFilterBar
                category={category}
                setCategory={setCategory}
                sortOrder={sortOrder}
                setSortOrder={setSortOrder}
            />

            {/* WORKS Grid */}
            <motion.div layout className="grid grid-cols-2 gap-x-4 gap-y-8">
                <AnimatePresence mode="popLayout">
                    {filteredWorks.map((work) => (
                        <motion.div
                            key={work.id}
                            ref={work.id === initialId ? targetRef : null}
                            layoutId={`work-${work.id}`}
                            onClick={() => onSelect(work)}
                            // ▼ バリアント調整: ホバー時に親要素としてどう振る舞うか
                            variants={{
                                hidden: { opacity: 0, scale: 0.9 },
                                rest: { opacity: 1, scale: 1 },
                                hover: { scale: 1.02 },
                            }}
                            initial="hidden"
                            animate="rest"
                            exit="hidden"
                            whileHover="hover"
                            whileTap="tap"
                            // ▼ 元の aspect-square を削除し、縦並びレイアウトに変更
                            className="group relative flex cursor-pointer flex-col gap-2"
                        >
                            {/* --- 1. 画像エリア（ここに aspect-square を移動） --- */}
                            <div className="relative aspect-square w-full overflow-hidden rounded-2xl bg-gray-100 shadow-sm">
                                <motion.img
                                    src={work.imageSrc}
                                    alt={work.title}
                                    loading="lazy"
                                    className="absolute inset-0 h-full w-full object-cover"
                                    variants={{
                                        rest: { scale: 1 },
                                        hover: { scale: 1.1 },
                                    }}
                                    transition={{ duration: 0.5 }}
                                />

                                {/* ▼ ホバー時：カテゴリだけ表示するオーバーレイ */}
                                <motion.div
                                    variants={{
                                        rest: { opacity: 0 },
                                        hover: { opacity: 1 },
                                        tap: { scale: 0.95 },
                                    }}
                                    transition={{ duration: 0.3 }}
                                    className="absolute inset-0 flex flex-col items-center justify-center bg-black/40 text-white"
                                >
                                    <p className="text-lg font-bold tracking-wider">
                                        {work.category}
                                    </p>
                                    <p className="text-xs tracking-wider">
                                        {work.type}
                                    </p>
                                </motion.div>
                            </div>

                            {/* --- 2. テキスト表示エリア（画像の下に追加） --- */}
                            <div className="px-1">
                                <h3
                                    // 1. 全体をバッククォートで囲む
                                    className={`truncate text-sm font-bold leading-tight transition-colors md:text-base ${
                                        work.isSecret
                                            ? "text-gray-800 underline group-hover:text-blue-600"
                                            : "text-gray-800 group-hover:text-blue-600"
                                    } `}
                                >
                                    {" "}
                                    {work.title}
                                </h3>
                                <p className="mt-1 font-mono text-xs text-gray-400">
                                    {work.date}
                                </p>
                            </div>
                        </motion.div>
                    ))}
                </AnimatePresence>
            </motion.div>
        </motion.div>
    );
};
