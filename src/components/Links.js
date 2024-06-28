
import Navlink from "./Navlink";

const Link_Paths=[
    {
        title:'Home',
        path:'/'
    },{
         title:'About',
        path:'/about'
    },{
         title:'Contact',
        path:'/contact'
    },{
         title:'Blog',
        path:'/blog'
    }
]
export default function Links() {
//   Tempororly checking
    const session=true
    const isAdmin=true
    return (
        <div className="flex">
           {Link_Paths.map((link=> <Navlink item={link} key={link.title}/> ))}
           {session?(
            <>
             {isAdmin && <Navlink item={{title:"Admin",path:'/admin'}}/>}
             <button className="bg-white  mx-3  rounded-md ">Logout</button>
            </>
           ):(<Navlink item={{title:"Login",path:'/login'}}/>)}
        </div>
    );
}