import * as React from "react";
import { hot } from "react-hot-loader";
import HomePage from '../../pages/homepage/homepage'



class App extends React.Component<Record<string, unknown>, undefined> {
  public render() {
    return (
     <HomePage/>
    );
  }
}

declare let module: Record<string, unknown>;

export default hot(module)(App);
