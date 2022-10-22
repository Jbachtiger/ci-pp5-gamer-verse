import React, { useEffect, useState } from "react";
import { useHistory } from "react-router-dom";
import { useRedirect } from "../../hooks/useRedirect";
import { axiosReq } from "../../api/axiosDefaults";
import { Alert, Button, Container, Form } from "react-bootstrap";

import btnStyles from "../../styles/Button.module.css";
import createFormStyles from "../../styles/PostCreateForm.module.css";
import { useParams } from "react-router-dom/cjs/react-router-dom.min";

const EventEditForm = () => {
  useRedirect("loggedOut");
  const [errors, setErrors] = useState({});

  const [eventData, setEventData] = useState({
    title: "",
    content: "",
    date: "",
    time: "",
    city: "",
    address: "",
    price: "",
    event_link: "",
  });

  const {
    title,
    content,
    date,
    time,
    city,
    address,
    price,
    event_link,
  } = eventData;

  const history = useHistory();
  const { id } = useParams();

  /**
   * Populate EditForm fields with previously added data
   */
  useEffect(() => {
    const handleMount = async () => {
      try {
        const { data } = await axiosReq.get(`/events/${id}/`);
        const {
          title,
          content,
          date,
          time,
          city,
          address,
          price,
          event_link,
          is_owner,
        } = data;

        is_owner
          ? setEventData({
              title,
              content,
              date,
              time,
              city,
              address,
              price,
              event_link,
            })
          : history.push("/");
      } catch (err) {
        // console.log(err);
      }
    };

    handleMount();
  }, [history, id]);

  /**
   * Populate the eventData strings
   */
  const handleChange = (event) => {
    setEventData({
      ...eventData,
      [event.target.name]: event.target.value,
    });
  };

  /**
   * Push inputted data to Gamer Verse API
   * Redirect user to event page upon successful submit
   */
  const handleSubmit = async (event) => {
    event.preventDefault();
    const formData = new FormData();

    formData.append("title", title);
    formData.append("content", content);
    formData.append("date", date);
    formData.append("time", time);
    formData.append("city", city);
    formData.append("address", address);
    formData.append("price", price);
    formData.append("event_link", event_link);

    try {
      const { data } = await axiosReq.put(`/events/${id}/`, formData);
      history.push(`/events/${data.id}`);
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
      <h1 className={`${createFormStyles.MainTitle} mt-5`}>Submit an Event:</h1>
      <Form onSubmit={handleSubmit} className={createFormStyles.Container}>
        <Form.Group>
          <Form.Label>Event Name:</Form.Label>
          <Form.Control
            type="text"
            name="title"
            value={title}
            onChange={handleChange}
            aria-label="title"
            placeholder="What is your events name?"
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
            placeholder="Tell us about your event"
          />
        </Form.Group>
        {errors?.content?.map((message, idx) => (
          <Alert variant="warning" key={idx}>
            {message}
          </Alert>
        ))}

        <Form.Group>
          <Form.Label>Price:</Form.Label>
          <Form.Control
            type="text"
            name="price"
            value={price}
            onChange={handleChange}
            aria-label="price"
            placeholder="How much is entry to the event?"
          />
        </Form.Group>
        {errors?.price?.map((message, idx) => (
          <Alert variant="warning" key={idx}>
            {message}
          </Alert>
        ))}

        <Form.Group>
          <Form.Label>Date:</Form.Label>
          <Form.Control
            type="date"
            name="date"
            value={date}
            onChange={handleChange}
            aria-label="date"
            placeholder="What date is your event on?"
          />
        </Form.Group>
        {errors?.date?.map((message, idx) => (
          <Alert variant="warning" key={idx}>
            {message}
          </Alert>
        ))}

        <Form.Group>
          <Form.Label>Time:</Form.Label>
          <Form.Control
            type="time"
            name="time"
            value={time}
            onChange={handleChange}
            aria-label="time"
            placeholder="What time is your event on?"
          />
        </Form.Group>
        {errors?.time?.map((message, idx) => (
          <Alert variant="warning" key={idx}>
            {message}
          </Alert>
        ))}

        <Form.Group>
          <Form.Label>Address:</Form.Label>
          <Form.Control
            type="text"
            name="address"
            value={address}
            onChange={handleChange}
            aria-label="address"
            placeholder="What is the event address?"
          />
        </Form.Group>
        {errors?.address?.map((message, idx) => (
          <Alert variant="warning" key={idx}>
            {message}
          </Alert>
        ))}

        <Form.Group>
          <Form.Label>City:</Form.Label>
          <Form.Control
            type="text"
            name="city"
            value={city}
            onChange={handleChange}
            aria-label="city"
            placeholder="What city is the event being held in?"
          />
        </Form.Group>
        {errors?.city?.map((message, idx) => (
          <Alert variant="warning" key={idx}>
            {message}
          </Alert>
        ))}

        <Form.Group>
          <Form.Label>URL:</Form.Label>
          <Form.Control
            type="url"
            name="event_link"
            value={event_link}
            onChange={handleChange}
            aria-label="event_link"
            placeholder="Add a link to your event"
          />
        </Form.Group>
        {errors?.event_link?.map((message, idx) => (
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
};

export default EventEditForm;
