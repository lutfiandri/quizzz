/* eslint-disable react-hooks/exhaustive-deps */
import { useEffect } from 'react';
import { connect } from 'react-redux';
import { fetchQuiz } from '../../redux';

const Question = ({quiz, fetchQuiz}) => {
  useEffect(() => {
    fetchQuiz();
    console.log(quiz)
  }, []);

  return (
    <div>
      question
    </div>
  );
}

const mapStateToProps = (state) => {
  return {
    quiz: state.quiz
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    fetchQuiz: () => dispatch(fetchQuiz())
  }
}
 
export default connect(mapStateToProps, mapDispatchToProps)(Question);