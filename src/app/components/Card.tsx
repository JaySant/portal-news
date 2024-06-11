import { CardArticle } from "../type/Article"
import style from '../../../styles/Card.module.css'
import Link from "next/link";

export default function Card({filterArticles}: CardArticle) {
    return (
        <>
        <main className={style.main}>
            <h1 className={style.title}>Noticias do dia</h1>
            <div className={style.cards}>
            {filterArticles.map((articles, index) => (
                <div key={index} className={`${style[`card-${index}`]}`}>             
                    <Link href={`/noticias/${index}/${articles.title}`}>
                    <img src={articles.urlToImage}className={`${style.image} ${style[`img-${index}`]}`}></img>
                    <h2 className={`${style.h2} ${style[`h2-${index}`]}`}>{articles.title}</h2>
                    </Link>
                    <p className={style.p}>{articles.description}</p>
                </div>
            ))}     
            </div>
        </main>
        </>
    )
}