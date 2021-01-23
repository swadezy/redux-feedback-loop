import { useState } from 'react';
import { useDispatch } from 'react-redux';
import { useHistory } from 'react-router-dom';

function Support() {

    const [support, setSupport] = useState(0);
    const dispatch = useDispatch();
    const history = useHistory();

    const handleNext = () => {
        const action = {
            type: 'SET_SUPPORT',
            payload: support
        };
        dispatch(action);
        history.push('/3');
    }

    return (
        <form>
            <h3>How well are you being supported?</h3>
            <input
                placeholder="..."
                type="number"
                value={support}
                onChange={(event) => setSupport(event.target.value)}
            />
            <button onClick={handleNext}>Next</button>
        </form>
    )
}

export default Support;