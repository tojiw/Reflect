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
      <ResponsiveMasonry columnsCountBreakPoints={{ 0: 1, 750: 2, 1024: 3 }}>
        <Masonry>
          {data.map((item: any, index: any) => (
            <div key={index} className="max-w-6xl mx-auto px-5 py-5">
              <div className=" font-DM_Sans tracking-tight text-white flex flex-col justify-center items-center">
                <p className="text-white font-Instrument_Serif text-[20px] tracking-wide bg-[#5B1F00] p-2 rounded-[4px] w-full text-center">
                  Reflection {index + 1}
                </p>
                <div
                  className="borde border-[#5B1F00] px-6 py-4 rounded-[4px]"
                  dangerouslySetInnerHTML={{ __html: item.content }}
                ></div>
              </div>
            </div>
          ))}
        </Masonry>
      </ResponsiveMasonry>
    </div>
  );
};

export default Journals;
