import './App.css';
import Header from "./components/Header";
import Favourites from "./components/Favourites";
import Watched from "./components/Watched";
import Watchlist from "./components/Watchlist";
import Home from "./components/HomePage";

import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import { GlobalProvider } from "./context/GlobalState";

function App() {
  return (
    <GlobalProvider>
      <Router>
        <div className="App">
          <Header />
          <Switch>
            <Route path="/" exact component={Home} />
            <Route path="/watched" component={Watched} />
            <Route path="/watchlist" exact component={Watchlist} />
            <Route path="/favourites" exact component={Favourites} />
          </Switch>
        </div>
      </Router>
    </GlobalProvider>
  );
}

export default App;
