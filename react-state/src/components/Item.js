
export default function Item(props) {
    return (props.mode === 'home' ? <div>{props.name}: ${props.price}</div> : <span>{props.name}: ${props.price}</span>
    );
  }