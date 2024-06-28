import Image from "next/image";
export default function Home() {
  return (
   <>
   <div className="flex w-[1050px]  my-10">
      <div className="w-1/2 h-min-screen">
          <h1 className="text-7xl font-serif p-1 font-medium">Creative Thoughts Agency</h1>
          <p className="p-1 my-3">Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s</p>
          <div className="font-medium my-5">
              <button className="p-2 m-1 bg-blue-500 rounded-md">LearnMore</button>
              <button className="p-2 bg-white rounded-md">Cancel</button>
          </div>
      </div>
      <div className="w-1/2">
          <Image src='https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQPGlKIHVNrrodHfyT8JrGq1WNZKtX54jBR6A&s'
        width={500} height={400} />
      </div>
   </div>
   </>

  );
}
