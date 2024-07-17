import { Circle } from "lucide-react";
import React, { useEffect, useState } from "react";
import Masonry, { ResponsiveMasonry } from "react-responsive-masonry";

const Journals = () => {
  const [data, setData] = useState<string[]>([]);
  useEffect(() => {
    const existingJournalEntry = localStorage.getItem("journalEntry");
    const journalEntry = existingJournalEntry
      ? JSON.parse(existingJournalEntry)
      : [];
    setData(journalEntry);
  }, []);
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3">
      {/* <ResponsiveMasonry columnsCountBreakPoints={{ 0: 1, 750: 2, 1024: 3 }}> */}
      {/* <Masonry> */}
      {data.map((item: any, index: any) => (
        <div key={index} className="p-3">
          <div className=" font-DM_Sans tracking-tight text-white flex flex-col justify-start p-3 rounded-lg drop-shadow-lg shadow-[inset_0_4px_4px_0_rgba(0,0,0,0.2)] bg-[#141414] ">
            <div className="flex flex-row items-center px-3  ">
              <Circle size={10} color="#EA580C" fill="#EA580C"/>
              <p className="text-[#686868] font-Instrument_Serif text-[20px] tracking-wide p-2 rounded-[4px] w-full">
                Reflection {index + 1}
              </p>
            </div>
            <div
              className=" px-6 py-4 rounded-[4px]"
              dangerouslySetInnerHTML={{ __html: item.content }}
            ></div>
          </div>
        </div>
      ))}
      {/* </Masonry> */}
      {/* </ResponsiveMasonry> */}
    </div>
  );
};

export default Journals;
