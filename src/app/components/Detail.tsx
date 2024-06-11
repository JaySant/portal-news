import style from '../../../styles/Detail.module.css'
import { ArticleDetail } from "../type/Article"
import { format } from 'date-fns'
import Link from "next/link";


export default function Detail({searchArticle}: ArticleDetail) {

    return (
        <>
            <main className={style.main}>
                <h1 className={style.h1}>{searchArticle?.title}</h1>
                <h2 className={style.h2}>{searchArticle?.description}</h2>
                <p className={style.name}>{searchArticle?.author}</p>
                <p className={style.date}>
                {searchArticle?.publishedAt ? 
                    format(new Date(searchArticle.publishedAt), 'dd/MM/yyyy HH:mm') : 
                    ''}
                </p>
                <img src={searchArticle?.urlToImage} className={style.img}></img>
                    <Link href={searchArticle?.url || '/'}>
                        <p className={style.content}>{searchArticle?.content} [More...]</p>
                    </Link>
            </main>
        </>
    )
}