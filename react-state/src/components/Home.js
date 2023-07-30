import Item from './Item'

export default function Home(props) {
    return (
      <div id="home">
        {props.store.map((item) => {
          let price = item.price
          if (props.discount) price = price * (1 - item.discount)
          return <Item name = {item.item} price = {price} mode = 'home' key={item.item}/>
        })}
      </div>
    );
  }