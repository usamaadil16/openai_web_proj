import React from 'react';
import { Component } from 'react';
import 'bootstrap/dist/css/bootstrap.css';
import { Nav , Row, Col, Container, Form, Button} from 'react-bootstrap';
import Card from 'react-bootstrap/Card';

const {Configuration, OpenAIApi} = require("openai");

class Codegen extends Component{
    constructor(){
        super()
        this.state = {
            heading : 'Ai generated code will be shown here.',
            response: '...awaiting response '
        }
    }
    onFormSubmit=e=>{
        e.preventDefault()
        const formData = new FormData(e.target),
        formDataObj = Object.fromEntries(formData.entries())
        console.log(formDataObj.productName)

        const configuration = new Configuration({
            apiKey: "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",
          });
          const openai = new OpenAIApi(configuration);
          
            openai.createCompletion({
            model: "text-davinci-002",
            prompt: `programming code generate for:${formDataObj.productName} `,
            temperature: 0.7,
            max_tokens: 256,
            top_p: 1,
            frequency_penalty: 0,
            presence_penalty: 0,
          })
          .then((response)=>{
            this.setState({
                heading: `programming code generate for:${formDataObj.productName}`,
                response: `${response.data.choices[0].text}`
            })
          });

        this.setState({
            heading: `programming code generate for:${formDataObj.productName}`,
            response: `response shown here`
        })
    }



    render(){
        return(
            <div>
                <br/>
                <br/>
                <br/>
            <Container>
                <br/>
                <br/>
                <br/>
                <h1>Generate a programming code for any language here</h1>
                <h2>The Ai that will assist you is openai </h2>
                

                <Form onSubmit={this.onFormSubmit}>
                    <Form.Group className="mb-3" controlId="formBasicEmail">
                        <Form.Label>Enter the type of code you want.</Form.Label>  
                            <Form.Control type="text" name="productName" placeholder="enter language and type of code" /> 
                        <Form.Text className="text-muted">make sure to enter language</Form.Text>
                    </Form.Group>
                    <Button variant='primary' size="lg" type= "submit">Get Ai Code</Button>

                </Form>
                <br/>
                <br/>
                <br/>
                <Card>
                    <Card.Body>
                        <Card.Title><h1>{this.state.heading}</h1></Card.Title>
                        <Card.Text><h4>{this.state.response}</h4></Card.Text>
                    </Card.Body>
                </Card>
                </Container>
                <br/>
                <br/>
                <br/>
                
            
        </div>
        )
    }
}

export default Codegen



