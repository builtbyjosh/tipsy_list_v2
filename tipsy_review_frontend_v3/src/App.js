import { Switch, Route } from "react-router-dom";

import Home from './components/Home'
import BreweryList from './components/BreweryList'
import AddBreweryForm from './components/AddBreweryForm.js'
import BreweryShow from './components/BreweryShow'

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
        <Route exact path='/breweries/new' component={AddBreweryForm} />
        <Route exact path='/breweries/:id' component={BreweryShow} />

      </Switch>
    </div>
  );
}

export default App;
