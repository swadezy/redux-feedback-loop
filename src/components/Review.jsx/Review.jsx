import axios from 'axios';
import { useSelector } from 'react-redux';
import { useHistory } from 'react-router-dom';

function Review() {

    const feeling = useSelector(store => store.feelingReducer);
    const understanding = useSelector(store => store.understandingReducer);
    const support = useSelector(store => store.supportReducer);
    const comments = useSelector(store => store.commentReducer);
    const history = useHistory();

    const handleNext = () => {
        const fullFeedback = { feeling, understanding, support, comments };
        console.log(fullFeedback);
        axios.post('/feedback', fullFeedback)
            .then((response) => {
                history.push('/5')
            }).catch((error) => {
                console.error(error);
            });
    }

    return (
        <form>
            <h3>Review Your Feedback</h3>
            <h5>Feeling : {feeling}</h5>
            <h5>Understanding : {understanding}</h5>
            <h5>Support : {support}</h5>
            <h5>Comment : {comments}</h5>
            <button onClick={handleNext}>Submit</button>
        </form>
    )
}

export default Review;