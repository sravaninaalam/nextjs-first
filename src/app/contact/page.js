
import Image from 'next/image'

export default function page() {
   
  return (
  
    <div className="flex w-[1050px]">
       <div className='w-1/2'>
          <Image src={'/contact.png'} width={350} height={400} className='p-5 m-5'/>
       </div>
     
       <div className='w-1/2 my-5 p-2  '>      
        
          <form>
              <input type='text' name='name' className='w-2/3 border border-black rounded-md p-1 m-2'
              placeholder='enter full name'/>
              <input type='email'  className='w-2/3 border border-black rounded-md p-1 m-2'
              placeholder='ex- xyz@mail.com'/>
                 <input type="text" placeholder="Phone Number (Optional)"  className='w-2/3 border border-black rounded-md p-1 m-2'/>
              <textarea rows={8} cols={45} placeholder='text' className='border border-black rounded-md p-1 m-2'></textarea>
              <button type='submit' className='  p-1 w-2/3 m-2 bg-blue-400 rounded-md'>send</button>
          </form>
          
      
          {/* <form>
               <input type='text' placeholder='enter fullName'/>
               <input type='email' placeholder='ex: xyz@gmail.com'/>
               <textarea rows={10} cols={30} placeholder='text'></textarea>
          </form> */}
       </div>
    </div>
  );
}
