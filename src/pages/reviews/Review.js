import React from "react";
import { useHistory } from "react-router-dom/cjs/react-router-dom.min";
import { axiosRes } from "../../api/axiosDefaults";
import { useCurrentUser } from "../../contexts/CurrentUserContext";

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

  return <div>Review</div>;
};

export default Review;
