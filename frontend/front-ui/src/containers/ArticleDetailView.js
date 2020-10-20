import React, { useState, useEffect } from 'react'
import Article from '../components/Article';
import axios from 'axios';
import { Card } from 'antd'

function ArticleDetail(props) {

    const [articles, setArticles] = useState({})

    useEffect(async () => {
        const articleID = props.match.params.articleID;
        const result = await axios(
            `http://127.0.0.1:8000/api/${articleID}`
        );
        setArticles(result.data);
    }, []);

    return (
        <div>
            <Card title={articles.title}>
                <p style={{ width: "50%" }}>{articles.content}</p>
            </Card>

        </div>
    )
}

export default ArticleDetail

