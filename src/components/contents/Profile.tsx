import icon from "../../assets/icon.jpeg";
import { X_LINK, INS_LINK, MICOM_LINK } from "../../data/LinkData";

export const Profile = () => {
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
                <h3 className="border-t pt-4 text-xl font-bold">
                    ILLUST SAMPLE
                </h3>
                (ここにイラストを何枚か貼る)
                <p className="pt-4 text-sm text-gray-500">
                    <span className="underline">{X_LINK}</span>
                    等、各種SNSにて随時イラストをアップしています
                </p>
            </section>
        </div>
    );
};
