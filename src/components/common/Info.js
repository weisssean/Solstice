import React from 'react';
import {Col, ListGroup, ListGroupItem, ListGroupItemHeading, Row} from 'reactstrap';

const Info = () => {
  return (
    <div style={{marginLeft:"50px", marginTop:"50px"}}>
      <Row>
        <Col>
          Created by Sean Weiss for the position of software lead at Solstice.us
        </Col>
      </Row>
      <br/>
      <Row>
        <Col>
          I chose to use the <b>react-redux</b> framework to enable using a centralized store for all of our bills and state variables.
          This approach helps by improving performance, providing a centralized api, and helps organizing the code.
        </Col>
      </Row>
      <br/>

      <Row>
        <Col md={5} sm={8} xs={12}>
          Libraries used in this exercise:
          <br/>
          <br/>

          <ListGroup>
            <ListGroupItem>
              <ListGroupItemHeading>
                <b>React</b>
              </ListGroupItemHeading>
              <ListGroupItemHeading>
                <b>Redux</b> for managing state in a centralized store
              </ListGroupItemHeading>
              <ListGroupItemHeading>
                <b>Webpack</b>  for creating debug and release builds
              </ListGroupItemHeading>
              <ListGroupItemHeading>
                <b>reactstrap</b> bootstrap react library
              </ListGroupItemHeading>
              <ListGroupItemHeading>
                <b>font-awesome</b> icon package
              </ListGroupItemHeading>
              <ListGroupItemHeading>
                <b>react-chartjs2</b> chart library
              </ListGroupItemHeading>
              <ListGroupItemHeading>
                <b>axios</b> for ajax calls
              </ListGroupItemHeading>
              <ListGroupItemHeading>
                <b>More...</b>
              </ListGroupItemHeading>
            </ListGroupItem>
          </ListGroup>
        </Col>
      </Row>
    </div>
  );
};
export default Info;
