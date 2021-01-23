import { useState } from 'react';
import { useDispatch } from 'react-redux';
import { useHistory } from 'react-router-dom';

function Understanding() {

    const [understanding, setUnderstanding] = useState('');
    const [isSecret, setIsSecret] = useState(false);
    const dispatch = useDispatch();
    const history = useHistory();

    const handleNext = () => {
        if (understanding > 0 && understanding < 6) {
            const action = {
                type: 'SET_UNDERSTANDING',
                payload: understanding
            };
            dispatch(action);
            history.push('/2');
        } else {
            setUnderstanding('');
            setIsSecret(true);
        }
    }

    return (
        <div>
            <h3>How well are you understanding the content?</h3>
            {isSecret ? <h5>Please enter a value between 1 and 5</h5> : <h5></h5>}
            <input
                required
                placeholder="..."
                type="number"
                value={understanding}
                onChange={(event) => setUnderstanding(event.target.value)}
            />
            <button onClick={handleNext}>Next</button>
        </div>
    )
}

export default Understanding;