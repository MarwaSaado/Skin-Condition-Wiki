import React from 'react';
import Layout from '../../components/layouts/index';
import { Jumbotron } from 'react-bootstrap';
/**
* @author
* @function Home
**/

const Home = (props) => {
    return (
        <Layout>
            <Jumbotron style={{ margin: '4rem', background: 'white' }} className="text-center">
                <h1>welome to admin Dashboard</h1>
                <p>Here you can add , modify , delete and list all you want to know about Skin Condition</p>
            </Jumbotron>
        </Layout>
    )

}

export default Home
