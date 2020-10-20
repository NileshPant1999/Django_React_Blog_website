import React, { useState, useEffect } from 'react'
import Article from '../components/Article';
import axios from 'axios';

function ArticleList() {

    const [articles, setArticles] = useState([])

    useEffect(async () => {
        const result = await axios(
            "http://127.0.0.1:8000/api/"
        );

        console.log(result.data);
        setArticles(result.data);
    }, []);

    return (
        <div>
            <Article data={articles} />
        </div>
    )
}

export default ArticleList

