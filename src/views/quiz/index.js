import { connect } from 'react-redux';
import GerenciarQuiz from './GerenciarQuiz';
import { withTemplate } from '../components/template';
import { quizController } from '../../controller';

const mapDispatchToProps = dispatch => ({
  novoQuiz: () => dispatch(quizController.novoQuiz())
});

const mapStateToProps = state => ({});

const Component = connect(
  mapStateToProps,
  mapDispatchToProps
)(GerenciarQuiz);

export default withTemplate(Component);
