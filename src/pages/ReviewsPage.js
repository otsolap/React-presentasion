import React from 'react';
import {
    useRouteMatch,
    Route,
    Switch,
} from 'react-router-dom';

import Hero from "../components/Hero";
import Content from "../components/Content"
import reviewdata from '../components/reviewdata';
import Reviews from '../components/Reviews';

import Card from 'react-bootstrap/Card';
import CardDeck from 'react-bootstrap/CardDeck';
import Button from 'react-bootstrap/Button';


function ReviewsPage(props) {
    let match = useRouteMatch();
    const rev = reviewdata;

    const reviewList = rev.map((rev) => {
        return (
            <div key={rev.id} >
                <Card bg="dark" text="warning" className="mt-top" d-inline-block border="light" style={{ width: '35rem' }}>
                    <Card.Body>
                        <Card.Img variant="top" className="mb-3" src={rev.img} alt={rev.title} />
                        <Card.Title>{rev.title}</Card.Title>
                        <Card.Text><p>{rev.shortdesc}</p></Card.Text>
                        <Button variant="warning" href={`${match.url}/${rev.title}`}>Read more
                </Button>
                    </Card.Body>
                </Card>

            </div>
        );
    });


    return (
        <div>
            <Switch>
                <Route path="/reviews/:revId">
                    <Hero title={props.title} />
                    <Content>
                        <Reviews />
                    </Content>
                </Route>
                <Route path={match.path}>
                    <CardDeck>{reviewList}</CardDeck>
                </Route>
            </Switch>
        </div>
    );

}

export default ReviewsPage;