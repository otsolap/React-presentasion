import React from 'react';
import { useParams } from 'react-router-dom';

import Jumbotron from 'react-bootstrap/Jumbotron';
import Container from 'react-bootstrap/Container';
import Button from 'react-bootstrap/Button';


import reviewdata from "./reviewdata";


const Reviews = () => {
    let { revId } = useParams();
    let rev = reviewdata.find((y) => y.title === revId);

    return (
        <Jumbotron className="bg-transparent jumbotron-fluid p-0">
            <Container fluid={true}>
                <div>
                    <div>
                        <img className="o-rev-img" src={rev.img} alt={rev.title}  />
                    </div>

                    <div>
                        <h1>{rev.title}</h1>
                        <p>{rev.story}</p>
                        <Button variant="danger" href={rev.link}>Watch the review here.</Button>
                        <Button variant="link" href="/reviews">Back to Reviews</Button>
                    </div>
               
                </div>
            </Container>
        </Jumbotron>
    );
}

export default Reviews;
