import { WORK_CATEGORY } from "../../data/WorksData";

type Props = {
    category: string;
    setCategory: (cat: string) => void;
    sortOrder: "new" | "old";
    setSortOrder: (order: "new" | "old") => void;
};

export const WorkFilterBar = ({
    category,
    setCategory,
    sortOrder,
    setSortOrder,
}: Props) => {
    return (
        <div className="sticky top-0 z-10 -mt-6 mb-4 flex flex-wrap items-center justify-between gap-4 rounded-2xl bg-gray-50/50 px-2 py-2 shadow-sm backdrop-blur-md">
            {/* 1. カテゴリフィルタ */}
            <div className="no-scrollbar flex gap-2 overflow-x-auto">
                {WORK_CATEGORY.map((cat) => (
                    <button
                        key={cat}
                        onClick={() => setCategory(cat)}
                        className={`whitespace-nowrap rounded-full border px-2 py-1 text-sm font-bold transition ${
                            category === cat
                                ? "border-black bg-black text-white"
                                : "border-gray-200 bg-white text-gray-500 hover:border-gray-400"
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
                className="cursor-pointer rounded-lg border border-gray-200 bg-white px-2 py-1 text-sm font-bold text-gray-500 focus:outline-none"
            >
                <option value="new">Newest</option>
                <option value="old">Oldest</option>
            </select>
        </div>
    );
};
