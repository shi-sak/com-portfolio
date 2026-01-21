import { useState } from "react";
import { AnimatePresence } from "motion/react";

import { useWorkRouter } from "../../hooks/useWorkRouter";

import { WorkList } from "./WorkList";
import { WorkDetail } from "./WorkDetail";
import { WORKS_DATA } from "../../data/WorksData";

export const Works = () => {
    const { currentId, openWork, closeWork } = useWorkRouter();

    const selectedWork = WORKS_DATA.find((w) => w.id === currentId) || null;

    const [lastId, setLastId] = useState<number | null>(null);
    return (
        <div className="relative min-h-[300px]">
            <AnimatePresence mode="wait">
                {!selectedWork ? (
                    <WorkList
                        onSelect={(work) => {
                            openWork(work.id);
                            setLastId(work.id);
                        }}
                        initialId={lastId}
                    />
                ) : (
                    <WorkDetail work={selectedWork} onClose={closeWork} />
                )}
            </AnimatePresence>
        </div>
    );
};
