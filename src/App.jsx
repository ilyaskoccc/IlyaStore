import { Route, Switch } from "react-router-dom";
import "./App.css";
import HomePage from "./pages/HomePage";
import LoginPage from "./pages/LoginPage";
import RegisterPage from "./pages/RegisterPage";
import TermsPage from "./pages/TermsPage";
import PrivacyPolicyPage from "./pages/PrivacyPolicyPage";
import ResetPasswordPage from "./pages/ResetPasswordPage";

function App() {
  return (
    <div className="container mx-auto">
      <Switch>
        <Route exact path="/">
          <HomePage />
        </Route>
        <Route path="/login">
          <LoginPage />
        </Route>
        <Route path="/register">
          <RegisterPage />
        </Route>
        <Route path="/terms">
          <TermsPage />
        </Route>
        <Route path="/privacy-policy">
          <PrivacyPolicyPage />
        </Route>
        <Route path="/reset-password">
          <ResetPasswordPage />
        </Route>
      </Switch>
    </div>
  );
}

export default App;
