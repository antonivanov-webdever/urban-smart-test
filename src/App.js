import './App.css';
import {BrowserRouter, Redirect, Route, Switch} from "react-router-dom";
import Home from "./pages/Home";
import Profile from "./pages/Profile";

function App() {
  return (
      <BrowserRouter>
        <Switch>
            <Route path="/" exact component={ Home } />
            <Route path="/profile" component={ Profile } />
            <Redirect to="/" />
        </Switch>
      </BrowserRouter>
  );
}

export default App;
