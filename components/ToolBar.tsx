import React, { useCallback } from "react";
import { Editor, useEditor } from "@tiptap/react";
import Highlight from "@tiptap/extension-highlight";
import {
  Bold,
  Code,
  Heading1,
  Highlighter,
  Image,
  ImageIcon,
  Italic,
  List,
  ListOrdered,
  Quote,
  Redo,
  Strikethrough,
  UnderlineIcon,
  Undo,
} from "lucide-react";

type Props = {
  editor: Editor | null;
  content: string;
};

const ToolBar = ({ editor, content }: Props) => {
  if (!editor) return null;

  return (
    <div className="flex justify-center">
      <div className="flex flex-row p-3 py-2 max-w-[730px] bg-[#171717] mt-4 mb-4 rounded-[4px]">
        <div className="flex flex-row w-full h-full justify-center flex-wrap bg-[#171717] gap-4">
          <div className="flex hover:border-[#5B1F00] hover:border hover:duration-150 border border-[#171717] rounded-[4px] ">
            <button
              onClick={(e: any) => {
                e.preventDefault();
                editor.chain().focus().toggleBold().run();
              }}
              className={`p-2
             ${
               editor.isActive("bold")
                 ? "bg-[#EA580C] text-black transition-all duration-150 rounded-[4px]"
                 : "text-[#EA580C]"
             }
            `}
            >
              <Bold className=" w-5 h-5" />
            </button>
          </div>
          <div className="flex  hover:border-[#5B1F00] hover:border hover:duration-150 border border-[#171717] rounded-[4px] ">
            <button
              onClick={(e: any) => {
                e.preventDefault();
                editor.chain().focus().toggleItalic().run();
              }}
              className={`p-2
             ${
               editor.isActive("italic")
                 ? "bg-[#EA580C] text-black transition-all duration-150 rounded-[4px]"
                 : "text-[#EA580C]"
             }
            `}
            >
              <Italic className=" w-5 h-5" />
            </button>
          </div>

          <div className="flex  hover:border-[#5B1F00] hover:border hover:duration-150 border border-[#171717] rounded-[4px] ">
            <button
              onClick={(e: any) => {
                e.preventDefault();
                editor.chain().focus().toggleStrike().run();
              }}
              className={`p-2
             ${
               editor.isActive("strike")
                 ? "bg-[#EA580C] text-black transition-all duration-150 rounded-[4px]"
                 : "text-[#EA580C]"
             }
            `}
            >
              <Strikethrough className=" w-5 h-5" />
            </button>
          </div>
          <div className="flex  hover:border-[#5B1F00] hover:border hover:duration-150 border border-[#171717] rounded-[4px] ">
            <button
              onClick={(e: any) => {
                e.preventDefault();
                editor.chain().focus().toggleHeading({ level: 1 }).run();
              }}
              className={`p-2
             ${
               editor.isActive("heading", { level: 1 })
                 ? "bg-[#EA580C] text-black transition-all duration-150 rounded-[4px]"
                 : "text-[#EA580C]"
             }
            `}
            >
              <Heading1 className=" w-5 h-5" />
            </button>
          </div>
          <div className="flex  hover:border-[#5B1F00] hover:border hover:duration-150 border border-[#171717] rounded-[4px] ">
            <button
              onClick={(e: any) => {
                e.preventDefault();
                editor.chain().focus().toggleBulletList().run();
              }}
              className={`p-2
             ${
               editor.isActive("bulletList")
                 ? "bg-[#EA580C] text-black transition-all duration-150 rounded-[4px]"
                 : "text-[#EA580C]"
             }
            `}
            >
              <List className=" w-5 h-5" />
            </button>
          </div>
          <div className="flex  hover:border-[#5B1F00] hover:border hover:duration-150 border border-[#171717] rounded-[4px] ">
            <button
              onClick={(e: any) => {
                e.preventDefault();
                editor
                  .chain()
                  .focus()
                  .toggleHighlight({ color: "orange" })
                  .run();
              }}
              className={`p-2
             ${
               editor.isActive("highlight", { color: "orange" })
                 ? "bg-[#EA580C] text-black transition-all duration-150 rounded-[4px]"
                 : "text-[#EA580C]"
             }
            `}
            >
              {/* Check unsethighlight option */}
              <Highlighter className=" w-5 h-5" />
            </button>
          </div>

          <div className="flex  hover:border-[#5B1F00] hover:border hover:duration-150 border border-[#171717] rounded-[4px] ">
            <button
              onClick={(e: any) => {
                e.preventDefault();
                editor.chain().focus().undo().run();
              }}
              className={`p-2
             ${
               editor.isActive("undo")
                 ? "bg-[#EA580C] text-black transition-all duration-150 rounded-[4px]"
                 : "text-[#EA580C]"
             }
            `}
            >
              <Undo className=" w-5 h-5" />
            </button>
          </div>

          <div className="flex  hover:border-[#5B1F00] hover:border hover:duration-150 border border-[#171717] rounded-[4px] ">
            <button
              onClick={(e: any) => {
                e.preventDefault();
                editor.chain().focus().redo().run();
              }}
              className={`p-2
             ${
               editor.isActive("redo")
                 ? "bg-[#EA580C] text-black transition-all duration-150 rounded-[4px]"
                 : "text-[#EA580C]"
             }
            `}
            >
              <Redo className=" w-5 h-5" />
            </button>
          </div>
          {/* <div className="flex  hover:border-[#5B1F00] hover:border hover:duration-150 border border-[#171717] rounded-[4px] ">
            <button
              className={`p-2
             ${
               editor.isActive("image")
                 ? "bg-[#EA580C] text-black transition-all duration-150 rounded-[4px]"
                 : "text-[#EA580C]"
             }
            `}
            >
              <ImageIcon className=" w-5 h-5" />
            </button>
          </div> */}
          <div className="flex  hover:border-[#5B1F00] hover:border hover:duration-150 border border-[#171717] rounded-[4px] ">
            <button
              onClick={(e) => {
                e.preventDefault();
                editor.chain().focus().toggleCode().run();
              }}
              className={`p-2
           ${
             editor.isActive("code")
               ? "bg-[#EA580C] text-black transition-all duration-150 rounded-[4px]"
               : "text-[#EA580C]"
           }`}
            >
              <Code className="w-5 h-5" />
            </button>
          </div>
          <div className="flex  hover:border-[#5B1F00] hover:border hover:duration-150 border border-[#171717] rounded-[4px] ">
            <button
              onClick={(e) => {
                e.preventDefault();
                editor.chain().focus().setBlockquote().run();
              }}
              className={`p-2
           ${
             editor.isActive("blockquote")
               ? "bg-[#EA580C] text-black transition-all duration-150 rounded-[4px]"
               : "text-[#EA580C]"
           }`}
            >
              <Quote className="w-5 h-5" />
            </button>
          </div>
          {content.trim() !=="" &&(
            <button className="p-2 text-white hover:bg-[#ea580c] hover:transition-all hover:duration-150 hover:text-black border border-[#5b1f00] rounded-lg text-sm font-semibold">
              Add
            </button>
          )}
        </div>
      </div>
    </div>
  );
};

export default ToolBar;
