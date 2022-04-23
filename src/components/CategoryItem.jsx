import { Link } from 'react-router-dom';

function CategoryItem(props) {

	const {
		// idCategory: categoryId,
		strCategory: categoryName,
		strCategoryThumb: categoryThumb,
		strCategoryDescription: categoryDescr,
	} = props;

	return (
		<div className="card">
			<div className="card-image">
				<img src={categoryThumb} alt={categoryName} />
			</div>
			<div className="card-content">
				<span className="card-title category-title">{categoryName}</span>
				<p>{
					categoryDescr.slice(0, 60)
					} ...</p>
			</div>
			<div className="card-action">
				<Link to={`/category/${categoryName}`} className='btn'>Watch category</Link>
			</div>
		</div>
	)
}

export {
	CategoryItem
}