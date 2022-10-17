import React, { useEffect, useState } from "react";
import { Container } from "react-bootstrap";
import { axiosReq } from "../../api/axiosDefaults";
import Asset from "../../components/Asset";
import { useCurrentUser } from "../../contexts/CurrentUserContext";
import appStyles from "../../App.module.css";
import styles from "../../styles/PopularProfiles.module.css";
import Profile from "./Profile";


/**
 * Retrieves profiles from Gamer Verse API
 * Return most popular followed dependent on count
 * Code for functions provided by Moments walkthrough
 */
const PopularProfiles = ({ mobile }) => {
  const [profileData, setProfileData] = useState({
    pageprofile: { results: [] },
    popularProfiles: { results: [] },
  });
  const { popularProfiles } = profileData;
  const currentUser = useCurrentUser();

  useEffect(() => {
    const handleMount = async () => {
      try {
        const { data } = await axiosReq.get(
          "/profiles/?ordering=-followers_count"
        );
        setProfileData((prevState) => ({
          ...prevState,
          popularProfiles: data,
        }));
      } catch (err) {
        console.log(err);
      }
    };

    handleMount();
  }, [currentUser]);

  return (
    <Container className={`${appStyles.Content} ${mobile && "d-lg-none text-center mb-3"} mt-4`}>
      {popularProfiles.results.length ? (
        <>
          <h4 className={styles.Header}>Most active community gamers:</h4>
          {mobile ? (
            <div className="d-flex justify-content-around">
              {popularProfiles.results.slice(0, 4).map((profile) => (
                <Profile key={profile.id} profile={profile} mobile />
              ))}
            </div>
          ) : (
            popularProfiles.results.map((profile) => (
              <Profile key={profile.id} profile={profile} />
            ))
          )}
        </>
      ) : (
        <Asset spinner />
      )}
    </Container>
  );
};

export default PopularProfiles;