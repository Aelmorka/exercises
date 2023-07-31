import Item from './ConversationListItem'
export default function List(props) {
    return (
       <ul>
            {props.chats.map(element => <Item link={props.link} key={element.with} name={element.with}/>)}
       </ul> 
    )
}