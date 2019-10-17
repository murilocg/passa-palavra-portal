import React from 'react';
import { Grid, IconButton, withStyles } from '@material-ui/core';
import { Edit, Delete } from '@material-ui/icons';
import style from './style';

const TabelaPergunta = props => {
  const { classes, perguntas, deletePergunta } = props;
  return (
    <Grid container className={classes.tabelaPerguntas}>
      {perguntas.map(q => {
        return (
          <Grid
            key={q.id}
            className={classes.tabelaRowPerguntas}
            container
            justify='space-between'
            alignItems='center'
          >
            <Grid item alignItems='center'>
              {q.text}
            </Grid>
            <Grid item alignItems='center'>
              <IconButton>
                <Edit />
              </IconButton>
              <IconButton onClick={async () => await deletePergunta(q.id)}>
                <Delete />
              </IconButton>
            </Grid>
          </Grid>
        );
      })}
    </Grid>
  );
};
export default withStyles(style)(TabelaPergunta);
