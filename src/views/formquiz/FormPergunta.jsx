import React, { Component } from 'react';
import {
  Grid,
  TextField,
  FormControl,
  Select,
  MenuItem,
  Button,
  InputLabel
} from '@material-ui/core';
import { withStyles } from '@material-ui/styles';
import style from './style';
const alfabeto = ['A', 'B', 'C'];

class FormPergunta extends Component {
  constructor(props) {
    super(props);
    this.state = {
      pergunta: '',
      resposta: '',
      letter: alfabeto[0]
    };
  }

  salvarPergunta = async () => {
    const { quiz } = this.props;
    const { letter, pergunta } = this.state;
    await this.props.salvarPergunta(
      { quizId: quiz.id, letter, text: pergunta },
      this.state.resposta
    );
    this.setState({ pergunta: '', resposta: '', letter: alfabeto[0] });
  };
  onChangeLetter = event => {
    const letter = event.target.value;
    this.setState({ letter });
  };

  onChangeResposta = event => {
    const resposta = event.target.value;
    this.setState({ resposta });
  };

  onChangePergunta = event => {
    const pergunta = event.target.value;
    this.setState({ pergunta });
  };

  render() {
    const { quiz, classes } = this.props;
    return (
      <Grid container className={classes.formQuiz}>
        <Grid item xs={12} className={classes.containerQuizTitle}>
          <h2>{quiz.title}</h2>
        </Grid>
        <Grid container alignItems='center' className={classes.containerPergunta}>
          <Grid item>
            <TextField
              className={classes.input}
              label='pergunta'
              onChange={this.onChangePergunta}
            />
          </Grid>
          <Grid item>
            <FormControl className={classes.selectLetra}>
              <InputLabel value='' />
              <Select value={this.state.letter} onChange={this.onChangeLetter}>
                {alfabeto.map(letra => (
                  <MenuItem value={letra}>{letra}</MenuItem>
                ))}
              </Select>
            </FormControl>
          </Grid>
          <Grid item xs={12}>
            <TextField
              className={classes.input}
              label='resposta'
              value={this.state.resposta}
              onChange={this.onChangeResposta}
            />
          </Grid>
        </Grid>
        <Grid container className={classes.containerBtn}>
          <Button className={classes.btnSalvar} onClick={this.salvarPergunta}>
            Salvar
          </Button>
          <Button className={classes.btnCancelar}>Cancelar</Button>
        </Grid>
      </Grid>
    );
  }
}

export default withStyles(style)(FormPergunta);
