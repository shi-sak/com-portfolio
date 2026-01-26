import { useState } from "react";
import { motion, AnimatePresence } from "motion/react";
import { createPortal } from "react-dom";
import icon from "../../assets/icon.webp";
import {
    X_LINK,
    INS_LINK,
    MICOM_LINK,
    SHIKUMI_LINK,
    MUSIC_LINK,
} from "../../data/LinkData";
import { useSecret } from "../../contexts/SecretContext";

//sample画像一覧
const illustModules = import.meta.glob(
    "../../assets/sampleillusts/*.{png,jpg,jpeg,webp}",
    {
        eager: true,
        import: "default",
    },
);
const illustImages = Object.values(illustModules) as string[];

export const Profile = () => {
    const [selectedImage, setSelectedImage] = useState<string | null>(null);
    const { isSecretMode } = useSecret();

    return (
        <div className="space-y-4">
            <section>
                <div className="flex flex-wrap items-end justify-between gap-x-4 gap-y-3 border-b border-gray-200 pb-4">
                    {/* グループ1：アイコンと名前（ここは絶対に横並び死守） */}
                    <div className="flex items-center gap-3">
                        <img
                            className="aspect-square h-14 w-14 rounded-full object-cover md:h-16 md:w-16" // 少し小さく調整
                            src={icon}
                            alt="icon"
                        />
                        <div>
                            <h3 className="text-lg font-bold leading-tight">
                                仕込む
                            </h3>
                            <p className="text-sm text-gray-400">shicom</p>
                        </div>
                    </div>

                    {/* グループ2：SNSリンク（幅が狭いとこのグループごと下に落ちる） */}
                    <div className="flex gap-2">
                        <span className="cursor-pointer rounded-full border border-gray-300 px-3 py-1 text-xs transition-colors hover:bg-black hover:text-white">
                            {X_LINK}
                        </span>
                        <span className="cursor-pointer rounded-full border border-gray-300 px-3 py-1 text-xs transition-colors hover:bg-black hover:text-white">
                            {INS_LINK}
                        </span>
                    </div>
                </div>
                <p className="pl-4 pt-4 text-gray-500">
                    絵や漫画を描きます
                    <br />
                    モノクロの絵が好きです
                    <br />
                    コミティア等のイベントによく出展しています
                </p>
                <div className="rounded-xl bg-gray-50 p-4 text-sm">
                    <h4 className="mb-2 font-bold">👉参加予定イベント</h4>
                    <p className="text-xs text-gray-400">
                        最新の情報は
                        <span className="underline">{X_LINK}</span>
                        をご確認ください
                    </p>

                    <ul className="list-disc px-4 pt-4">
                        <li>2026/2/22 COMITIA155 き21a</li>
                    </ul>
                </div>
            </section>
            {/* Project */}
            <section>
                <h3 className="mb-4 flex items-center gap-2 border-t pt-4 text-xl font-bold">
                    PROJECTS
                </h3>
                <div className="flex flex-col gap-4">
                    <div className="rounded-xl bg-gray-50 p-4 text-sm">
                        <h4 className="font-bold">仕込みコンプレッサー</h4>
                        <p className="mt-1 text-sm text-gray-500">
                            サークル『仕込みコンプレッサー』にて
                            <br />
                            同人イベント(主にコミティア)に参加しています
                        </p>
                    </div>

                    <div className="rounded-xl bg-gray-50 p-4 text-sm">
                        <h4 className="font-bold">見込む(VTuber)</h4>
                        <p className="mt-1 text-sm text-gray-500">
                            VTuberの見込むちゃんの運営をしています
                        </p>
                        <p className="mt-1 text-sm text-gray-500">
                            {MICOM_LINK}
                        </p>
                    </div>

                    <div className="rounded-xl bg-gray-50 p-4 text-sm">
                        <h4 className="font-bold">
                            #maid_chan_doing_random_things
                        </h4>
                        <p className="mt-1 text-sm text-gray-500">
                            X(Twitter)でたまに更新しているイラストシリーズです
                        </p>
                        <p className="mt-1 text-sm text-gray-500">
                            <a
                                target="_blank"
                                rel="noopener noreferrer"
                                href="https://x.com/search?q=%23maid_chan_doing_random_things%20from%3Acom_shicom"
                                className="underline"
                            >
                                X(Twitter)タグ
                            </a>
                        </p>
                    </div>

                    {/* 以下、隠しコマンドで表示 */}
                    {isSecretMode && (
                        <>
                            <div className="animate-pulse-slow rounded-xl border bg-gray-700 p-4 text-sm text-gray-300 shadow-inner">
                                <h4 className="flex items-center gap-2 font-bold">
                                    仕組み
                                </h4>
                                <p className="mt-1 text-sm text-gray-400">
                                    成人向けのお仕事等をこの名義で行っています
                                </p>
                                <p className="mt-1 text-sm text-gray-400">
                                    {SHIKUMI_LINK}
                                </p>
                            </div>

                            <div className="animate-pulse-slow rounded-xl border bg-gray-700 p-4 text-sm text-gray-300 shadow-inner">
                                <h4 className="flex items-center gap-2 font-bold">
                                    Shion Sakamoto
                                </h4>
                                <p className="mt-1 text-sm text-gray-400">
                                    こっそりやってる音楽名義です
                                </p>
                                <p className="mt-1 text-sm text-gray-400">
                                    {MUSIC_LINK}
                                </p>
                            </div>
                        </>
                    )}
                    <p className="mt-1 text-sm text-gray-500">　etc...</p>
                </div>
            </section>

            {/* Likes */}
            <section>
                <h3 className="mb-4 border-t pt-4 text-xl font-bold">LIKES</h3>
                <div className="flex flex-wrap gap-2">
                    <span className="rounded-full border px-3 py-1 text-sm">
                        📚COMIC
                    </span>
                    <span className="rounded-full border px-3 py-1 text-sm">
                        🎶MUSIC
                    </span>
                    <span className="rounded-full border px-3 py-1 text-sm">
                        🎮e-Sports
                    </span>
                    <span className="rounded-full border px-3 py-1 text-sm">
                        🍺DRINK
                    </span>
                    <span className="rounded-full border px-3 py-1 text-sm">
                        🍜RA-MEN
                    </span>
                    <span className="rounded-full border px-3 py-1 text-sm">
                        🏃RUNNING
                    </span>
                    <span className="rounded-full border px-3 py-1 text-sm">
                        🖥WEB
                    </span>
                    <span className="rounded-full border px-3 py-1 text-sm">
                        etc...
                    </span>
                </div>
            </section>

            {/* おすすめイラスト */}
            <section>
                <h3 className="border-t py-4 text-xl font-bold">
                    ILLUST SAMPLE
                </h3>

                <div className="columns-2 gap-3 space-y-3 md:columns-3">
                    {illustImages.map((src, index) => (
                        <div key={index} className="break-inside-avoid">
                            <motion.img
                                src={src}
                                alt={`illustration-${index}`}
                                loading="lazy"
                                className="w-full cursor-pointer cursor-zoom-in rounded-lg object-cover transition-opacity hover:opacity-90"
                                onClick={() => setSelectedImage(src)}
                                layoutId={`illust-${src}`}
                            />
                        </div>
                    ))}
                </div>

                <p className="pt-4 text-sm text-gray-500">
                    <span className="underline">{X_LINK}</span>
                    等、各種SNSにて随時イラストをアップしています
                </p>
            </section>

            {createPortal(
                <AnimatePresence>
                    {selectedImage && (
                        <motion.div
                            initial={{ opacity: 0 }}
                            animate={{ opacity: 1 }}
                            exit={{ opacity: 0 }}
                            // z-50 だとナビゲーション(z-50)と戦う可能性があるので、最強の z-[9999] にする
                            className="fixed inset-0 z-[9999] flex items-center justify-center bg-black/90 p-4"
                            onClick={() => setSelectedImage(null)}
                        >
                            <motion.img
                                src={selectedImage}
                                layoutId={`illust-${selectedImage}`}
                                initial={{ scale: 0.8 }}
                                animate={{ scale: 1 }}
                                exit={{ scale: 0.8 }}
                                className="max-h-full max-w-full rounded-md object-contain shadow-2xl"
                                onClick={(e) => e.stopPropagation()}
                            />

                            <button
                                className="absolute right-4 top-4 rounded-full bg-black/50 p-2 text-white transition-colors hover:bg-black/70"
                                onClick={() => setSelectedImage(null)}
                            >
                                ✕
                            </button>
                        </motion.div>
                    )}
                </AnimatePresence>,
                document.body, // ← 「bodyタグの直下に描画して！」という指定
            )}
        </div>
    );
};
