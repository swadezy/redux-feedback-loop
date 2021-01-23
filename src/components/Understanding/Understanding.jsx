import { useHistory } from 'react-router-dom';

function Understanding() {

    const history = useHistory();

    const handleNext = () => {
        history.push('/2')
    }

    return (
        <form>
            <h3>How well are you understanding the content?</h3>
            <input type="number" />
            <button onClick={handleNext}>Next</button>
        </form>
    )
}

export default Understanding;