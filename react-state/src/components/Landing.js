import Item from './Item'
export default function Landing(props) {
    return (
      <div>
        Welcome, {props.user}. The hottest item is <Item name = {props.item.item} price = {props.item.price}/>
      </div>
    );
  }