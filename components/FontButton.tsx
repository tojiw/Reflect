"use client";
import React, { useRef, useState } from "react";
import Tags from "./Tags";
import CircleWord from "./CircleWord"
import Highlight from "./Highlight";
import ImageUpload from "./ImageUpload";

const FontButton = () => {
  const textareaRef = useRef(null);
  const [text, setText] = useState("");
  const handleChange = (e: any) => {
    setText(e.target.value);
  };
  const wordCount = text.trim() === "" ? "0" : text.trim().split(/\s+/).length;

  const [font, setFont] = useState("");
  const handleClick = () => {
    setFont("font-mono");
    console.log("pressed");
  };
  const handleSaveandExport = () => {
    let Text = "";
    if (textareaRef.current) {
      Text = (textareaRef.current as HTMLTextAreaElement).value;
    }
    const blob = new Blob([Text], { type: "text/plain" });
    console.log(blob, Text);
    const url = URL.createObjectURL(blob);
    const link = document.createElement("a");
    link.href = url;
    window.open(link.href);
  };
  return (
    <div className="flex flex-row gap-10">
      <div className="flex items-center flex-col w-[30vw] gap-5">
        <button
          className="p-2 rounded-lg bg-black text-white"
          onClick={handleClick}
        >
          Change Font
        </button>

        <textarea
          name="typeing"
          id=""
          className={`h-[30vh] w-full p-2 ${font} text-lg focus:outline-none`}
          value={text}
          onChange={handleChange}
          ref={textareaRef}
        ></textarea>

        <div className="w-1/2 p-3 rounded-lg bg-black text-white">
          <p className="text-xl flex justify-center">Words: {wordCount}</p>
        </div>
        <button
          className="p-2 rounded-lg text-white bg-black"
          onClick={handleSaveandExport}
        >
          Save and Export
        </button>
      </div>
      <div className="flex flex-col gap-5">
        <Tags/>
        <p className="flex justify-center">this is a funky circle</p>
        <Highlight/>
        <ImageUpload/>
      </div>
    </div>
  );
};

export default FontButton;
