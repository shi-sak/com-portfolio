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
                    <span className="px-2 border rounded-full text-xs">{X_LINK}</span>
                    <span className="px-2 border rounded-full text-xs">{INS_LINK}</span>
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