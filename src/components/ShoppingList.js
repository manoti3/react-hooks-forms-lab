import React, { useState } from 'react'
import ItemForm from './ItemForm'
import Filter from './Filter'
import Item from './Item'

function ShoppingList({ items }) {
	const [data, setData] = useState(items)
	const [selectedCategory, setSelectedCategory] = useState('All')
	const [search, setSearch] = useState('')
	const [newItem, setNewItem] = useState({
		id: '',
		name: '',
		category: 'Produce'
	})
	console.log(newItem)
	function handleCategoryChange(event) {
		setSelectedCategory(event.target.value)
	}

	function onSearchChange(e) {
		setSearch(e.target.value)
	}

	function onItemFormChange(e) {
		setNewItem({ ...newItem, [e.target.name]: e.target.value })
	}

	function onItemFormSubmit(e, id) {
		e.preventDefault()
		setNewItem({ ...newItem, id: id })
		setData([...data, newItem])
	}

	let itemsToDisplay = data.filter((item) => {
		if (
			selectedCategory === 'All' &&
			item.name.toLowerCase().includes(search.toLowerCase())
		)
			return true

		return (
			item.category === selectedCategory &&
			item.name.toLowerCase().includes(search.toLowerCase())
		)
	})
	return (
		<div className='ShoppingList'>
			<ItemForm
				newItem={newItem}
				onItemFormChange={onItemFormChange}
				onItemFormSubmit={onItemFormSubmit}
			/>
			<Filter
				selected={selectedCategory}
				onCategoryChange={handleCategoryChange}
				search={search}
				onSearchChange={onSearchChange}
			/>
			<ul className='Items'>
				{itemsToDisplay.map((item) => (
					<Item key={item.id} name={item.name} category={item.category} />
				))}
			</ul>
		</div>
	)
}

export default ShoppingList