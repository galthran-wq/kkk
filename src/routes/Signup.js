import TextField from "../components/TextField";
import {Button} from "react-bootstrap";

export default function Signup() {
    return(
        <div>
            <h2>Signup Form</h2>
            <form action="post">
                <TextField name={"Name"}/>
                <TextField name={"Password"}/>
                <label htmlFor={"isTeacher"}>Teacher</label>
                <input type="checkbox" name={"isTeacher"}/>

                <Button type={'submit'} name={'Submit'} />
            </form>
        </div>

    )
}
