import * as React from "react";
import { hot } from "react-hot-loader";
import HomePage from '../../pages/homepage/homepage'
import {Switch, Route} from 'react-router-dom'


const HatsPage:React.FC = () => (
  <div>
    <h1>hello HATS</h1>
  </div>
)

class App extends React.Component<Record<string, unknown>, undefined> {
  public render() {
    return (
    <div>
      <Switch>
        <Route exact path='/' component={HomePage} />
        <Route path='/hats' component={HatsPage} />
     </Switch>
   </div>
    );
  }
}

declare let module: Record<string, unknown>;

export default hot(module)(App);
