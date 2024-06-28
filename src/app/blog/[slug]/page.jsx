import Image from "next/image"
function singlePostPage() {
  return (
    <div className="flex ">
      <div>
          <Image src='/contact.png' width={200} height={300} />
      </div>
      <div>
           <h1>Title</h1>
           <div className="flex">
                <Image src='/contact.png' width={20} height={20}  className="rounded-xl"/>
                <div>
                    <h1>Name of Author</h1>
                    <span>Sravani</span>
                </div>
                <div>
                    <h1>published at</h1>
                    <span>29.12.2000</span>
                </div>
           </div>
           <h1>Description</h1>

      </div>
    </div>
  )
}

export default singlePostPage
