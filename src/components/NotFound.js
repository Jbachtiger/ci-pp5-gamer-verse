import React from "react";
import { Container } from "react-bootstrap";
import NoResults from "../assets/no-results.png";
import Asset from "./Asset";

const NotFound = () => {
  return (
    <Container>
      <div>
        <Asset
          src={NoResults}
          message={`Sorry, the page you are looking for was not found! Go back and try a different link!`}
        />
      </div>
    </Container>
  );
};

export default NotFound;
