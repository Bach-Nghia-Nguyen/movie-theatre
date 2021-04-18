import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "./App.css";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

// import components
import NavigationBar from "./components/NavigationBar";
import Notification from "./components/Notification";
import Footer from "./components/Footer";

// import pages
import HomePage from "./pages/HomePage";
import ArchivePage from "./pages/ArchivePage";
import MovieDetailPage from "./pages/MovieDetailPage";
import WatchList from "./pages/WatchList";
import NotFoundPage from "./pages/NotFoundPage";

function App() {
  return (
    <Router>
      <NavigationBar />
      <Notification />
      <Switch>
        <Route path="/watchlist" exact component={WatchList} />
        <Route path="/movies/:id" exact component={MovieDetailPage} />
        <Route path="/archive" exact component={ArchivePage} />
        <Route path="/" exact component={HomePage} />
        <Route component={NotFoundPage} />
      </Switch>
      <Footer />
    </Router>
  );
}

export default App;
