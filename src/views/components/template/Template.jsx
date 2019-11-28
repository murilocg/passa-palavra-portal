import React from 'react';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';
import styles from './style';
import { Grid, IconButton } from '@material-ui/core';
import { AccountCircle } from '@material-ui/icons';
import history from '../../../shared/history';

const Template = props => {
  const classes = styles();
  const token = sessionStorage.getItem('TOKEN');
  const nome = sessionStorage.getItem('NOME');
  return (
    <div>
      <AppBar position='static'>
        <Toolbar className={classes.appbar}>
          <Grid container justify='space-between' alignItems='center'>
            <Grid item xs={2}>
              <Typography variant='h6'>Passa Palavra</Typography>
            </Grid>
            <Grid item xs={8}>
              <Grid container justify='flex-end' alignItems='center'>
                <Grid item className={classes.menuItem}>
                  <Button
                    className={classes.btnJogar}
                    onClick={() => history.push('/')}
                    color='inherit'
                  >
                    Jogar!
                  </Button>
                </Grid>
                {token && (
                  <Grid
                    item
                    className={classes.menuItem}
                    onClick={() => history.push('/manager/quiz')}
                  >
                    <Typography variant='h6'>Quiz</Typography>
                  </Grid>
                )}
                <Grid item className={classes.menuItem}>
                  <Grid container alignItems='center'>
                    <Grid item>
                      <Typography variant='h6'>{nome ? nome : ''}</Typography>
                    </Grid>
                    {!token ? (
                      <Grid item onClick={() => history.push('/login')}>
                        <Typography variant='h6'>Login</Typography>
                      </Grid>
                    ) : (
                      <Grid item>
                        <IconButton>
                          <AccountCircle className={classes.iconUser} />
                        </IconButton>
                      </Grid>
                    )}
                  </Grid>
                </Grid>
              </Grid>
            </Grid>
          </Grid>
        </Toolbar>
      </AppBar>
      {props.children}
    </div>
  );
};

export default Template;
