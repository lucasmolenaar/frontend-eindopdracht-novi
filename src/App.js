import React from 'react';
import { Switch, Route } from 'react-router-dom';

import LoginPage from './pages/LoginPage/LoginPage';
import RegisterPage from "./pages/RegisterPage/RegisterPage";

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

      </Switch>
    </div>
  );
}

export default App;
