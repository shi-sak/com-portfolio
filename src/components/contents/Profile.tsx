import icon from "../../assets/icon.jpeg";
import { X_LINK } from "../../data/linkData";

export const Profile = () => {
    return (
        <div className="space-y-4">
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
            </div>
            <p>
                絵や漫画を描きます<br/>
                モノクロの絵が好きです<br/>
                コミティア等のイベントによく出展しています
            </p>
            <div className="bg-gray-50 p-4 rounded-xl text-sm">
                <h4 className="font-bold mb-2">参加予定イベント👉</h4>
                <p className="text-gray-400 text-xs ">最新の情報は
                    {X_LINK}
                    をご確認ください。</p>
                <br/>
        
                <ul className="px-4 list-disc">
                    <li>2026/2/22 COMITIA155 き21a</li>
                </ul>
            </div>
            {/* <div className="flex items-end border-t border-gray-200 pb-4">
                <h4 className="text-lg font-bold p-4">PRODUCT</h4>
                <p>なんか書く</p>

            </div> */}

        </div>
    );
};