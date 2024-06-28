import Image from "next/image"

function page() {
  return (
    <>
    <div className="flex w-[1050px]">
      <div className="w-1/2 p-2 my-5">
            <p className="text-blue-400 font-bold m-1 p-1">About Agency</p>
            <h1 className='text-4xl font-semibold'> We create digital ideas that are bigger, bolder, braver and better.</h1>
        <p className='my-3 p-1'>
          We create digital ideas that are bigger, bolder, braver and better. We
          believe in good ideas flexibility and precission We’re world’s Our
          Special Team best consulting & finance solution provider. Wide range
          of web and software development services. </p>
          <div className="flex">
            <div>
                <h1 className="font-bold text-blue-500">10 K+</h1>
                <p className="font-medium mr-2">Year of experience</p>
            </div>
            <div><h1  className="font-bold text-blue-500">234 K+</h1>
            <p className="font-medium mx-2">People reached</p></div>
            <div>
            <h1  className="font-bold text-blue-500">5 K+</h1>
            <p className="font-medium mx-2"> Services and plugins</p>
          </div>
          </div>
      </div>
    <div className="w-1/2 m-10 p-2 ">
      <Image src='/about.png'  alt="Picture of the author"
      width={500}
      height={600}/>
      {/* <img src='https://xlentfacilities.com/style/images/page/text-slider-1.png'/> */}
    </div>
    </div>
    </>
  )
}

export default page
