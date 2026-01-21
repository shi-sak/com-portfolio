import { useState, useMemo, useLayoutEffect, useRef } from "react";
import { motion, AnimatePresence } from "motion/react";

import { WORKS_DATA, WORK_CATEGORY, type Work } from "../../data/WorksData";
import { WorkFilterBar } from "../ui/WorkFilterBar";

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
            <motion.div layout className="grid grid-cols-2 gap-4">
                <AnimatePresence mode="popLayout">
                    {filteredWorks.map((work) => (
                        <motion.div
                            key={work.id}
                            ref={work.id === initialId ? targetRef : null}
                            layoutId={`work-${work.id}`}
                            onClick={() => onSelect(work)}
                            variants={{
                                hidden: { opacity: 0, scale: 0.8 },
                                rest: { opacity: 1, scale: 1 },
                                hover: { scale: 1.02 },
                            }}
                            initial="hidden"
                            animate="rest"
                            exit="hidden"
                            whileHover="hover"
                            whileTap="tap"
                            className="relative aspect-square cursor-pointer overflow-hidden rounded-2xl shadow-sm"
                        >
                            <motion.img
                                src={work.imageSrc}
                                alt={work.title}
                                className="absolute inset-0 h-full w-full object-cover"
                                variants={{
                                    rest: { scale: 1 },
                                    hover: { scale: 1.1 },
                                }}
                                transition={{ duration: 0.5 }}
                            />
                            <motion.div
                                variants={{
                                    rest: { opacity: 0 },
                                    hover: { opacity: 1 },
                                    tap: { scale: 0.95 },
                                }}
                                transition={{ duration: 0.3 }}
                                className="absolute inset-0 flex flex-col items-center justify-center bg-black/60 p-2 text-center text-white"
                            >
                                <motion.div
                                    variants={{
                                        rest: { y: 10, opacity: 0 },
                                        hover: { y: 0, opacity: 1 },
                                    }}
                                >
                                    <p className="font-mono text-xs text-gray-300">
                                        {work.date}
                                    </p>
                                    <p className="text-lg font-bold">
                                        {work.title}
                                    </p>
                                    <p className="text-xs text-gray-300">
                                        {work.category}
                                    </p>
                                </motion.div>
                            </motion.div>
                        </motion.div>
                    ))}
                </AnimatePresence>
            </motion.div>
        </motion.div>
    );
};
