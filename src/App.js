import React from 'react';
import { Switch, Route } from 'react-router-dom';

import LoginPage from './pages/LoginPage/LoginPage';

function App() {
  return (
    <div className="App">
      <Switch>

        <Route exact path='/login'>
          <LoginPage />
        </Route>

      </Switch>
    </div>
  );
}

export default App;
