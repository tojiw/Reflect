"use client";

import { useEditor, EditorContent } from "@tiptap/react";
import StarterKit from "@tiptap/starter-kit";
import ToolBar from "../ToolBar";
import Underline from "@tiptap/extension-underline";
import Highlight from "@tiptap/extension-highlight";
import Image from "@tiptap/extension-image";
import Placeholder from "@tiptap/extension-placeholder";

const Tiptap = ({
  onChange,
  content,
  toggleJournals,
  DisplayJournals,
}: any) => {
  const handleChange = (newContent: string) => {
    onChange(newContent);
  };
  const editor = useEditor({
    extensions: [
      StarterKit,
      Underline,
      Highlight,
      Image,
      Placeholder.configure({
        placeholder: "Start Reflecting...",
      }),
    ],
    content: content,
    editorProps: {
      attributes: {
        class:
          "flex flex-col  min-h-[30vh] text-white font-Instrument_Serif justify-start rounded-lg px-[200px] py-3 gap-3 text-[24px] pt-10 outline-none placeholder:font-Instrument_Serif placeholder:text-[24px]  ",
      },
    },
    onUpdate: ({ editor }) => {
      handleChange(editor.getHTML());
    },
  });

  return (
    <div className="w-full px-4">
      <ToolBar
        editor={editor}
        content={content}
        toggleJournals={toggleJournals}
        DisplayJournals={DisplayJournals}
      />
      <EditorContent editor={editor} />
    </div>
  );
};

export default Tiptap;
