import React from 'react';
import { Form } from 'react-bootstrap';
import './style.css';

/**
 * @author Ashish
 * @function Input
 */

const Input = (props)=>{
    return(
        <Form.Group controlId="formBasicEmail" id="alignleft">
            <Form.Label>{props.label}</Form.Label>
            <Form.Control
                type={props.type}
                placeholder={props.placeholder}
                value={props.value}
                onChange={props.onChange}
            />
            <Form.Text className="text-muted">
                {props.errorMessage}
            </Form.Text>
        </Form.Group>
    );
}

export default Input;