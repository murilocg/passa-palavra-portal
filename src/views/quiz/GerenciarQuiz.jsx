import React from 'react';
import { Grid, withStyles } from '@material-ui/core';
import TabelaQuizContainer from './TabelaQuizContainer';
import CriarQuizBtnContainer from './CriarQuizBtnContainer';
import style from './style';

const GerenciarQuiz = props => {
  const { classes } = props;
  return (
    <Grid container className={classes.containerPage}>
      <Grid container justify='space-between' alignItems='center'>
        <Grid className={classes.titlePage} item>
          <h1>Gerenciar Temas</h1>
        </Grid>
        <Grid item>
          <CriarQuizBtnContainer />
        </Grid>
      </Grid>
      <Grid container>
        <TabelaQuizContainer />
      </Grid>
    </Grid>
  );
};

export default withStyles(style)(GerenciarQuiz);
