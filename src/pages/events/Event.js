import React from "react";
import Card from "react-bootstrap/Card";
import Col from "react-bootstrap/Col";
import Media from "react-bootstrap/Media";
import Row from "react-bootstrap/Row";
import { Link } from "react-router-dom";
import { useHistory } from "react-router-dom/cjs/react-router-dom.min";
import { axiosRes } from "../../api/axiosDefaults";
import Avatar from "../../components/Avatar";
import { MoreDropdown } from "../../components/MoreDropdown";
import { useCurrentUser } from "../../contexts/CurrentUserContext";
import styles from "../../styles/Event.module.css";

/**
 * Event data to be displated in browser
 */
const Event = (props) => {
  const {
    id,
    owner,
    profile_id,
    profile_image,
    title,
    content,
    date,
    time,
    city,
    address,
    price,
    created_on,
    modified_on,
    event_link,
    eventPage,
  } = props;

  const currentUser = useCurrentUser();
  const is_owner = currentUser?.username === owner;
  const history = useHistory();

  /**
   * Divert user to event edit page
   */
  const handleEdit = () => {
    history.push(`/events/${id}/edit`);
  };

  /**
   * Delete event data from Gamer Verse API
   */
  const handleDelete = async () => {
    try {
      await axiosRes.delete(`/events/${id}/`);
      history.goBack();
    } catch (err) {
      console.log(err);
    }
  };

  return (
    <Card className={styles.Event}>
      <Card.Body>
        <Media className="align-items-center justify-content-between">
          <Link to={`/profiles/${profile_id}`}>
            <Avatar src={profile_image} height={55} />
            {owner}
          </Link>
          <div className={`${styles.EventCreatedOn} d-flex align-items-center`}>
            <span>Created on: {created_on}</span>
            <span>Last updated: {modified_on}</span>
            {is_owner && eventPage && (
              <MoreDropdown
                handleEdit={handleEdit}
                handleDelete={handleDelete}
              />
            )}
          </div>
        </Media>
      </Card.Body>
      <hr />
      <Card.Body>
        <div>
          <Link to={`/events/${id}`}>
            {title && (
              <Card.Title className="text-center pb-3">{title}</Card.Title>
            )}
          </Link>
        </div>
        <Col>
          <Row>
            {content && (
              <Card.Text className="mb-3">Details: {content}</Card.Text>
            )}
          </Row>
        </Col>
        <Col>
          <Row className="justify-content-between">
            <Card.Text>Event Price: £{price}</Card.Text>
            <Card.Text>Date: {date} </Card.Text>
            <Card.Text>Time: {time} </Card.Text>
          </Row>
        </Col>

        {address && <Card.Text>Address: {address} </Card.Text>}
        {city && <Card.Text>City: {city} </Card.Text>}

        {event_link && (
          <Card.Link href={event_link}>URL: {event_link} </Card.Link>
        )}
      </Card.Body>
    </Card>
  );
};

export default Event;
