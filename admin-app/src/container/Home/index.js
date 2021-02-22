import React from 'react';
import { Jumbotron } from 'react-bootstrap';
import Layout from '../../components/layout';

/**
 * @author Ashish
 * @function Home
 */

 const Home = (props) =>{
     return(
        <Layout>
            <Jumbotron className="text-center" style={{margin : '5rem', background : '#fff'}}>
                <h1>Welcome to Admin DashBoard</h1>
                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>
            </Jumbotron>
        </Layout>
    );
} 

export default Home;