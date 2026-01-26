import { motion } from "motion/react";
import loadingGif from "../../assets/loading.webp";

export const Loading = () => {
    return (
        <motion.div
            // 画面全体を覆う白い背景
            className="fixed inset-0 z-[9999] flex items-center justify-center bg-white"
            // ★ここが重要！退場アニメーション（幕が上がる動き）
            // y: "-100%" で画面の上外側へスライドします
            exit={{
                y: "-100%",
                transition: { duration: 0.8, ease: [0.76, 0, 0.24, 1] },
            }} // ちょっとリッチなイージングにしてみました
        >
            {/* GIFを表示 */}
            <img
                src={loadingGif}
                alt="Loading..."
                // サイズ調整（必要なら w-32 とか変えてください）
                className="h-auto w-48 md:w-64"
            />
        </motion.div>
    );
};
