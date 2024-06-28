import Image from "next/image";
import Link from "next/link";
export default function Posts() {
    return (
       <>
            <div className="mx-5 p-1">
                <div className="flex">
              
                    <Image src='/contact.png' width={200} height={300} />
                    <p className="rotate-[270deg]">Datecreated</p>
               </div>
                <h1>Title</h1>
                <h1>body</h1>
                <Link href='/blog/post' className="underline"><p>Read More</p></Link>
            </div>
       </>
    );
}