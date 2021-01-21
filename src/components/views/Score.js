import { connect } from 'react-redux';
import { useHistory } from 'react-router-dom';

const Score = ({score}) => {
    const history = useHistory();

    const handlePlayAgain = () => {
        history.push('/');
    }

    return (
        <div className="container flex flex-col items-center justify-center min-h-screen py-2">
            <div className="text-center text-xl">here is your score, challenger</div>
            <div className="text-center text-5xl font-medium mt-3">{score}/10</div>
            <div onClick={handlePlayAgain} className="bg-white font-medium text-gray-800 rounded-md p-2 w-full text-center cursor-pointer mt-8">play again</div>
        </div>
    );
}

const mapStateToProps = (state) => {
    return {
        score: state.quiz.score
    }
}
 
export default connect(mapStateToProps)(Score);