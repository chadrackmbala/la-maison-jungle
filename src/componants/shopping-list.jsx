import { plantList } from '../datas/plant-list'

// const plantList = [
//     'monstera',
//     'ficus lyrata',
//     'pothos argenté',
//     'yucca',
//     'palmier'
// ]

export default function ShoppingList() {
    const categories = plantList.reduce(
		(acc, plant) =>
			acc.includes(plant.category) ? acc : acc.concat(plant.category),
		[]
	)

	return (
		<div>
			<ul>
				{categories.map((cat) => (
					<li key={cat}>{cat}</li>
				))}
			</ul>
			<ul>
				{plantList.map((plant) => (
					<li key={plant.id}>{plant.name}</li>
				))}
			</ul>
		</div>
	)
}