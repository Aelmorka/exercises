export default function Content(props) {
    return (
        <div className="convers__cont">
            <button onClick={props.back}>Back</button>
            {props.conv.convo.map(elm => {
                return <p>{elm.sender === 'self' ? <b>Me: </b> : <b>{props.conv.with}: </b>}{elm.text}</p>
            })}
        </div>
    )
}