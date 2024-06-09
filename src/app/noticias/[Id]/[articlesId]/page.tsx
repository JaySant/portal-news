"use client";

import { useFetch } from "@/app/components/useFetch";
import { useParams} from "next/navigation";

export default function noticiaDetail({}) {
    const params = useParams<{articlesId: string}>()
    const { articles, loading } = useFetch();

    if(loading) {
        return <p>Loading...</p>
    }

    if(!params?.articlesId) {
        return <p>Error: Erro no titulo</p>
    }
    const searchArticle = articles.find((articles) => 
        articles.title === decodeURIComponent(params?.articlesId))

    return (
        <div className="container-detail">
            <h1> Detalhe de noticia</h1>
            <h1>{searchArticle?.title}</h1>
            <p>{searchArticle?.description}</p>
            <p>{searchArticle?.author}</p>
            <p>{searchArticle?.publishedAt}</p>
            <img src={searchArticle?.urlToImage}></img>
            <p>{searchArticle?.content}</p>
        </div>
    )
}