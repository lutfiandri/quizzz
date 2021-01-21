/* eslint-disable react-hooks/exhaustive-deps */
import { useState, useEffect } from 'react';
import { connect } from 'react-redux';
import { useParams, useHistory } from 'react-router-dom';
import { addScore } from '../../redux';

const Question = ({quiz, loading, addScore}) => {
  const { num } = useParams();
  const history = useHistory();

  const [moveStat, setMoveStat] = useState({
    next: true,
    submit: false
  })

  const [question, setQuestion] = useState('');
  const [anss, setAnss] = useState({});
  const [userAns, setUserAns] = useState({
    answer_a: false,
    answer_b: false,
    answer_c: false,
    answer_d: false
  })

  useEffect(() => {
    if(Number(num) <= 8){
      setMoveStat({
        next: true,
        submit: false
      });
    } else if(Number(num) === 9){
      setMoveStat({
        next: false,
        submit: true
      });
    }
  }, [num])

  useEffect(() => {
    if(quiz !== null){
      setQuestion(quiz[Number(num)].question);
      setAnss(quiz[Number(num)].answers);
    }
  }, [quiz, Number(num)])

  const handleUserAnsChange = (e) => {
    setUserAns({
      ...userAns,
      answer_a: false,
      answer_b: false,
      answer_c: false,
      answer_d: false,
      [e.target.id]: e.target.checked
    })
  }

  const corretingAnswer = () => {
    const ansIsTrue = ((userAns.answer_a && quiz[Number(num)].correct_answers.answer_a_correct === "true")|| 
       (userAns.answer_b && quiz[Number(num)].correct_answers.answer_b_correct === "true")|| 
       (userAns.answer_c && quiz[Number(num)].correct_answers.answer_c_correct === "true")|| 
       (userAns.answer_d && quiz[Number(num)].correct_answers.answer_d_correct === "true"));
    
    if(ansIsTrue){
      addScore(1);
    }

    setUserAns({
      ...userAns,
      answer_a: false,
      answer_b: false,
      answer_c: false,
      answer_d: false,
    });
  }

  const handleMove = (move) => {
    corretingAnswer();
    history.push(`${Number(num) + move}`);
    // console.log(userAns[[quiz[Number(num)].correct_answer]]);
  }

  const handleSubmit = () => {
    corretingAnswer();
    history.push('/score');
  }

  return (
    <div className="min-h-screen py-2 border border-white container flex flex-col justify-center items-center">
    {
      loading ? (
        <div className="text-xl">prepare your brain...</div>
      ) : (
        <div className="w-full">
          <div className="p-4 text-sm">please don't reload the page...</div>
          <div className="p-4 border border-white">{question}</div>

          <form className="py-4">
            <label htmlFor="answer_a" className="flex items-center px-2 py-2 cursor-pointer hover:text-gray-200">
              <input type="radio" name="answers" id="answer_a" checked={userAns.answer_a}  onChange={handleUserAnsChange}/>
              <div className="ml-2">{anss.answer_a}</div>
            </label>
            <label htmlFor="answer_b" className="flex items-center px-2 py-2 cursor-pointer hover:text-gray-200">
              <input type="radio" name="answers" id="answer_b" checked={userAns.answer_b} onChange={handleUserAnsChange}/>
              <div className="ml-2">{anss.answer_b}</div>
            </label>
            {
              anss.answer_c && (
                <label htmlFor="answer_c" className="flex items-center px-2 py-2 cursor-pointer hover:text-gray-200">
                  <input type="radio" name="answers" id="answer_c" checked={userAns.answer_c} onChange={handleUserAnsChange}/>
                  <div className="ml-2">{anss.answer_c}</div>
                </label>
              )
            }
            {
              anss.answer_d && (
                <label htmlFor="answer_d" className="flex items-center px-2 py-2 cursor-pointer hover:text-gray-200">
                  <input type="radio" name="answers" id="answer_d" checked={userAns.answer_d} onChange={handleUserAnsChange}/>
                  <div className="ml-2">{anss.answer_d}</div>
                </label>
              )
            }
          </form>

          <div className="flex flex-row space-x-2 mt-5">
            { moveStat.next && (
              <div onClick={() => handleMove(1)} className="bg-white font-medium text-gray-800 rounded-md p-2 w-full text-center cursor-pointer">next</div>
            )}

            { moveStat.submit && (
              <div onClick={handleSubmit} className="bg-gray-800 font-medium text-white rounded-md p-2 w-full text-center cursor-pointer">submit</div>
            )}
          </div>
        </div>
      )
    }
      
    </div>
  );
}

const mapStateToProps = (state) => {
  return {
    quiz: state.quiz.data,
    loading: state.quiz.loading,
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    addScore: (valueToAdd) => dispatch(addScore(valueToAdd))
  }
}
 
export default connect(mapStateToProps, mapDispatchToProps)(Question);