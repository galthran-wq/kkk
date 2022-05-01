import {Button, Form} from "react-bootstrap";
import {useDispatch, useSelector} from "react-redux";
import {editResit} from "../actions/resits";
import {useState} from "react";
import {getResit} from "../selectors/resits";

export default function EditResit(props) {
    const currentResitId = props.id;
    const currentResit = useSelector(getResit(currentResitId));
    const dispatch = useDispatch();
    let [name, changeName] = useState(currentResit.name);
    let [description, changeDescription] = useState(currentResit.description);
    let [hasEnded, changeHasEnded] = useState(!!currentResit.hasEnded);
    let [startDate, changeStartDate] = useState(currentResit.startDate);


    const handleSubmit = (event) => {
        event.preventDefault();
        dispatch(editResit(currentResit.slug, name, startDate, description, hasEnded, props.onSuccess));
    }

    // todo the same very thong as in AddResit
    //  calls for a separate component
    return(
        <Form onSubmit={handleSubmit}>
            <Form.Group controlId="formBasicEmail">
                <Form.Label>Resit Name</Form.Label>
                <Form.Control
                    name="name"
                    type="text"
                    placeholder="Enter name"
                    value={name}
                    onChange={e => changeName(e.target.value)}
                />
                <Form.Text className="text-muted">
                    We'll never share your email with anyone else.
                </Form.Text>
            </Form.Group>

            <Form.Group controlId="formBasicEmail">
                <Form.Label>Start Date</Form.Label>
                <Form.Control
                    name="startDate"
                    type="date"
                    placeholder="Enter start date"
                    value={startDate}
                    onChange={e => { changeStartDate(e.target.value); }}
                />
            </Form.Group>

            <Form.Group className="mb-3" controlId="formBasicPassword">
                <Form.Label>Description</Form.Label>
                <Form.Control
                    name="description"
                    type="text"
                    placeholder="Description"
                    value={description}
                    onChange={e => changeDescription(e.target.value)}
                />
            </Form.Group>

            <Form.Group className="mb-3" controlId="formBasicCheckbox">
                <Form.Check
                    checked={hasEnded}
                    onChange={e => { changeHasEnded(e.target.checked); } }
                    type="checkbox"
                    label="Has Ended"
                />
            </Form.Group>

            <Button variant="primary" type="submit">
                Submit
            </Button>
        </Form>
    )
}