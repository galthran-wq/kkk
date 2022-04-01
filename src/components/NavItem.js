import classes from "./Header.module.css";
import { Link } from "react-router-dom";

function NavItem(props) {
    return (
        <div className={classes.item}>
            <Link to={props.to}>
                {props.content}
            </Link>
        </div>
    )
}

export default NavItem;
