import React from 'react';
import { Grid } from '@material-ui/core';
import FormPerguntaContainer from './FormPerguntaContainer';
import TabelaPerguntaContainer from './TabelaPerguntaContainer';
import { withTemplate } from '../components/template';
import { withStyles } from '@material-ui/styles';
import style from './style';

const FormQuiz = props => {
  const { classes } = props;
  return (
    <Grid container className={classes.formQuizPage}>
      <Grid container justify='space-between' className={classes.containerForm}>
        <FormPerguntaContainer />
        <TabelaPerguntaContainer />
      </Grid>
    </Grid>
  );
};

export default withTemplate(withStyles(style)(FormQuiz));
