import React, { useRef, useState } from "react";
import { useHistory } from "react-router-dom/cjs/react-router-dom.min";
import { axiosReq } from "../../api/axiosDefaults";
import { useRedirect } from "../../hooks/useRedirect";

const ReviewCreateForm = () => {
  useRedirect("loggedOut");
  const [errors, setErrors] = useState({});

  const [reviewData, setReviewData] = useState({
    title: "",
    content: "",
    image: "",
    genre: "",
    game_score: "",
    game_publisher: "",
    game_developer: "",
  });

  const {
    title,
    content,
    image,
    genre,
    game_score,
    game_publisher,
    game_developer,
  } = reviewData;

  const imageInput = useRef(null);
  const history = useHistory();

  /**
   * Populate the reviewData strings
   */
  const handleChange = (event) => {
    setReviewData({
      ...reviewData,
      [event.target.name]: event.target.value,
    });
  };

  /**
   * Change uploaded image and clear previously uploaded image
   */
  const handleChangeImage = (event) => {
    if (event.target.files.length) {
      URL.revokeObjectURL(image);
      setReviewData({
        ...reviewData,
        image: URL.createObjectURL(event.target.files[0]),
      });
    }
  };

  const handleSubmit = async (event) => {
    event.preventDefault();
    const formData = new FormData();

    formData.append("title", title);
    formData.append("content", content);
    formData.append("image", imageInput.current.files[0]);
    formData.append("genre", genre);
    formData.append("game_score", game_score);
    formData.append("game_publisher", game_publisher);
    formData.append("game_developer", game_developer);

    try {
      const { data } = await axiosReq.post("/reviews/", formData);
      history.push(`/reviews/${data.id}`);
    } catch (err) {
      // console.log(err);
      if (err.response?.status !== 401) {
        setErrors(err.response?.data);
      }
    }
  };

  return <h1>Gaming Reviews</h1>;
};

export default ReviewCreateForm;
