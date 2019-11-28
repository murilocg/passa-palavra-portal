import React from 'react';
import { Switch, Route, withRouter, Router } from 'react-router-dom';
import Game from './game';
import GameMode from './gamemode';
import Score from './score';
import GerenciarQuiz from './quiz';
import FormQuiz from './formquiz';
import Login from './login';
import Cadastro from './cadastro';
import history from '../shared/history';

const Rotas = () => (
  <Router history={history}>
    <Switch>
      <Route exact path='/' render={withRouter(GameMode)} />
      <Route exact path='/game' render={withRouter(Game)} />
      <Route exact path='/score' render={withRouter(Score)} />
      <Route exact path='/manager/quiz' render={withRouter(GerenciarQuiz)} />
      <Route exact path='/edit/quiz' render={withRouter(FormQuiz)} />
      <Route exact path='/login' render={withRouter(Login)} />
      <Route exact path='/cadastro' render={withRouter(Cadastro)} />
    </Switch>
  </Router>
);

export default Rotas;
