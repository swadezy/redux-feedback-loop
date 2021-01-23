import { useHistory } from 'react-router-dom';

function Success() {

    const history = useHistory();

    const handleNext = () => {
        history.push('/')
    }

    return (
        <div>
            <h3>Thank You!</h3>
            <button onClick={handleNext}>Leave New Feedback</button>
        </div>
    )
}

export default Success;