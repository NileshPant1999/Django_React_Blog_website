import React, { useState, useEffect } from 'react'
import CustomForm from '../components/Form'

import axios from 'axios';
import { Card } from 'antd'

function ArticleDetail(props) {

    const [articles, setArticles] = useState({})

    useEffect(() => {
        async function fetchData() {
            const articleID = props.match.params.articleID;
            const result = await axios(
                `http://127.0.0.1:8000/api/${articleID}`
            );
            setArticles(result.data);
        }
        fetchData()
    }, [props.match.params.articleID]);

    return (
        <div>
            <Card title={articles.title}>
                <p style={{ width: "50%" }}>{articles.content}</p>
            </Card>
            <CustomForm requestType='post' btnText='create' articleID={props.match.params.articleID} />
        </div>
    )
}

export default ArticleDetail

