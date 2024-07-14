'use client'

import { useEditor, EditorContent } from '@tiptap/react'
import StarterKit from '@tiptap/starter-kit'
import ToolBar from '../ToolBar'
import Underline from '@tiptap/extension-underline'
import Highlight from '@tiptap/extension-highlight'
import Image from '@tiptap/extension-image'
import Placeholder from '@tiptap/extension-placeholder'

const Tiptap = ({onChange,content}:any) => {
  const handleChange = (newContent:string)=>{
    onChange(newContent)
  }
  const editor = useEditor({
    extensions: [StarterKit,Underline,Highlight,Image,Placeholder.configure({
      placeholder:'Start Reflecting'
      
    })],
    content:content,
    editorProps:{
        attributes:{
            class:"flex flex-col  min-h-[30vh] text-white justify-start rounded-lg px-[200px] py-3 gap-3 text-[16px] pt-10 outline-none placeholder:font-Instrument_Serif  "
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
