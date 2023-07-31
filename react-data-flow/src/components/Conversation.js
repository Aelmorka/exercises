
import { useState } from 'react'

import List from './ConversationList'
import Content from './ConversationContent'

export default function Conversation() {
    let [data, setData] = useState(
        {
            displayConversation: null,
            conversations: [
                {
                    with: "Laura", 
                    convo: [
                        { text: "Hi", sender: "self" },
                        { text: "You there?", sender: "self" },
                        { text: "Yeah, hi, what's up?", sender: "other" }
                    ]
                },
                {
                    with: "Dad", convo: [
                        { text: "Have you finished your school work yet?", sender: "other" },
                        { text: "Yes.", sender: "self" },
                        { text: "What do you mean, yes?", sender: "other" },
                        { text: "??", sender: "self" }
                    ]
                },
                {
                    with: "Shoobert", convo: [
                        { text: "Shoobert!!!", sender: "self" },
                        { text: "Dude!!!!!!!!", sender: "other" },
                        { text: "Shooooooooo BERT!", sender: "self" },
                        { text: "You're my best friend", sender: "other" },
                        { text: "No, *you're* my best friend", sender: "self" },
                    ]
                }
            ]
        }
    )
    let persConv
    function clickHandler(name) {
        let newData = {...data}
        newData.displayConversation = name 
        setData(newData)
        persConv = data.conversations.find(elm => elm.with === data.displayConversation) 
    }
    function back() {
        let newData = {...data}
        newData.displayConversation = null
        setData(newData)
    }
    persConv = data.conversations.find(elm => elm.with === data.displayConversation) 
  	return (
    	<div className="convers">
            {data.displayConversation === null 
                ? <List chats={data.conversations} link={clickHandler}/>
                : <Content conv={persConv} back={back}/>
            }
    	</div>
  	);
}