import { Link, Switch, Route, BrowserRouter as Router } from "react-router-dom";
import Homepage from "./pages/homepage/homepage.component";
import DetailPage from "./pages/detail-page/detail-page.component";

//STYLE IMPORT
import "./App.css";

function App() {
  return (
    <>
      <Router>
        <header>
          <h1>Pokedex</h1>
        </header>
        <Link to="/">HOME</Link>
        <Switch>
          <Route exact path="/" component={Homepage} />
          <Route exact path="/detail/:name" component={DetailPage} />
        </Switch>
      </Router>
    </>
  );
}

export default App;
