import React, { Component } from 'react';
import style from './style';
import {
  Grid,
  Select,
  MenuItem,
  FormControl,
  Button,
  InputLabel,
  Radio,
  RadioGroup,
  FormControlLabel
} from '@material-ui/core';
import { withStyles } from '@material-ui/styles';

class GameMode extends Component {
  constructor(props) {
    super(props);
    this.state = {
      quizId: 0,
      tempo: 'com_tempo'
    };
  }
  componentDidMount() {
    this.props.loadQuizzes();
  }

  handleOnChangeTempo = e => {
    this.setState({ tempo: e.target.value });
  };

  handleOnChangeQuiz = e => {
    this.setState({ quizId: e.target.value });
  };

  handleOnClick = () => {
    this.props.initGame(this.state.quizId, this.state.tempo);
  };
  render() {
    const { quizzes, classes } = this.props;
    const { quizId, tempo } = this.state;
    return (
      <Grid container justify={'center'}>
        <Grid item xs={4} className={classes.containerModalidade}>
          <Grid container>
            <h1>Modalidade</h1>
            <Grid xs={12} className={classes.containerSelectQuiz}>
              <FormControl className={classes.selectQuiz}>
                <InputLabel>Selecione o quiz</InputLabel>
                <Select
                  fullWidth
                  value={quizId}
                  onChange={this.handleOnChangeQuiz}
                  placeholder='Selecione um Quiz'
                >
                  {quizzes.map(q => (
                    <MenuItem key={q.id} value={q.id}>
                      {q.title}
                    </MenuItem>
                  ))}
                </Select>
              </FormControl>
            </Grid>
            <Grid xs={12} className={classes.containerSelectTime}>
              <FormControl component='fieldset'>
                <RadioGroup
                  aria-label='position'
                  name='position'
                  value={tempo}
                  onChange={this.handleOnChangeTempo}
                  row
                >
                  <FormControlLabel
                    value={'com_tempo'}
                    control={<Radio color='primary' />}
                    label='Com Tempo'
                    labelPlacement='top'
                  />
                  <FormControlLabel
                    value={'sem_tempo'}
                    control={<Radio color='primary' />}
                    label='Sem Tempo'
                    labelPlacement='top'
                  />
                </RadioGroup>
              </FormControl>
            </Grid>
            <Grid xs={12} className={classes.containerBtnJogar}>
              <Button onClick={this.handleOnClick} className={classes.btnJogar}>
                Jogar!
              </Button>
            </Grid>
          </Grid>
        </Grid>
      </Grid>
    );
  }
}

export default withStyles(style)(GameMode);
