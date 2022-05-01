import {Button, Form} from "react-bootstrap";
import {useDispatch, useSelector} from "react-redux";
import {editResit} from "../actions/resits";
import {useState} from "react";
import {getResit} from "../selectors/resits";

export default function EditResit(props) {
    const currentResitId = props.id;
    const currentResit = useSelector(getResit(currentResitId));
    console.log(currentResit, currentResitId);
    const dispatch = useDispatch();
    let [name, changeName] = useState(currentResit.name);
    let [content, changeContent] = useState(currentResit.content);

    const handleSubmit = (event) => {
        event.preventDefault();
        dispatch(editResit(currentResitId, name, content, props.onSuccess));
    }

    // todo the same very thong as in AddResit
    //  calls for a separate component
    return(
        <Form onSubmit={handleSubmit}>
            <Form.Group controlId="formBasicEmail">
                <Form.Label>Course Name</Form.Label>
                <Form.Control
                    name="content"
                    type="text"
                    placeholder="Enter name"
                    value={name}
                    onChange={e => changeName(e.target.value)}
                />
                <Form.Text className="text-muted">
                    We'll never share your email with anyone else.
                </Form.Text>
            </Form.Group>

            <Form.Group className="mb-3" controlId="formBasicPassword">
                <Form.Label>Content</Form.Label>
                <Form.Control
                    name="content"
                    type="text"
                    placeholder="Content"
                    value={content}
                    onChange={e => changeContent(e.target.value)}
                />
            </Form.Group>
            <Button variant="primary" type="submit">
                Submit
            </Button>
        </Form>
    )
}