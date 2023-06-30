import React from 'react';
import Header from './Header';
import CoffeeControl from './CoffeeControl';
import 'bootstrap/dist/css/bootstrap.min.css';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col'; 

function App() {
  return (
    <React.Fragment>
      <Container> 
        <Header />
        <Row>
          <Col>
            <CoffeeControl />
          </Col>
        </Row>
      </Container>
    </React.Fragment>
  );
}

export default App;
