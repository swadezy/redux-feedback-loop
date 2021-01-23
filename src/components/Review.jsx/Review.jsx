import { useHistory } from 'react-router-dom';

function Review() {

    const history = useHistory();

    const handleNext = () => {
        history.push('/5')
    }

    return (
        <form>
            <h3>Review Your Feedback</h3>
            <button onClick={handleNext}>Submit</button>
        </form>
    )
}

export default Review;