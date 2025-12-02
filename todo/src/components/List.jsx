
import Item from './Item'
const items=[{id:1,name:"read"},{id:2,name:"write"}]


const List = () => {

    return <>
    <div>
      {items.map((item)=><Item item={item} key={item.id}/>)}

    </div>
    </>;
};
export default List;
