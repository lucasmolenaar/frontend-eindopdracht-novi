import React from 'react';
import { Switch, Route } from 'react-router-dom';

import LoginPage from './pages/LoginPage/LoginPage';
import RegisterPage from "./pages/RegisterPage/RegisterPage";
import SearchPage from "./pages/SearchPage/SearchPage";

function App() {
  return (
    <div className="App">
      <Switch>

        <Route exact path='/login'>
          <LoginPage />
        </Route>

        <Route exact path="/register">
            <RegisterPage />
        </Route>

        <Route exact path='/'>
            <SearchPage />
        </Route>

      </Switch>
    </div>
  );
}

export default App;
