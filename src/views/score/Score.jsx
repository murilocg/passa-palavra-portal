import React from 'react';
import { Grid } from '@material-ui/core';
import history from '../../shared/history';

const Score = props => {
  return (
    <Grid className='score-container' container>
      <Grid className='title-end-game' container justify='center'>
        Fim de Jogo
      </Grid>
      <Grid container justify='center'>
        <Grid item xs={4} className='score'>
          <Grid className='score-label'>Acertos</Grid>
          <Grid className='score-value value-hits'>{props.score.hits}</Grid>
        </Grid>
        <Grid item xs={4} className='score'>
          <Grid className='score-label'>Erros</Grid>
          <Grid className='score-value value-mistakes'>{props.score.mistakes}</Grid>
        </Grid>
        <Grid item xs={4} className='score'>
          <Grid className='score-label'>Passadas</Grid>
          <Grid className='score-value value-skiped'>{props.score.skiped}</Grid>
        </Grid>
      </Grid>
      <Grid className='title-end-game' container justify='center'>
        <button className='btn-answer' onClick={() => history.push('/')}>
          Jogar Novamente
        </button>
      </Grid>
    </Grid>
  );
};
export default Score;
