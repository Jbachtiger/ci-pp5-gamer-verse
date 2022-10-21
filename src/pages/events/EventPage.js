import React, { useEffect, useState } from 'react'
import { Col, Container, Row } from 'react-bootstrap';
import { useParams } from 'react-router-dom/cjs/react-router-dom.min';
import { axiosReq } from '../../api/axiosDefaults';
import PopularProfiles from '../profiles/PopularProfiles';
import Event from './Event';

/**
 * Display single event details
 */
 const EventPage = () => {
    const { id } = useParams();
    const [event, setEvent] = useState({ results: [] });
  
  /**
   * Retrieve event data from Gamer Verse API
   */
    useEffect(() => {
      const handleMount = async () => {
        try {
          const [{ data: event }] = await Promise.all([
            axiosReq.get(`/events/${id}`),
          ]);
          setEvent({ results: [event] });
        } catch (err) {
          console.log(err);
        }
      };
  
      handleMount();
    }, [id]);
  
    return (
      <Container>
        <Row className="h-100">
          <Col className="py-2 p-0 p-lg-4" lg={8}>
            <PopularProfiles mobile />
            <Event {...event.results[0]} setEvent={setEvent} eventPage />
          </Col>
          <Col lg={4} className="d-none d-lg-block p-0 p-lg-0">
          <PopularProfiles />
        </Col>
        </Row>
      </Container>
    );
  };
  
  export default EventPage