import { useState } from 'react';
import { useDispatch } from 'react-redux';
import { useHistory } from 'react-router-dom';

function Comment() {

    const [comment, setComment] = useState('');
    const dispatch = useDispatch();
    const history = useHistory();

    const handleNext = () => {
        const action = {
            type: 'SET_COMMENT',
            payload: comment
        };
        dispatch(action);
        history.push('/4');
    }

    return (
        <form>
            <h3>Any comments you want to leave?</h3>
            <input
                placeholder="..."
                type="text"
                value={comment}
                onChange={(event) => setComment(event.target.value)}
            />
            <button onClick={handleNext}>Next</button>
        </form>
    )
}

export default Comment;