import { useSelector } from 'react-redux';
import { useHistory } from 'react-router-dom';

function Review() {

    const feeling = useSelector(store => store.feelingReducer);
    const understanding = useSelector(store => store.understandingReducer);
    const support = useSelector(store => store.supportReducer);
    const comment = useSelector(store => store.commentReducer);
    const history = useHistory();

    const handleNext = () => {
        history.push('/5')
    }

    return (
        <form>
            <h3>Review Your Feedback</h3>
            <h5>Feeling : {feeling}</h5>
            <h5>Understanding : {understanding}</h5>
            <h5>Support : {support}</h5>
            <h5>Comment : {comment}</h5>
            <button onClick={handleNext}>Submit</button>
        </form>
    )
}

export default Review;