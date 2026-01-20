import { motion } from "motion/react";
import { ArrowLeft } from "lucide-react";
import type { Work } from "../../data/WorksData";

type Props = {
    work: Work;
    onClose: () => void;
};

export const WorkDetail = ({ work, onClose }: Props) => {
    return (
        <motion.div
            key="detail"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.3 }}
            className="flex flex-col h-full gap-6" // gap-6を入れて少し余白を整えました
        >
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
                    layoutId={`work-${work.id}`} // これをつけるとリストから画像がビューンと飛んできます（お好みで！）
                    src={work.imageSrc}
                    alt={work.title}
                    className="aspect-video w-full rounded-2xl object-cover object-center shadow-sm"
                />

                {/* テキスト情報 */}
                <div>
                    <h3 className="text-2xl font-bold mb-2">{work.title}</h3>
                    <span className="text-xs font-bold text-white bg-black px-2 py-1 rounded-md self-start">
                        {work.category}
                    </span>
                    <p className="pt-2 text-gray-600 leading-relaxed">
                        {work.description}
                    </p>
                </div>
            </div>
        </motion.div>
    );
};