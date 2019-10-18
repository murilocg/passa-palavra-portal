import React, { Component } from 'react';
import {
  Button,
  Dialog,
  DialogTitle,
  DialogContent,
  DialogActions,
  TextField,
  withStyles
} from '@material-ui/core';
import style from './style';

class CriarQuizBtn extends Component {
  constructor(props) {
    super(props);
    this.state = {
      open: false,
      title: ''
    };
  }

  openModal = () => {
    this.setState({ open: true });
  };

  closeModal = () => {
    this.setState({ open: false, title: '' });
  };

  confirmar = async () => {
    await this.props.novoQuiz(this.state.title);
    this.closeModal();
  };

  onChange = e => {
    const title = e.target.value;
    console.log(title);
    this.setState({ title });
  };

  render() {
    const { open } = this.state;
    const { classes } = this.props;
    return (
      <>
        <Button className={classes.btnCriarQuiz} onClick={this.openModal}>
          Novo
        </Button>
        <Dialog open={open}>
          <DialogTitle>Novo Quiz</DialogTitle>
          <DialogContent>
            <TextField label='Título' value={this.state.title} onChange={this.onChange} />
          </DialogContent>
          <DialogActions>
            <Button onClick={this.closeModal} color='primary'>
              Cancelar
            </Button>
            <Button onClick={this.confirmar} color='primary'>
              Confirmar
            </Button>
          </DialogActions>
        </Dialog>
      </>
    );
  }
}
export default withStyles(style)(CriarQuizBtn);
