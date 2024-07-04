import { Camera,List,Bold,Underline, Italic,CaseUpperIcon,AudioLines,TagsIcon, LucideIcon } from "lucide-react";

interface ButtonType{
label:string,
onClick:()=>void,
src:LucideIcon,
path:string
}


const Buttons: ButtonType[] = [
  {
    label:"Camera",
    onClick:()=>console.log("Camera clicked"),
    src:Camera,
    path:"/"
  },
  {
    label:"List",
    onClick:()=>console.log("List clicked"),
    src:List,
    path:"/"

  },
  {
    label:"Bold",
    onClick:()=>console.log("Bold clicked"),
    src:Bold,
    path:"/"	
  },
  {
    label:"Underline",
    onClick:()=>console.log("Underline clicked"),
    src:Underline,
    path:"/"
  },
  {
    label:"Italic",
    onClick:()=>console.log("Italic clicked"),
    src:Italic,
    path:"/"
  },
  {
    label:"Uppercase",
    onClick:()=>{},
    src:CaseUpperIcon,
    path:"/"
  },
  {
    label:"Audio",
    onClick:()=>console.log("Audio clicked"),
    src:AudioLines,
    path:"/"
  },
  {
    label:"Tags",
    onClick:()=>console.log("Tags clicked"),
    src:TagsIcon,
    path:"/"
  }
]

export default Buttons;