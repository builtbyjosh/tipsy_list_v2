import { Switch, Route } from "react-router-dom";

import Home from './components/Home'
import BreweryList from './components/BreweryList'
import AddBreweryForm from './components/AddBreweryForm.js'
import BreweryShow from './components/BreweryShow'
import SearchAPIBreweries from './components/SearchAPIBreweries'

// / home
// /breweries - BreweryList
// /breweries/:id - BreweryShow
// /brweeries/new - AddBreweryForm


function App() {
  return (
    <div >
      <Switch>
        <Route exact path='/' component={Home} />
        <Route exact path='/breweries' component={BreweryList} />
        <Route exact path='/breweries/:id' component={BreweryShow} />
        <Route exact path='/breweries/:id/new' component={AddBreweryForm} />
        <Route exact path='/search' component={SearchAPIBreweries} />
      </Switch>
    </div>
  );
}

export default App;
