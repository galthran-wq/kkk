import {Button, Form} from "react-bootstrap";
import {useDispatch} from "react-redux";
import {addResit} from "../actions/resits";
import {useState} from "react";

export default function AddResit(props) {
    const dispatch = useDispatch();
    let [name, changeName] = useState("");
    let [startDate, changeStartDate] = useState(new Date().toString())
    let [description, changeDescription] = useState("");

    const handleSubmit = (event) => {
        event.preventDefault();
        dispatch(addResit(name, startDate, description, props.onSuccess));
    }

    return(
        <Form onSubmit={handleSubmit}>
            <Form.Group controlId="formBasicEmail">
                <Form.Label>Course Name</Form.Label>
                <Form.Control
                    name="name"
                    type="text"
                    placeholder="Enter name"
                    value={name}
                    onChange={e => changeName(e.target.value)}
                />
            </Form.Group>

            <Form.Group controlId="formBasicEmail">
                <Form.Label>Start Date</Form.Label>
                <Form.Control
                    name="startDate"
                    type="date"
                    placeholder="Enter start date"
                    value={startDate}
                    onChange={e => {changeStartDate(e.target.value); }}
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
            <Button variant="primary" type="submit">
                Submit
            </Button>
        </Form>
    )
}