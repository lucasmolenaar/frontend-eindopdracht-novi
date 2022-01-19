import React, {useContext} from 'react';
import {Switch, Route, Redirect} from 'react-router-dom';
import {AuthContext} from "./context/AuthContext";

import LoginPage from './pages/LoginPage/LoginPage';
import RegisterPage from "./pages/RegisterPage/RegisterPage";
import SearchPage from "./pages/SearchPage/SearchPage";
import RandomPage from "./pages/RandomPage/RandomPage";
import DailyMealplanPage from "./pages/DailyMealplanPage/DailyMealplanPage";
import WeeklyMealplanPage from "./pages/WeeklyMealplanPage/WeeklyMealplanPage";


function App() {
    const { authState: { isAuth } } = useContext(AuthContext);

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
            { isAuth ? <DailyMealplanPage /> : <Redirect to='/login'/> }
        </Route>

        <Route exact path="/weekly">
            { isAuth ? <WeeklyMealplanPage /> : <Redirect to='/login'/> }
        </Route>
      </Switch>
    </div>
  );
}

export default App;
