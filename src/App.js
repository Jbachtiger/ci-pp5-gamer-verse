import styles from "./App.module.css";
import NavBar from "./components/NavBar";
import { Container } from "react-bootstrap";
import { Route, Switch } from "react-router-dom";
import "./api/axiosDefaults";
import SignUpForm from "./pages/auth/SignUpForm";
import SignInForm from "./pages/auth/SignInForm";
import PostCreateForm from "./pages/posts/PostCreateForm";
import PostPage from "./pages/posts/PostPage";
import PostsPage from "./pages/posts/PostsPage";
import { useCurrentUser } from "./contexts/CurrentUserContext";
import PostEditForm from "./pages/posts/PostEditForm";
import ProfilePage from "./pages/profiles/ProfilePage";
import UsernameForm from "./pages/profiles/UsernameForm";
import PasswordForm from "./pages/profiles/PasswordForm";
import ProfileEditForm from "./pages/profiles/ProfileEditForm";
import ReviewCreateForm from "./pages/reviews/ReviewCreateForm";
import ReviewEditForm from "./pages/reviews/ReviewEditForm";
import ReviewPage from "./pages/reviews/ReviewPage";
import ReviewsPage from "./pages/reviews/ReviewsPage";
import About from "./pages/about/About";
import EventCreateForm from "./pages/events/EventCreateForm";
import EventEditForm from "./pages/events/EventEditForm";
import EventPage from "./pages/events/EventPage";
import EventsPage from "./pages/events/EventsPage";
import NotFound from "./components/NotFound";

function App() {
  const currentUser = useCurrentUser();
  const profile_id = currentUser?.profile_id || "";

  return (
    <div className={styles.App}>
      <NavBar />
      <Container className={styles.Main}>
        <Switch>
          <Route
            exact
            path="/"
            render={() => <PostsPage message="No results found." />}
          />
          <Route
            exact
            path="/feed"
            render={() => (
              <PostsPage
                message="No results found."
                filter={`owner__followed__owner__profile=${profile_id}&`}
              />
            )}
          />
          <Route
            exact
            path="/favourites"
            render={() => (
              <PostsPage
                message="No results found."
                filter={`likes__owner__profile=${profile_id}&ordering=-likes__created_on&`}
              />
            )}
          />
          <Route exact path="/reviews" render={() => <ReviewsPage />} />
          <Route
            exact
            path="/reviews/create"
            render={() => <ReviewCreateForm />}
          />
          <Route
            exact
            path="/reviews/:id/edit"
            render={() => <ReviewEditForm />}
          />
          <Route exact path="/reviews/:id" render={() => <ReviewPage />} />
          <Route exact path="/events" render={() => <EventsPage />} />
          <Route
            exact
            path="/events/create"
            render={() => <EventCreateForm />}
          />
          <Route
            exact
            path="/events/:id/edit"
            render={() => <EventEditForm />}
          />
          <Route exact path="/events/:id" render={() => <EventPage />} />
          <Route exact path="/signin" render={() => <SignInForm />} />
          <Route exact path="/signup" render={() => <SignUpForm />} />
          <Route exact path="/posts/create" render={() => <PostCreateForm />} />
          <Route exact path="/posts/:id/edit" render={() => <PostEditForm />} />
          <Route exact path="/posts/:id" render={() => <PostPage />} />
          <Route exact path="/profiles/:id" render={() => <ProfilePage />} />
          <Route
            exact
            path="/profiles/:id/edit/username"
            render={() => <UsernameForm />}
          />
          <Route
            exact
            path="/profiles/:id/edit/password"
            render={() => <PasswordForm />}
          />
          <Route
            exact
            path="/profiles/:id/edit"
            render={() => <ProfileEditForm />}
          />
          <Route exact path="/about" render={() => <About />} />
          <Route render={() => <NotFound />} />
        </Switch>
      </Container>
    </div>
  );
}

export default App;
