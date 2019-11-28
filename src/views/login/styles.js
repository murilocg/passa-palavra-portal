import { makeStyles } from '@material-ui/styles';

const styles = makeStyles(() => ({
  loginTitulo: {
    color: 'white',
    fontSize: '21px',
    fontWeight: 'bold',
    backgroundColor: '#2c3e50',
    textAlign: 'center',
    padding: '10px 0px'
  },
  containerLogin: {
    marginTop: 'calc((100vh - 420px) / 2)'
  },
  containerBody: {
    padding: '20px',
    border: '1px solid #CACACA',
    borderTop: 'none'
  },
  containerInput: {
    padding: '20px 0px'
  },
  input: {
    padding: '10px 0px'
  },
  containerBtn: {
    padding: '20px 0px',
    textAlign: 'center'
  },
  btnEntrar: {
    width: '100%',
    background: '#18bc9c',
    color: 'white',
    fontWeight: 'bold',
    maxWidth: '250px'
  },
  containerCadastrese: {
    textAlign: 'center'
  },
  linkCadastro: {
    color: 'gray',
    textDecoration: 'underline'
  }
}));

export default styles;
