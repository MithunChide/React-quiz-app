// import logo from "./logo.svg";
import "./App.css";
// import Question from "./Question";
// import questions from './questions';
import { Route, Switch } from "react-router";
import { Link } from "react-router-dom";

import Quiz from "./Quiz";
import questions from "./questions";

function App() {
  return (
    <div className="App">
      <Switch>
        <homepage className="homepage">
          <Route exact path="/">
            <h1>🥰🥰 Welcome to my KBC Round 🥰🥰</h1>
            <Link className="lets-begin-link" to="/quiz">
              ❤️‍🔥 Let's Begin ❤️‍🔥
            </Link>
          </Route>
          <Route exact path="/quiz">
            <Quiz questions={questions} />
          </Route>
        </homepage>
        <Route exact path="/">
          <h1>🥰🥰 Welcome to my KBC Round 🥰🥰</h1>
          <Link className="lets-begin-link" to="/quiz">
            ❤️‍🔥 Let's Begin ❤️‍🔥
          </Link>
        </Route>
        <Route exact path="/quiz">
          <Quiz questions={questions} />
        </Route>
      </Switch>
    </div>
  );
}

export default App;
