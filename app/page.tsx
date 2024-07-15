"use client";
import Sidebar from "@/components/Sidebar";
import { useState } from "react";
import { v4 as uuidv4 } from "uuid";
import Tiptap from "@/components/TipTap/TipTap";
import Journals from "@/components/Journals";
import { EyeIcon, EyeOff } from "lucide-react";

export default function Home() {
  const [content, setContent] = useState<string>("");
  const [DisplayJournals, setDisplayJournals] = useState(false);
  const handleSubmit = (e: any) => {
    e.preventDefault();
    const data = {
      content: content,
      id: uuidv4(),
    };

    const existingJournalEntry = localStorage.getItem("journalEntry");
    const newJournalEntry = existingJournalEntry
      ? JSON.parse(existingJournalEntry)
      : [];
    const updatedJournalEntry = [...newJournalEntry, data];
    localStorage.setItem("journalEntry", JSON.stringify(updatedJournalEntry));
    setContent("");
  };
  const toggleJournals = () => {
    setDisplayJournals(!DisplayJournals);
  };

  const handleChange = (change: any) => {
    setContent(change);
  };

  return (
    <div className="bg-[#121212] min-h-screen flex flex-row">
      <div className="flex sticky h-screen flex-shrink-0 z-0 bg-[#171717] w-[100px] top-0 left-0 mr-2 max-sm:hidden">
        <Sidebar />
      </div>
      <div className="flex-grow flex flex-col overflow-hidden">
        <form action="" onSubmit={handleSubmit}>
          <div className="flex-grow  p-4">
            <Tiptap
              content={content}
              onChange={(newContent: string) => handleChange(newContent)}
            />
          </div>
        </form>
        <div className="mt-4">
          <div className="flex justify-center">
            <button
              onClick={toggleJournals}
              className="p-3 border border-[#ea580c]  hover:bg-[#ea580c]  hover:transition-all hover:duration-200 hover:text-black text-white tracking-tight rounded-[4px]"
            >
              {DisplayJournals ? (
                <div className="flex gap-1">
                  <EyeOff className="mr-2" />
                  Hide Reflections
                </div>
              ) : (
                <div className="flex gap-1">
                  <EyeIcon className="mr-2" />
                  Show Reflections
                </div>
              )}
            </button>
          </div>
          {DisplayJournals && <Journals />}
        </div>
      </div>
    </div>
  );
}
