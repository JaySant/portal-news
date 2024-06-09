"use client";


import Link from "next/link";
import { useFetch } from "./components/useFetch";

export default function inicialPage() {
   const { articles, loading } = useFetch()

        const filterArticles = articles.filter(articles => articles.title
        && articles.urlToImage).slice(0, 7)
        
        if(loading) {
            return <p>Loading...</p>
        }

    return (
        <div className="container">
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
        </div> 
    )
}