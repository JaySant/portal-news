import Image from "next/image"
import style from '../../../styles/header.module.css'

export default function Header() {
   return (
        <header className={style.header}>
            <Image src="/logo.png" alt="logo" width={80} height={80} className={style.logo} />
            <h1 className={style.title}>Portal News</h1>
        </header>
   )
}