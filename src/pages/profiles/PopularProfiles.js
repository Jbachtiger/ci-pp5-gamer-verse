import React from "react";
import { Container } from "react-bootstrap";
import Asset from "../../components/Asset";
import appStyles from "../../App.module.css";
import styles from "../../styles/PopularProfiles.module.css";
import { useProfileData } from "../../contexts/ProfileDataContext";
import Profile from "./Profile";

/**
 * Retrieves profiles from Gamer Verse API
 * Return most popular followed dependent on count
 * Code for functions provided by Moments walkthrough
 */
const PopularProfiles = ({ mobile }) => {
  const { popularProfiles } = useProfileData();

  return (
    <Container
      className={`${appStyles.Content} ${
        mobile && "d-lg-none text-center mb-3"
      } mt-4`}
    >
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
