import TextField from "../components/TextField";
import {Button, Form, Row} from "react-bootstrap";
import {useDispatch} from "react-redux";
import {useState} from "react";
import {login, register} from "../actions/users";
import {useNavigate} from "react-router-dom";

export default function Login() {

    const dispatch = useDispatch();
    const navigate = useNavigate();
    let [email, changeEmail] = useState("");
    let [password, changePassword] = useState("");

    const handleSubmit = (event) => {
        event.preventDefault();
        dispatch(login(email, password, () => navigate("/")));
    }

    return(

        <Row className="justify-content-center">
            <Form onSubmit={handleSubmit} className="col-4 border-1">
                <Form.Group className="mb-3" controlId="formBasicEmail">
                    <Form.Label>Email address</Form.Label>
                    <Form.Control
                        value={email}
                        onChange={e => changeEmail(e.target.value)}
                        type="email"
                        placeholder="Enter email" />
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
                <Button variant="primary" type="submit">
                    Submit
                </Button>
            </Form>
        </Row>
    )
}