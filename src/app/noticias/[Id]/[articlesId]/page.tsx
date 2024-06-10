"use client";

import ArticleDetail from "@/app/components/Detail";
import { useFetch } from "@/app/hooks/useFetch";
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
           <ArticleDetail searchArticle={searchArticle}/>
        </div>
    )
}