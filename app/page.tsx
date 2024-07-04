"use client";
import FontButton from "@/components/FontButton";
import Sidebar from "@/components/Sidebar";
import Image from "next/image";
import { useEffect, useRef } from "react";

export default function Home() {
  const textareaRef = useRef<HTMLTextAreaElement>(null);
  useEffect(() => {
    const textarea = textareaRef.current;
    if (textarea) {
      const heightAdjust = () => {
        textarea.style.height = "auto";
        textarea.style.height = `${textarea.scrollHeight}px`;
      };
      textarea.addEventListener("input", heightAdjust);
      return () => {
        textarea.removeEventListener("input", heightAdjust);
      };
    }
  }, []);
  return (
    <div className="bg-[#121212] min-h-screen flex flex-row">
      <div className="flex sticky h-screen z-0 bg-[#171717] w-[100px] top-0 left-0">
        <Sidebar />
      </div>
      <div className="flex flex-grow flex-col relative">
        <div className="overflow-y-auto h-[70vh] flex rounded-lg m-5 no-sc">
          <textarea
            name="type"
            id=""
            placeholder="Start Reflecting..."
            className="resize-none w-full  p-5 bg-[#121212] border border-[#5B1F00] outline-none rounded-lg text-white font-DM_sans tracking-tight placeholder:text-[#686868] placeholder:font-Instrument-Serif placeholder:text-xl placeholder:tracking-normal no-scrollbar"
          ></textarea>
          <div className="flex sitcky justify-center absolute bottom-20 left-0 right-0">
            <div className=" w-[450px] h-[50px] bg-[#171717] rounded-sm sticky "></div>
          </div>
        </div>
      </div>
    </div>
  );
}
