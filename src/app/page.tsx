import Image from "next/image";
export default function Home() {
  return (
< >




<div className=" flex justify-around items-center h-screen w-full bg-black">
  
<div> <Image src="/watch1.jpg" alt="pic" height={900} width={560} className="bg-red-500 h-56 w-56 rounded-lg"/></div>
<div> <Image src="/watch2.jpg" alt="pic" width={560} height={900} className="bg-slate-600 h-56 w-56 rounded-lg"/> </div>
<div> <Image src="/watch3.jpg" alt="pic" width={560} height={900} className="bg-slate-600 h-56 w-56 rounded-lg"/> </div>
<div className="bg-yellow-100 h-56 w-56 rounded-lg"><Image src="/watch4.jpg" alt="pic" height={560} width={560}/> </div>
  </div>

    

</>
    
  );
}
