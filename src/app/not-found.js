import Link from "next/link";
export default function Notfound() {
    return (
        <div>
           <h1>Not Found</h1>
           <p>Sorry,the page youare looking for does not exist</p>
           <Link href='/'>Return Home</Link>
        </div>
    );
}
