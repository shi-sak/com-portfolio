import icon from "../../assets/icon.jpeg";
import { X_LINK, INS_LINK, BS_LINK } from "../../data/LinkData";

export const Profile = () => {
    return (
        <div className="space-y-4">
            <section>
                <div className="flex gap-4 items-end border-b border-gray-200 pb-4">
                    <div className="flex">
                        <img
                            className="w-16 aspect-square object-cover"
                            src={icon}
                        />

                    </div>
                    <div>
                        <h3 className="text-lg font-bold">仕込む</h3>
                        <p className="text-sm text-gray-400">shicom</p>
                    </div>
                    <span className="px-1 py-1 border rounded-full text-xs">{X_LINK}</span>
                    <span className="px-1 py-1 border rounded-full text-xs">{INS_LINK}</span>
                </div>
                <p className="pt-4">
                    絵や漫画を描きます<br />
                    モノクロの絵が好きです<br />
                    コミティア等のイベントによく出展しています
                </p>
                <div className="bg-gray-50 p-4 rounded-xl text-sm">
                    <h4 className="font-bold mb-2">参加予定イベント👉</h4>
                    <p className="text-gray-400 text-xs ">最新の情報は
                        {X_LINK}
                        をご確認ください</p>
                    <br />

                    <ul className="px-4 list-disc">
                        <li>2026/2/22 COMITIA155 き21a</li>
                    </ul>
                </div>
            </section>
            <section>
                <h3 className="text-xl font-bold mb-4 flex items-center gap-2 pt-4 border-t">
                    PROJECTS
                </h3>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    {/* VTuber Card */}
                    <div className="bg-gray-50 p-4 rounded-xl text-sm">
                        <h4 className="font-bold">見込む(VTuber)</h4>
                        <p className="text-sm text-gray-500 mt-1"></p>
                        <p className="text-sm mt-2"></p>
                    </div>

                    {/* Maid-chan Card */}
                    <div className="bg-gray-50 p-4 rounded-xl text-sm">
                        <h4 className="font-bold">#maid_chan_doing_random_things</h4>
                        <p className="text-sm text-gray-500 mt-1"></p>
                        <p className="text-sm mt-2"></p>
                    </div>
                </div>
            </section>

            {/* 3. 好きなもの */}
            <section>
                <h3 className="text-xl font-bold mb-4 pt-4 border-t">
                    LIKES
                </h3>
                <div className="flex flex-wrap gap-2">
                    <span className="px-3 py-1 border rounded-full text-sm">何が好きなんだ……？</span>
                </div>
            </section>



        </div>
    );
};