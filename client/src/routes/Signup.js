import {Button, Form, Row} from "react-bootstrap";
import {register} from "../actions/users";
import {useDispatch} from "react-redux";
import {useState} from "react";
import {useNavigate} from "react-router-dom";

export default function Signup() {

    const dispatch = useDispatch();
    const navigate = useNavigate();

    let [email, changeEmail] = useState("");
    let [name, changeName] = useState("");
    let [password, changePassword] = useState("");
    let [isTeacher, changeIsTeacher] = useState("");

    const handleSubmit = (event) => {
        event.preventDefault();
        dispatch(register(email, name, password, isTeacher,() => navigate("/") ));
    }

    return(
        <Row className="justify-content-center">
            <Form onSubmit={handleSubmit} className="col-4 border-1">
                <Form.Group className="mb-3" controlId="formBasicEmail">
                    <Form.Label>Email address</Form.Label>
                    <Form.Control
                        value={name}
                        onChange={e => changeName(e.target.value)}
                        type="name"
                        placeholder="Enter name"
                    />
                </Form.Group>

                <Form.Group className="mb-3" controlId="formBasicEmail">
                    <Form.Label>Email address</Form.Label>
                    <Form.Control
                        value={email}
                        onChange={e => changeEmail(e.target.value)}
                        type="email"
                        placeholder="Enter email"
                    />
                    <Form.Text className="text-muted">
                        We'll never share your email with anyone else.
                    </Form.Text>
                </Form.Group>

                <Form.Group className="mb-3" controlId="formBasicPassword">
                    <Form.Label>Password</Form.Label>
                    <Form.Control
                        value={password}
                        onChange={e => changePassword(e.target.value)}
                        type="password"
                        placeholder="Password"
                    />
                </Form.Group>
                <Form.Group className="mb-3" controlId="formBasicCheckbox">
                    <Form.Check
                        value={isTeacher}
                        onChange={e => { changeIsTeacher(e.target.checked); } }
                        type="checkbox"
                        label="Teacher"
                    />
                </Form.Group>
                <Button variant="primary" type="submit">
                    Submit
                </Button>
            </Form>
        </Row>
    )
}
