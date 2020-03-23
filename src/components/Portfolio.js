import React from "react";
import { Container, Row, Col, Card, Button } from "react-bootstrap";
import RockPaperScissors from "../assets/RockPaperScissors.jpg";
import TowerOfHanoi from "../assets/TowerOfHanoi.jpg";
import ConnectFour from "../assets/ConnectFour.jpg";
import Sokoban from "../assets/Sokoban.jpg";
import Kwitter from "../assets/Kwitter.jpg";
import Sproosed from "../assets/Sproosed.jpg";
import styled from "styled-components";

const Styles = styled.div`
  div {
    margin: auto;
    margin-top: 25px;
    color: #ffffcc;
  }
`;

class Portfolio extends React.Component {
  render() {
    return (
      <Styles>
        <div className="portfolioStyle">
          <Container>
            <Row>
              <div>
                <Col>
                  <Card style={{ width: "18rem", backgroundColor: "#1e3f62" }}>
                    <Card.Img
                      variant="top"
                      src={RockPaperScissors}
                      width={"286px"}
                      height={"175px"}
                    />
                    <Card.Body>
                      <Card.Title>Game of Chance</Card.Title>
                      <Card.Text>
                        Some quick example text to build on the card title and
                        make up the bulk of the card's content.
                      </Card.Text>
                      <Button variant="primary">Go somewhere</Button>
                    </Card.Body>
                  </Card>
                </Col>
              </div>
              <div>
                <Col>
                  <Card style={{ width: "18rem", backgroundColor: "#1e3f62" }}>
                    <Card.Img
                      variant="top"
                      src={TowerOfHanoi}
                      width={"286px"}
                      height={"175px"}
                    />
                    <Card.Body>
                      <Card.Title>Tower of Hanoi</Card.Title>
                      <Card.Text>
                        Some quick example text to build on the card title and
                        make up the bulk of the card's content.
                      </Card.Text>
                      <Button variant="primary">Go somewhere</Button>
                    </Card.Body>
                  </Card>
                </Col>
              </div>
              <div>
                <Col>
                  <Card style={{ width: "18rem", backgroundColor: "#1e3f62" }}>
                    <Card.Img
                      variant="top"
                      src={ConnectFour}
                      width={"286px"}
                      height={"175px"}
                    />
                    <Card.Body>
                      <Card.Title>Connect Four</Card.Title>
                      <Card.Text>
                        Some quick example text to build on the card title and
                        make up the bulk of the card's content.
                      </Card.Text>
                      <Button variant="primary">Go somewhere</Button>
                    </Card.Body>
                  </Card>
                </Col>
              </div>

              <div>
                <Col>
                  <Card style={{ width: "18rem", backgroundColor: "#1e3f62" }}>
                    <Card.Img
                      variant="top"
                      src={Sokoban}
                      width={"286px"}
                      height={"175px"}
                    />
                    <Card.Body>
                      <Card.Title>Sokoban</Card.Title>
                      <Card.Text>
                        Some quick example text to build on the card title and
                        make up the bulk of the card's content.
                      </Card.Text>
                      <Button variant="primary">Go somewhere</Button>
                    </Card.Body>
                  </Card>
                </Col>
              </div>
              <div>
                <Col>
                  <Card style={{ width: "18rem", backgroundColor: "#1e3f62" }}>
                    <Card.Img
                      variant="top"
                      src={Kwitter}
                      width={"286px"}
                      height={"175px"}
                    />
                    <Card.Body>
                      <Card.Title>Kwitter</Card.Title>
                      <Card.Text>
                        Some quick example text to build on the card title and
                        make up the bulk of the card's content.
                      </Card.Text>
                      <Button variant="primary">Go somewhere</Button>
                    </Card.Body>
                  </Card>
                </Col>
              </div>
              <div>
                <Col>
                  <Card style={{ width: "18rem", backgroundColor: "#1e3f62" }}>
                    <Card.Img
                      variant="top"
                      src={Sproosed}
                      width={"286px"}
                      height={"175px"}
                    />
                    <Card.Body>
                      <Card.Title>Sproosed</Card.Title>
                      <Card.Text>
                        Some quick example text to build on the card title and
                        make up the bulk of the card's content.
                      </Card.Text>
                      <Button variant="primary">Go somewhere</Button>
                    </Card.Body>
                  </Card>
                </Col>
              </div>
            </Row>
          </Container>
        </div>
      </Styles>
    );
  }
}

export default Portfolio;
