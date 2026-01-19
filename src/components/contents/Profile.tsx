import icon from "../../assets/icon.jpeg";

export const Profile = () => {
    return (
        <div className="space-y-6">
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
                絵や漫画を描きます<br />
                モノクロの絵が好きです
            </p>
            <div className="bg-gray-50 p-4 rounded-xl text-sm">
                <h4 className="font-bold mb-2">👉参加予定イベント</h4>
                <p>2026/2/22 COMITIA155</p>
            </div>
        </div>
    );
};