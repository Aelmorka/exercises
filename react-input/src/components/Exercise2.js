import { useState, useEffect } from 'react';

export default function Exercise2() {
    const [name, setName] = useState("");
    const [fruit, setFruit] = useState("");
    let fruits = ["banana", "melon", "grapes", "carrot"]
    useEffect(() => {
        if(name && fruit) {console.log(`${name} choose ${fruit}`)}
    }, [name, fruit])
    
    return (
        <div>
            <input id="name-input" onBlur={(e) => setName(e.target.value)} value={name} />
            <select id="select-input" onChange={(e) => setFruit(e.target.value)} value={fruit}>
                {fruits.map((el) => <option value={el} key={el}>{el}</option>)}
            </select>
        </div>
    );
}