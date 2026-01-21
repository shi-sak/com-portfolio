import { WORK_CATEGORY } from "../../data/WorksData";

type Props = {
    category: string;
    setCategory: (cat: string) => void;
    sortOrder: "new" | "old";
    setSortOrder: (order: "new" | "old") => void;
};

export const WorkFilterBar = ({ category, setCategory, sortOrder, setSortOrder }: Props) => {
    return (
        <div className="
            flex flex-wrap items-center justify-between gap-4 
            sticky top-0 z-10 
            bg-gray-50/50 backdrop-blur-md 
            py-2 px-2 rounded-2xl 
            -mt-6 mb-4 shadow-sm 
        ">
            {/* 1. カテゴリフィルタ */}
            <div className="flex gap-2 overflow-x-auto no-scrollbar">
                {WORK_CATEGORY.map((cat) => (
                    <button
                        key={cat}
                        onClick={() => setCategory(cat)}
                        className={`px-2 py-1 rounded-full text-sm font-bold transition whitespace-nowrap border ${
                            category === cat
                                ? "bg-black text-white border-black"
                                : "bg-white text-gray-500 border-gray-200 hover:border-gray-400"
                        }`}
                    >
                        {cat}
                    </button>
                ))}
            </div>

            {/* 2. ソート切り替え */}
            <select
                value={sortOrder}
                onChange={(e) => setSortOrder(e.target.value as "new" | "old")}
                className="px-2 py-1 text-gray-500 font-bold rounded-lg border border-gray-200 text-sm bg-white focus:outline-none cursor-pointer"
            >
                <option value="new">Newest</option>
                <option value="old">Oldest</option>
            </select>
        </div>
    );
};