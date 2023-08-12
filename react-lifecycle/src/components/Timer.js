import { useState, useEffect } from "react"
export default function Timer() {
    let [dateTime, setDateTime] = useState(null)
    const changeTime = () => {
        setTimeout(setDateTime(Date().toLocaleString(), 1000))  
    }
    useEffect(() => {setTimeout(changeTime, 1000)}, [dateTime])
    
    return (
        <div>{dateTime}</div>
    )
}