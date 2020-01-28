import React from 'react';
import { Card } from 'react-bootstrap';

const NewsCard = props => {
  return (
    <Card style={{ width: '18rem' }} key={props.news.id}>
      <Card.Body>
        <Card.Title>{props.news.title}</Card.Title>
        <Card.Subtitle className="mb-2 text-muted">
          {props.news.categories}
        </Card.Subtitle>
        <Card.Img variant="top" src={props.news.imageurl} />
        <Card.Text>{props.news.body}</Card.Text>
        <Card.Link href={props.news.url}>Go to Site</Card.Link>
      </Card.Body>
    </Card>
  );
};

export default NewsCard;
