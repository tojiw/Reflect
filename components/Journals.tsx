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
    <div>
      {data.map((item: any, index: any) => (
        <ResponsiveMasonry
          columnsCountBreakPoints={{ 0: 1, 750: 2, 1024: 3 }}
        >
          <Masonry>
            <div key={index} className="max-w-6xl mx-auto px-5">
              <div className="text-lg font-Instrument_Serif text-[#EA580C]">
                Reflection {index + 1}
                <div className="border border-[#EA580C] px-6 py-4 rounded-[4px]" 
                dangerouslySetInnerHTML={{__html:item.content}}>

                </div>
              </div>
            </div>
          </Masonry>
        </ResponsiveMasonry>
      ))}
    </div>
  );
};

export default Journals;
