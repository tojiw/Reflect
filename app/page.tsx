"use client";
import Sidebar from "@/components/Sidebar";
import { useCallback, useEffect, useRef, useState } from "react";

import Tiptap from "@/components/TipTap/TipTap";

export default function Home() {
  const [content, setContent] = useState<string>("");
  const handleChange = (change: any) => {
    setContent(change);
  };
  return (
    <div className="bg-[#121212] min-h-screen flex flex-row">
      <div className="flex sticky h-screen z-0 bg-[#171717] w-[100px] top-0 left-0">
        <Sidebar />
      </div>
      <div className="flex flex-grow flex-col relative">
        <Tiptap content={content} />
      </div>
    </div>
  );
}
