import { connect } from 'react-redux';
import { selectTag } from '../../redux';

const TagButton = ({tag, selectedTag, selectTag}) => {
  return (
    <div
      onClick={() => selectTag(tag)}
      className={`${selectedTag === tag ? 'from-gray-200 to-gray-300' : 'from-gray-50 to-gray-100'}
        py-1 px-3 m-1 w-min bg-gradient-to-b hover:from-gray-100 hover:to-gray-200 shadow-md rounded-md text-gray-800 cursor-pointer transition duration-100 ease-in`}
    >
      {tag}
    </div>
  );
}

const mapStateToProps = (state) => {
  return {
    selectedTag: state.quiz.selectedTag
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    selectTag: (tag) => dispatch(selectTag(tag))
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(TagButton);