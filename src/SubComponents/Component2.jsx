import React from 'react'
import Button from "react-bootstrap/Button";
import Card from "react-bootstrap/Card";
import "bootstrap/dist/css/bootstrap.min.css";
import './Component2.css'
const Component2 = () => {
  return (
    <>
      <div class="cards-effect">
        {/* Card 1 */}
        <Card style={{ width: "18rem" }}>
          <Card.Img variant="top" src="" />
          <Card.Body>
            <Card.Title>Card Title 1</Card.Title>
            <Card.Text>
              Some quick example text to build on the card title and make up the
              bulk of the card's content.
            </Card.Text>
            <Button variant="primary">Go somewhere</Button>
          </Card.Body>
        </Card>

        {/* Card 2 */}
        <Card style={{ width: "18rem" }}>
          <Card.Img variant="top" src="" />
          <Card.Body>
            <Card.Title>Card Title 2</Card.Title>
            <Card.Text>
              Some quick example text to build on the card title and make up the
              bulk of the card's content.
            </Card.Text>
            <Button variant="primary">Go somewhere</Button>
          </Card.Body>
        </Card>

        {/* Add more cards as needed */}
        {/* Card 3 */}
        <Card style={{ width: "18rem" }}>
          <Card.Img variant="top" src="" />
          <Card.Body>
            <Card.Title>Card Title 2</Card.Title>
            <Card.Text>
              Some quick example text to build on the card title and make up the
              bulk of the card's content.
            </Card.Text>
            <Button variant="primary">Go somewhere</Button>
          </Card.Body>
        </Card>
        {/* Card 4 */}
        <Card style={{ width: "18rem" }}>
          <Card.Img variant="top" src="" />
          <Card.Body>
            <Card.Title>Card Title 2</Card.Title>
            <Card.Text>
              Some quick example text to build on the card title and make up the
              bulk of the card's content.
            </Card.Text>
            <Button variant="primary">Go somewhere</Button>
          </Card.Body>
        </Card>
        {/* Card 5 */}
        <Card style={{ width: "18rem" }}>
          <Card.Img variant="top" src="" />
          <Card.Body>
            <Card.Title>Card Title 2</Card.Title>
            <Card.Text>
              Some quick example text to build on the card title and make up the
              bulk of the card's content.
            </Card.Text>
            <Button variant="primary">Go somewhere</Button>
          </Card.Body>
        </Card>
      </div>
    </>
  );
}

export default Component2