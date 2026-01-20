import { useState } from "react";
import {AnimatePresence } from "motion/react";

import { WorkList } from "./WorkList";
import { WorkDetail } from "./WorkDetail";
import { type Work } from "../../data/WorksData";

export const Works = () => {
  const [selectedWork, setSelectedWork] = useState<Work | null>(null);

  return (
    <div className="relative min-h-[300px]">
      <AnimatePresence mode="wait">
        
        {!selectedWork ? (
          <WorkList onSelect={setSelectedWork} />
        ) : (
          <WorkDetail 
            work={selectedWork} 
            onClose={() => setSelectedWork(null)} 
          />
        )}

      </AnimatePresence>
    </div>
  );
};