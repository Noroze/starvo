import React from "react"
import 'bootstrap/dist/css/bootstrap.min.css'
import Form from 'react-bootstrap/Form'
import { Button } from "@chakra-ui/react"
import { useState } from "react"
import emailjs from "emailjs-com"

const Contact = () => {
    function sendEmail(e) {

        e.preventDefault();
        emailjs.sendForm('service_syz20us', 'template_8s0bh54', e.target, 'dQc8UlYDXovLjMqNq')
            .then((result) => {
                console.log(result.text);
            }, (error) => {
                console.log(error.text);
            });
            e.target.reset()
    }
    return (
        <Form onSubmit={sendEmail}>
              <Form.Group className="mb-3">
                <Form.Label>Full Name</Form.Label>
                <Form.Control type="text" required placeholder="Full Name" />
                <Form.Text className="text-muted">
                    We'll never share your email with anyone else.
                </Form.Text>
            </Form.Group>
            
            <Form.Group className="mb-3" controlId="formBasicEmail">
                <Form.Label>Email address</Form.Label>
                <Form.Control type="email" required placeholder="Enter email" />
                <Form.Text className="text-muted">
                    We'll never share your email with anyone else.
                </Form.Text>
            </Form.Group>

            <Form.Group className="mb-3"> 
                <div className="form-group">
                    <label form="exampleFormControlTextarea1" required placeholder="Your Message" >Your Message</label>
                    <textarea className="form-control" id="exampleFormControlTextarea1" rows="3"></textarea>
                </div>
            </Form.Group>

            <Button variant="primary" className="btn btn-primary" type="submit">
                Send Message
            </Button>
        </Form>

        
    )
}

export default Contact;
