import styles from "./App.module.css"
import NavBar from "./components/NavBar";
import { Container } from "react-bootstrap";
import {Route, Switch} from "react-router-dom"
import "./api/axiosDefaults";
import SignUpForm from "./pages/auth/SignUpForm";
import SignInForm from "./pages/auth/SignInForm";


function App() {
  return (
  <div className={styles.App}>
    <NavBar/>
    <Container className={styles.Main}>
      <Switch>
        <Route exact path="/" render={() => <h1>Community Hub</h1>}/>
        <Route exact path="/reviews" render={() => <h1>Reviews</h1>}/>
        <Route exact path="/events" render={() => <h1>Events</h1>}/>
        <Route exact path="/signin" render={() => <SignInForm />}/>
        <Route exact path="/signup" render={() => <SignUpForm />}/>
        <Route exact path="/about" render={() => <h1>About</h1>}/>
        <Route render={() => <h1>Page not found!</h1>}/>
      </Switch>

    </Container>
  </div>  

  );
}

export default App;