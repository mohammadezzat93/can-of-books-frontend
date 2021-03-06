import React from 'react';
import Header from './Header';
import IsLoadingAndError from './IsLoadingAndError';
import Footer from './Footer';
import LogoutButton from './LogoutButton';
import Profile from './Profile';
import Login from './Login';
import MyFavoriteBooks from './BestBooks';

import {
  BrowserRouter as Router,
  Switch,
  Route
} from "react-router-dom";

class App extends React.Component {

  render() {
    console.log('app', this.props);
    return(
      <>
        <Router>
          <IsLoadingAndError>
            <Header />
            <Switch>
              <Route exact path="/">
                {/* TODO: if the user is logged in, render the `BestBooks` component, if they are not, render the `Login` component */}
                <Login />
                <LogoutButton />
              </Route>
              {/* TODO: add a route with a path of '/profile' that renders a `Profile` component */}
              <Route path="/profile">
              <Profile />
              </Route>
              <Route path="/BestBooks">
              <MyFavoriteBooks />
              </Route>

            </Switch>
            <Footer />
          </IsLoadingAndError>
        </Router>
      </>
    );
  }
}

export default App;
