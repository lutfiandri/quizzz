import { FETCH_QUIZ_REQUEST, FETCH_QUIZ_FAILURE, FETCH_QUIZ_SUCCESS } from './QUIZTypes';

const initialState = {
  loading: null,
  data: null,
  error: null
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
      loading: false,
      data: action.payload,
      error: null
    }

    case FETCH_QUIZ_FAILURE: return {
      loading: false,
      data: null,
      error: action.payload
    }

    default: return state
  }
}

export default questionReducer;