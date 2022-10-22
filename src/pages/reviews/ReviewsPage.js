import React, { useEffect, useState } from "react";
import { Container, Form, Button } from "react-bootstrap";
import Col from "react-bootstrap/Col";
import Row from "react-bootstrap/Row";
import { useLocation } from "react-router-dom/cjs/react-router-dom.min";
import { axiosReq } from "../../api/axiosDefaults";
import appStyles from "../../App.module.css";
import styles from "../../styles/ReviewsPage.module.css";
import btnStyles from "../../styles/Button.module.css";
import Asset from "../../components/Asset";
import { fetchMoreData } from "../../utils/utils";
import NoResults from "../../assets/no-results.png";
import { useCurrentUser } from "../../contexts/CurrentUserContext";
import { NavLink } from "react-router-dom";
import InfiniteScroll from "react-infinite-scroll-component";
import PopularProfiles from "../profiles/PopularProfiles";
import Review from "./Review";

/**
 * Displays all reviews
 */

function ReviewsPage({ message, filter = "" }) {
  const [reviews, setReviews] = useState({ results: [] });
  const [hasLoaded, setHasLoaded] = useState(false);
  const { pathname } = useLocation();

  const [query, setQuery] = useState("");

  const currentUser = useCurrentUser();

  /**
   * Displays addReview icon
   */
  const addReviewIcon = (
    <NavLink
      className={styles.NavLink}
      activeClassName={styles.Active}
      to="/reviews/create"
    >
      <Button className={`${styles.AddReview} ${btnStyles.Button}`}>
        <i className="far fa-plus-square"></i>
        <strong>Add Review</strong>
      </Button>
    </NavLink>
  );

  /**
   * Fetches events from Gamer Verse API
   * Returns search results
   * Prevents API requests on each keystroke in the searchbar
   */
  useEffect(() => {
    const fetchReviews = async () => {
      try {
        const { data } = await axiosReq.get(
          `/reviews/?${filter}search=${query}`
        );
        setReviews(data);
        setHasLoaded(true);
      } catch (err) {
        console.log(err);
      }
    };

    setHasLoaded(false);
    const timer = setTimeout(() => {
      fetchReviews();
    }, 1000);

    return () => {
      clearTimeout(timer);
    };
  }, [filter, query, pathname]);

  return (
    <Row className="h-100">
      <Col className="py-2 p-0 p-lg-4" lg={8}>
        <Container>{currentUser && addReviewIcon}</Container>
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
            placeholder="Search reviews"
          />
        </Form>

        {hasLoaded ? (
          <>
            {reviews.results.length ? (
              <InfiniteScroll
                children={reviews.results.map((review) => (
                  <Review key={review.id} {...review} setReviews={setReviews} />
                ))}
                dataLength={reviews.results.length}
                loader={<Asset spinner />}
                hasMore={!!reviews.next}
                next={() => fetchMoreData(reviews, setReviews)}
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
}

export default ReviewsPage;
