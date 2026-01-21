import icon from "../../assets/icon.jpeg";
import { X_LINK, INS_LINK, MICOM_LINK } from "../../data/LinkData";

export const Profile = () => {
    return (
        <div className="space-y-4">
            <section>
                <div className="flex flex-wrap items-end justify-between border-b border-gray-200 pb-4 gap-x-4 gap-y-3">

                    {/* グループ1：アイコンと名前（ここは絶対に横並び死守） */}
                    <div className="flex items-center gap-3">
                        <img
                            className="w-14 h-14 md:w-16 md:h-16 aspect-square object-cover rounded-full" // 少し小さく調整
                            src={icon}
                            alt="icon"
                        />
                        <div>
                            <h3 className="text-lg font-bold leading-tight">仕込む</h3>
                            <p className="text-sm text-gray-400">shicom</p>
                        </div>
                    </div>

                    {/* グループ2：SNSリンク（幅が狭いとこのグループごと下に落ちる） */}
                    <div className="flex gap-2">
                        <span className="px-3 py-1 border border-gray-300 rounded-full text-xs hover:bg-black hover:text-white transition-colors cursor-pointer">
                            {X_LINK}
                        </span>
                        <span className="px-3 py-1 border border-gray-300 rounded-full text-xs hover:bg-black hover:text-white transition-colors cursor-pointer">
                            {INS_LINK}
                        </span>
                    </div>

                </div>
                <p className="pt-4 pl-4 text-gray-500">
                    絵や漫画を描きます<br />
                    モノクロの絵が好きです<br />
                    コミティア等のイベントによく出展しています
                </p>
                <div className="bg-gray-50 p-4 rounded-xl text-sm">
                    <h4 className="font-bold mb-2">👉参加予定イベント</h4>
                    <p className="text-gray-400 text-xs ">最新の情報は
                        <span className="underline">{X_LINK}</span>
                        をご確認ください</p>

                    <ul className="px-4 pt-4 list-disc">
                        <li>2026/2/22 COMITIA155 き21a</li>
                    </ul>
                </div>
            </section>
            {/* Project */}
            <section>
                <h3 className="text-xl font-bold mb-4 flex items-center gap-2 pt-4 border-t">
                    PROJECTS
                </h3>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">

                    <div className="bg-gray-50 p-4 rounded-xl text-sm">
                        <h4 className="font-bold">仕込みコンプレッサー</h4>
                        <p className="text-sm text-gray-500 mt-1">サークル『仕込みコンプレッサー』にて<br />同人イベント(主にコミティア)に参加しています</p>
                    </div>

                    <div className="bg-gray-50 p-4 rounded-xl text-sm">
                        <h4 className="font-bold">見込む(VTuber)</h4>
                        <p className="text-sm text-gray-500 mt-1">VTuberの見込むちゃんの運営をしています</p>
                        <p className="text-sm text-gray-500 mt-1" >{MICOM_LINK}</p>
                    </div>

                    <div className="bg-gray-50 p-4 rounded-xl text-sm">
                        <h4 className="font-bold">#maid_chan_doing_random_things</h4>
                        <p className="text-sm text-gray-500 mt-1">X(Twitter)でたまに更新しているイラストシリーズです</p>
                        <p className="text-sm text-gray-500 mt-1">
                            <a
                                target="_blank"
                                rel="noopener noreferrer"
                                href="https://x.com/hashtag/maid_chan_doing_random_things"
                                className="underline"
                            >
                                X(Twitter)タグ
                            </a>
                        </p>
                    </div>
                    <p className="text-sm text-gray-500 mt-1">　etc...</p>
                </div>

            </section>

            {/* Likes */}
            <section>
                <h3 className="text-xl font-bold mb-4 pt-4 border-t">
                    LIKES
                </h3>
                <div className="flex flex-wrap gap-2">
                    <span className="px-3 py-1 border rounded-full text-sm">📚COMIC</span>
                    <span className="px-3 py-1 border rounded-full text-sm">🎶MUSIC</span>
                    <span className="px-3 py-1 border rounded-full text-sm">🎮e-Sports</span>
                    <span className="px-3 py-1 border rounded-full text-sm">🍺DRINK</span>
                    <span className="px-3 py-1 border rounded-full text-sm">🍜RA-MEN</span>
                    <span className="px-3 py-1 border rounded-full text-sm">🏃RUNNING</span>
                    <span className="px-3 py-1 border rounded-full text-sm">🖥WEB</span>
                    <span className="px-3 py-1 border rounded-full text-sm">etc...</span>
                </div>
            </section>

            {/* おすすめイラスト */}
            <section>
                <h3 className="text-xl font-bold pt-4 border-t">
                    ILLUST SAMPLE
                </h3>

                (ここにイラストを何枚か貼る)

                <p className="pt-4 text-gray-500 text-sm">
                    <span className="underline">{X_LINK}</span>
                    等、各種SNSにて随時イラストをアップしています
                </p>
            </section>
        </div>
    );
};