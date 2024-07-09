'use client'

import { useEditor, EditorContent } from '@tiptap/react'
import StarterKit from '@tiptap/starter-kit'
import ToolBar from '../ToolBar'
import Underline from '@tiptap/extension-underline'
import Highlight from '@tiptap/extension-highlight'

const Tiptap = () => {
  const editor = useEditor({
    extensions: [StarterKit,Underline,Highlight],
    editorProps:{
        attributes:{
            class:"flex flex-col w-full border border-[#5B1F00] text-white justify-start rounded-lg px-4 py-3 gap-3 text-[16px] pt-4 outline-none  "
        }
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
