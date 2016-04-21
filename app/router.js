import React from 'react';
import { Router, Route, browserHistory, IndexRoute } from 'react-router';

//Layouts
import MainLayout from './components/Layout/nav-bar';

//Pages
import Home from './components/Home_Page/home';
import Join from './components/Join_Page/join';
import Media from './components/Media_Page/media';
import Sponsor from './components/Sponsor_Page/sponsors';
import Team from './components/Team_Page/team';

export default (
  <Router history={browserHistory}>
      <Route component={MainLayout}>
        <Route path="/" component={Home} />
        <Route path="join" component={Join} />
        <Route path="media" component={Media} />
        <Route path="sponsor" component={Sponsor} />
        <Route path="team" component={Team} />
      </Route>
  </Router>
);
