import { Switch, Route } from "react-router-dom";

import Home from './components/Home'
import BreweryList from './components/BreweryList'
import AddReviewForm from './components/AddReviewForm.js'
import BreweryShow from './components/BreweryShow'
import SearchAPIBreweries from './components/SearchAPIBreweries'
import Navbar from "./components/Navbar";
import underage from "./components/underage";

// / home
// /breweries - BreweryList
// /breweries/:id - BreweryShow
// /brweeries/new - AddBreweryForm


function App() {
  return (
    <div >
      <Navbar />
      <div className="main">
        <Switch>
        <Route exact path='/' component={Home} />
        <Route exact path='/breweries' component={BreweryList} />
        <Route exact path='/breweries/:id' component={BreweryShow} />
        <Route exact path='/breweries/:id/new' component={AddReviewForm} />
        <Route exact path='/search' component={SearchAPIBreweries} />
        <Route exact path='/underage' component={underage} />
      </Switch>
      </div>
      
    </div>
  );
}

export default App;
