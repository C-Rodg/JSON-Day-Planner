import React from 'react';
import { Route, IndexRedirect } from 'react-router';

import App from './components/App';
import SchedulePage from './components/SchedulePage';

export default(
    <Route path="/" component={App}>
        <IndexRedirect to="schedule" />
        <Route path="schedule" component={SchedulePage} />
    </Route>
);