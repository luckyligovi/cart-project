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
      hggsghwohegh
        </Accordion.Body>
      </Accordion.Item>
      <Accordion.Item eventKey="1">
        <Accordion.Header>Accordion Item #2</Accordion.Header>
        <Accordion.Body>
   hfgdlsalgf
        </Accordion.Body>
      </Accordion.Item>
      <Accordion.Item eventKey="2">
        <Accordion.Header>Accordion Item #3</Accordion.Header>
        <Accordion.Body>
 isdhjpvgtuhoh
        </Accordion.Body>
      </Accordion.Item>
    </Accordion>
   <Footer />
  </>
   );
}

export default About;