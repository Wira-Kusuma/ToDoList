export default function Control({items, handleClearItem}) {
  return(
    <li>
      <p>{items.length} item left</p>
      <p onClick={handleClearItem}>Clear items</p>
    </li>
  )
}