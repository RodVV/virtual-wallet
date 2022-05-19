import React from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import Login from './Components/Login';

function App() {
  return (
    <main>
      <BrowserRouter>
        <Switch>
          <Route exact path="/" component={ Login } />
        </Switch>
      </BrowserRouter>
    </main>);
}

export default App;
