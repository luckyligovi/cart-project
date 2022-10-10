import React from 'react';
import Button from 'react-bootstrap/Button';

function Home() {
  function handleClick() {
    //console.log("<<<>>>")
  }

  return (
    <article className="home">
      <div className="transbox">
        <section>
          <h1>My Phone Cart</h1>
             <div>
              <p>Get out and stretch your imagination</p>
             </div>
             <Button onClick={handleClick}
                  href="/phones"
                  className="book-now"
                  activeStyle={{
                    background: "darkblue",
                  }}>
                  Buy Now
             </Button>
        </section>
      </div>
    </article>
  );
}

export default Home;