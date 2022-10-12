import React from "react";
import Footer from "./Footer";
import Accordion from 'react-bootstrap/Accordion';

function About() {
  return (
    <>
    <Accordion defaultActiveKey={['0']} alwaysOpen className="about">
      <Accordion.Item eventKey="0"> 
        <Accordion.Header>Accordion Item #1</Accordion.Header>
        <Accordion.Body>
        The Samsung Galaxy S7 is the best phone in this category. <br/>
          <ul>
            <li>Buy while stocks last! Only 10 remaining. Visit out store now.</li>
            <li>Buy while stocks last! Only 10 remaining. Visit out store now.</li>
            <li>Buy while stocks last! Only 10 remaining. Visit out store now.</li>
            <li>Buy while stocks last! Only 10 remaining. Visit out store now.</li>
          </ul>
        </Accordion.Body>
      </Accordion.Item>
      <Accordion.Item eventKey="1">
        <Accordion.Header>Accordion Item #2</Accordion.Header>
        <Accordion.Body>
        The Google pixel is the best phone in this category. <br/>
        Buy while stocks last! Only 65 remaining. Visit out store now.
        </Accordion.Body>
      </Accordion.Item>
      <Accordion.Item eventKey="2">
        <Accordion.Header>Accordion Item #3</Accordion.Header>
        <Accordion.Body>
        The Xiaomi Redmi Note 2 is the best phone in this category. <br/>
        Buy while stocks last! Only 21 remaining. Visit out store now.
 
        </Accordion.Body>
      </Accordion.Item>
    </Accordion>
   <Footer />
  </>
   );
}

export default About;
