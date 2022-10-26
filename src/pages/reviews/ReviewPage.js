import React, { useEffect, useState } from "react";
import Col from "react-bootstrap/Col";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import { useParams } from "react-router-dom/cjs/react-router-dom.min";
import { axiosReq } from "../../api/axiosDefaults";
import Review from "./Review";
import PopularProfiles from "../profiles/PopularProfiles";

/**
 * Display single review details
 */
const ReviewPage = () => {
  const { id } = useParams();
  const [review, setReview] = useState({ results: [] });

  /**
   * Retrieve review data from Gamer Verse API
   */
  useEffect(() => {
    const handleMount = async () => {
      try {
        const [{ data: review }] = await Promise.all([
          axiosReq.get(`/reviews/${id}`),
        ]);
        setReview({ results: [review] });
      } catch (err) {
        // console.log(err);
      }
    };

    handleMount();
  }, [id]);

  return (
    <Container>
      <Row className="h-100">
        <Col className="py-2 p-0 p-lg-4" lg={8}>
          <PopularProfiles mobile />
          <Review {...review.results[0]} setReview={setReview} reviewPage />
        </Col>
        <Col lg={4} className="d-none d-lg-block p-0 p-lg-0">
          <PopularProfiles />
        </Col>
      </Row>
    </Container>
  );
};

export default ReviewPage;
