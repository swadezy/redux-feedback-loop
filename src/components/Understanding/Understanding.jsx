import { useState } from 'react';
import { useDispatch } from 'react-redux';
import { useHistory } from 'react-router-dom';

function Understanding() {

    const [understanding, setUnderstanding] = useState(0);
    const dispatch = useDispatch();
    const history = useHistory();

    const handleNext = () => {
        const action = {
            type: 'SET_UNDERSTANDING',
            payload: understanding
        };
        dispatch(action);
        history.push('/2');
    }

    return (
        <form>
            <h3>How well are you understanding the content?</h3>
            <input
                placeholder="..."
                type="number"
                value={understanding}
                onChange={(event) => setUnderstanding(event.target.value)}
            />
            <button onClick={handleNext}>Next</button>
        </form>
    )
}

export default Understanding;