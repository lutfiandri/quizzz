import { FETCH_QUIZ_REQUEST, FETCH_QUIZ_FAILURE, FETCH_QUIZ_SUCCESS, SELECT_TAG, SELECT_ANSWER, ADD_SCORE } from './quizTypes';

const initialState = {
  loading: null,
  data: null,
  error: null,
  tags: ['Linux', 'BASH', 'Docker', 'Kubernetes', 'DevOps', 'JavaScript', 'PHP'],
  selectedTag: 'Linux',
  answer: [],
  score: 0
}

const questionReducer = (state=initialState, action) => {
  switch(action.type){
    case FETCH_QUIZ_REQUEST: return {
      ...state,
      loading: true,
      data: null,
      error: null
    }

    case FETCH_QUIZ_SUCCESS: return {
      ...state,
      loading: false,
      data: action.payload,
      error: null
    }

    case FETCH_QUIZ_FAILURE: return {
      ...state,
      loading: false,
      data: null,
      error: action.payload
    }

    case SELECT_TAG: return {
      ...state,
      selectedTag: action.payload
    }

    case SELECT_ANSWER: return {
      ...state,
      answer: [
        ...state.answer,
        {
          questionId: action.payload.id,
          ans: action.payload.ans
        }
      ]
    }

    case ADD_SCORE: return {
      ...state,
      score: state.score + action.payload
    }

    default: return state
  }
}

export default questionReducer;