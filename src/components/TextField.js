export default function TextField(props) {
    return(
        <div>
            <label htmlFor={props.name}>{props.name}</label>
            <input type="text"name={props.name}/>
        </div>
    )
}