import { FETCH_QUIZ_REQUEST, FETCH_QUIZ_FAILURE, FETCH_QUIZ_SUCCESS, SELECT_TAG, SELECT_ANSWER, ADD_SCORE } from './quizTypes';
import axios from 'axios';

const fetchQuizRequest = () => {
  return {
    type: FETCH_QUIZ_REQUEST
  }
}

const fetchQuizSuccess = (data) => {
  return {
    type: FETCH_QUIZ_SUCCESS,
    payload: data
  }
}

const fetchQuizFailure = (error) => {
  return {
    type: FETCH_QUIZ_FAILURE,
    payload: error
  }
}

export const fetchQuiz = (tags="bash") => {
  return async (dispatch) => {
    dispatch(fetchQuizRequest())
    try {
      const response = await axios({
        method: 'get',
        url: 'https://quizapi.io/api/v1/questions',
        headers: {
          'X-Api-Key': 'igaHfvKlknGfD379OlwHCZhUr86M1cPyLcrWVQfE'
        },
        params: {
          limit: 10,
          tags: tags
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

export const selectTag = (tag) => {
  return {
    type: SELECT_TAG,
    payload: tag
  }
}

export const selectAnswer = (questionId, ans) => {
  return {
    type: SELECT_ANSWER,
    payload: {
      questionId: questionId,
      ans: ans
    }
  }
}

export const addScore = (valueToAdd) => {
  return {
    type: ADD_SCORE,
    payload: valueToAdd
  }
}