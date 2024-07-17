import React, { useCallback, useEffect, useState } from "react";
import { Editor, useEditor } from "@tiptap/react";
import {
  Bold,
  Code,
  EyeIcon,
  EyeOff,
  Heading1,
  Highlighter,
  Italic,
  List,
  Quote,
  Redo,
  Strikethrough,
  Trash2,
  Undo,
} from "lucide-react";
import { useToast } from "./ui/use-toast";
import {
  AlertDialog,
  AlertDialogAction,
  AlertDialogCancel,
  AlertDialogContent,
  AlertDialogDescription,
  AlertDialogFooter,
  AlertDialogHeader,
  AlertDialogTitle,
  AlertDialogTrigger,
} from "@/components/ui/alert-dialog";

type Props = {
  editor: Editor | null;
  content: string;
  toggleJournals: () => void;
  DisplayJournals: boolean;
  deleteJournalEntry: () => void;
};

const ToolBar = ({
  editor,
  content,
  toggleJournals,
  DisplayJournals,
  deleteJournalEntry,
}: Props) => {
  const [canUndo, setCanUndo] = useState(false);
  const [canRedo, setCanRedo] = useState(false);

  const { toast } = useToast();

  const ensureBoolean = (value: boolean | undefined): boolean => {
    return value === true;
  };
  useEffect(() => {
    setCanUndo(ensureBoolean(editor?.can().undo()));
    setCanRedo(ensureBoolean(editor?.can().redo()));
  }, [editor]);
  if (!editor) return null;

  return (
    <div className="flex justify-center ">
      <div className="flex flex-row p-3 py-2 max-w-[730px] bg-[#171717] mt-4 mb-4 rounded-[4px] sticky">
        <div className="flex flex-row w-full h-full justify-center flex-wrap bg-[#171717] gap-4 sticky">
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
                editor.chain().focus().toggleHighlight().run();
              }}
              className={`p-2
             ${
               editor.isActive("highlight")
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
              className={`p-2 hover:bg-[#EA580C] hover:text-black hover:transition-all hover:duration-150 rounded-[4px]
             ${
               canUndo
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
              className={`p-2 hover:bg-[#EA580C] hover:text-black hover:transition-all hover:duration-150 rounded-[4px]
             ${
               canRedo
                 ? "bg-[#EA580C] text-black transition-all duration-150 rounded-[4px]"
                 : "text-[#EA580C]"
             }
            `}
            >
              <Redo className=" w-5 h-5" />
            </button>
          </div>

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
          <div className="flex  hover:border-[#5B1F00] hover:border hover:duration-150 border border-[#171717] rounded-[4px] ">
            <button
              onClick={(e) => {
                e.preventDefault();
                toggleJournals();
              }}
              className={`p-2
           ${
             DisplayJournals
               ? "bg-[#EA580C] text-black transition-all duration-150 rounded-[4px]"
               : "text-[#EA580C]"
           }`}
            >
              {DisplayJournals ? <EyeOff size={20} /> : <EyeIcon size={20} />}
            </button>
          </div>

          <div className="flex  hover:border-[#5B1F00] hover:border hover:duration-150 border border-[#171717] rounded-[4px] ">
            <AlertDialog>
              <button
                onClick={(e) => {
                  e.preventDefault();
                  deleteJournalEntry();
                  
                }}
                className={`p-2 
                }`}
              >
                <AlertDialogTrigger>
                  <Trash2 className="w-5 h-5 " color="#EA580C" />
                </AlertDialogTrigger>
                <AlertDialogContent>
                  <AlertDialogHeader>
                    <AlertDialogTitle>
                      Are you absoulutely sure?
                    </AlertDialogTitle>
                    <AlertDialogDescription>
                      This action cannot be undone. This will permanently remove
                      all saved entries from the storage.
                    </AlertDialogDescription>
                  </AlertDialogHeader>
                  <AlertDialogFooter>
                    <AlertDialogCancel>Cancel</AlertDialogCancel>
                    <AlertDialogAction>Continue</AlertDialogAction>
                  </AlertDialogFooter>
                </AlertDialogContent>
              </button>
            </AlertDialog>
          </div>

          {content.trim() !== "" && (
            <button
              className="p-2 text-white hover:bg-[#ea580c] hover:transition-all hover:duration-150 hover:text-black border border-[#5b1f00] rounded-lg text-sm font-semibold"
              type="submit"
              onClick={() => {
                toast({
                  description: "Reflection has been added.",
                });
                console.log("clicked");
              }}
            >
              Add
            </button>
          )}
        </div>
      </div>
    </div>
  );
};

export default ToolBar;
