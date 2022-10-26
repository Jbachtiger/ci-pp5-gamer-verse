import React, { useRef, useState } from "react";
import Container from "react-bootstrap/Container";
import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";
import Alert from "react-bootstrap/Alert";
import Image from "react-bootstrap/Image";
import { useHistory } from "react-router-dom/cjs/react-router-dom.min";
import { axiosReq } from "../../api/axiosDefaults";
import Asset from "../../components/Asset";
import Upload from "../../assets/upload.png";
import appStyles from "../../App.module.css";
import btnStyles from "../../styles/Button.module.css";
import createFormStyles from "../../styles/PostCreateForm.module.css";
import { useRedirect } from "../../hooks/useRedirect";

/**
 * Render PostCreate form
 * Provide user with input fields to create a post
 */
const PostCreateForm = () => {
  useRedirect("loggedOut");
  const [errors, setErrors] = useState({});

  const [postData, setPostData] = useState({
    title: "",
    description: "",
    game_medium: "",
    image: "",
  });

  const { title, description, game_medium, image } = postData;

  const imageInput = useRef(null);
  const history = useHistory();

  /**
   * Populate the postData strings
   */
  const handleChange = (event) => {
    setPostData({
      ...postData,
      [event.target.name]: event.target.value,
    });
  };

  /**
   * Change uploaded image and clear previously uploaded image
   */
  const handleChangeImage = (event) => {
    if (event.target.files.length) {
      URL.revokeObjectURL(image);
      setPostData({
        ...postData,
        image: URL.createObjectURL(event.target.files[0]),
      });
    }
  };

  /**
   * Push data to Gamer Verse API
   */
  const handleSubmit = async (event) => {
    event.preventDefault();
    const formData = new FormData();

    formData.append("title", title);
    formData.append("description", description);
    formData.append("game_medium", game_medium);
    formData.append("image", imageInput.current.files[0]);

    try {
      const { data } = await axiosReq.post("/posts/", formData);
      history.push(`/posts/${data.id}`);
    } catch (err) {
      //   console.log(err);
      if (err.response?.status !== 401) {
        setErrors(err.response?.data);
      }
    }
  };

  return (
    <Container>
      <h1 className={`${createFormStyles.MainTitle} mt-5`}>
        Share your passion for everything gaming
      </h1>
      <strong>
        <p
          className={`${createFormStyles.Paragraph} ${createFormStyles.BlackFont}`}
        >
          Discuss your favourite games, gaming art or gaming related topic! Our
          community is inclusive and we'd love to see what you've got to share!
        </p>
      </strong>
      <Form onSubmit={handleSubmit} className={createFormStyles.Container}>
        <Form.Group>
          <Form.Label>Title</Form.Label>
          <Form.Control
            type="text"
            name="title"
            value={title}
            onChange={handleChange}
            aria-label="title"
            placeholder="Be creative, give us an idea of what your post is about"
          />
        </Form.Group>
        {errors?.title?.map((message, idx) => (
          <Alert variant="warning" key={idx}>
            {message}
          </Alert>
        ))}

        <Form.Group>
          <Form.Label>What's on your mind?</Form.Label>
          <Form.Control
            as="textarea"
            rows={6}
            name="description"
            value={description}
            onChange={handleChange}
            aria-label="description"
            placeholder="It's time to get those writing juices flowing"
          />
        </Form.Group>
        {errors?.description?.map((message, idx) => (
          <Alert variant="warning" key={idx}>
            {message}
          </Alert>
        ))}

        <Form.Group>
          <Form.Label>Topic you want to talk about:</Form.Label>
          <Form.Control
            as="select"
            defaultValue="Choose..."
            name="game_medium"
            onChange={handleChange}
            aria-label="game medium"
            placeholder="Choose what game category you'd like to post about"
          >
            <option value="video_games">Video games</option>
            <option value="boardgames">Boardgames</option>
            <option value="card_games">Card games</option>
            <option value="game_art">Game Art</option>
            <option value="other">Other</option>
          </Form.Control>
        </Form.Group>
        {errors?.game_medium?.map((message, idx) => (
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
      <br />
    </Container>
  );
};

export default PostCreateForm;
