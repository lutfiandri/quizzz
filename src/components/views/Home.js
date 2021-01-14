import { connect } from 'react-redux';
import TagButton from '../layouts/TagButton';
import { useHistory } from 'react-router-dom';
import { fetchQuiz } from '../../redux';

const Home = ({tags, selectedTag, fetchQuiz}) => {
  const history = useHistory();

  const handleAccept = () => {
    fetchQuiz(selectedTag);
    history.push('/question/0');
  }

  const tagsButton = tags.map(tag => (
    <TagButton key={tag} tag={tag} />
  ))

  return (
    <div className="container h-screen flex flex-col justify-center">
      <div className="text-xl sm:text-2xl lg:text-3xl">hello traveller...</div>
      <div className="text-3xl sm:text-4xl lg:text-5xl">I challenge you to answer my questions!</div>
      <div className="flex flex-wrap justify-center pt-4">
        {tagsButton}
      </div>
      <div onClick={handleAccept} className="text-center text-gray-800 hover:text-white bg-white hover:bg-transparent transition duration-100 ease-in cursor-pointer rounded-md mt-4 px-6 py-3 text-2xl font-medium border-4 border-white">
        accept challenge!
      </div>
      <div className="flex flex-row mt-3 justify-end">
        <div className="pr-1">API by:</div>
        <a href="https://quizapi.io/" target="_blank" rel="noreferrer"
          className="border-b-2 hover:text-gray-800 hover:border-gray-800 transition duration-100 ease-in"
        >quizapi.io</a>
      </div>
    </div>
  );
}

const mapStateToProps = (state) => {
  return {
    tags: state.quiz.tags,
    selectedTag: state.quiz.selectedTag
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    fetchQuiz: (tag) => dispatch(fetchQuiz(tag))
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(Home);