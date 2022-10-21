import React from "react";
import { Card, Container } from "react-bootstrap";
import styles from "../../styles/About.module.css";

function About() {
  return (
    <Container>
      <Card className={styles.About}>
        <Card.Body>
          <Card.Title><h1>About Gamer Verse</h1></Card.Title>
          <hr />
          <Card.Text>
            {" "}
            Gamer Verse has been built by gamers for gamers, to create a
            community for us all to discuss and read about our favourite gaming
            related topics.
          </Card.Text>
          <Card.Text>
            {" "}
            We hope you will enjoy browsing the site, being able to interact
            with each others posts around gaming, read some of our short to the
            point gaming reviews and be able to find a list of upcoming gaming
            events for that in person touch.
          </Card.Text>
          <Card.Text>
            {" "}
            More than ever it is important to have a community and your tribe.
            We hope we can bring our community together and be social. Users are
            able to create posts, as well as comment and like each others posts.
            Tell the community what your games your playing, your thoughts on a
            bit of gaming art or anythign else gaming related and start a
            conversation.
          </Card.Text>
          <Card.Text>
            {" "}
            Found a users posts that resonate with you, that's great! Never miss
            a post of there's again by simply following that user.
          </Card.Text>
          <Card.Text>
            {" "}
            We hope you enjoy the platform as much as we do, get stuck in, talk
            about games and most importantly have fun.
          </Card.Text>
          <hr />
          <h2>Check out my socials:</h2>
          <a
            href="https://github.com/Jbachtiger"
            target="_blank"
            rel="noreferrer"
            aria-label="Visit my Github page (opens in a new tab)"
            className="p-3"
          >
            <i class="fab fa-github"> GitHub</i>
          </a>

          <a
            href="https://www.linkedin.com/in/john-bachtiger/"
            target="_blank"
            rel="noreferrer"
            aria-label="Visit my LinkedIn page (opens in a new tab)"
          >
            <i class="fab fa-linkedin">LinkedIn</i>
          </a>
          <hr />
          <p>
            Project created by John Bachtiger and is for educational purposes
            only.
          </p>
        </Card.Body>
      </Card>
    </Container>
  );
}

export default About;
