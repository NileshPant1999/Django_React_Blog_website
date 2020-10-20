import React from "react";
import axios from "axios";



class CustomForm extends React.Component {

    handleFormSubmit = async (event, requestType, articleID) => {
        event.preventDefault();


        const title = event.target.elements.title.value;
        const content = event.target.elements.content.value;

        console.log(title, content)

        switch (requestType) {
            case 'post':
                return axios.post("http://127.0.0.1:8000/api/create/", {
                    title: title,
                    content: content
                })
                    .then(res => console.log(res))
                    .catch(err => console.log(err))

            case 'put':
                return axios.put(`http://127.0.0.1:8000/api/${articleID}/update/`, {
                    title: title,
                    content: content
                })
                    .then(res => console.log(res))
                    .catch(err => console.log(err))
        }

    }

    render() {
        return (
            <div>
                <form onSubmit={(event) => this.handleFormSubmit(
                    event,
                    this.props.requestType,
                    this.props.articleID
                )}>
                    <input name="title" placeholder="Enter some content ..." />
                    <input name="content" placeholder="Enter some content ..." />
                    <input type="submit" value="Submit" />
                </form>
            </div>
        );

    }
}

export default CustomForm;
