// "use client";

// import { Tab, TabGroup, TabList, TabPanels, TabPanel } from "@headlessui/react";
// import OverviewTab from "./OverviewTab";
// import LobbiesTab from "./LobbiesTab";

// export default function Tabs({ tabs }:) {
//   return (
//     <TabGroup>
//       <TabList className="flex gap-6 border-b border-white/10 overflow-x-auto">
//         {tabs.map((tab) => (
//           <Tab key={tab} className="relative py-3 outline-none">
//             {({ selected }) => (
//               <>
//                 <span className={selected ? "text-link" : "text-gray-400"}>
//                   {tab}
//                 </span>

//                 {selected && (
//                   <div className="absolute bottom-0 left-0 w-full h-[2px] bg-link " />
//                 )}
//               </>
//             )}
//           </Tab>
//         ))}
//       </TabList>

//       <TabPanels>
//         <TabPanel>
//           <OverviewTab />
//         </TabPanel>
//         <TabPanel>Teams</TabPanel>
//         <TabPanel>
//           <LobbiesTab />
//         </TabPanel>
//         <TabPanel>Rules</TabPanel>
//       </TabPanels>
//     </TabGroup>
//   );
// }

"use client";

import { useState, ReactNode } from "react";

type TabItem = {
  label: string;
  content: ReactNode;
};

export default function Tabs({ tabs }: { tabs: TabItem[] }) {
  const [activeIndex, setActiveIndex] = useState(0);

  return (
    <div className="flex flex-col">
      {/* Tab List */}
      <div className="border-b border-white/10 overflow-x-auto">
        <div className="flex gap-6 lg:gap-20 min-w-max w-full justify-around lg:justify-start">
          {tabs.map((tab, index) => {
            const isActive = index === activeIndex;

            return (
              <button
                key={tab.label}
                onClick={() => setActiveIndex(index)}
                className="relative py-3 text-base"
              >
                <span className={isActive ? "text-link" : "text-gray-400"}>
                  {tab.label}
                </span>

                {isActive && (
                  <div className="absolute bottom-0 left-0 w-full h-[2px] bg-link rounded-full" />
                )}
              </button>
            );
          })}
        </div>
      </div>

      {/* Tab Content */}
      <div className="mt-4">{tabs[activeIndex].content}</div>
    </div>
  );
}
