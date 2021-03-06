import axios from 'axios';
import { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import swal from 'sweetalert';

function Admin() {

    const dispatch = useDispatch();

    useEffect(() => {
        getFeedback();
    }, []);

    const allFeedback = useSelector(store => store.allFeedbackReducer);
    console.log(allFeedback);

    const getFeedback = () => {
        axios.get('/feedback')
            .then((response) => {
                const action = {
                    type: 'GET_FEEDBACK',
                    payload: response.data
                }
                dispatch(action);
            }).catch((error) => {
                console.error(error);
            })
    }

    const handleDelete = (id) => {
        console.log('in handleDelete with id', id);
        swal({
            title: 'Delete',
            text: 'Are you certain you want to delete this?',
            icon: 'warning',
            buttons: true,
            dangerMode: true,
        }).then((willDelete) => {
            if (willDelete) {
                swal('Feedback deleted.', {
                    icon: 'success',
                });
                axios.delete(`/feedback/${id}`)
                    .then((response) => {
                        getFeedback();
                    }).catch((error) => {
                        console.error(error);
                    })
            } else {
                swal('Good call, that was probably really valuable feedback!');
            }
        });
    }

    const handleFlag = (id) => {
        console.log('in handleFlag with id', id);
        axios.put(`/feedback/${id}`)
            .then((response) => {
                getFeedback();
            }).catch((error) => {
                console.error(error);
            })
    }

    return (
        <div>
            <h3>Admin Page</h3>
            <table>
                <thead>
                    <tr>
                        <th>Feeling</th>
                        <th>Understanding</th>
                        <th>Support</th>
                        <th>Comments</th>
                        <th>Flagged</th>
                        <th>Delete</th>
                        <th></th>
                    </tr>
                </thead>
                <tbody>
                    {allFeedback.map((feedback) => (
                        <tr key={feedback.id}>
                            <td>{feedback.feeling}</td>
                            <td>{feedback.understanding}</td>
                            <td>{feedback.support}</td>
                            <td>{feedback.comments}</td>
                            {feedback.flagged ? <td>Y</td> : <td>N</td>}
                            <td><button onClick={() => handleDelete(feedback.id)}>Delete</button></td>
                            <td><button onClick={() => handleFlag(feedback.id)}>Flag</button></td>
                        </tr>
                    ))}
                </tbody>
            </table>
            {/* <p>{allFeedback[0].feeling}</p> */}
        </div>
    )
}

export default Admin;