import { useParams, useNavigate } from 'react-router-dom'

function Movie() {
	const { title } = useParams();
	const navigate = useNavigate();
	return (
		<>
			<h2>Some movie {title}</h2>
			<button className='btn' onClick={() => navigate(-1)}>Go back</button>
		</>
	)
}

export {
	Movie
};