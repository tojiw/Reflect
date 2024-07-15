"use client";
import Sidebar from "@/components/Sidebar";
import { useCallback, useEffect, useRef, useState } from "react";
import {v4 as uuidv4} from "uuid"
import Tiptap from "@/components/TipTap/TipTap";
import Journals from "@/components/Journals";

export default function Home() {
  const [content, setContent] = useState<string>("");
  const handleSubmit = (e:any)=>{
    e.preventDefault()
    const data={
      content:content,
      id:uuidv4()
    }

    const existingJournalEntry = localStorage.getItem("journalEntry")
    const newJournalEntry = existingJournalEntry?JSON.parse(existingJournalEntry):[]
    const updatedJournalEntry = [...newJournalEntry,data]
    localStorage.setItem("journalEntry", JSON.stringify(updatedJournalEntry))
    setContent("")
  }
  const handleChange = (change: any) => {
    setContent(change);
  };
  return (
    <div className="bg-[#121212] min-h-screen flex flex-row">
      <div className="flex sticky h-screen flex-shrink-0 z-0 bg-[#171717] w-[100px] top-0 left-0 mr-2 max-sm:hidden">
        <Sidebar />
      </div>
      <form onSubmit={handleSubmit} className="w-full">
        <div className="flex flex-grow flex-col mx-5">
          <Tiptap
            content={content}
            onChange={(newContent: string) => handleChange(newContent)}
          />
          <Journals/>
        </div>
      </form>
    </div>
  );
}
