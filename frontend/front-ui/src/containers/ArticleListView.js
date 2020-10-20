import React, { useState, useEffect } from 'react'
import Article from '../components/Article';
import axios from 'axios';
import CustomForm from '../components/Form'

function ArticleList() {

    const [articles, setArticles] = useState([])

    useEffect(() => {
        async function fetchData() {
            // You can await here
            const response = await axios("http://127.0.0.1:8000/api/");
            setArticles(response.data)
        }
        fetchData();

    }, []);

    return (
        <div>
            <Article data={articles} />
            <br />
            <h2> Create an Article</h2>
            <CustomForm requestType='post' btnText='update' articleID={null} />
        </div>
    )
}

export default ArticleList

