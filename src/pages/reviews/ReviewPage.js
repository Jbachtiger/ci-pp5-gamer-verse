import React, { useEffect, useState } from 'react'
import { Col, Container } from 'react-bootstrap';
import { useParams } from 'react-router-dom/cjs/react-router-dom.min';
import { axiosReq } from '../../api/axiosDefaults';
import Review from './Review';

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
        console.log(err);
      }
    };

    handleMount();
  }, [id]);

return (
    <Container>
      <Col>
        <Review {...review.results[0]} setReview={setReview} reviewPage />
      </Col>
    </Container>
  );
}

export default ReviewPage