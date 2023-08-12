export default function Post({title, text, width}) {
    return (
        <div className="post" style={{width: `calc(${100/width}% - 30px)`}}>
            <h1>{title}</h1>
            <p>{text}</p>
        </div>
    )
}