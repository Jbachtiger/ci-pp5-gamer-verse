import React from "react";
import { Container } from "react-bootstrap";
import NoResults from "../assets/no-results.png";
import Asset from "./Asset";
import styles from "../styles/NotFound.module.css";

const NotFound = () => {
  return (
    <Container>
      <div className={styles.NotFoundGraphic}>
        <Asset
          src={NoResults}
        />
      </div>
    </Container>
  );
};

export default NotFound;
