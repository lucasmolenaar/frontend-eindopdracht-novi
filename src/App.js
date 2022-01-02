import React from 'react';
import { Switch, Route } from 'react-router-dom';

import LoginPage from './pages/LoginPage/LoginPage';
import RegisterPage from "./pages/RegisterPage/RegisterPage";
import SearchPage from "./pages/SearchPage/SearchPage";
import RandomPage from "./pages/RandomPage/RandomPage";
import DailyMealplanPage from "./pages/DailyMealplanPage/DailyMealplanPage";
import WeeklyMealplanPage from "./pages/WeeklyMealplanPage/WeeklyMealplanPage";

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

        <Route exact path="/random">
            <RandomPage />
        </Route>

        <Route exact path="/daily">
            <DailyMealplanPage />
        </Route>

        <Route exact path="/weekly">
            <WeeklyMealplanPage />
        </Route>
      </Switch>
    </div>
  );
}

export default App;
