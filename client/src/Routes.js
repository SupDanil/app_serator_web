import React from 'react';
import {Switch, Route, Redirect} from 'react-router-dom'
import {CreatePage} from "./Pages/CreatePage";
import {DetailPage} from "./Pages/DetailPage";
import {AuthPage} from "./Pages/AuthPage";
import {TestPage} from "./Pages/TestPage";
import {DakonPage} from "./Pages/DakonPage";

export const useRoutes = isAuthenticated => {
    return (
        <Switch>
            <Route path="/create" exact><CreatePage/> </Route>
            <Route path="/detail/:id"><DetailPage/> </Route>
            <Route path="/test" exact><TestPage/> </Route>
            <Route path="/dakon" exact><DakonPage/> </Route>
            <Route path="/" exact><AuthPage/> </Route>
            <Redirect to="/"/>
        </Switch>
    )


}