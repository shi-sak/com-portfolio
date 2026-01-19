import { motion } from "motion/react";
import { useMemo } from "react";

import koma1 from "../../assets/bgimages/1.png";
import koma2 from "../../assets/bgimages/2.png";
import koma3 from "../../assets/bgimages/3.png";
import koma4 from "../../assets/bgimages/4.png";
import koma5 from "../../assets/bgimages/5.png";
import koma6 from "../../assets/bgimages/6.png";
import koma7 from "../../assets/bgimages/7.png";
import koma8 from "../../assets/bgimages/8.png";
import koma9 from "../../assets/bgimages/9.png";
import koma10 from "../../assets/bgimages/10.png";
import koma11 from "../../assets/bgimages/11.png";
import koma12 from "../../assets/bgimages/12.png";
import koma13 from "../../assets/bgimages/13.png";
import koma14 from "../../assets/bgimages/14.png";
import koma15 from "../../assets/bgimages/15.png";

// 配列にまとめます
const BG_IMAGES = [
    koma1, koma2, koma3, koma4, koma5,
    koma6, koma7, koma8, koma9, koma10,
    koma11, koma12, koma13, koma14, koma15,
];
// 降らせるコマの数（お好みで増減してください）
const NUM_ITEMS = 15;

// 1つひとつの「コマ」のデータをランダムに作る関数
const generateItems = () => {
    return Array.from({ length: NUM_ITEMS }, (_, i) => ({
        id: i,
        // 画面の横幅(vw)の0%〜100%のどこかから出現
        x: Math.random() * 100,
        // 落ちるスピード（15秒〜35秒かけてゆっくり落ちる）
        duration: Math.random() * 20 + 15,
        // 降り始めるタイミングをずらす（0秒〜15秒の遅延）
        delay: Math.random() * 15,
        // 回転する角度（-360度 〜 +360度でランダムに）
        rotate: Math.random() * 720 - 360,
        // サイズのばらつき（標準の0.8倍〜1.2倍）
        scale: Math.random() * 0.4 + 0.8,

        imageSrc: BG_IMAGES[Math.floor(Math.random() * BG_IMAGES.length)],
    }));
};

export const BackgroundEffect = () => {
    // 毎回ランダム値が変わらないように、最初の1回だけ生成する（useMemo）
    const items = useMemo(() => generateItems(), []);

    return (
        // 背景全体を覆う、操作できないエリア
        <div className="fixed inset-0 pointer-events-none overflow-hidden -z-10">
            {items.map((item) => (
                <motion.div
                    key={item.id}
                    // --- 初期状態 ---
                    initial={{
                        y: "-20vh",  // 画面の上の方に隠しておく
                        x: `${item.x}vw`, // ランダムな横位置
                        opacity: 0,
                        rotate: 0,
                        scale: item.scale // ランダムなサイズ
                    }}
                    // --- アニメーション後 ---
                    animate={{
                        y: "120vh", // 画面の下まで突き抜ける
                        opacity: [0, 1, 1, 0], // フワッと現れて、最後フワッと消える
                        rotate: item.rotate, // ランダムな角度まで回転
                    }}
                    // --- アニメーションの設定 ---
                    transition={{
                        duration: item.duration, // ランダムな時間
                        delay: item.delay,       // ランダムな開始遅延
                        repeat: Infinity,        // 無限ループ！
                        ease: "linear"           // 一定の速度で（自然な落下感）
                    }}
                    // コマの見た目（仮：白い影付きボックス）
                    className="absolute w-24 md:w-32 h-auto shadow-lg rounded-sm overflow-hidden"
                >
                    {/* ここに将来的に画像を入れる */}
                    <img
                        src={item.imageSrc}
                        alt=""
                        className="w-full h-auto opacity-80 monochrome"
                    />
                </motion.div>
            ))}
        </div>
    );
};