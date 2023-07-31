export default function Item(props) {
    function handleClick() {
        props.link(props.name)
      }
    return (
        <li onClick = {handleClick}>{props.name}</li>
    )
}