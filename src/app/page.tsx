"use client";

import axios from "axios";
import { useEffect, useState } from "react"
import { Article } from "./type/Article";
export default function inicialPage() {
    const [articles, setArticles ] = useState<Article[]>([])

    useEffect(() => {
        axios.get('api/route').then((response) => {
            setArticles(response.data.articles)
        })
    }, [])

        const filterArticles = articles.filter(articles => articles.title
        && articles.urlToImage).slice(0, 7)

    return (
        <div className="container">
            <h1>Noticias do Dia</h1>
            <div className="card-top"></div>
            {filterArticles.map((articles, index) => (
                <div key={index} className="card">
                    <img src={articles.urlToImage}></img>
                    <h1>{articles.title}</h1>
                    <p>{articles.description}</p>
                </div>
            ))}     
        </div>
    )
}