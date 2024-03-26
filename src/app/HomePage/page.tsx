"use client"
import { useRouter } from "next/navigation";

function HomePage() {
  let Route=useRouter();
  return (
    <div>
      <div>This is HomePage</div>
      <h1 onClick={()=>Route.push("/NamePage")}> Submit Me</h1>
    </div>
  )
}

export default HomePage;
