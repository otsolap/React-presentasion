import React from 'react';

import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';
import Alert from 'react-bootstrap/Alert';

import Hero from '../components/Hero';
import Content from '../components/Content';
import axios from 'axios';

class ContactPage extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            name: '',
            email: '',
            message: '',
            disableAlert: false,
            emailSent: null,
        }
    }


    handleChange = (event) => {
        const target = event.target;
        const value = target.type === 'checkbox' ? target.checked : target.value;
        const name = target.name;

        this.setState({
            [name]: value
        })
    }


    handleSubmit = (event) => {
        event.preventDefault();

        console.log(event.target);

        this.setState({
            disableAlert: true
        });

        axios.post('http://localhost:3030/api/email', this.state)
            .then(res => {
                    this.setState({
                        disableAlert: false,
                        emailSent: true,
                    });
                 })
            .catch(err => {
                console.log(err);


            this.setState({
                disableAlert: false,
                emailSent: false
                });
            });
    }


    render() {
        return(
            <div>
                <Hero title={this.props.title} />

                <Content>
                    <Form className="contactPage" onSubmit={this.handleSubmit}>
                        <Form.Group>
                            <Form.Label htmlFor="name">Full Name</Form.Label>
                            <Form.Control id="name" name="name" type="text" value={this.state.name} onChange={this.handleChange} />
                        </Form.Group>


                        <Form.Group>
                            <Form.Label htmlFor="email">Email</Form.Label>
                            <Form.Control id="email" name="email" type="email" value={this.state.email} onChange={this.handleChange} />
                        </Form.Group>


                        <Form.Group>
                            <Form.Label htmlFor="message">Message</Form.Label>
                            <Form.Control id="message" name="message" as="textarea"rows="3" value={this.state.message} onChange={this.handleChange} />
                        </Form.Group>


                        <Button className="d-inline-block" variant="primary" type="submit" disableAlert={this.state.disableAlert}>
                            Send
                        </Button>
                       <Alert>{this.state.emailSent === true && <p className="d-inline success-msg">Email Sent</p>}</Alert>
                       <Alert> {this.state.emailSent === false && <p className="d-inline err-msg">Email Not Sent</p>}</Alert>
                    </Form>
                </Content>
            </div>
        );
    }

}

export default ContactPage;