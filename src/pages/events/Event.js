import React from 'react'
import { useHistory } from 'react-router-dom/cjs/react-router-dom.min';
import { axiosRes } from '../../api/axiosDefaults';
import { useCurrentUser } from '../../contexts/CurrentUserContext';

const Event = () => {
    const Review = (props) => {
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
    <div>Event</div>
  )
}}

export default Event