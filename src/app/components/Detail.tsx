import { ArticleDetail } from "../type/Article"

export default function Detail({searchArticle}: ArticleDetail) {
 
    return (
        <>
            <main>
                <h1>{searchArticle?.title}</h1>
                <h2>{searchArticle?.description}</h2>
                <p>{searchArticle?.author}</p>
                <p>{searchArticle?.publishedAt}</p>
                <img src={searchArticle?.urlToImage}></img>
                <p>{searchArticle?.content}</p>
            </main>
        </>
    )
}