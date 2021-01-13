import { combineReducers } from 'redux';
// reducers
import quizReducer from './quiz/quizReducer';

const rootReducer = combineReducers({
  quiz: quizReducer
})

export default rootReducer;