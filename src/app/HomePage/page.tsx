'use client'
import Link from "next/link";

import { useRouter } from 'next/navigation';
function HomePage() {
  const route = useRouter();
  return (
    <div>
    <div>This is a HomePage</div>

    <Link href={"/NamePage"}>Click Me</Link>
    <p onClick={()=>route.push('/NamePage')}>Click me</p>
    </div>
  )
}

export default HomePage;