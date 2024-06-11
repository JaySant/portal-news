"use client";

import { useFetch } from "./hooks/useFetch";
import Card from "./components/Card";
import Loading from "./components/Loading";

export default function inicialPage() {
   const { articles, loading } = useFetch()

        const filterArticles = articles.filter(articles => articles.title
        && articles.urlToImage).slice(0, 7)
        
        if(loading) {
            return <Loading />
        }

    return (
        <div className="container">
            <div className="card-top">
            <Card filterArticles={filterArticles}/>
            </div>
        </div> 
    )
}