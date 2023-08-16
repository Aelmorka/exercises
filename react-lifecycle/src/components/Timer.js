import { useState, useEffect } from "react"
export default function Timer() {
    let [dateTime, setDateTime] = useState(null)
    const changeTime = () => {
        setDateTime(Date().toLocaleString())  
    }
    useEffect(() => {setTimeout(changeTime, 1000)}, [dateTime])
    
    return (
        <div>{dateTime}</div>
    )
}