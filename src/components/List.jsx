import Item from './Item'
import Control from './Control'

export default function List({items, onDeleteItem, handleToggleItem, handleClearItem}) {
  return (
    <div className='list'>
      <ul>
        {items.map((item) => (
          <Item item={item} key={item.id} onDeleteItem={onDeleteItem} handleToggleItem={handleToggleItem}/>
        ))}
        <Control items={items} handleClearItem={handleClearItem}/>
      </ul>
      
    </div>
  )
}