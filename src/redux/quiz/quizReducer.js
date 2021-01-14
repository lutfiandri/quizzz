import { FETCH_QUIZ_REQUEST, FETCH_QUIZ_FAILURE, FETCH_QUIZ_SUCCESS, SELECT_TAG } from './quizTypes';

const initialState = {
  loading: null,
  data: null,
  error: null,
  tags: ['Linux', 'BASH', 'Docker', 'Kubernetes', 'DevOps', 'JavaScript', 'PHP'],
  selectedTag: 'Linux'
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

    default: return state
  }
}

export default questionReducer;