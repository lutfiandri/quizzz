import { FETCH_QUIZ_REQUEST, FETCH_QUIZ_FAILURE, FETCH_QUIZ_SUCCESS } from './QUIZTypes';
import axios from 'axios';

const fetchQuizRequest = () => {
  return {
    type: FETCH_QUIZ_REQUEST
  }
}

const fetchQuizSuccess = () => {
  return {
    type: FETCH_QUIZ_SUCCESS
  }
}

const fetchQuizFailure = () => {
  return {
    type: FETCH_QUIZ_FAILURE
  }
}

export const fetchQuiz = () => {
  return async (dispatch) => {
    dispatch(fetchQuizRequest())
    try {
      const response = await axios.get('https://quizapi.io/api/v1/', {
        headers: {
          'X-Api-Key': 'igaHfvKlknGfD379OlwHCZhUr86M1cPyLcrWVQfE'
        }
      })
      const data = response.data;
      dispatch(fetchQuizSuccess(data))
    } catch(err) {
      const error = err.message;
      dispatch(fetchQuizFailure(error))
    }
  }
}