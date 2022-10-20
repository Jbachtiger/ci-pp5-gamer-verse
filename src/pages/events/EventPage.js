import React, { useEffect, useState } from 'react'
import { Col, Container } from 'react-bootstrap';
import { useParams } from 'react-router-dom/cjs/react-router-dom.min';
import { axiosReq } from '../../api/axiosDefaults';
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
        <Col>
          <Event {...event.results[0]} setEvent={setEvent} eventPage />
        </Col>
      </Container>
    );
  }
  
  export default EventPage