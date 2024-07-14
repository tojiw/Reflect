'use client'

import { useEditor, EditorContent } from '@tiptap/react'
import StarterKit from '@tiptap/starter-kit'
import ToolBar from '../ToolBar'
import Underline from '@tiptap/extension-underline'
import Highlight from '@tiptap/extension-highlight'
import Image from '@tiptap/extension-image'

const Tiptap = ({onChange,content}:any) => {
  const handleChange = (newContent:string)=>{
    onChange(newContent)
  }
  const editor = useEditor({
    extensions: [StarterKit,Underline,Highlight,Image],
    content:content,
    editorProps:{
        attributes:{
            class:"flex flex-col w-full border border-[#5B1F00] text-white justify-start rounded-lg px-4 py-3 gap-3 text-[16px] pt-4 outline-none  "
        }
    },
    onUpdate:({editor})=>{
      handleChange(editor.getHTML())
    }
  })

  return(
    <div className='w-full px-4'>
        <ToolBar editor={editor} content={content}/>
        <EditorContent editor={editor} />
    </div>
  )
}

export default Tiptap
