import {Button, Form} from "react-bootstrap";
import {useDispatch, useSelector} from "react-redux";
import {editDialogue} from "../actions/dialogues";
import {useState} from "react";
import {getDialogue} from "../selectors/dialogues";

export default function EditDialogue(props) {
    const currentDialogueId = props.id;
    const currentDialogue = useSelector(getDialogue(currentDialogueId));
    console.log(currentDialogue, currentDialogueId);
    const dispatch = useDispatch();
    let [name, changeName] = useState(currentDialogue.name);
    let [content, changeContent] = useState(currentDialogue.content);

    const handleSubmit = (event) => {
        event.preventDefault();
        dispatch(editDialogue(currentDialogueId, name, content, props.onSuccess));
    }

    // todo the same very thong as in AddDialogue
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