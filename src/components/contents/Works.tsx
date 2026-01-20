import { useState } from "react";
import { motion, AnimatePresence } from "motion/react";
import { ArrowLeft } from "lucide-react"; // 戻るボタンのアイコン

import { WORKS_DATA, type Work } from "../../data/WorksData";

export const Works = () => {
    // --- 2. 状態管理: 選ばれた作品を入れる箱 (nullなら一覧表示) ---
    const [selectedWork, setSelectedWork] = useState<Work | null>(null);

    return (
        <div className="relative min-h-[300px]">
            <AnimatePresence mode="wait">

                {!selectedWork ? (
                    <motion.div
                        key="list"
                        initial={{ opacity: 0, x: -20 }}
                        animate={{ opacity: 1, x: 0 }}
                        exit={{ opacity: 0, x: -20 }}
                        transition={{ duration: 0.3 }}
                        className="grid grid-cols-2 gap-4"
                    >
                        {WORKS_DATA.map((work) => (
                            <motion.div
                                key={work.id}
                                layoutId={`work-${work.id}`}
                                onClick={() => setSelectedWork(work)}

                                initial="rest"      
                                whileHover="hover"   
                                whileTap="tap"       
                                animate="rest"

                                className={`
                                relative aspect-square rounded-2xl cursor-pointer overflow-hidden
                                `}
                            >
                                {/* --- 画像 --- */}
                                <motion.img
                                src={work.imageSrc}
                                alt={work.title}
                                className="absolute inset-0 w-full h-full object-cover"
                                variants={{
                                    rest: { scale: 1 },
                                    hover: { scale: 1.1 }, // ホバーで少し拡大する演出
                                }}
                                transition={{ duration: 0.5 }}
                                />

                                {/* --- オーバーレイ（文字部分） --- */}
                                <motion.div
                                    /* 親の whileHover に連動して動く設定 */
                                    variants={{
                                        rest: { opacity: 0 },
                                        hover: { opacity: 1 },
                                        tap: { scale: 0.95 } // クリック時はちょっと凹む演出
                                    }}
                                    transition={{ duration: 0.3 }} // フワッと出る速度

                                    className="absolute inset-0 bg-black/60 flex flex-col items-center justify-center text-white p-2 text-center"
                                >
                                    {/* 文字も少し浮き上がる動きをつける */}
                                    <motion.div
                                        variants={{
                                            rest: { y: 10, opacity: 0 },
                                            hover: { y: 0, opacity: 1 }
                                        }}
                                    >
                                        <p className="font-bold text-lg">{work.title}</p>
                                        <p className="text-xs text-gray-300">{work.category}</p>
                                    </motion.div>
                                </motion.div>
                            </motion.div>
                        ))}
                    </motion.div>
                ) : (

                    /* パターンB: 作品を選んだ時（詳細表示） */
                    <motion.div
                        key="detail"
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        exit={{ opacity: 0 }}
                        transition={{ duration: 0.3 }}
                        className="flex flex-col h-full"
                    >
                        {/* 戻るボタン */}
                        <button
                            onClick={() => setSelectedWork(null)}
                            className="self-start flex items-center text-sm font-bold text-gray-400 hover:text-black mb-4 transition-colors"
                        >
                            <ArrowLeft size={16} className="mr-1" /> BACK
                        </button>

                        {/* 詳細コンテンツ */}

                            <motion.img 
                                src={selectedWork.imageSrc}
                                alt={selectedWork.title} 
                                className="aspect-video w-full h-full object-cover object-center"
                            />

                        <h3 className="text-2xl font-bold mb-2">{selectedWork.title}</h3>
                        <span className="text-xs font-bold text-white bg-black px-2 py-1 rounded-md self-start mb-4">
                            {selectedWork.category}
                        </span>
                        <p className="text-gray-600 leading-relaxed">
                            {selectedWork.description}
                        </p>
                    </motion.div>
                )}

            </AnimatePresence>
        </div>
    );
};