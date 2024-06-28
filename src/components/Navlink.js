"use client"
import Link from "next/link"
import { usePathname } from "next/navigation";
export default function Navlink({item}) {
    const pathname=usePathname()
    return (
        <div>
           <Link href={item.path} 
           className={`mx-3  font-semibold ${pathname===item.path? 'bg-white py-1 px-2 rounded-md':''}`}>
             {item.title}</Link>
        </div>
    );
}