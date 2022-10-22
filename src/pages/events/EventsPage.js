import React, { useEffect, useState } from "react";
import { Col, Container, Form, Row, Button } from "react-bootstrap";
import InfiniteScroll from "react-infinite-scroll-component";
import { NavLink } from "react-router-dom";
import { useLocation } from "react-router-dom/cjs/react-router-dom.min";
import { axiosReq } from "../../api/axiosDefaults";
import Asset from "../../components/Asset";
import { useCurrentUser } from "../../contexts/CurrentUserContext";

import styles from "../../styles/EventsPage.module.css";
import appStyles from "../../App.module.css";
import btnStyles from "../../styles/Button.module.css";

import NoResults from "../../assets/no-results.png";
import { fetchMoreData } from "../../utils/utils";
import PopularProfiles from "../profiles/PopularProfiles";
import Event from "./Event";

/**
 * Displays all events
 */
const EventsPage = ({ message, filter = "" }) => {
  const [events, setEvents] = useState({ results: [] });
  const [hasLoaded, setHasLoaded] = useState(false);
  const { pathname } = useLocation();

  const [query, setQuery] = useState("");

  const currentUser = useCurrentUser();

  /**
   * Displays addEvent icon
   */
  const addEventIcon = (
    <NavLink
      className={styles.NavLink}
      activeClassName={styles.Active}
      to="/events/create"
    >
      <Button className={`${styles.AddEvent} ${btnStyles.Button}`}>
        <i className="far fa-plus-square"></i>
        <strong>Add Event</strong>
      </Button>
    </NavLink>
  );

  /**
   * Fetches events from Gamer Verse API
   * Returns search results
   * Prevents API requests on each keystroke in the searchbar
   */
  useEffect(() => {
    const fetchEvents = async () => {
      try {
        const { data } = await axiosReq.get(
          `/events/?${filter}search=${query}`
        );
        setEvents(data);
        setHasLoaded(true);
      } catch (err) {
        console.log(err);
      }
    };

    setHasLoaded(false);
    const timer = setTimeout(() => {
      fetchEvents();
    }, 1000);

    return () => {
      clearTimeout(timer);
    };
  }, [filter, query, pathname]);

  return (
    <Row className="h-100">
      <Col className="py-2 p-0 p-lg-4" lg={8}>
        <Container>{currentUser && addEventIcon}</Container>
        <PopularProfiles mobile />
        <i className={`fas fa-search ${styles.SearchIcon}`} />
        <Form
          className={styles.SearchBar}
          onSubmit={(event) => event.preventDefault()}
        >
          <Form.Control
            value={query}
            onChange={(event) => setQuery(event.target.value)}
            type="text"
            className="mr-sm-2"
            placeholder="Search events"
          />
        </Form>

        {hasLoaded ? (
          <>
            {events.results.length ? (
              <InfiniteScroll
                children={events.results.map((event) => (
                  <Event key={event.id} {...event} setEvents={setEvents} />
                ))}
                dataLength={events.results.length}
                loader={<Asset spinner />}
                hasMore={!!events.next}
                next={() => fetchMoreData(events, setEvents)}
              />
            ) : (
              <Container className={appStyles.Content}>
                <Asset src={NoResults} message={message} />
              </Container>
            )}
          </>
        ) : (
          <Container className={appStyles.Content}>
            <Asset spinner />
          </Container>
        )}
      </Col>
      <Col md={4} className="d-none d-lg-block p-0 p-lg-3">
        <PopularProfiles />
      </Col>
    </Row>
  );
};

export default EventsPage;
