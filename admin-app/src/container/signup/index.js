import React from 'react';
import { Container, Form, Row, Col, Button } from 'react-bootstrap';
import Layout from '../../components/layout';
import Input from '../../components/UI/Input';

/**
 * @author Ashish
 * @function Signup
 */

 const Signup = (props) =>{
     return(
        <Layout>
        <Container>
            <Row style={{margin: '50px'}}>
                <Col md= {{ span: 6, offset:3 }}>
                    <Form>
                        <Row>
                            <Col md={6}>
                                <Input
                                    label="First Name"
                                    placeholder="First Name"
                                    value=""
                                    type="text"
                                    onChange={()=>{}}
                                />
                            </Col>
                            <Col md={6}>
                                <Input
                                    label="Last Name"
                                    placeholder="Last Name"
                                    value=""
                                    type="text"
                                    onChange={()=>{}}
                                />
                            </Col>
                        </Row>

                        <Input
                            label="Email"
                            placeholder="Enter your email"
                            value=""
                            type="text"
                            onChange={()=>{}}
                        />

                        <Input
                            label="Password"
                            placeholder="Enter your password"
                            value=""
                            type="password"
                            onChange={()=>{}}
                        />
                        <Button variant="primary" type="submit">
                            Sign In
                        </Button>
                    </Form>
                </Col>
            </Row>
        </Container>
    </Layout>
     );
} 

export default Signup;