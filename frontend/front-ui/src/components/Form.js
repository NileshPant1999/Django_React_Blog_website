import React from "react";
import { Form, Input, Button } from "antd";
import { connect } from "react-redux";
import axios from "axios";
import { Redirect } from "react-router-dom";
import { createHashHistory } from 'history'



const FormItem = Form.Item;

function CustomForm({ requestType, articleID, btnText }) {

  const handleFormSubmit = async (event, requestType, articleID, token) => {
    event.preventDefault();

    const postObj = {
      title: event.target.elements.title.value,
      content: event.target.elements.content.value
    }

    axios.defaults.xsrfHeaderName = "X-CSRFTOKEN";
    axios.defaults.xsrfCookieName = "csrftoken";
    axios.defaults.headers = {
      "Content-Type": "application/json",
      Authorization: `Token ${token}`,
    };
    const history = createHashHistory()


    if (requestType === "post") {

      await axios.post("http://127.0.0.1:8000/api/create/", postObj)
        .then(res => {
          if (res.status === 201) {
            history.push('/articles/23')
          }
        })
    } else if (requestType === "put") {

      await axios.put(`http://127.0.0.1:8000/api/${articleID}/update/`, postObj)
        .then(res => {
          if (res.status === 200) {
            history.push('/')
          }
        })
    }
  };


  return (
    <div>
      <Form
        onSubmit={event =>
          handleFormSubmit(
            event,
            requestType,
            articleID
          )
        }
      >
        <FormItem label="Title">
          <Input name="title" placeholder="Put a title here" />
        </FormItem>
        <FormItem label="Content">
          <Input name="content" placeholder="Enter some content ..." />
        </FormItem>
        <FormItem>
          <Button type="primary" htmlType="submit">
            {btnText}
          </Button>
        </FormItem>
      </Form>
    </div>
  );

}

const mapStateToProps = state => {
  return {
    token: state.token
  };
};

export default connect(mapStateToProps)(CustomForm);
