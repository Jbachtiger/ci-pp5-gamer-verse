import { createContext, useContext, useEffect, useState } from "react";
import { axiosReq } from "../api/axiosDefaults";
import { useCurrentUser } from "../contexts/CurrentUserContext";
// import { followHelper, unfollowHelper } from "../utils/utils";

/**
 * Code provided in Moments walkthrough
 */

const ProfileDataContext = createContext();
const SetProfileDataContext = createContext();

export const useProfileData = () => useContext(ProfileDataContext);
export const useSetProfileData = () => useContext(SetProfileDataContext);

export const ProfileDataProvider = ({ children }) => {
  const [profileData, setProfileData] = useState({
    pageProfile: { results: [] },
    popularProfiles: { results: [] },
  });

  const currentUser = useCurrentUser();

  /**
   * Map user follow count in Gamer Verse API
   * Update the follow count when button is clicked
   */
  // const handleFollow = async (clickedProfile) => {
  //   try {
  //     const { data } = await axiosRes.post("/followers/", {
  //       followed: clickedProfile.id,
  //     });

  //     setProfileData((prevState) => ({
  //       ...prevState,
  //       pageProfile: {
  //         results: prevState.pageProfile.results.map((profile) =>
  //           followHelper(profile, clickedProfile, data.id)
  //         ),
  //       },
  //       popularProfiles: {
  //         ...prevState.popularProfiles,
  //         results: prevState.popularProfiles.results.map((profile) =>
  //           followHelper(profile, clickedProfile, data.id)
  //         ),
  //       },
  //     }));
  //   } catch (err) {
  //     // console.log(err);
  //   }
  // };

  /**
   * Delete follow from Gamer Verse API
   * Update the follow count in the browser view when a button is clicked
   * with page refresh
   */

  // const handleUnfollow = async (clickedProfile) => {
  //   try {
  //     await axiosRes.delete(`/followers/${clickedProfile.following_id}/`);

  //     setProfileData((prevState) => ({
  //       ...prevState,
  //       pageProfile: {
  //         results: prevState.pageProfile.results.map((profile) =>
  //           unfollowHelper(profile, clickedProfile)
  //         ),
  //       },
  //       popularProfiles: {
  //         ...prevState.popularProfiles,
  //         results: prevState.popularProfiles.results.map((profile) =>
  //           unfollowHelper(profile, clickedProfile)
  //         ),
  //       },
  //     }));
  //   } catch (err) {
  //     // console.log(err);
  //   }
  // };

  /**
   * Retreive the profile data from the Gamer Verse API
   * Order the profiles by highest follower count
   */

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
        // console.log(err);
      }
    };

    handleMount();
  }, [currentUser]);

  return (
    <ProfileDataContext.Provider value={profileData}>
      <SetProfileDataContext.Provider value={setProfileData}>
        {children}
      </SetProfileDataContext.Provider>
    </ProfileDataContext.Provider>
  );
};
