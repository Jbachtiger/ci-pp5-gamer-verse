import React, { useEffect, useState } from 'react'
import { NavLink } from 'react-router-dom';
import { useLocation } from 'react-router-dom/cjs/react-router-dom.min';
import { axiosReq } from '../../api/axiosDefaults';
import { useCurrentUser } from '../../contexts/CurrentUserContext';

import styles from "../../styles/PostsPage.module.css";

const ReviewsPage = () => {
    function ReviewsPage({ message, filter = "" }) {
        const [reviews, setReviews] = useState({ results: [] });
        const [hasLoaded, setHasLoaded] = useState(false);
        const { pathname } = useLocation();
      
        const [query, setQuery] = useState("");
      
        const currentUser = useCurrentUser();
      
        /**
       * Displays addReview icon
       */
        const addReviewIcon = (
          <NavLink
            className={styles.NavLink}
            activeClassName={styles.Active}
            to="/reviews/create"
          >
            <i className="far fa-plus-square"></i>Add Review
          </NavLink>
        );
      
         /**
       * Fetches reviews from Gamer Verse API
       * Returns search results
       */
        useEffect(() => {
          const fetchReviews= async () => {
            try {
              const { data } = await axiosReq.get(`/reviews/?${filter}search=${query}`);
              setReviews(data);
              setHasLoaded(true);
            } catch (err) {
              console.log(err);
            }
          };
      
          setHasLoaded(false);
          const timer = setTimeout(() => {
            fetchReviews();
          }, 1000);
      
          return () => {
            clearTimeout(timer);
          };
        }, [filter, query, pathname]);
    
  return (
    <h1>Reviews Page</h1>
  )
}}

export default ReviewsPage