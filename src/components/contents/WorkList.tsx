import { useState, useMemo, useLayoutEffect, useRef } from "react";
import { motion, AnimatePresence } from "motion/react";
import { WORKS_DATA, WORK_CATEGORY, type Work } from "../../data/WorksData";

type Props = {
    onSelect: (work: Work) => void;
    initialId: number | null;
};

export const WorkList = ({ onSelect, initialId }: Props) => {

    const [category, setCategory] = useState(WORK_CATEGORY[0]);
    const [sortOrder, setSortOrder] = useState<"new" | "old">("new");

    const filteredWorks = useMemo(() => {
        let works = [...WORKS_DATA];
        if (category !== WORK_CATEGORY[0]) {
            works = works.filter((work) => work.category === category);
        }
        works.sort((a, b) => {
            return sortOrder === "new" ? b.id - a.id : a.id - b.id;
        });
        return works;
    }, [category, sortOrder]);

    const targetRef = useRef<HTMLDivElement>(null);
    useLayoutEffect(() => {
        if (targetRef.current) {
            targetRef.current.scrollIntoView({ behavior: "instant", block: "center" });
        }
    }, []);

    return (
        <motion.div
            key="list" // AnimatePresence用に必須
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: -20 }}
            transition={{ duration: 0.3 }}
            className="flex flex-col gap-6"
        >
            {/* 操作エリア */}
            <div className="
                                flex flex-wrap items-center justify-between gap-4 
                                sticky top-0 z-10 
                                bg-gray-50/50 backdrop-blur-md 
                                py-2 px-2 rounded-2xl 
                                -mt-6 mb-4 shadow-sm 
                        ">
                {/* 1. カテゴリフィルタ */}
                <div className="flex gap-2 overflow-x-auto no-scrollbar">
                    {WORK_CATEGORY.map((cat) => (
                        <button
                            key={cat}
                            onClick={() => setCategory(cat)}
                            className={`px-2 py-1 rounded-full text-sm font-bold transition whitespace-nowrap border ${category === cat
                                ? "bg-black text-white border-black"
                                : "bg-white text-gray-500 border-gray-200 hover:border-gray-400"
                                }`}
                        >
                            {cat}
                        </button>
                    ))}
                </div>

                {/* 2. ソート切り替え */}
                <select
                    value={sortOrder}
                    onChange={(e) => setSortOrder(e.target.value as "new" | "old")}
                    className="px-2 py-1 rounded-lg border border-gray-200 text-sm bg-white focus:outline-none cursor-pointer"
                >
                    <option value="new">Newest</option>
                    <option value="old">Oldest</option>
                </select>
            </div>

            {/* WORKS */}
            <motion.div layout className="grid grid-cols-2 gap-4">
                <AnimatePresence mode="popLayout">
                    {filteredWorks.map((work) => (
                        <motion.div
                            key={work.id}

                            ref={work.id === initialId ? targetRef : null}

                            layoutId={`work-${work.id}`}
                            onClick={() => onSelect(work)}

                            variants={{
                                hidden: { opacity: 0, scale: 0.8 }, // 出現前 & 消える時
                                rest: { opacity: 1, scale: 1 },     // 通常時（ホバーしてない時）
                                hover: { scale: 1.02 }              // ホバーした時（カード自体も少し拡大）
                            }}

                            initial="hidden"      // 最初は hidden
                            animate="rest"        // 登場したら rest になる（これでオーバーレイに rest が伝わります！）
                            exit="hidden"         // 消える時は hidden
                            whileHover="hover"    // ホバー時は hover
                            whileTap="tap"
                            className="relative aspect-square rounded-2xl cursor-pointer overflow-hidden shadow-sm"
                        >
                            {/* ... 画像 ... */}
                            <motion.img
                                src={work.imageSrc}
                                alt={work.title}
                                className="absolute inset-0 w-full h-full object-cover"
                                variants={{
                                    rest: { scale: 1 },
                                    hover: { scale: 1.1 },
                                }}
                                transition={{ duration: 0.5 }}
                            />
                            {/* ... オーバーレイ部分 ... */}
                            <motion.div
                                variants={{
                                    rest: { opacity: 0 },
                                    hover: { opacity: 1 },
                                    tap: { scale: 0.95 }
                                }}
                                transition={{ duration: 0.3 }}
                                className="absolute inset-0 bg-black/60 flex flex-col items-center justify-center text-white p-2 text-center"
                            >
                                <motion.div
                                    variants={{
                                        rest: { y: 10, opacity: 0 },
                                        hover: { y: 0, opacity: 1 }
                                    }}
                                >
                                    <p className="font-mono text-xs text-gray-300">{work.date}</p>
                                    <p className="font-bold text-lg">{work.title}</p>
                                    <p className="text-xs text-gray-300">{work.category}</p>
                                </motion.div>
                            </motion.div>

                        </motion.div>
                    ))}
                </AnimatePresence>
            </motion.div>
        </motion.div>
    );
};