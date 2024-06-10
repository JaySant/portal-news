import { CardArticle } from "../type/Article"
import Link from "next/link";

export default function Card({filterArticles}: CardArticle) {
    return (
        <>
        <main>
            <h1>Noticias do dia</h1>
            <div className="card-top">
            {filterArticles.map((articles, index) => (
                <div key={index} className="card">             
                    <Link href={`/noticias/${index}/${articles.title}`}>
                    <img src={articles.urlToImage}></img>
                    <h1>{articles.title}</h1>
                    </Link>
                    <p>{articles.description}</p>
                </div>
            ))}     
            </div>
        </main>
        </>
    )
}