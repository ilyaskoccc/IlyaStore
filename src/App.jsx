import { Route, Switch } from "react-router-dom";
import "./App.css";
import Header from "./components/Header";
import Footer from "./components/Footer";

function App() {
  return (
    <div>
      <Header />
      <Switch>
        <Route exact path="/">
          <h1>Home</h1>
        </Route>
      </Switch>
      <Footer />
    </div>
  );
}

export default App;
