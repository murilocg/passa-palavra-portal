import React, { useState } from 'react';
import { withTemplate } from '../components/template';
import styles from './styles';
import { Grid, TextField, Button, Link } from '@material-ui/core';
import history from '../../shared/history';
const Cadastro = props => {
  const classes = styles();
  const [email, setEmail] = useState('');
  const [senha, setSenha] = useState('');
  const [name, setName] = useState('');
  const handleOnChangeName = e => setName(e.target.value);
  const handleOnChangeEmail = e => setEmail(e.target.value);
  const handleOnChangeSenha = e => setSenha(e.target.value);
  const cadastrar = () => {
    if (email.trim() !== '' && senha.trim() !== '' && name.trim() !== '') {
      props.cadastrar({ email, password: senha, name });
    }
  };
  return (
    <Grid container justify='center'>
      <Grid item xs={10} sm={6} md={3}>
        <Grid container className={classes.containerLogin}>
          <Grid item xs={12} className={classes.loginTitulo}>
            Cadastro
          </Grid>
          <Grid container className={classes.containerBody}>
            <Grid item xs={12} className={classes.containerInput}>
              <TextField
                className={classes.input}
                fullWidth={true}
                value={name}
                placeholder={'Digite seu nome'}
                onChange={handleOnChangeName}
              />
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
              <Button className={classes.btnEntrar} onClick={() => cadastrar()}>
                Cadastrar
              </Button>
            </Grid>
            <Grid className={classes.containerCadastrese} item xs={12}>
              <Link className={classes.linkCadastro} onClick={() => history.push('/login')}>
                Login
              </Link>
            </Grid>
          </Grid>
        </Grid>
      </Grid>
    </Grid>
  );
};
export default withTemplate(Cadastro);
