'use client'; 

import axios from "axios"
import { useEffect, useState } from "react"
import { Article } from "../type/Article"

export const useFetch = () => {
    const [articles, setArticles ] = useState<Article[]>([])
    const [loading, setLoading] = useState<boolean>(true);

    useEffect(() => {
        axios.get(`${window.location.origin}/api/route`).then((response) => {
            setArticles(response.data.articles)
            setLoading(false)
        })
    }, []);

    return {articles, loading};
}