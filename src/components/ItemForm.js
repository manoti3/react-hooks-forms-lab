import React from 'react'
import { v4 as uuid } from 'uuid'

function ItemForm({ newItem, onItemFormChange, onItemFormSubmit }) {
	return (
		<form className='NewItem' onSubmit={(e) => onItemFormSubmit(e, uuid())}>
			<label>
				Name:
				<input
					type='text'
					name='name'
					value={newItem.name}
					onChange={onItemFormChange}
				/>
			</label>

			<label>
				Category:
				<select
					name='category'
					value={newItem.category}
					onChange={onItemFormChange}
				>
					<option value='Produce'>Produce</option>
					<option value='Dairy'>Dairy</option>
					<option value='Dessert'>Dessert</option>
				</select>
			</label>

			<button type='submit'>Add to List</button>
		</form>
	)
}
export default ItemForm