import React, { useState } from "react";
import { useHistory } from "react-router-dom";
import { useRedirect } from "../../hooks/useRedirect";
import { axiosReq } from "../../api/axiosDefaults";

const EventCreateForm = () => {
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
    created_on: "",
    modified_on: "",
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
    created_on,
    modified_on,
    event_link,
  } = eventData;

  const history = useHistory();

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
    formData.append("data", date);
    formData.append("time", time);
    formData.append("city", city);
    formData.append("address", address);
    formData.append("price", price);
    formData.append("created_on", created_on);
    formData.append("modified_on", modified_on);
    formData.append("event_link", event_link);

    try {
      const { data } = await axiosReq.post("/events/", formData);
      history.push(`/events/${data.id}`);
      console.log(formData);
    } catch (err) {
      console.log(err);
      if (err.response?.status !== 401) {
        setErrors(err.response?.data);
      }
    }
  };
  return <h1>Submit an Event:</h1>;
};

export default EventCreateForm;
