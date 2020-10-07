import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter, NavLink, Switch, Route } from 'react-router-dom'
import App from './App';
import Comments from './stories/Comments';

ReactDOM.render(
  <React.StrictMode>
    <BrowserRouter>
      <Switch>
        <Route exact path='/' component={App}/>
        <Route exact path='/comments/:storyId?' component={Comments}/>
      </Switch>
    </BrowserRouter>
  </React.StrictMode>,
  document.getElementById('root')
);
