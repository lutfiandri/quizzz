/* eslint-disable react-hooks/exhaustive-deps */
import { useState, useEffect } from 'react';
import { connect } from 'react-redux';
import { useParams, useHistory } from 'react-router-dom';

const Question = ({quiz}) => {
  const { num } = useParams();
  const history = useHistory();

  const [moveStat, setMoveStat] = useState({
    next: true,
    prev: false,
    submit: false
  })

  const [question, setQuestion] = useState('');

  useEffect(() => {
    if(Number(num) === 0){
      setMoveStat({
        next: true,
        prev: false,
        submit: false
      });
    } else if(Number(num) <= 8){
      setMoveStat({
        next: true,
        prev: true,
        submit: false
      });
    } else if(Number(num) === 9){
      setMoveStat({
        next: false,
        prev: true,
        submit: true
      });
    }
  }, [num])

  useEffect(() => {
    if(quiz !== null){
      setQuestion(quiz[Number(num)].question)
    }
  }, [quiz, Number(num)])

  const handleMove = (move) => {
    history.push(`${Number(num) + move}`)
  }

  return (
    <div>
      <div>{question}</div>
      <div>{num}</div>

      { moveStat.prev && (
        <div onClick={() => handleMove(-1)}>prev</div>
      )}

      { moveStat.next && (
        <div onClick={() => handleMove(1)}>next</div>
      )}

      { moveStat.submit && (
        <div>submit</div>
      )}
    </div>
  );
}

const mapStateToProps = (state) => {
  return {
    quiz: state.quiz.data
  }
}
 
export default connect(mapStateToProps)(Question);