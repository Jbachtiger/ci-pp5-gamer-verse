import React, { useRef, useState } from "react";
import Alert from "react-bootstrap/Alert";
import Button from "react-bootstrap/Button";
import Container from "react-bootstrap/Container";
import Form from "react-bootstrap/Form";
import Image from "react-bootstrap/Image";
import { useHistory } from "react-router-dom/cjs/react-router-dom.min";
import { axiosReq } from "../../api/axiosDefaults";
import Asset from "../../components/Asset";
import { useRedirect } from "../../hooks/useRedirect";
import Upload from "../../assets/upload.png";
import appStyles from "../../App.module.css";
import btnStyles from "../../styles/Button.module.css";
import createFormStyles from "../../styles/PostCreateForm.module.css";

/**
 * Render ReviewCreate form
 * Provide user with input fields to create a post
 */
function ReviewCreateForm() {
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
      console.log(formData);
    } catch (err) {
      console.log(err);
      if (err.response?.status !== 401) {
        setErrors(err.response?.data);
      }
    }
  };

  return (
    <Container>
      <h1 className={`${createFormStyles.MainTitle} mt-5`}>
        Submit a Games Review:
      </h1>
      <Form onSubmit={handleSubmit} className={createFormStyles.Container}>
        <Form.Group>
          <Form.Label>Title</Form.Label>
          <Form.Control
            type="text"
            name="title"
            value={title}
            onChange={handleChange}
            aria-label="title"
            placeholder="What are you reviewing?"
          />
        </Form.Group>
        {errors?.title?.map((message, idx) => (
          <Alert variant="warning" key={idx}>
            {message}
          </Alert>
        ))}

        <Form.Group>
          <Form.Label>Content:</Form.Label>
          <Form.Control
            as="textarea"
            rows={6}
            name="content"
            value={content}
            onChange={handleChange}
            aria-label="content"
            placeholder="Your time to shine, let us know your thoughts"
          />
        </Form.Group>
        {errors?.content?.map((message, idx) => (
          <Alert variant="warning" key={idx}>
            {message}
          </Alert>
        ))}

        <Form.Group>
          <Form.Label>Genre:</Form.Label>
          <Form.Control
            as="select"
            defaultValue="Choose..."
            name="genre"
            onChange={handleChange}
            aria-label="genre"
            placeholder="Choose your games genre"
          >
            <option value="sandbox">Sandbox</option>
            <option value="real_time">Real-time strategy</option>
            <option value="shooters">Shooters</option>
            <option value="mmo">MMO</option>
            <option value="role_playing">Role Playing</option>
            <option value="simulation_and_sport">Simulation and sports</option>
            <option value="puzzle_party">Puzzler and party</option>
            <option value="action_adventure">Action and adventure</option>
            <option value="survival_horror">Survival and horror</option>
            <option value="platformer">Platformer</option>
          </Form.Control>
        </Form.Group>
        {errors?.genre?.map((message, idx) => (
          <Alert variant="warning" key={idx}>
            {message}
          </Alert>
        ))}

        <Form.Group>
          <Form.Label>Rating:</Form.Label>
          <Form.Control
            as="select"
            defaultValue="Choose..."
            name="game_score"
            onChange={handleChange}
            aria-label="game score"
            placeholder="Give the game a score out of 5"
          >
            <option value="1">1/5</option>
            <option value="2">2/5</option>
            <option value="3">3/5</option>
            <option value="4">4/5</option>
            <option value="5">5/5</option>
          </Form.Control>
        </Form.Group>
        {errors?.game_score?.map((message, idx) => (
          <Alert variant="warning" key={idx}>
            {message}
          </Alert>
        ))}

        <Form.Group>
          <Form.Label>Game Publisher:</Form.Label>
          <Form.Control
            type="text"
            name="game_publisher"
            onChange={handleChange}
            aria-label="game publisher"
            placeholder="Publisher name"
          ></Form.Control>
        </Form.Group>
        {errors?.game_publisher?.map((message, idx) => (
          <Alert variant="warning" key={idx}>
            {message}
          </Alert>
        ))}

        <Form.Group>
          <Form.Label>Game Developer:</Form.Label>
          <Form.Control
            type="text"
            name="game_developer"
            onChange={handleChange}
            aria-label="game developer"
            placeholder="Developer name"
          ></Form.Control>
        </Form.Group>
        {errors?.game_developer?.map((message, idx) => (
          <Alert variant="warning" key={idx}>
            {message}
          </Alert>
        ))}

        <Form.Group className="text-center">
          {image ? (
            <>
              <figure>
                <Image className={appStyles.Image} src={image} rounded />
              </figure>
              <div>
                <Form.Label
                  className={`${btnStyles.Button} ${btnStyles.Wide} ${createFormStyles.FormLabels} btn`}
                  htmlFor="image-upload"
                >
                  Update image
                </Form.Label>
              </div>
            </>
          ) : (
            <Form.Label htmlFor="image-upload">
              <Asset
                className={createFormStyles.Asset}
                src={Upload}
                message="Click here to upload an image"
              />
            </Form.Label>
          )}

          <Form.File
            id="image-upload"
            accept="image/*"
            onChange={handleChangeImage}
            ref={imageInput}
          />
        </Form.Group>
        {errors?.image?.map((message, idx) => (
          <Alert variant="warning" key={idx}>
            {message}
          </Alert>
        ))}

        <Button className={`${btnStyles.Button}`} type="submit">
          Post
        </Button>
        <Button
          onClick={() => history.goBack()}
          className={`${btnStyles.Button}`}
          type="submit"
        >
          Cancel
        </Button>
      </Form>
      console.log(Form);
      <br />
    </Container>
  );
}

export default ReviewCreateForm;
