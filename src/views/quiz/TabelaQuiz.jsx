import React, { Component } from 'react';
import { Grid, IconButton, withStyles } from '@material-ui/core';
import { Edit, Delete } from '@material-ui/icons';
import style from './style';

class TabelaQuiz extends Component {
  componentDidMount() {
    this.props.loadQuizzes();
  }

  render() {
    const { classes, quizzes, deleteQuiz, abrirQuiz } = this.props;
    return (
      <Grid container className={classes.tableQuizzes}>
        <Grid className={classes.headerTable} container justify='space-between'>
          <Grid item>Nome</Grid>
        </Grid>
        {quizzes.map(q => {
          return (
            <Grid
              key={q.id}
              className={classes.row}
              container
              justify='space-between'
              alignItems='center'
            >
              <Grid item alignItems='center'>
                {q.title}
              </Grid>
              <Grid item xs={1} alignItems='center'>
                <IconButton onClick={async () => await abrirQuiz(q.id)}>
                  <Edit />
                </IconButton>
                <IconButton onClick={async () => await deleteQuiz(q.id)}>
                  <Delete />
                </IconButton>
              </Grid>
            </Grid>
          );
        })}
      </Grid>
    );
  }
}
export default withStyles(style)(TabelaQuiz);
