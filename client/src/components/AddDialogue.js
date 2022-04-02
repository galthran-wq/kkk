import {Button, Form} from "react-bootstrap";
import {useDispatch} from "react-redux";
import {addDialogue} from "../actions/dialogues";
import {useState} from "react";

export default function AddDialogue(props) {
    const dispatch = useDispatch();
    let [name, changeName] = useState("");
    let [content, changeContent] = useState("");

    const handleSubmit = (event) => {
        event.preventDefault();
        dispatch(addDialogue(name, content, props.onSuccess));
    }

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