import React from "react";
import { Card, Media } from "react-bootstrap";
import { Link } from "react-router-dom";
import { useHistory } from "react-router-dom/cjs/react-router-dom.min";
import { axiosRes } from "../../api/axiosDefaults";
import Avatar from "../../components/Avatar";
import { MoreDropdown } from "../../components/MoreDropdown";
import { useCurrentUser } from "../../contexts/CurrentUserContext";

import styles from "../../styles/Post.module.css";

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
    <Card className={styles.Post}>
      <Card.Body>
        <Media className="align-items-center justify-content-between">
          <Link to={`/profiles/${profile_id}`}>
            <Avatar src={profile_image} height={55} />
            {owner}
          </Link>

          <div className="d-flex align-items-center">
            <span>Created on: {created_on}</span>
            <span>Modified on: {modified_on}</span>
            {is_owner && eventPage && (
              <MoreDropdown
                handleEdit={handleEdit}
                handleDelete={handleDelete}
              />
            )}
          </div>
        </Media>
      </Card.Body>
      <Card.Body>
        <Link to={`/events/${id}`}>
          {title && <Card.Title className="text-center">{title}</Card.Title>}
        </Link>
        {price && <Card.Text>Event Price: {price}</Card.Text>}
        {date && <Card.Text>Date: {date} </Card.Text>}
        {time && <Card.Text>Time: {time} </Card.Text>}
        {address && <Card.Text>Address: {address} </Card.Text>}
        {city && <Card.Text>City: {city} </Card.Text>}
        {content && <Card.Text>{content}</Card.Text>}
        {event_link && <Card.Text>URL: {event_link} </Card.Text>}
      </Card.Body>
    </Card>
  );
};

export default Event;
