import { Camera,List,Bold,Underline, Italic,CaseUpperIcon,AudioLines,TagsIcon, LucideIcon } from "lucide-react";

interface ButtonType{
label:string,
onClick:()=>void,
src:LucideIcon,
path:string,
tooltip:string
}


const Buttons: ButtonType[] = [
  {
    label:"Camera",
    onClick:()=>console.log("Camera clicked"),
    src:Camera,
    path:"/",
    tooltip:"Add Image"
  },
  {
    label:"List",
    onClick:()=>console.log("List clicked"),
    src:List,
    path:"/",
    tooltip:"Add List"

  },
  {
    label:"Bold",
    onClick:()=>console.log("Bold clicked"),
    src:Bold,
    path:"/"	,
    tooltip:"Bold"
  },
  {
    label:"Underline",
    onClick:()=>console.log("Underline clicked"),
    src:Underline,
    path:"/",
    tooltip:"Underline"
  },
  {
    label:"Italic",
    onClick:()=>console.log("Italic clicked"),
    src:Italic,
    path:"/",
    tooltip:"Italicise"
  },
  {
    label:"Uppercase",
    onClick:()=>{},
    src:CaseUpperIcon,
    path:"/",
    tooltip:"Change Font"
  },
  {
    label:"Audio",
    onClick:()=>console.log("Audio clicked"),
    src:AudioLines,
    path:"/",
    tooltip:"Add Voice Note"
  },
  {
    label:"Tags",
    onClick:()=>console.log("Tags clicked"),
    src:TagsIcon,
    path:"/",
    tooltip:"Add Tags"
  }
]

export default Buttons;