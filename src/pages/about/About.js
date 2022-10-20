import React from "react";
import { Container } from "react-bootstrap";

function About() {
  return (
    <Container>
      <h1>About Gamer Verse</h1>
      <hr />
      <p>
        Gamer Verse has been built by gamers for gamers, to create a community
        for us all to discuss and read about our favourite gaming related
        topics.
      </p>
      <p>
        We hope you will enjoy browsing the site, being able to interact with
        each others posts around gaming, read some of our short to the point
        gaming reviews and be able to find a list of upcoming gaming events for
        that in person touch.
      </p>
      <p>
        More than ever it is important to have a community and your tribe. We
        hope we can bring our community together and be social. Users are able
        to create posts, as well as comment and like each others posts. Tell the
        community what your games your playing, your thoughts on a bit of gaming
        art or anythign else gaming related and start a conversation.
      </p>
      <p>
        Found a users posts that resonate with you, that's great! Never miss a
        post of there's again by simply following that user.
      </p>
      <p>
        We hope you enjoy the platform as much as we do, get stuck in, talk
        about games and most importantly have fun.
      </p>
      <hr />
      <h2>Check out my socials:</h2>
      <a
        href="https://github.com/Jbachtiger"
        target="_blank"
        rel="noreferrer"
        aria-label="Visit my Github page (opens in a new tab)"
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
      <hr/>
      <p>Project created by John Bachtiger and is for educational purposes only.</p>
    </Container>
  );
}

export default About;
