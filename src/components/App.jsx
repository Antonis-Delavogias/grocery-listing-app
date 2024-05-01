import {useState} from 'react'
import {Header} from './Header'
import {GroceriesForm} from './GroceriesForm'
import {GroceriesItems} from './GroceriesItems'
import {Footer} from './Footer'

export default function App() {
  const [items, setItems] = useState([])

  function handleAddItems(item) {
    setItems(items => [...items, item])
  }

  function handleToggleItem(id) {
    setItems(items =>
      items.map(item =>
        item.id === id ? {...item, packed: !item.packed} : item,
      ),
    )
  }

  function handleDeleteItem(id) {
    setItems(items => items.filter(item => item.id !== id))
  }

  return (
    <div>
      <Header />
      <GroceriesForm items={items} onAddItems={handleAddItems} />
      <GroceriesItems
        items={items}
        onToggleItem={handleToggleItem}
        onDeleteItem={handleDeleteItem}
      />
      <Footer />
    </div>
  )
}
