import React, { useState } from 'react';
import Card from 'react-bootstrap/Card';
import Button from 'react-bootstrap/Button';
import Stack from 'react-bootstrap/Stack';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Placeholder from 'react-bootstrap/Placeholder';
import ListGroupItem from 'react-bootstrap/esm/ListGroupItem';
import Footer from "./Footer";

function Phones( {data, cart, setCart, url, imgPlaceholder} ) {
    // console.log(data[0].available.time)
    const [ timing, setTiming ] = useState(true)
    // const [ cart, setCart ] = useState([])

    // console.log("<<<>>>", data[0].title)
    setTimeout((timing) => setTiming(false), 2000);

    if (timing === true) {
      return (
        <>
        <Container fluid="md" className='mainContainer'>
         <Row className="justify-content-md-center">
          { data.map(data => ( 
              // console.log(">>>>>", data)
          <Card className='doctorcard'>
            <>
              <Card.Header>
                <Placeholder as={Card.Title} animation="glow">
                  <Placeholder xs={6} />
                </Placeholder>
              </Card.Header>
              <Card.Img variant="top" src={imgPlaceholder} />
              <Card.Body>
                <Placeholder as={Card.Text} animation="glow">
                  <Placeholder xs={7} /> <Placeholder xs={4} /> <Placeholder xs={4} />{' '}
                  <Placeholder xs={6} /> <Placeholder xs={8} />
                </Placeholder>
              </Card.Body>
              <Card.Body>
              <Placeholder.Button variant="primary" xs={6} />
              </Card.Body>
            </>
          </Card>
          ))}
         </Row>
        </Container>
     <Footer />
    </>
    );
  }

    function handleClick(e) {
      const filteredBooking = data.filter(d => {
        return (d.id !== e.currentTarget.value)
      })
      setCart(filteredBooking)
      // console.log("<<<>>>", filteredBooking)
    }


    // const handleClick = e => {
    //   const bookingData = { id, img, role };
    //   const requestOptions = {
    //     method: "POST",
    //     headers: { "Content-Type": "application/json" },
    //     body: JSON.stringify(data)
    //   };
    //   fetch(url, requestOptions)
    //   .then(response => response.json())
    //   .then(res => console.log(res));  
    // };

    return (
      <>
      <Container fluid="md" className='mainContainer'>
       <Row className="justify-content-md-center">
         {console.log(">>>>>", data[0].title)}
        { data.map(d => ( 
          <Card className='doctorcard'>
          <>
            <Card.Header>
              <Card.Title>{d.title}</Card.Title>
            </Card.Header>
            <Card.Img variant="top" src={d.img} className="cardimage" />
            <Card.Body>
              <Card.Text>
                The {d.title} is the best phone in this category. Buy while stocks last!
                Only {d.amount} remaining. Visit out store now.
              </Card.Text>
            </Card.Body>
            <Card.Body>
            <Button gap={1} onClick={handleClick} value={d.id}>
                    Buy at {d.price}
                  </Button>
            </Card.Body>
          </>
        </Card>
        ))}
       </Row>
    </Container>
   <Footer />
  </>
  );
}

export default Phones;