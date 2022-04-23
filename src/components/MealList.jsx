import { Meal } from './Meal'

function MealList({meals}) {
	return (
		<div className="list">
			{meals.map((meal, index = meal.idMeal) => (
				<Meal key={index} {...meal} />
			))}
		</div>
	)
}

export {
	MealList
}