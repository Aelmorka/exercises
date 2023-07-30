import { useState } from 'react'

export default function Hudini() {
    let [show, setShow] = useState(true)
    let text = show ? 'Now you see me' : 'Now you dont'
    return (<div>{text}</div>);
  }