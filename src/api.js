import { API_URL } from './config';

const getMealById = async (mealId) => {
	const response = await fetch(API_URL + 'lookup.php?i=' + mealId);
	const meal = await response.json();
	return meal;
};

const getAllCategories = async () => {
	const response = await fetch(API_URL + 'categories.php');
	const categories = await response.json();
	return categories;
};

const getFilteredCategory = async (cName) => {
	const response = await fetch(API_URL + 'filter.php?c=' + cName);
	return await response.json();
};


export {
	getMealById,
	getAllCategories,
	getFilteredCategory,
}