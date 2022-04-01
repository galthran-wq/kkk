import TextField from "../components/TextField";
import {Button} from "react-bootstrap";

export default function Login() {
    return(
    <div>
        <h2>Login Form</h2>
        <form action="post">
            <TextField name={"Name"}/>
            <TextField name={"Password"}/>
            <Button type={'submit'} name={'Submit'} />
        </form>
    </div>
    )
}