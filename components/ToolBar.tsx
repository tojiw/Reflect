import React from "react";
import { Editor, useEditor } from "@tiptap/react";
import Highlight from "@tiptap/extension-highlight";
import {
  Bold,
  Heading2,
  Highlighter,
  Image,
  ImageIcon,
  Italic,
  List,
  ListOrdered,
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
  const addImage = () => {
    const url = window.prompt("Enter a URL");
    if (url) {
      // editor.chain().focus().setImage({src:url}).run()
    }
  };
  return (
    <div className="flex justify-center">
      <div className="flex flex-row p-3 max-w-[530px] bg-[#171717] mt-4 mb-4 rounded-[4px]">
        <div className="flex flex-row w-full h-full justify-center flex-wrap bg-[#171717] gap-5">
          <div className="flex border-[#5B1F00] border rounded-[4px] ">
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
          <div className="flex border-[#5B1F00] border rounded-[4px] ">
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

          <div className="flex border-[#5B1F00] border rounded-[4px] ">
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
          <div className="flex border-[#5B1F00] border rounded-[4px] ">
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
              <Heading2 className=" w-5 h-5" />
            </button>
          </div>
          <div className="flex border-[#5B1F00] border rounded-[4px] ">
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
          <div className="flex border-[#5B1F00] border rounded-[4px] ">
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

          <div className="flex border-[#5B1F00] border rounded-[4px] ">
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

          <div className="flex border-[#5B1F00] border rounded-[4px] ">
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
          <div className="flex border-[#5B1F00] border rounded-[4px] ">
            <button
              onClick={addImage}
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
          </div>
        </div>
      </div>
    </div>
  );
};

export default ToolBar;
