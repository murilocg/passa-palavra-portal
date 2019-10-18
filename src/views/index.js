import React from 'react';
import { Switch, Route, withRouter, Router } from 'react-router-dom';
import Game from './game';
import GerenciarQuiz from './quiz';
import FormQuiz from './formquiz';
import history from '../shared/history';

const Rotas = () => (
  <Router history={history}>
    <Switch>
      <Route exact path='/' render={withRouter(Game)} />
      <Route exact path='/manager/quiz' render={withRouter(GerenciarQuiz)} />
      <Route exact path='/edit/quiz' render={withRouter(FormQuiz)} />
    </Switch>
  </Router>
);

export default Rotas;
