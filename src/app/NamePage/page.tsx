import Link from "next/link"

function NamePage() {
  return (
    <div>
      <div>Hi, my Name is Zafran Khan</div>
      <Link href={"/HomePage"}>ClickMe</Link>
    </div>
  )
}

export default NamePage;