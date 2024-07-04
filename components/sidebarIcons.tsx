import { Home,Image,CalendarDays,Settings,UserCircle2, LucideIcon } from "lucide-react"

interface IconType{
    label:string,
    src:LucideIcon,
    path:string,
 
}
const icons:IconType[] = [
{
    label:'Home',
    src:Home,
    path:'/'
},
{
    label:'Image',
    src:Image,
    path:'/'
},
{
    label:'Calendar',
    src:CalendarDays,
    path:'/'
},
{
    label:'Settings',
    src:Settings,
    path:'/'
},
{
    label:'User',
    src:UserCircle2,
    path:'/'
 }

]
export default icons