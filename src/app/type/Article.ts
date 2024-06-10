export interface Article {
    author?: string,
    title: string,
    description?: string,
    urlToImage: string,
    content?: string,
    publishedAt: string
}

export interface ArticleDetail {
    searchArticle?: Article;
}

export interface CardArticle {
    filterArticles: Article[];
}