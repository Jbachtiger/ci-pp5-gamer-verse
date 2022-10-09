import React, { useRef, useState } from "react";
import { Container, Form, Button } from "react-bootstrap";
import { useHistory } from "react-router-dom/cjs/react-router-dom.min";
import { axiosReq } from "../../api/axiosDefaults";

/**
 * Render PostCreate form
 * Provide user with input fields to create a post
 */
const PostCreateForm = () => {
    const [errors, setErrors] = useState({});

    const [postData, setPostData] = useState({
        title: "",
        decription: "",
        game_medium: "",
        image: "",
    });

    const { title, description, game_medium, image } = postData

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

      const handleSubmit = async (event) => {
        event.preventDefault();
        const formData = new FormData();

        formData.append("title", title);
        formData.append("description", description);
        formData.append("game_medium", game_medium);
        formData.append("image", image);

        try {
            const { data } = await axiosReq.post("/posts/", formData);
            history.push(`/posts/${data.id}`);
          } catch (err) {
            console.log(err);
            if (err.response?.status !== 401) {
              setErrors(err.response?.data);
            }
          }
        };

  return (
    <Container>
      <Form>
        <Form.Group controlId="formBasicEmail">
          <Form.Label>Title</Form.Label>
          <Form.Control type="email" placeholder="Enter email" />
          <Form.Text className="text-muted">
            We'll never share your email with anyone else.
          </Form.Text>
        </Form.Group>

        <Form.Group controlId="formBasicEmail">
          <Form.Label>What's on your mind?</Form.Label>
          <Form.Control type="email" placeholder="Enter email" />
          <Form.Text className="text-muted">
            We'll never share your email with anyone else.
          </Form.Text>
        </Form.Group>

        <Form.Group controlId="formBasicEmail">
          <Form.Label>Topic you want to talk about</Form.Label>
          <Form.Control type="email" placeholder="Enter email" />
          <Form.Text className="text-muted">
            We'll never share your email with anyone else.
          </Form.Text>
        </Form.Group>

        <Form.Group controlId="formBasicEmail">
          <Form.Label>IMAGE</Form.Label>
          <Form.Control type="email" placeholder="Enter email" />
          <Form.Text className="text-muted">
            We'll never share your email with anyone else.
          </Form.Text>
        </Form.Group>
        
        <Button variant="primary" type="submit">
          Post
        </Button>
        <Button variant="primary" type="submit">
          Cancel
        </Button>
      </Form>
    </Container>
  );
};

export default PostCreateForm;
