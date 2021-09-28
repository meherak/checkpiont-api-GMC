import { Route, Switch } from "react-router-dom";
import "./App.css";
import Navbar from "./Components/Navbar";
import UserList from "./UserList";
// import { createBrowserHistory } from "history";
// import User from "./Components/User";
// import { useState } from "react";
import UserDetail from "./UserDetail";

// const newHistory = createBrowserHistory();

function App() {
  return (
    // <Router history={newHistory}>
    //  </Route>
    <div>
      <Navbar />
      <Switch>
        <Route exact path="/" component={UserList} />

        <Route exact path="/user/:id" component={UserDetail} />
      </Switch>
    </div>
    // </Router>
  );
}

export default App;
