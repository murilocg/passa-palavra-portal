import React, { useState } from 'react';
import { withTemplate } from '../components/template';
import styles from './styles';
import { Grid, TextField, Button, Link } from '@material-ui/core';
import history from '../../shared/history';
const Login = props => {
  const classes = styles();
  const [email, setEmail] = useState('');
  const [senha, setSenha] = useState('');
  const handleOnChangeEmail = e => setEmail(e.target.value);
  const handleOnChangeSenha = e => setSenha(e.target.value);
  const login = () => {
    if (email.trim() !== '' && senha.trim() !== '') {
      props.login({ email, password: senha });
    }
  };
  return (
    <Grid container justify='center'>
      <Grid item xs={10} sm={6} md={3}>
        <Grid container className={classes.containerLogin}>
          <Grid item xs={12} className={classes.loginTitulo}>
            Bem vindo(a)
          </Grid>
          <Grid container className={classes.containerBody}>
            <Grid item xs={12} className={classes.containerInput}>
              <TextField
                fullWidth={true}
                className={classes.input}
                value={email}
                placeholder={'Digite o email'}
                onChange={handleOnChangeEmail}
              />
              <TextField
                className={classes.input}
                fullWidth={true}
                value={senha}
                placeholder={'Digite a senha'}
                type='password'
                onChange={handleOnChangeSenha}
              />
            </Grid>
            <Grid item xs={12} className={classes.containerBtn}>
              <Button className={classes.btnEntrar} onClick={() => login()}>
                Entrar
              </Button>
            </Grid>
            <Grid className={classes.containerCadastrese} item xs={12}>
              <Link className={classes.linkCadastro} onClick={() => history.push('/cadastro')}>
                Cadastre-se
              </Link>
            </Grid>
          </Grid>
        </Grid>
      </Grid>
    </Grid>
  );
};
export default withTemplate(Login);
