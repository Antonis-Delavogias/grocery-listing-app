export function GroceriesItems({items, onToggleItem, onDeleteItem}) {
  return (
    <div className={`grocery-list ${items.length > 0 ? 'show' : ''}`}>
      {items.map(item => (
        <div key={item.id}>
          <input
            type="checkbox"
            checked={item.packed}
            onChange={() => onToggleItem(item.id)}
          />
          <span style={item.packed ? {textDecoration: 'line-through'} : {}}>
            {item.quantity} - {item.description}{' '}
            <button onClick={() => onDeleteItem(item.id)}>✖</button>
          </span>
        </div>
      ))}
    </div>
  )
}
