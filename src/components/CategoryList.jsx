import { CategoryItem } from './CategoryItem';

function CategoryList({catalog = []}) {
	return (
		<>
		<div className="list">
			{
				catalog.map((el, index) => (
					<CategoryItem key={index} {...el} />
				))
			}
		</div>
		</>
	)
}

export {
	CategoryList
}