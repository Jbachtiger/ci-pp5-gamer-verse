import React from "react";
import Container from "react-bootstrap/Container"
import NoResults404 from "../assets/no-results-404.png";
import Asset from "./Asset";
import styles from "../styles/NotFound.module.css";

const NotFound = () => {
  return (
    <Container>
      <div className={styles.NotFoundGraphic}>
        <Asset
          src={NoResults404}
        />
      </div>
    </Container>
  );
};

export default NotFound;
