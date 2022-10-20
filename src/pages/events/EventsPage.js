import React, { useEffect, useState } from 'react'
import { NavLink } from 'react-router-dom';
import { useLocation } from 'react-router-dom/cjs/react-router-dom.min';
import { axiosReq } from '../../api/axiosDefaults';
import { useCurrentUser } from '../../contexts/CurrentUserContext';

import styles from "../../styles/PostsPage.module.css";

/**
* Displays all events
*/
const EventsPage = () => {
    const [events, setEvents] = useState({ results: [] });
const [hasLoaded, setHasLoaded] = useState(false);
const { pathname } = useLocation();

const [query, setQuery] = useState("");

const currentUser = useCurrentUser();

/**
* Displays addEvent icon
*/
const addEventIcon = (
<NavLink className={styles.NavLink} activeClassName={styles.Active} to="/events/create">
  <i className="far fa-plus-square"></i>Add Event
</NavLink>
);

/**
* Fetches events from Gamer Verse API
* Returns search results
*/
useEffect(() => {
const fetchEvents= async () => {
try {
const { data } = await axiosReq.get(`/events/?${filter}search=${query}`);
setEvents(data);
setHasLoaded(true);
} catch (err) {
console.log(err);
}
};

setHasLoaded(false);
const timer = setTimeout(() => {
fetchEvents();
}, 1000);

return () => {
clearTimeout(timer);
};
}, [filter, query, pathname]);
    
  return (
    <div>EventsPage</div>
  )
}

export default EventsPage