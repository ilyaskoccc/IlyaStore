import { Route, Switch } from "react-router-dom";
import "./App.css";
import Header from "./components/Header";

function App() {
  return (
    <div>
      <Header />
      <Switch>
        <Route exact path="/">
          <h1>Home</h1>
        </Route>
      </Switch>
    </div>
  );
}

export default App;
