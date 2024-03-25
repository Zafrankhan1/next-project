import Link from "next/link";

function HomePage() {
  return (
    <div>
    <div>This is a HomePage</div>

    <Link href={"/NamePage"}>Click Me</Link>
    </div>
  )
}

export default HomePage;