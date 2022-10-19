import React from "react";
import { Card, Media } from "react-bootstrap";
import { Link } from "react-router-dom";
import { useHistory } from "react-router-dom/cjs/react-router-dom.min";
import { axiosRes } from "../../api/axiosDefaults";
import { useCurrentUser } from "../../contexts/CurrentUserContext";
import Avatar from '../../components/Avatar';
import { MoreDropdown } from '../../components/DropdownMenu';
import styles from "../../styles/Post.module.css";

/**
 * Render the data of a single review
 */
const Review = (props) => {
  const {
    id,
    owner,
    created_on,
    modified_on,
    profile_id,
    profile_image,
    content,
    image,
    genre,
    game_score,
    game_publisher,
    game_developer,
    title,
    ReviewPage,
  } = props;

  const currentUser = useCurrentUser();
  const is_owner = currentUser?.username === owner;
  const history = useHistory();

  /**
   * Divert user to review edit page
   */
  const handleEdit = () => {
    history.push(`/reviews/${id}/edit`);
  };

  /**
   * Delete review data from Gamer Verse API
   */
  const handleDelete = async () => {
    try {
      await axiosRes.delete(`/reviews/${id}/`);
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
            {is_owner && ReviewPage && (
              <MoreDropdown
                handleEdit={handleEdit}
                handleDelete={handleDelete}
              />
            )}
          </div>
        </Media>
      </Card.Body>
  {title && <Card.Title className="text-center">{title}</Card.Title>}
      <Link to={`/reviews/${id}`}>
        <Card.Img src={image} alt={title} />
      </Link>
      <Card.Body> 
         {content && <Card.Text>{content}</Card.Text>}
        {genre && <Card.Text>Genre: {genre}</Card.Text>}
        {game_score && <Card.Text>Rating: {game_score}</Card.Text>}
        {game_publisher && <Card.Text>Game Publisher: {game_publisher}</Card.Text>}
        {game_developer && <Card.Text>Game Developer: {game_developer}</Card.Text>}
        {modified_on && <Card.Text>Last modified: {modified_on}</Card.Text>}
      </Card.Body>
    </Card>
  );
};

export default Review;
