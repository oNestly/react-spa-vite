import { Link } from 'react-router-dom';

function Meal(props) {
	const {
		idMeal: mealId,
		strMeal: mealName,
		strMealThumb: mealThumb,
	} = props;

	return (
		<div className="card">
			<div className="card-image">
				<img src={mealThumb} alt={mealName} />
			</div>
			<div className="card-content">
				<span className="card-title category-title">{mealName}</span>
			</div>
			<div className="card-action">
				<Link to={`/meal/${mealId}`} className='btn'>Watch recipe</Link>
			</div>
		</div>
	)
}

export {
	Meal
}