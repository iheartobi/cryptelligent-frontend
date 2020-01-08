import React from "react";
import { Card, Button } from "react-bootstrap";

const CoinCard = props => {
  const {
    id,
    logo_url,
    name,
    rank,
    market_cap,
    price,
    max_supply,
    symbol,
    circulating_supply
  } = props.coins;
  return (
    <Card variant="dark" key={id} style={{ width: "16rem", height: "32rem" }}>
      <br></br>
      <img height="60px" width="60px" alt="coin" src={logo_url} />
      <Card.Body>
        <Card.Title>{name}</Card.Title>
        <Card.Subtitle className="mb-2 text-muted">
          {symbol}
          {"   "} Rank:{rank}
        </Card.Subtitle>
        <Card.Text>
          Market Cap: {market_cap ? market_cap : "No Data"}
          <hr></hr>
          Price: ${price}
          <hr></hr>
          Maximum Supply: {max_supply ? max_supply : " No Data"}
          <hr></hr>
          Circulating Supply:{" "}
          {circulating_supply ? circulating_supply : " No Data"}
        </Card.Text>
        <Button  onClick={(e) => props.handleClick(e, props, id)} >Buy Now</Button>

      </Card.Body>
    </Card>
  );
};



export default CoinCard;
