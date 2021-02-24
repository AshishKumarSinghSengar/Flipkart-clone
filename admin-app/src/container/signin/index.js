import React from 'react';
import { Container, Form, Row, Col, Button } from 'react-bootstrap';
import Layout from '../../components/layout';
import Input from '../../components/UI/Input';

/**
 * @author Ashish
 * @function Signin
 */

const Signin = (props) => {
    return (
        <Layout>
            <Container>
                <Row style={{margin: '50px'}}>
                    <Col md= {{ span: 6, offset:3 }}>
                        <Form>
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

export default Signin;