import Image from "next/image"

export default function Header() {
   return (
        <header>
            <Image src="/logo.png" alt="logo" width={50} height={50} />
            <h1>PortalNews</h1>
        </header>
   )
}