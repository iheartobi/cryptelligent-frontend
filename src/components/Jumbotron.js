import React, { Component } from 'react';
import { Row, Col, Container, Image } from 'react-bootstrap';
import { PieChart } from 'react-chartkick';
import 'chart.js';

class Jumbotron extends Component {
  render() {
    console.log(this.props);
    const { coins } = this.props.data;
    const arrayOfPrice =
      coins &&
      coins.map(coin => {
        return coin.price;
      });
    const reducer = (acc, curr) => acc + curr;
    const coinAmount = arrayOfPrice && arrayOfPrice.reduce(reducer, 0);

    console.log(arrayOfPrice);

    const styles = {
      jumbo: {
        backgroundImage: `url(${this.props.data.bg_url})`,
        backgroundRepeat: 'no-repeat',
        backgroundPosition: 'center',
        backgroundSize: '100%',
        color: 'white',
        fontSize: '20px'
      }
    };

    return (
      <div className="jumbotron" style={styles.jumbo}>
        <Container>
          <Row>
            <Col xs={6} md={4}>
              {/* <center> */}
              <Image
                className="thumbnail"
                src={this.props.data.img_url}
                height="150px"
                width="150px"
                alt="user-profile"
                thumbnail="true"
                roundedCircle
              />
              <br></br>
              <h5 className="welcome"> Welcome, {this.props.data.name}</h5>
              {/* </center> */}
            </Col>
            <Col xs={6} md={4}>
              <PieChart
                donut={true}
                colors={['red', 'gold']}
                width="220px"
                height="220px"
                data={[
                  ['Expense', coinAmount],
                  ['Earnings', this.props.data.coinbank]
                ]}
              />
            </Col>
            <Col xs={6} md={4}>
              <center>
                <h5>Earnings:</h5>
                <p className="earning-amount">${this.props.data.coinbank}</p>
                <h5>Expenses:</h5>
                <p className="expense-amount">${coinAmount}</p>
              </center>
            </Col>
          </Row>
        </Container>
      </div>
    );
  }
}
export default Jumbotron;
