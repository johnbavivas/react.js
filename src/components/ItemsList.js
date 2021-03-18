import Item from  'Items'

const ItemList = (props) => (
<>
    <h1>Lista</h1>
    <ul>
        {props.Item.map((x)=>(
        <Item Item={x}/>
        ))}
</ul>
</>
);
export default ItemListContainer